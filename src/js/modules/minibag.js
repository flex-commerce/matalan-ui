(function() {

  var miniBagControl = $('.js-minibag, .js-minibag--view');


  function closeMiniBag() {
    $('#minibag-contain').modal('hide');
  }

  function openMiniBag() {
    $('#minibag-contain').modal('show');
  }

  function delayWithClear(el, func) {
    var timer;
    var delay = 250;

    $(el).hover(function() {
      timer = setTimeout(function() {
      // if (!window.isMobileOrTablet.matches) {
        func();
      // }
      }, delay);
    }, function() {
      clearTimeout(timer);
    });
  }

  delayWithClear(miniBagControl, openMiniBag);

  $('body').on('mouseover', '.modal-backdrop', function() {
    if (!window.isMobileOrTablet.matches) {
      closeMiniBag()
    }
  });

//   // $(document).ready(function() {
//   //   $(window).on('resize', _.debounce(function() {
//   //     if (miniBagActive === true) {
//   //       closeMiniBag(miniBagControl);
//   //     }
//   //   }, 250));
//   // });

})();
