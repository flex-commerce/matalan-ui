(function() {

  var miniBagControl = $('.js-minibag, .js-minibag--view');
  var miniBagContain = $('#minibag-contain');

  // open on hover for 250ms
  delayWithClear(miniBagControl, openMiniBag);

  // close on mouseover BG
  $('body').on('mouseover', '.modal-backdrop', function() {
    if (!window.isMobileOrTablet.matches) {
      closeMiniBag();
    }
  });

  // close on click
  $('body').on('touchend', '.modal-backdrop', function() {
    if (window.isMobileOrTablet.matches) {
      closeMiniBag();
    }
  });


  function closeMiniBag() {
    miniBagContain.modal('hide');
  }


  function openMiniBag() {
    miniBagContain.modal('show');
  }


  function delayWithClear(el, func) {
    var timer;
    var delay = 250;

    $(el).hover(function() {
      timer = setTimeout(function() {
      if (!window.isMobileOrTablet.matches) {
        func();
      }
      }, delay);
    }, function() {
      clearTimeout(timer);
    });
  }




//   // $(document).ready(function() {
//   //   $(window).on('resize', _.debounce(function() {
//   //     if (miniBagActive === true) {
//   //       closeMiniBag(miniBagControl);
//   //     }
//   //   }, 250));
//   // });

})();
