/**
 * @file
 * sportmarketingbureau.js
 *
 * Add jQuery to the theme
 */
+function ($) {
  'use strict';

  $(window).on('load', function() { // makes sure the whole site is loaded
    $('#preloader').addClass('loaded');
    setTimeout(function(){
      $( "#wrapper" ).fadeIn( "slow", function() {
      });
    }, 1300);

    $('#preloader').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $( "#preloader" ).fadeOut( "slow", function() {
          $('#preloader').css("display", "none");
        });
      // code to execute after transition ends

    });
  })

}(jQuery);
