
const menu_Toggle = document.querySelector('.menu-Toggle')
const nav = document.querySelector('nav')
const links = document.querySelectorAll('ul a')

menu_Toggle.addEventListener('click', () => {
    menu_Toggle.classList.toggle('toggle')
    nav.classList.toggle('active')
})

links.forEach(link => {
    link.addEventListener('click', () => {
        menu_Toggle.classList.toggle('toggle')
        nav.classList.toggle('active')
    })
})