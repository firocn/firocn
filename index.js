const ejs = require('ejs')
const path = require('path')
const fs = require('fs')
const marked = require("marked")

marked.setOptions({ breaks: true })

const siteData = { imgsURL: 'imgs' }

const postsDir = `${__dirname}/posts`
const _siteDir = `${__dirname}/_site`

;(async () => {
  const dateRegexp = /(\d{4})-(\d{2})-(\d{2})/

  const posts = await Promise.all((await readdir(path.normalize(postsDir))).reverse().map(async postFilename => {
    const markdownRaw = await readFile(path.normalize(`${postsDir}/${postFilename}`))
    const date = postFilename.match(dateRegexp) && postFilename.match(dateRegexp)[0]
    const propertiesMatchResult = markdownRaw.match(/^<%#(.+?)%>/s)
    const properties = propertiesMatchResult && propertiesMatchResult[1] ? JSON.parse(propertiesMatchResult[1]) : {}
    const markdown = ejs.render(markdownRaw, siteData)
    const title = properties.title || markdown.match(/^#\s(.+)/m)[1]
    return {
      filename: postFilename,
      date,
      dateLocale: date && date.replace(dateRegexp, '$1 年 $2 月 $3 日'),
      title,
      properties,
      html: marked(markdown)
    }
  }))

  await checkCreateDir(_siteDir)

  render(
    path.normalize(`${__dirname}/index.ejs`),
    { posts: posts.filter(p => p.date) },
    path.normalize(`${__dirname}/_site/index.html`)
  )

  posts.forEach(async post => {
    if (post.properties.url) return
    render(
      path.normalize(`${__dirname}/post.ejs`),
      { post },
      path.normalize(`${_siteDir}/${post.filename.replace(/\.md$/, '.html')}`)
    )
  })

  copyDir('css')
  copyDir('imgs')
  copyFile('googleced77188be24025c.html')
})()

async function render(templateFile, data, destFile) {
  return new Promise((resolve, reject) => {
    ejs.renderFile(templateFile, { ...data, ...siteData }, (err, str) => {
      if (err) return reject(err)
      fs.writeFile(destFile, str, err => {
        if (err) return reject(err)
        resolve()
      })
    })
  })
}

async function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err, data) => {
      if (err) return reject(err)
      resolve(data.toString())
    })
  })
}

async function readdir(path) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, filenames) => {
      if (err) return reject(err)
      resolve(filenames)
    })
  })
}

async function checkCreateDir(dirname) {
  return new Promise((resolve, reject) => {
    fs.stat(dirname, err => {
      const exists = !err
      if (exists) return resolve()
      fs.mkdir(dirname, err => {
        if (err) return reject(err)
        resolve()
      })
    })
  })
}

async function copyDir(dirname) {
  await checkCreateDir(path.normalize(`${_siteDir}/${dirname}`))
  const filenames = await readdir(path.normalize(`${__dirname}/${dirname}`))
  filenames.forEach(filename => copyFile(`${dirname}/${filename}`))
}

function copyFile(fullFilename) {
  fs.copyFile(
    path.normalize(`${__dirname}/${fullFilename}`),
    path.normalize(`${_siteDir}/${fullFilename}`),
    err => { if (err) throw err }
  )
}
