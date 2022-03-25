let bodyHeight = document.body.offsetHeight
let windowHeight = window.innerHeight

window.addEventListener('resize', onUIUpdated)

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
  const deadzone = 10
  const headerHeight = header.offsetHeight
  let lastScrollY, sourceScrollY, timeout

  const check = () => {
    const scrollY = window.pageYOffset

    if (scrollY < headerHeight) {
      header.classList.add('visible')
    } else {
      header.classList.remove('visible')
    }

    const isBottom = windowHeight < bodyHeight &&
      scrollY >= headerHeight &&
      scrollY + windowHeight >= bodyHeight - 10

    if (scrollY < sourceScrollY - deadzone || scrollY <= 0 || (!window.isSafari && isBottom) || !lastScrollY) {
      document.body.classList.add('show-header')
      document.body.classList.remove('hide-header')
      if (scrollY > 0) {
        if (scrollY >= headerHeight && lastScrollY) {
          document.body.classList.add('show-topbtn')
          document.body.classList.remove('static-header')
        }
      } else {
        document.body.classList.remove('show-topbtn')
        document.body.classList.add('static-header')
      }
    } else if (scrollY > sourceScrollY + deadzone) {
      hideHeader()
      document.body.classList.remove('show-topbtn')
    }

    if (
      !sourceScrollY ||
      scrollY > lastScrollY && lastScrollY < sourceScrollY ||
      scrollY < lastScrollY && lastScrollY > sourceScrollY
    ) {
      sourceScrollY = scrollY
    }

    lastScrollY = scrollY
  }

  check(); let scrollendTimeout
  window.addEventListener('scroll', () => {
    check()

    cancelAnimationFrame(scrollendTimeout)
    scrollendTimeout = requestAnimationFrame(() => {
      scrollendTimeout = requestAnimationFrame(() => {
        window.dispatchEvent(new CustomEvent("scrollend"))
      })
    })
  })
  window.addEventListener('resize', () => { requestAnimationFrame(check) })
})()

if (navigator.userAgent.includes('Firefox')) document.body.classList.add('firefox')
if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
  document.body.classList.add('safari')
  window.isSafari = true
}

document.body.classList.add('initialized')
setTimeout(() => {
  document.body.classList.add('transition-ready')
}, 382)

function hideHeader() {
  document.body.classList.remove('show-header')
  document.body.classList.add('hide-header')
}

function onUIUpdated() {
  requestAnimationFrame(() => {
    bodyHeight = document.body.offsetHeight
    windowHeight = window.innerHeight
  })
}
