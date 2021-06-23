const ejs = require('ejs')
const path = require('path')
const fs = require('fs')
const marked = require("marked")

marked.setOptions({ breaks: true })

const postsDir = `${__dirname}/posts`
const _siteDir = `${__dirname}/_site`

;(async () => {
  const posts = await Promise.all((await readdir(path.normalize(postsDir))).map(async postFilename => {
    const content = await readFile(path.normalize(`${postsDir}/${postFilename}`))
    return { filename: postFilename, title: content.match(/#\s(.+)/)[1] }
  }))

  await checkCreateDir(_siteDir)

  render(
    path.normalize(`${__dirname}/index.ejs`),
    { posts },
    path.normalize(`${__dirname}/_site/index.html`)
  )

  posts.forEach(async post => {
    const rapMarkdown = await readFile(path.normalize(
      `${postsDir}/${post.filename}`
    ))

    render(
      path.normalize(`${__dirname}/post.ejs`),
      { article: marked(rapMarkdown.toString()) },
      path.normalize(`${_siteDir}/${post.filename.replace(/\.md$/, '.html')}.html`)
    )
  })

  await checkCreateDir(path.normalize(`${_siteDir}/css`))
  const filenames = await readdir(path.normalize(`${__dirname}/css`))
  filenames.forEach(filename => {
    fs.copyFile(
      path.normalize(`${__dirname}/css/${filename}`),
      path.normalize(`${_siteDir}/css/${filename}`),
      err => { if (err) throw err }
    )
  })
  fs.copyFile(
    path.normalize(`${__dirname}/Firo logo dark.svg`),
    path.normalize(`${_siteDir}/Firo logo dark.svg`),
    err => { if (err) throw err }
  )
})()

async function render(templateFile, data, destFile) {
  return new Promise((resolve, reject) => {
    ejs.renderFile(templateFile, data, (err, str) => {
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
