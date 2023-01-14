
$('#rightbox-withimg-area-mobile').owlCarousel({
  loop:true,
  margin:30,
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
});


$('#slider-ziczac-1').owlCarousel({
  loop:true,
  margin:30,
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
});
$('#slider-ziczac-2').owlCarousel({
  loop:true,
  margin:30,
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
});
$('#slider-ziczac-3').owlCarousel({
  loop:true,
  margin:30,
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
});

$('#logo_slider').owlCarousel({
  loop:true,
  margin:100,
  nav:true,
  responsive:{
      0:{
          items:2
      },
      600:{
          items:3
      },
      1000:{
          items:6
      }
  }
});

lightbox.option({
  'resizeDuration': 200,
  'wrapAround': true
})

AOS.init({
  easing: 'ease-in-out-sine'
});

$(window).scroll(function () {
    ($(window).scrollTop())
      if ($(window).scrollTop() > 63) {
        $('.header-area').addClass('fixed-top');
      }
      if ($(window).scrollTop() < 64) {
        $('.header-area').removeClass('fixed-top');
      }
    });
    
    $('.count').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    