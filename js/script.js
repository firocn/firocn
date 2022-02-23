Array.prototype.forEach.call(document.querySelectorAll('img'), img => {
  if (img.complete) return img.classList.add('complete')
  img.addEventListener('load', e => {
    e.target.classList.add('complete')
  })
})

if (document.referrer.includes(window.siteURL)) {
  const footerHome = document.querySelector('#footer_home')
  footerHome.style.display = 'none'
}
