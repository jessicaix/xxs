/**
 * @file
 * carousel.js
 *
 * Add jQuery to the theme
 */
+function ($) {
  'use strict';

  $('.view-people .view-content').not('.slick-initialized').slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 4,
    rows: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          rows: 2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          rows: 1,
        }
      },
      {
        breakpoint: 478,
        settings: {
          slidesToShow: 1,
          rows: 1,
        }
      }
    ]
  });
}(jQuery);