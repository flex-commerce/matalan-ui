// temp rules for pretend navigation / flow between elements and pages
// for early UX checks

(function($) {
  'use strict';


  // prevent following links in the menu
  $('body.is-dev nav a').on('click', function(e) {
    e.preventDefault();
  });


  // continue securely - login & register
  $('body.is-dev .o-login__email-submit').on('click', function(e) {
    e.preventDefault();
    $('.o-login__email').hide();
    $('.o-login__password').show();
  });


  $('body.is-dev .o-login__password-forgotten').on('click', function(e) {
    e.preventDefault();
    $('.o-login__password').hide();
    $('.o-login__forgotten-password').show();
  });


  $('body.is-dev form[name=searchProducts]').submit(function(e) {
    if ($('input[name=searchTerm]').val() == 'dresses' || $('input[name=searchTermMobile]').val() == 'dresses') {
      e.preventDefault();
      window.location.href = './search-results.html';
    } else {
      e.preventDefault();
      window.location.href = './no-results.html';
    }
  });


  // dodgy beforeunload method - this is unstylable
  $('body').on('click', '#checkoutCreateAccount', function() {
    $('.create-account-container').toggle();
    // window.onbeforeunload = function() {
    //   return "Are you sure you don't want to create an account?";
    // };
  });


  $('form#createAccountForm').submit(function(e) {
    e.preventDefault();
    $('.create-account-container').hide();
    $('.account-created-container').show();
    // window.onbeforeunload = function() {
    //   // blank function do nothing
    // };
  });


})(jQuery);
