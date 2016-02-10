  (function() {
    'use strict';

    var ratingsHolders = $.find("[data-rating]");
    var rated = 0;
    var maxStars;

    if (ratingsHolders.length) {
      $.each(ratingsHolders, function(i) {
        maxStars = 5;

        if ($(this).children('.icon').length !== 5) {
          $(this).empty();
          $(this).append(new Array(++maxStars).join(' <i class="icon icon-star-fill"></i> '));
        }

        rated = $(this).data('rating');
        $(this).children('.icon').slice(0, rated).addClass('active');

      });
    }

  })();