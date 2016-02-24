// exclusively developer rules, these don't need to go anywhere
(function($) {
  'use strict';

  $('#dev-debug').on('click', function() {
    $(this).parent('li').toggleClass('active');
    $('html').toggleClass('dev-debug');
  });


  $('#grid-debug').on('click', function() {
    $(this).parent('li').toggleClass('active');
    $('html').toggleClass('grid-debug');
  });


  $('#nudge-debug').on('click', function() {
    $(this).parent('li').toggleClass('active');
    $('html').toggleClass('nudge-debug');
  });


  // dev kit image checker rules
  $('body.is-dev').on('change', '.image-position', function() {
    var sectionId = $(this).closest('select').attr('data-app');
    var optionValue = $(this).val();
    console.log(optionValue);
    $('#' + sectionId).css('background-position', optionValue);
  });


})(jQuery);
