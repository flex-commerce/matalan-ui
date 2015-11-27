(function() {

  var miniBagControl = $('.js-minibag, .js-minibag--view');
  var miniBagClose = $('.o-minibag--close');
  var miniBagAll = $('.o-minibag');
  var clickCatcher = '<div id="js-clickcatcher-minibag" class="js-clickcatcher"></div>';
  var miniBagActive = false;


  function closeMiniBag(scope) {
    $('html').removeClass("body--modal-open");
    $(scope).parent().removeClass("open");
    $('#js-clickcatcher-minibag').remove();
    miniBagActive = false;
  }

  function openMiniBag(scope) {
    if (!miniBagActive) {
      $('html').addClass("body--modal-open");
      $(scope).parent().addClass("open");
      $('body').append(clickCatcher);
      miniBagActive = true;
    };
  }

  miniBagControl.on('mouseover', function() {
    if(!window.isMobileOrTablet.matches) {
      openMiniBag(miniBagControl);
    }
  });
  miniBagControl.on('click', function() {
    if(window.isMobileOrTablet.matches) {
      openMiniBag(miniBagControl);
    }
  });


  $('body').on('mouseover', '#js-clickcatcher-minibag', function() {
    if(!window.isMobileOrTablet.matches) {
      closeMiniBag(miniBagControl);
    }

  });
  $('body').on('click', '#js-clickcatcher-minibag', function() {
    if(window.isMobileOrTablet.matches) {
      closeMiniBag(miniBagControl);
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
