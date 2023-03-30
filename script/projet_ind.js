const cardSwiper = new Swiper('.card-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: '1',
    autoplay: true,
    speed: 1000,

    autoplay: {
        delay: 3000,

    },
    //cssMode: true,
    //
    //effect: 'cards',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

});

const headSwiper = new Swiper('.head-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: '3',
    autoplay: true,
    speed: 1000,

    autoplay: {
        delay: 3000,

    },
    //cssMode: true,
    //
    //effect: 'cards',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

});

const photoSlide = new Swiper('.photo-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: '1',
    autoplay: true,
    speed: 1000,

    autoplay: {
        delay: 3000,
    },
    //cssMode: true,
    //
    //effect: 'cards',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

});

const ed = document.querySelector('#ed')

const edSwiper = new Swiper('.ed-swiper', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: '1',
    speed: 1000,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    //cssMode: true,
    //
    //effect: 'cards',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
    },

});
