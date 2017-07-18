/**
 * @file
 * preloader.js
 *
 * Add jQuery to the theme
 */
+function ($) {
  'use strict';
  $(window).on('load', function() {
    if (screen.width > 767) {
      var video = $('body').find('.field--name-field-bg-video video');
      $('#preloader .loader').one('animationend webkitAnimationEnd oAnimationEnd', function(){
        $('#preloader').addClass('pt-page-rotateRoomTopOut pt-page-ontop');
        $('#wrapper').addClass('pt-page-rotateRoomTopIn');
        if (video.length) {
          video.get(0).load();
        }

      });

      $('#preloader').one('animationend webkitAnimationEnd oAnimationEnd', function(){
        $('#wrapper').addClass('pt-page-current');
      });

      $('#wrapper').one('animationend webkitAnimationEnd oAnimationEnd', function(){
        $('#preloader').removeClass('pt-page transition-off pt-page-current pt-page-rotateRoomTopOut pt-page-ontop');
        $('#preloader').css('display', 'none');
        $('#wrapper').removeClass('pt-page pt-page-current pt-page-rotateRoomTopIn');
      });
    } else {
      $('#wrapper').removeClass('pt-page pt-page-current pt-page-rotateRoomTopIn');
      $('#preloader').css('display', 'none');
    }

  });

}(jQuery);
