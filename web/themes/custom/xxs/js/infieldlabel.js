/**
 * @file
 * menu.js
 *
 * Add jQuery to the theme
 */
+function ($) {
  'use strict';
  
  $( "#mc_embed_signup .mc-field-group" ).each(function() {
    var label = $(this).find('label').text();
    $(this).find('label').css('display', 'none');
    $(this).find('input').attr('placeholder', label);
    $(this).find('input').attr('onfocus', "this.placeholder = ''");
    $(this).find('input').attr('onblur', 'this.placeholder = "'+label+'"');
  });

}(jQuery);
