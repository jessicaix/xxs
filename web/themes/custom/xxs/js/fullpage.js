/**
 * @file
 * fivestar.js
 *
 * Add jQuery to the theme
 */
+function ($) {
  'use strict';

  $(document).ready(function() {
    $('#fullpage').fullpage({
		autoScrolling: false,
		fitToSection: false
	});
  })

}(jQuery);
