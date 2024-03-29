const ejs = require('ejs')
const path = require('path')
const fs = require('fs')
const marked = require("marked")
const sizeOf = require('image-size')
const Fontmin = require('fontmin')

const config = require('./config')

marked.setOptions({ breaks: true, mangle: false })

const dateRegexp = /(\d{4})-(\d{2})-(\d{2})/

const siteData = { imgsURL: 'imgs', siteURL: config.siteURL, dateRegexp, autoPrefixImgURL, siteDomain: config.siteDomain, __dirname }

const postsDir = `${__dirname}/posts`
const _siteDir = `${__dirname}/_site`

;(async () => {
  copyDir('css')
  copyDir('js')
  copyDir('imgs')
  copyFile('googleced77188be24025c.html')

  new Fontmin()
    .src(path.normalize(`${__dirname}/css/fonts/SourceHanSerifCN-Regular.ttf`))
    // .use(Fontmin.glyph({ text: fs.readFileSync(path.normalize(`${__dirname}/quotes.ejs`)), hinting: false }))
    .use(Fontmin.glyph({ text: '迄今为止，现金是最主要的匿名交易系统。 ——﻿ ﻿《密码朋克宣言》', hinting: false }))
    .use(Fontmin.ttf2woff2())
    .dest(path.normalize(`${__dirname}/_site/css/fonts`))
    .run(function (err, files) { if (err) throw err })

  const posts = await Promise.all((await readdir(path.normalize(postsDir))).reverse().map(async postFilename => {
    const markdownRaw = await readFile(path.normalize(`${postsDir}/${postFilename}`))

    const propertiesMatchResult = markdownRaw.match(/^<%#(.+?)%>/s)
    const properties = propertiesMatchResult && propertiesMatchResult[1] ? JSON.parse(propertiesMatchResult[1]) : {}

    const date = postFilename.match(dateRegexp) && postFilename.match(dateRegexp)[0] || properties.date
    const dateMatchResult = date && date.match(dateRegexp)
    const dateLocale = dateMatchResult && (
      !properties.language || properties.language.match(/^zh/) ?
        `${dateMatchResult[1]} 年 ${+dateMatchResult[2]} 月 ${+dateMatchResult[3]} 日` :
        new Date(date).toLocaleDateString(properties.language, { year: 'numeric', month: 'long', day: 'numeric' })
    )

    const markdown = ejs.render(markdownRaw, siteData)
    let html = marked.parse(markdown)
    const imgRegexp = /<img(.+?)src="(.+?)"(.+?)>/g
    const imgMatchResults = html.matchAll(imgRegexp)
    for (result of imgMatchResults) {
      const originalImgTag = result[0]
      const url = autoPrefixImgURL(result[2])
      const pureURL = url.replace(/#.+$/, '')
      let [width, height] = (url.match(/size=(\d+)x(\d+)/) || []).slice(1)
      if (!width || !height) {
        if (url.startsWith('http')) continue
        ({ width, height } = await sizeOf(pureURL))
      }
      const isSmall = url.includes('#small')
      const isSmallRadius = url.includes('#smallradius')
      const newImgTag = originalImgTag.replace(imgRegexp, `<img$1src="${pureURL}" width="${width}" height="${height}" class="${width <= 608 || isSmall ? 'small' : ''} ${ isSmallRadius ? 'small-radius' : '' }" $3>`)
      html = html.replaceAll(originalImgTag, newImgTag)
    }
    const title = properties.title || markdown.match(/^#\s(.+)/m)[1]
    return {
      filename: postFilename,
      date,
      dateLocale,
      title,
      properties,
      img: properties.img && autoPrefixImgURL(properties.img, config.siteURL),
      html
    }
  }))

  await checkCreateDir(_siteDir)

  render(
    path.normalize(`${__dirname}/index.ejs`),
    { pageTyle: 'index' },
    path.normalize(`${__dirname}/_site/index.html`)
  )

  render(
    path.normalize(`${__dirname}/news.ejs`),
    { posts: posts.filter(p => p.date && !p.properties.hidden), pageTyle: 'news' },
    path.normalize(`${__dirname}/_site/news.html`)
  )

  posts.forEach(post => {
    if (post.properties.url) return
    ([post.filename, ...(post.properties.alias || [])]).forEach(filename => {
      render(
        path.normalize(`${__dirname}/post.ejs`),
        { post, pageTyle: 'post' },
        path.normalize(`${_siteDir}/${filename.replace(/\.md$/, '')}.html`)
      )
    })
  })
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

async function readdir(path, options) {
  return new Promise((resolve, reject) => {
    fs.readdir(path, options, (err, files) => {
      if (err) return reject(err)
      resolve(files)
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
  const filenames = await readdir(path.normalize(`${__dirname}/${dirname}`), { withFileTypes: true })
  filenames.forEach(file => {
    if (file.isDirectory()) return
    copyFile(`${dirname}/${file.name}`)
  })
}

function copyFile(fullFilename) {
  fs.copyFile(
    path.normalize(`${__dirname}/${fullFilename}`),
    path.normalize(`${_siteDir}/${fullFilename}`),
    err => { if (err) throw err }
  )
}

function autoPrefixImgURL(url, siteURL) {
  if (url.startsWith(siteData.imgsURL)) return url
  return url.startsWith('http') ? url :
    (siteURL ? `${siteURL}/${siteData.imgsURL}/${url}` : `${siteData.imgsURL}/${url}`)
}
