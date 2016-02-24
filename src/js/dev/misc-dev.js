(function($) {
  'use strict';

  function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  // data close method - this can be reused
  $('body').on('click', '.close', function() {
    var parentId = $(this).data('close');
    $('#' + parentId).hide();
  });

  // dev kit image checker rules - move to dev
  $('body').on('change', '.image-position', function() {
    var sectionId = $(this).closest('select').attr('data-app');
    var optionValue = $(this).val();
    console.log(optionValue);
    $('#' + sectionId).css('background-position', optionValue);
  });

  // dodgy beforeunload method - this is unstylable
  $('body').on('click', '#checkoutCreateAccount', function() {
    $('.create-account-container').toggle();
    window.onbeforeunload = function() {
      return "Are you sure you don't want to create an account?";
    };
  });

  // does .zoom exist?
  $(".zoom").bind("click", function(e) {
    var ez = $('.zoom').data('elevateZoom');
    $.fancybox(ez.getGalleryList());
    return false;
  });

  $('.is-dev .o-login__email-submit').on('click', function(e) {
    e.preventDefault();
    $('.o-login__email').hide();
    $('.o-login__password').show();
  });

  $('.is-dev .o-login__password-forgotten').on('click', function(e) {
    e.preventDefault();
    $('.o-login__password').hide();
    $('.o-login__forgotten-password').show();
  });

  $('form[name=searchProducts]').submit(function(e) {
    e.preventDefault();
    if ($('input[name=searchTerm]').val() == 'dresses' || $('input[name=searchTermMobile]').val() == 'dresses') {
      window.location.href = './search-results.html';
    } else {
      window.location.href = './no-results.html';
    }
  });

  $('form#createAccountForm').submit(function(e) {
    e.preventDefault();
    $('.create-account-container').hide();
    $('.account-created-container').show();
    window.onbeforeunload = function() {
      // blank function do nothing
    }
  });


  $('body').on('click', '.js-filters__clear', function() {
    $('.o-filters__inner').find('input[type=checkbox]:checked').removeAttr('checked');
    $('.o-filters__inner').find('input[type=radio]:checked').removeAttr('checked');
  });

  // ==========================







  $('.filter--colours li').click(function(e) {
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
  });




  // ==========================











  // // Cache selectors outside callback for performance.
  // if ($('#searchHeader').length) {
  //   var $window = $(window),
  //      $stickyEl = $('#searchHeader'),
  //      elTop = $stickyEl.offset().top;

  //   $window.scroll(function() {
  //       $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
  //   });
  // }

})(jQuery);
