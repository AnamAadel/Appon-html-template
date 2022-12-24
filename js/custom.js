$(document).ready(function(){
  
  
  
  
  // veno box
  new VenoBox({
    selector: ".videoArea",
    autoplay: true,
    overlayColor: 'rgba(70,90,106,0.85)',
    spinner: 'plane',
    
  });
  new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
  });
  
  $('.feature_slide').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: true,
      responsive: [{

          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true
          }
    
        },{

          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true
          }
    
        }, {
    
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
    
        }, {
    
          breakpoint: 564,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              dots: true
            }
    
        },{
    
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
    
        },{

          breakpoint: 300,
          settings: "unslick" // destroys slick
    
        }]
    });
    
  $('.user_feed').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true,
    asNavFor: '.user_image',
  });

  $('.user_image').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.user_feed',
    centerMode: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    // arrows: true,
    prevArrow: $('.slick-prev'),
   nextArrow: $('.slick-next'),
  });
})