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

  // checkout navigation method - these to be moved to checkout js file
  $("#termsAndConditionsAccepted").on("click", function(e) {
    if ($(this).is(':checked')) {
      $('.iFrameWrapper').show();
    } else {
      $('.iFrameWrapper').hide();
    }
  });

  // checkout navigation method - these to be moved to checkout js file
  $('form#email-signup').submit(function(e) {
    e.preventDefault();
    $(this).hide();
    $('.signup-success').show();
  });

  // checkout navigation method - these to be moved to checkout js file
  $('#addressEntry').keypress(function(e) {
    if (e.which == 13) {
      e.preventDefault();
      $(this).parent().find('a').click();
    }
  });

  // checkout navigation method - these to be moved to checkout js file
  $('input[name=billingaddress]').on('change', function() {
    $('.address-picker').toggle();
  });

  // checkout navigation method - these to be moved to checkout js file
  $('input[name=deliveryaddress]').on('change', function() {
    if ($(this).attr("value") === "addressbook") {
      $(".o-box").not(".o-addressbook").hide();
      $(".o-addressbook").show();
      $(".o-submit-button").show();
    } else if ($(this).attr("value") === "newaddress") {
      $(".o-box").not(".o-newaddress").hide();
      $(".o-newaddress").show();
    } else {
      $(".o-box").not(".o-submit-button").hide();
      $(".o-submit-button").show();
    }
  });

  // checkout navigation method - these to be moved to checkout js file
  $('input[name=deliverytype]').on('change', function() {
    if ($(this).attr("value") === "click-and-collect") {
      $(".o-box").not(".o-click-and-collect").hide();
      $(".o-click-and-collect").show();
    } else {
      $(".o-box").not(".o-submit-button").hide();
      $(".o-submit-button").show();
    }
  });

  // checkout navigation method - these to be moved to checkout js file
  $('.js-edit-address').on('click', function() {
    $('.address-picker').toggle();
    $("#newaddress").prop('checked', true);
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
