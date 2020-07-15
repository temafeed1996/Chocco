const hamburger_btn = document.querySelector('#hamburger-menu__link');
const hamburger_menu = document.querySelector('.menu--fixed');

    hamburger_btn.addEventListener('click', function(e) {
    e.preventDefault();

    let className = hamburger_btn.getAttribute('class');

    if (className == 'hamburger-menu__link') {
        hamburger_menu.classList.add('menu--active');
        hamburger_btn.classList.add('hamburger-menu__link--active');

        let body = document.getElementsByTagName('body')[0];
        body.style.overflow = "hidden";}
        
    else  {
        hamburger_menu.classList.remove('menu--active');
        hamburger_btn.classList.remove('hamburger-menu__link--active');

        let body = document.getElementsByTagName('body')[0];
        body.style.overflow = "visible";}
});

$('.menu__link').on('click', () => {
    $('.menu--fixed').removeClass('menu--active');
    $('#hamburger-menu__link').removeClass('hamburger-menu__link--active');
    
    let body = document.getElementsByTagName('body')[0];
    body.style.overflow = "visible";
});