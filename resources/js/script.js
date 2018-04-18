  /* Sticky navigation */

  $(document).ready(function() { 
    
   $('.js--section-features').waypoint(function(direction) { 

    if (direction == "down") {
     $('nav').addClass('sticky'); 
   }else {
     $('nav').removeClass('sticky');
   }
  }, {
  offset: '60px'
  });

   /* Scroll Smooth */

   $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1500);
    }
  });

   /* Scrool on buttons - Animate */

   $('.js--scroll-to-plan').click(function() { 
     $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
   });

   $('.js--scroll-to-start').click(function() { 
    $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
  });

   /* Animations on scroll */

   $('.js--wp-1').waypoint(function(direction) {
    $('.js--wp-1').addClass('animated fadeIn');
  }, {
    offset: '50%'

  });

   $('.js--wp-2').waypoint(function(direction){
    $('.js--wp-2').addClass('animated fadeInUp')

  }, {
    offset: '50%'
  })

   $('.js--wp-3').waypoint(function(direction){
    $('.js--wp-3').addClass('animated fadeIn')

  }, {
    offset: '50%'
  })

   $('.js--wp-4').waypoint(function(direction){
    $('.js--wp-4').addClass('animated pulse')

  }, {
    offset: '50%'
  })

   /* Mobile Navigation */

   $('.js--nav-icon').click(function(){
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i')

    nav.slideToggle(200);
    if(icon.hasClass('ion-navicon-round')) { 
      icon.addClass('ion-close-round');
      icon.removeClass('ion-navicon-round');

    } else {
     icon.addClass('ion-navicon-round');
     icon.removeClass('ion-close-round');

   }
 });

   /* Map */

   var map = new GMaps({
    div: '.map',
    lat: 49.2776866,
    lng: -123.1,
    zoom: 14
  });

   /*Map Marker */

   map.addMarker({
    lat: 49.2776866,
    lng: -123.1108589,
    title: 'Vancouver',
    infoWindow: {
      content: '<p> Our Vancouver Headquarters</p>'
    }
  });
 });