(function ($) {
  'use strict';

  function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }
  $('body').on('click', '.close', function() {
    var parentId = $(this).data('close');
    $('#' + parentId).hide();
  });

  $('body').on('click', '.email-signup', function() {
    var parentId = $(this).data('close');
    $('#' + parentId).hide();
    $('.signup-success').show();
  });

  $('form#email-signup').submit(function(e){
    e.preventDefault();
    $(this).hide();
    $('.signup-success').show();
  });
  $('body').on('click', '.clear__filters', function() {
    $('.o-filters--inner').find('input[type=checkbox]:checked').removeAttr('checked');
    $('.o-filters--inner').find('input[type=radio]:checked').removeAttr('checked');
  });



})(jQuery);