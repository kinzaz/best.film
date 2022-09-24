// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

const header = document.querySelector('.header');
const headerLogo = document.querySelector('.header__logo');
const headerMenu = document.querySelectorAll('.menu__item');
const burger = document.querySelector('.menu__icon.icon-menu');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.classList.add('scrolled');
        headerLogo.classList.add('header__logo-scrolled');
        headerMenu.forEach(item => item.classList.add('menu__item-scrolled'));
        burger.classList.add('icon-menu-scrolled');
    } else {
        header.classList.remove('scrolled');
        headerMenu.forEach(item => item.classList.remove('menu__item-scrolled'));
        headerLogo.classList.remove('header__logo-scrolled');
        burger.classList.remove('icon-menu-scrolled');
    }
})

