(function() {
  'use strict'

  var $miniBagControls = $('.js-minibag--checkout, .js-minibag--view');
  var $miniBagContain = $('#minibag-contain');
  var $body           = $('body');
  var modalBG         = '.modal-backdrop';

// =================================
// Modal Desktop Swipe Paginate
// =================================
// ===========================
// Slick Slider initialisation
// ===========================
var slick = require("../vendors/slick");

// .o-minibag--inner.modal-body parent container
// .o-minibag--list-contain list container

function initialiseMinibagSlick() {

  $('.o-minibag--list-contain').slick({
    vertical: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: '<button type="button" class="c-btn c-btn-primary c-btn--tiny slick-prev">'
               + '<i class="icon--block icon icon-ui-up"></i></button>',
    nextArrow: '<button type="button" class="c-btn c-btn-primary c-btn--tiny slick-next">'
               + '<i class="icon--block icon icon-ui-down"></i></button>'
  });
}






// ===========================
// PhotoSwipe End
// ===========================




// =================================
// Modal Show / Hide Behaviour
// =================================

  function closeMiniBag() {
    $miniBagContain.modal('hide');
  }

  function openMiniBag() {
    $miniBagContain.modal('show');
    initialiseMinibagSlick();
  }

  $miniBagContain.on('show.bs.modal', function(){
    $body.addClass('modal-open--minibag');
  });

  $miniBagContain.on('hide.bs.modal', function(){
    $body.removeClass('modal-open--minibag');
  });


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
  delayWithClear($miniBagControls, openMiniBag);

  // close on click BG
  $('body').on('click', modalBG, function() {
    if (!window.isMobileOrTablet) {
      closeMiniBag();
    }
  });

})();
