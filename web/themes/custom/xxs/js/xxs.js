/**
 * @file
 * sportmarketingbureau.js
 *
 * Add jQuery to the theme
 */
+function ($) {
  'use strict';

  $(window).on('load', function () {
    $('.paragraph--type--text .field--name-field-text, .paragraph--type--two-column-text, .paragraph--type-project-results').addClass('container');
    $('.field--item:nth-child(2) .paragraph').attr('id', 'scroll-to-paragraph');
    $('.page-node-type-like .paragraph--type--header .header-content').prepend($('.page-node-type-like .field--name-node-post-date'));  
    
    // Scroll to anchor
    $('a[href^="."]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
    
    // Change value of select box
    document.getElementById('edit-field-category-target-id').options[0].innerHTML = 'Filter work';
    
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
