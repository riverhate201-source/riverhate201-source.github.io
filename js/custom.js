$(function () {
    lucide.createIcons();

    const main_visual_slide = new Swiper('.main_visual_slide', {
        loop: true,
        autoplay: {
            delay: 3000, // 3초마다 슬라이드
            disableOnInteraction: false, // 유저가 건드려도 계속 자동재생
        },
        speed: 800, // 슬라이드 전환 속도

        // Navigation arrows
        navigation: {
            nextEl: '.main_visual .arrows .prev',
            prevEl: '.main_visual .arrows .next',
        },

        // If we need pagination
        pagination: {
            clickable: true,
            el: '.main_visual .page',
        },

    });
});