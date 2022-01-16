$(document).ready(function () {

    $('.header__burger').click(function(event) {
        $('.header__burger,.header__navigation').toggleClass('active');
    });
});

    $('.slider').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
    });
});


