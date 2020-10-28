var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    lazyLoad: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsiveRefreshRate: 200,
    responsive: {
        0: {
            items: 1
        },
        400: {
            items: 2
        },
        600: {
            items: 3
        },
        750: {
            items: 4
        },
        960: {
            items: 5
        },
        1200: {
            items: 6
        }
    }
});

owl.on('mousewheel', '.owl-stage', function (e) {
    if (e.deltaY > 0) {
        owl.trigger('next.owl');
    } else {
        owl.trigger('prev.owl');
    }
    e.preventDefault();
});