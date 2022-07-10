import Swiper, { Navigation, Pagination } from 'swiper';

const bodyStyles = window.getComputedStyle(document.body);
const gap = parseInt(bodyStyles.getPropertyValue('--grid-gap'));

const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    slidesPerView: 3,
    spaceBetween: gap,
    loop: true,
    navigation: {
        nextEl: '.portfolio-section__next',
        prevEl: '.portfolio-section__prev',
    },
});