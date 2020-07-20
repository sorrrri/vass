let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})


document.documentElement.addEventListener('touchstart', function (event) {
    if (event.touches.length > 1) {
        event.preventDefault();
    }
}, false);



window.addEventListener('resize', function(event){
    location.reload()
});



const aside = document.querySelector('aside')
const asideMenu = document.querySelector('.ico-aside-menu')

if(aside) {
    asideMenu.addEventListener('click', () => {
        aside.classList.toggle('active')
    })
}