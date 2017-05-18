/**
 * @file
 * sportmarketingbureau.js
 *
 * Add jQuery to the theme
 */
+function ($) {
  'use strict';

  $(window).on('load', function() { // makes sure the whole site is loaded
    //$('#preloader').addClass('loaded');
    $('.preloader').one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
      function(e) {
        $( ".preloader" ).fadeOut( "fast", function() {
          $('.preloader').css("display", "none");
        });
    });
  })

}(jQuery);
