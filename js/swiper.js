const swiperFeatures = new Swiper(".swiper-features", {
    // Optional parameters
    // direction: "vertical",
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

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    spaceBetween: 60,
    // And if we need scrollbar
    scrollbar: {
        hide: true,
        // el: ".swiper-scrollbar",
    }
});

const swiperReferences = new Swiper(".swiper-references", {
    // Optional parameters
    // direction: "vertical",
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

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    spaceBetween: 60,
    // And if we need scrollbar
    scrollbar: {
        hide: true,
        // el: ".swiper-scrollbar",
    }
});

