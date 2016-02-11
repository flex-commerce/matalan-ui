(function() {
  'use strict'

  if ( $("[role='main']").data('behaviour') === 'page--text--sizeguide' ) {

    // on click of tab within 1st section
    $('#sizeguide-section0').on('show.bs.tab', function(e){

      // open second section
      $('#sizeguide-section1').collapse('show');
    });

  }

})();


