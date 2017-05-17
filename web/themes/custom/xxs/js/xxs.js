/**
 * @file
 * sportmarketingbureau.js
 *
 * Add jQuery to the theme
 */
+function ($) {
  'use strict';

  $(window).on('load', function () {
    $('.paragraph--type--text .field--name-field-text, .paragraph--type--two-column-text, .path-likes .view-likes').addClass('container');
    $('.page-node-type-like .paragraph--type--header .header-content').prepend($('.page-node-type-like .field--name-node-post-date'));  
    
    // Scroll to top
  if ($('#back-to-top').length) {
      var scrollTrigger = 100, // px
          backToTop = function () {
              var scrollTop = $(window).scrollTop();
              if (scrollTop > scrollTrigger) {
                  $('#back-to-top').addClass('show');
              } else {
                  $('#back-to-top').removeClass('show');
              }
          };
      backToTop();
      $(window).on('scroll', function () {
          backToTop();
      });
      $('#back-to-top').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({
              scrollTop: 0
          }, 700);
      });
  }
  
  
  })

}(jQuery);
