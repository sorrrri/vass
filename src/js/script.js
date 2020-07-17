const aside = document.querySelector('aside')
const asideMenu = document.querySelector('.ico-aside-menu')

if(aside) {
    asideMenu.addEventListener('click', () => {
        aside.classList.toggle('active')
    })
}