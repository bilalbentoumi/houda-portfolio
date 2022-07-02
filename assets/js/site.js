$(document).ready(function (){

    $(window).scroll(function (){

        const scrollTop = $(window).scrollTop();

        $('.lazy-load').each(function (){

            const elementTop = $(this).offset().top;

            if (scrollTop >= elementTop - (window.innerHeight * 0.9)) {
                $(this).addClass('active');
            }

        });

    });

});