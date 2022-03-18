"use strict"

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    speed: 400,
    spaceBetween: 16,

    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        dynamicMainBullets: 9,
    },
    mousewheel: {
        invert: true,
    },
    grid: {
        fill: 'column',
        row: 1,
    },

});


document.querySelector('.link-next').addEventListener('click', () => {
  document.querySelector('.grid-list').classList.toggle('active-height');
})

