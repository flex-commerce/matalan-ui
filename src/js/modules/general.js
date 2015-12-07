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

  $('form#searchProducts').submit(function(e){
    e.preventDefault();
    if ($('input[name=searchTerm]').val() == 'dresses') {
      window.location.href = './search-results.html';
    } else {
      window.location.href = './no-results.html';
    }
  });

  $('body').on('click', '.clear__filters', function() {
    $('.o-filters__inner').find('input[type=checkbox]:checked').removeAttr('checked');
    $('.o-filters__inner').find('input[type=radio]:checked').removeAttr('checked');
  });

  // ==========================
  $('#dev-debug').on('click', function() {
    $(this).parent('li').toggleClass('active');
    $('html').toggleClass('dev-debug');
  })
  $('#grid-debug').on('click', function() {
    $(this).parent('li').toggleClass('active');
    $('html').toggleClass('grid-debug');
  })
  $('#nudge-debug').on('click', function() {
    $(this).parent('li').toggleClass('active');
    $('html').toggleClass('nudge-debug');
  });

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
