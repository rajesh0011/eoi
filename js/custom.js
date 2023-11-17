


$(document).ready(function () {
    $('.inner-experts .row .col-md-4').slice(0, 3).show(); // select the first ten
    $('.more').click(function(e){ // click event for load more
        e.preventDefault();
        $(".inner-experts .row .col-md-4:hidden").slice(0, 3).show(); // select next 10 hidden divs and show them
        if($(".inner-experts .row .col-md-4:hidden").length == 0){ // check if any hidden divs still exist
            alert("No more profiles"); // alert if there are none left
        }
    });
});
   
            
       
            $(document).ready(function () {
                $(".close_menu").click(function () {
                    $(".navbar-collapse").removeClass("show");
                });
             
            });
    
            $(document).ready(function () {
                $(window).scroll(function () {
                    if ($(window).scrollTop() > 76) {
                        $("header").addClass("sticky");
                    } else {
                        $("header").removeClass("sticky");
                    }
                });
            });
      

       
$('.main-slider__carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
 


     $(document).ready(function() {
         $(".partner-slider").owlCarousel({
            loop: true,
            margin: 30,
            dots : false,
            nav: true,
            responsiveClass: true,
            navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
            responsive: {
              0: {
                items: 3,
              },
              600: {
                items: 4,
              },
              1000: {
                items: 6,
              }
            }
        })

       });

     $(document).ready(function() {
         $(".events-slider").owlCarousel({
            loop: true,
            margin: 0,
            dots : false,
            nav: true,
            responsiveClass: true,
            navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
            responsive: {
              0: {
                items: 1,
              },
              600: {
                items: 1,
              },
              1000: {
                items: 1,
              }
            }
        })

       });

     $(document).ready(function() {
         $(".chapter-slider").owlCarousel({
            loop: true,
            margin: 3,
            dots : false,
            nav: true,
            responsiveClass: true,
            navText: ["<i class='bi bi-chevron-left'></i>","<i class='bi bi-chevron-right'></i>"],
            responsive: {
              0: {
                items: 2,
              },
              600: {
                items: 3,
              },
              1000: {
                items: 5,
              }
            }
        })

       });


$('.testi').owlCarousel({
  items: 2,
  margin:10,
  lazyLoad: true,
  dots:true,
  loop:true,
  autoPlay: true,
  autoPlayTimeout: 3000,
  responsive:{
    0:{
      items:1,
    },
    600:{
      items:2,
    },
    1000:{
      items:2,
    }
  }
});




$('.news-media-slider').slick({

    dots:false,
    arrows:false,
    vertical:true,
    slidesToShow:6,
    slidesToScroll:1,
    verticalSwiping:true,
    autoplay:true,
    centerPadding:0,
    pauseOnHover:true,
    autoplaySpeed: 0,
    speed: 2000,
    infinite:true

});
