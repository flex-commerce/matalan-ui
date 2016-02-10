(function() {
  'use strict'

  var $miniBagControl = $('.js-minibag--checkout, .js-minibag--view');
  var $miniBagContain = $('#minibag-contain');
  var $body           = $('body');
  var modalBG         = '.modal-backdrop';

  function closeMiniBag() {
    $miniBagContain.modal('hide');
  }

  function openMiniBag() {
    $miniBagContain.modal('show');
  }

  $miniBagContain.on('show.bs.modal', function(){
    $body.addClass('modal-open--minibag');
  })
  $miniBagContain.on('hide.bs.modal', function(){
    $body.removeClass('modal-open--minibag');
  })

  function delayWithClear(el, func) {
    var timer;
    var delay = 250;

    $(el).hover(function() {
      timer = setTimeout(function() {
      if (!window.isMobileOrTablet) {
        func();
      }
      }, delay);
    }, function() {
      clearTimeout(timer);
    });
  }




  // open on hover for 250ms
  delayWithClear($miniBagControl, openMiniBag);

  // close on mouseover BG
  $('body').on('click', modalBG, function() {
    if (!window.isMobileOrTablet) {
      closeMiniBag();
    }
  });




})();
