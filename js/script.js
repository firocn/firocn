let bodyHeight = document.body.offsetHeight
let windowHeight = window.innerHeight

if (navigator.userAgent.includes('Firefox')) document.body.classList.add('firefox')
if (navigator.userAgent.includes('Safari') && !navigator.userAgent.includes('Chrome')) {
  window.isSafari = true
}

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

    const isBottom = checkIsBottom(scrollY)

    if (scrollY < sourceScrollY - deadzone || scrollY <= 0 || (!window.isSafari && isBottom) || lastScrollY === undefined) {
      showHeader()
      if (scrollY > 0) {
        if (scrollY >= headerHeight && lastScrollY) {
          showTopbtn()
          stickyHeader()
        }
      } else {
        hideTopbtn()
        // staticHeader()
      }
    } else if (scrollY > sourceScrollY + deadzone && !document.body.classList.contains('static-header')) {
      // hideHeader()
      hideTopbtn()
    }

    if (
      !sourceScrollY ||
      scrollY > lastScrollY && lastScrollY < sourceScrollY ||
      scrollY < lastScrollY && lastScrollY > sourceScrollY ||
      Math.abs(scrollY - lastScrollY) > deadzone
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

  function checkIsBottom(scrollY) {
    if (scrollY === undefined) scrollY = window.pageYOffset
    return windowHeight < bodyHeight &&
      scrollY >= headerHeight &&
      scrollY + windowHeight >= bodyHeight - 10
  }
})()

function showHeader() {
  document.body.classList.add('show-header')
  document.body.classList.remove('hide-header')
}
function hideHeader() {
  document.body.classList.remove('show-header')
  document.body.classList.add('hide-header')
}
function showTopbtn() {
  document.body.classList.add('show-topbtn')
}
function hideTopbtn() {
  document.body.classList.remove('show-topbtn')
}
function staticHeader() {
  document.body.classList.add('static-header')
}
function stickyHeader() {
  document.body.classList.remove('static-header')
}

function onUIUpdated() {
  requestAnimationFrame(() => {
    bodyHeight = document.body.offsetHeight
    windowHeight = window.innerHeight
  })
}
