const btn = document.querySelector('.burger__btn')
const Menu = document.querySelector('.nav');
let navbar = document.querySelector('.navbar')

btn.addEventListener('click', () => {
  Menu.classList.toggle('block')
})

window.onscroll = function () { myFunction() };
let sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    console.log('lo');
    navbar.classList.remove("sticky");
  }
}