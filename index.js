const btn = document.querySelector('.burger__btn')
const Menu = document.querySelector('.nav');

btn.addEventListener('click', () => {
  Menu.classList.toggle('block')
})