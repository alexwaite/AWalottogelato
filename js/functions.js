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
                nav:false
            },
            600:{
                nav:false
            },
            1000:{
                nav:false
            }
        }
    });

});