$(document).ready(function () {
    $(".team-center").owlCarousel({
        loop: true,
        margin: 10,
        smartSpeed: 2000,
        nav: true,
        responsive: {
            0:{
                items: 1,
            },
            600:{
                items: 2,
            },
            1000:{
                items: 4,
            },
        },
    });
});