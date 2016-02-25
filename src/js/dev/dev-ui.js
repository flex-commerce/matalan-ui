(function($) {
  'use strict';

  // minor JS rules for handling of states in the UI kit
  // we'll need these still, investigate creating JS patterns we can re-use

  function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }


  // data close method - this can be reused
  $('body').on('click', '.close', function() {
    var parentId = $(this).data('ui-close');
    $(parentId).hide();
  });


  // pattern - clear all radios & checks (add target parent via data attr?)
  $('body').on('click', '.js-filters__clear', function() {
    $('.o-filters__inner').find('input[type=checkbox]:checked').removeAttr('checked');
    $('.o-filters__inner').find('input[type=radio]:checked').removeAttr('checked');
  });


  // pattern - make something active, remove active from siblings
  $('.filter__colours .filter__colour').click(function(e) {
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
  });


  // does .zoom exist?
  $(".zoom").bind("click", function(e) {
    var ez = $('.zoom').data('elevateZoom');
    $.fancybox(ez.getGalleryList());
    return false;
  });


  // Filters Show more
  $('body').on('click', '.filters--show-more', function() {
    $(this).hide();
    $(this).parent().find('label').css('display', 'block');
  });


  // global alert event
  $(".global-test").click(function() {
    $(".c-alert-global").toggleClass("active");
  });


  // header - show mobile search input field
  (function() {
    $('.header--mobile-search').on('click', function() {
      $(this).toggleClass('active');
      $('.header--search-bar').toggleClass('active').find('input').focus();
    });
  })();


  // search results layout switch
  (function() {
    $('.js-results-tight').on('click', function(e) {
      e.preventDefault();
      if (!$(this).hasClass('active')) {
        $(this).addClass('active')
          .siblings().removeClass('active')
          .closest('.search-results__main')
          .removeClass('search-results--wide')
          .addClass('search-results--tight');
      }
    });
    // search results layout switch cont.
    $('.js-results-wide').on('click', function(e) {
      e.preventDefault();
      if (!$(this).hasClass('active')) {

        $(this).addClass('active')
          .siblings().removeClass('active')
          .closest('.search-results__main')
          .removeClass('search-results--tight')
          .addClass('search-results--wide');
      }
    });
  })();







})(jQuery);
