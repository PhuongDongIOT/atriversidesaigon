const swiper2 = new Swiper(".mySwiperTwo", {
    loop: true,
    pagination: {
        el: ".mySwiperTwo .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".mySwiperTwo .swiper-button-next",
        prevEl: ".mySwiperTwo .swiper-button-prev",
    },
});