let bodyHeight = document.body.offsetHeight
let windowHeight = window.innerHeight

window.addEventListener('resize', () => { windowHeight = window.innerHeight })

Array.prototype.forEach.call(document.querySelectorAll('img'), img => {
  if (img.complete) return img.classList.add('complete')
  img.addEventListener('load', e => {
    e.target.classList.add('complete')
    bodyHeight = document.body.offsetHeight
  })
})

if (document.referrer.includes(window.siteURL)) {
  const footerHome = document.querySelector('#footer_home')
  if (footerHome) footerHome.style.display = 'none'
}

;(function () {
  const header = document.querySelector('body > header')
  const scrollToTop = document.querySelector('#scroll_to_top')
  const deadzone = 10, headerHeight = header.offsetHeight
  let lastPageY
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset
    if (scrollY < headerHeight) {
      header.classList.add('visible')
    } else {
      header.classList.remove('visible')
    }
    if (scrollY < lastPageY - deadzone || scrollY < deadzone || scrollY + windowHeight >= bodyHeight - 100) {
      document.body.classList.add('show-header')
      document.body.classList.remove('hide-header')
      if (scrollY > 0) {
        document.body.classList.add('show-topbtn')
      } else {
        document.body.classList.remove('show-topbtn')
      }
    } else if (scrollY > lastPageY + deadzone) {
      document.body.classList.remove('show-header')
      document.body.classList.add('hide-header')
      document.body.classList.remove('show-topbtn')
    }
    lastPageY = scrollY
  })
})()

document.body.classList.add('initialized')
