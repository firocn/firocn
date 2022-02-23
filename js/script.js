Array.prototype.forEach.call(document.querySelectorAll('img'), img => {
  if (img.complete) return img.classList.add('complete')
  img.addEventListener('load', e => {
    e.target.classList.add('complete')
  })
})

if (document.referrer.includes(window.siteURL)) {
  const returnLink = document.querySelector('#return_link')
  returnLink.href = 'javascript:history.back()'
  returnLink.innerHTML = '返回'
}
