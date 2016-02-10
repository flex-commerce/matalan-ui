(function() {
  'use strict';

  var filterTarget;
  var filterCollapseItem = $(".o-filters__list-contain [data-toggle='collapse']");
  var filterContain = $('#filters__contain');

  filterCollapseItem.each(function() {

    filterTarget = $(this).attr('href');

    if (!window.isMobileOrTablet) {
      // show filters as open on desktop page load
      $(filterTarget).collapse('show');

    } else {
      // or close on mobile tablet page load
      $(filterTarget).collapse('hide');
    }
  });

  filterContain.on('hidden.bs.modal', function(){
    $(this).attr('style', '');
  });


})();
