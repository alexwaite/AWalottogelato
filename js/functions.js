// Jquery marquee

$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay: true,
        autoplaySpeed: true,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        responsiveClass:true,
        responsive:{
            0:{
                nav:true
            },
            600:{
                nav:true
            },
            1000:{
                nav:true
            }
        }
    });

});