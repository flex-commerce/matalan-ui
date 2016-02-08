  (function() {
    // investigate adding star markup here?

    var ratingsHolders = $.find("[data-rating]");
    var rated = 0;

    if (ratingsHolders.length) {
      $.each(ratingsHolders, function(i) {
        if ($(this).children('.icon').length === 5) {
          rated = $(this).data('rating');
          $(this).children('.icon').slice(0, rated).addClass('active');
        }
      });
    }

  })();