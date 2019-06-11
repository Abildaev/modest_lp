$( function (){


     $('.header__hamburger_trigger').on('click', function (){

          $('.header__nav').toggleClass('is-active');
          $('.header__hamburger_trigger > span').toggleClass('is-active');
     });

     $('a[href^="#"]').click(function(){
          var target = $(this).attr("href");
          $("html, body").animate({
              scrollTop: $(target).offset().top-50
          }, 1000)

     });

});



 