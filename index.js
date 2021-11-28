const ejs = require('ejs')
const path = require('path')
const fs = require('fs')
const marked = require("marked")

marked.setOptions({ breaks: true })

const siteData = { imgsURL: 'imgs' }

const postsDir = `${__dirname}/posts`
const _siteDir = `${__dirname}/_site`

;(async () => {
  const posts = await Promise.all((await readdir(path.normalize(postsDir))).reverse().map(async postFilename => {
    const content = await readFile(path.normalize(`${postsDir}/${postFilename}`))
    return {
      filename: postFilename,
      date: postFilename.match(/\d{4}-\d{2}-\d{2}/)[0],
      title: content.match(/#\s(.+)/)[1]
    }
  }))

  await checkCreateDir(_siteDir)

  render(
    path.normalize(`${__dirname}/index.ejs`),
    { posts },
    path.normalize(`${__dirname}/_site/index.html`)
  )

  posts.forEach(async post => {
    const rapMarkdown = ejs.render((await readFile(path.normalize(
      `${postsDir}/${post.filename}`
    ))).toString(), siteData)

    const propertiesMatchResult = rapMarkdown.match(/^<!--(.+?)-->/s)

    const properties = propertiesMatchResult && propertiesMatchResult[1] ?
      JSON.parse(propertiesMatchResult[1]) : {}

    render(
      path.normalize(`${__dirname}/post.ejs`),
      {
        content: marked(rapMarkdown),
        post,
        properties
      },
      path.normalize(`${_siteDir}/${post.filename.replace(/\.md$/, '.html')}`)
    )
  })

  copyDir('css')
  copyDir('imgs')
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
  filenames.forEach(filename => {
    fs.copyFile(
      path.normalize(`${__dirname}/${dirname}/${filename}`),
      path.normalize(`${_siteDir}/${dirname}/${filename}`),
      err => { if (err) throw err }
    )
  })
}
