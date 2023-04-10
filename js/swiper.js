const swiper = new Swiper(".swiper", {
    // Optional parameters
    // direction: "vertical",
    loop: false,

    slidesPerView: Math.round(window.innerWidth / 550),

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

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("#slide").addEventListener("click");
});