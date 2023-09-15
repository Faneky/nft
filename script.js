//Slider
// const left = document.querySelector('.btn-sl-left')
// const right = document.querySelector('.btn-sl-right')

// function handleClick(){
//   console.log('click')
// }

// left.addEventListener('click', handleClick)
// right.addEventListener('click', handleClick)

const openBtn = document.querySelector('.nav-open')
const closeBtn = document.querySelector('.nav-close')
const nav = document.querySelectorAll('.nav')

openBtn.addEventListener('click', () => {
  nav.forEach(navEl => {
    navEl.classList.add('visible')
  })
})

closeBtn.addEventListener('click', () => {
  nav.forEach(navEl => {
    navEl.classList.remove('visible')
  })
})