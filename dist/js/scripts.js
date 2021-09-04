window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
    menuItem = document.querySelectorAll('.header__item'),
    menu = document.querySelector('.header__menu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('header__menu_active');
    });
    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('header__menu_active');
        })
    })
})