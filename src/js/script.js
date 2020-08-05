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


window.addEventListener('resize', function (event) {
    location.reload()
});


const aside = document.querySelector('aside')

function setMyCookie() {
    asideToggleCookie = $('aside').hasClass('active') ? 'isActive' : 'notActive';
    asideSubmenuCookie = $('.sub-menu').hasClass('active') ? 'isActive' : 'notActive';
    $.cookie('asideToggleCookie', asideToggleCookie, {path: '/'});
    $.cookie('asideSubmenuCookie', asideSubmenuCookie, {path: '/'});
}

if ($.cookie('asideToggleCookie') == 'isActive') {
    $('aside').addClass('active');
} else {
    $('aside').removeClass('active');
}

if ($.cookie('asideSubmenuCookie') == 'isActive') {
    $('.sub-menu').addClass('active');
} else {
    $('.sub-menu').removeClass('active');
}


const asideMenu = document.querySelector('.aside-toggle-menu')
const asideSubMenu = document.getElementsByClassName('sub-menu')

if (aside) {
    asideMenu.addEventListener('click', () => {
        aside.classList.toggle('active')
        location.reload()
    })

    function openSubMenu(e) {
        const subMenu = e.target;
        console.log(subMenu)
        subMenu.classList.toggle('active')
    }

    Array.from(asideSubMenu).forEach(asideSubMenu => asideSubMenu.addEventListener('click', openSubMenu))

    setMyCookie();
}
