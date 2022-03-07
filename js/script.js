Array.prototype.forEach.call(document.querySelectorAll('img'), img => {
  if (img.complete) return img.classList.add('complete')
  img.addEventListener('load', e => {
    e.target.classList.add('complete')
  })
})

if (document.referrer.includes(window.siteURL)) {
  const footerHome = document.querySelector('#footer_home')
  if (footerHome) footerHome.style.display = 'none'
}

;(function () {
  const header = document.querySelector('body > header')
  const scrollToTop = document.querySelector('#scroll_to_top')
  header.style.position = 'sticky'
  setTimeout(() => { document.documentElement.style = 'scroll-behavior: smooth;' }, 1000)
  window.addEventListener('scroll', e => {
    if (window.pageYOffset < window.lastPageY) {
      document.body.classList.add('show-header')
      document.body.classList.remove('hide-header')
      if (window.pageYOffset > 0) {
        document.body.classList.add('show-topbtn')
      } else {
        document.body.classList.remove('show-topbtn')
      }
    } else if (window.pageYOffset > window.lastPageY + 10) {
      document.body.classList.remove('show-header')
      document.body.classList.add('hide-header')
      document.body.classList.remove('show-topbtn')
    }
    window.lastPageY = window.pageYOffset
  })
})()
