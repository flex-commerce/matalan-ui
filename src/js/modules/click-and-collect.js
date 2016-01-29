(function() {

  var miniBagControl = $('.js-minibag, .js-minibag--view');
  var miniBagContain = $('#click-and-collect-contain');

  // close on click
  // $('body').on('click', '.modal-backdrop', function() {
  //   if (window.isMobileOrTablet.matches) {
  //     closeMiniBag();
  //   }
  // });


  function closeMiniBag() {
    miniBagContain.modal('hide');
  }


  function openMiniBag() {
    miniBagContain.modal('show');
  }


$("[data-click-collect='click-collect']").on('click', function(e) {

    openMiniBag();

});




//   // $(document).ready(function() {
//   //   $(window).on('resize', _.debounce(function() {
//   //     if (miniBagActive === true) {
//   //       closeMiniBag(miniBagControl);
//   //     }
//   //   }, 250));
//   // });

})();
