const swiperFeatures = new Swiper(".swiper-features", {
    loop: false,

    slidesPerView: 1,

    breakpoints: {
        600: {
            slidesPerView: 2
        },

        800:{
            slidesPerView: 3
        }
    },

    pagination: {
        el: ".swiper-pagination",
    },

    spaceBetween: 60,
    scrollbar: {
        hide: true,
    }
});

const swiperReferences = new Swiper(".swiper-references", {
    loop: false,

    slidesPerView: 1,

    breakpoints: {
        800: {
            slidesPerView: 2
        },

        1200:{
            slidesPerView: 3
        }
    },

    pagination: {
        el: ".swiper-pagination",
    },

    spaceBetween: 60,
    scrollbar: {
        hide: true,
    }
});

