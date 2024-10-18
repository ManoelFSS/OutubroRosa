
const menu_Toggle = document.querySelector('.menu-Toggle')
const nav = document.querySelector('nav')

menu_Toggle.addEventListener('click', () => {
    menu_Toggle.classList.toggle('toggle')
    nav.classList.toggle('active')
})