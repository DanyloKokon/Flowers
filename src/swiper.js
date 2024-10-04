var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2,
    loop:true,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: -8,
        },
        768: {
            slidesPerView: 2.2,
        },
        1280: {
            slidesPerView: 3,
        },
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
        scale:0.8,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});