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
            nextEl: '.main_visual .arrows .next',
            prevEl: '.main_visual .arrows .prev',
        },



    });


    $(window).scroll(function () {
        let sct = $(window).scrollTop();

        if (sct > 0) {
            $('.header').addClass('scrolled');
            $('#logo-img').attr('src', './images/logo_black.svg');
            $('#utils-img').attr('src', './images/utils_black.svg');
        } else {
            $('.header').removeClass('scrolled');

            if (!$('.header').is(':hover')) {
                $('#logo-img').attr('src', './images/logo_white.svg');
                $('#utils-img').attr('src', './images/utils_white.svg');
            }
        }
    });


    $('.header').hover(
        function () {

            $('#logo-img').attr('src', './images/logo_black.svg');
            $('#utils-img').attr('src', './images/utils_black.svg');
        },
        function () {

            let sct = $(window).scrollTop();
            if (sct === 0) {
                $('#logo-img').attr('src', './images/logo_white.svg');
                $('#utils-img').attr('src', './images/utils_white.svg');
            }
        }
    );

    $('.tab_menu>li').on('click', function () {
        let idx = $(this).index();
        $('.tab_menu>li').removeClass('on');
        $(this).addClass('on');
        $('.tab_content>li').removeClass('on')
        $('.tab_content>li').eq(idx).addClass('on')
    })


    $(window).scroll(function () {
        let sct = $(window).scrollTop();

        if (sct > 300) {

            $('#top-btn').addClass('show');
            $('.floating-menu').addClass('on');
        } else {
            $('#top-btn').removeClass('show');
            $('.floating-menu').removeClass('on');
        }
    });

    $('#top-btn').click(function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    AOS.init({
        duration: 1000,
        once: false,
    });

});