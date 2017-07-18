/**
 * @file
 * xxs.js
 *
 * Add jQuery to the theme
 */
+function ($) {
  'use strict';

  $(window).on('load', function () {
    $('.paragraph--type--text .field--name-field-text, .paragraph--type--two-column-text, .paragraph--type-project-results').addClass('container');
    $('.path-frontpage .section:nth-child(6)').removeClass('fp-noscroll');
    $('.field--item:nth-child(2) .paragraph').attr('id', 'scroll-to-paragraph');
    $('.page-node-type-like .paragraph--type--header .header-content').prepend($('.page-node-type-like .field--name-node-post-date'));

    $('.campaign-bg, .paragraph--type--image').not($('#block-views-block-work-block-1 .campaign-bg')).each(function() {
      var img_url = $(this).find('img').attr("src");
      $(this).css('background-image', 'url(' + img_url + ')');
    });

    //Initial load of page
    $(document).ready(sizeContent);

    //Every resize of window
    $(window).resize(sizeContent);

    //Dynamically assign height
    function sizeContent() {
      var newHeight = $("html").height() + "px";
      $(".path-frontpage .field--item:first-child .paragraph--type--header").css("height", newHeight);
      $(".path-frontpage .field--item:nth-child(2) .paragraph--type--text").css("top", newHeight);
    }

    //Fade header on scroll
    $(window).scroll(function(){
      $(".path-frontpage .field--item:first-child .paragraph--type--header .header-content").css("opacity", 1 - $(window).scrollTop() / 500);
    });

    if ($('#block-newslettersignup').length) {
      var randomnr = Math.floor(Math.random()*(4-1+1)+1);
      var cta = '#cta'+randomnr;
      console.log(cta);
      $('#block-newslettersignup').find(cta).css('display', 'block');
    }

    //Homepage header background scrolling
    $(window).scroll(function(){
      var $maxScroll=500;
      var $maxScale=1;
      var $x=$(window).scrollTop()/100+1;
      if($(window).scrollTop()>$maxScroll) $x=$maxScale;
      $('.path-frontpage .field--item:first-child .paragraph--type--header .header-bg').css({transform: 'scale('+$x+','+$x+')'});
      $('.path-frontpage .field--item:first-child .paragraph--type--header .header-bg').css({transform: 'scale('+$x+','+$x+')'});
    });

    //Hompage border
    $(".path-frontpage .header-border").delay(500).queue(function(next) {
      $(this).addClass("passpature");
      next();
    });


    var wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();

    //Homepage page transition
    $("#preloader").delay(800).queue(function(next) {
      $(this).addClass("transition-off");
      next();
    });

    //Cross transition
    $(".cross-wrapper .left-top, .cross-wrapper .right-top, .cross-wrapper .left-bottom, .cross-wrapper .right-bottom, .cross-wrapper .campaign-content, .cross-wrapper .views-field-field-email").bind("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd", function(){
      $(this).addClass('animated');
    });

    $('#block-views-block-likes-block-1').addClass('section');

    $('.footer').prepend($('#block-views-block-pager-likes-block-1, #block-views-block-pager-likes-block-2, #block-views-block-people-block-1'));
    $('.path-frontpage .like.section').append($('#block-views-block-likes-block-1'));
    $('.field--name-field-paragraphs').append($('.path-frontpage .like.section, #block-views-block-work-block-1, #block-views-block-jobs-block-1, .footer'));

    $('.field--name-field-scroll-down').click(function(){
      $.fn.fullpage.moveSectionDown();
    });

    $('#fullpage').fullpage({
      verticalCentered: false,
      scrollingSpeed: 800,
      parallax: true,
      parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
      css3: true,
      allowPageScroll: true,
      scrollOverflow:true,
      afterRender: function(){
        if ($('.field--name-field-bg-video').length) {
          $('.field--name-field-bg-video video')[0].play();
        }
      }
    });

    // $( "#block-views-block-work-block-1 .views-row" ).click(function() {
    //   var url = $(this).find('.views-field-view-node a').attr('href');
    //   window.location.href = url;
    // });

    $("#block-views-block-work-block-1").on("click", ".views-row", function () {
      var url = $(this).find('.views-field-view-node a').attr('href');
      window.location.href = url;
    });

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
  })
}(jQuery);