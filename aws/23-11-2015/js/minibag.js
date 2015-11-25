(function() {

  var miniBagControl = $('.js-minibag');
  var miniBagClose = $('.o-minibag--close');
  var clickCatcher = '<div id="js-clickcatcher-minibag" class="js-clickcatcher"></div>';
  var miniBagActive = false;


  function closeMiniBag(scope) {
    $('html').removeClass("body--modal-open");
    $(scope).parent().removeClass("open");
    $('#js-clickcatcher-minibag').remove();
    miniBagActive = false;
  }

  function openMiniBag(scope) {
    console.log('miniBagActive', miniBagActive);
    if (!miniBagActive) {
      $('html').addClass("body--modal-open");
      $(scope).parent().addClass("open");
      $('body').append(clickCatcher);
      miniBagActive = true;
    };
  }

  $('body').on('click', '#js-clickcatcher-minibag', function() {
    closeMiniBag(miniBagControl);
  });

  miniBagControl.on('click', function() {
    if (miniBagActive === true) {
      closeMiniBag(miniBagControl);
    } else {
      openMiniBag(miniBagControl);
    }
  });

  miniBagClose.on('click', function() {
    closeMiniBag(miniBagControl);
  });


  $(document).ready(function() {
    $(window).on('resize', _.debounce(function() {
      if (miniBagActive === true) {
        closeMiniBag(miniBagControl);
      }
    }, 250));
  });

})();
