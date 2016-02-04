(function() {
  'use strict'

  var $miniBagControl = $('.js-minibag--checkout, .js-minibag--view');
  var $miniBagContain = $('#minibag-contain');
  var modalBG         = '.modal-backdrop';


  function closeMiniBag() {
    $miniBagContain.modal('hide');
  }


  function openMiniBag() {
    $miniBagContain.modal('show');
  }


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
  $('body').on('mouseover', modalBG, function() {
    if (!window.isMobileOrTablet) {
      closeMiniBag();
    }
  });

})();
