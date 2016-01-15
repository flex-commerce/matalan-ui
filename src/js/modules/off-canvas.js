/*
  Off canvas / megamenu init
 */

(function() {

  var $parentNavMenu = $('[data-app="accessible-navmenu"]');
  var $navContain = $('#nav-contain');

  // ===========================
  // Off Canvas
  // ===========================
  // var clickCatcher = '<div id="js-clickcatcher-canvas" class="js-clickcatcher"></div>'
  var offCanvasActive;




$navContain.on('show.bs.modal', function (e) {
  $parentNavMenu.addClass("active");
});

$navContain.on('hide.bs.modal', function (e) {
  $parentNavMenu.removeClass("active");
});

$('body').on('pointerdown', '.modal-backdrop', function() {
  if (window.isMobileOrTablet.matches) {
    $navContain.modal('hide');
  }
});

// $('#minibag-contain').on('hidden.bs.modal', function (e) {
//   tether.disable();
//   $('#minibag-contain').attr('style', '');
// });



  function closingOffCanvas() {
    // $('html').removeClass("body--modal-open");
    // $parentNavMenu.removeClass("active");
    // $('#js-clickcatcher-canvas').remove();
    // offCanvasActive = false;
  }

  function openingOffCanvas() {
  //   $('html').addClass("body--modal-open");
  //   $parentNavMenu.addClass("active");
  //   $('body').append(clickCatcher);
  //   offCanvasActive = true;
  }


  // off canvas navigation rules
  function offCanvas() {
    // $('body').on('mousedown', '#js-clickcatcher-canvas', function() {
    //   closeOffCanvas();
    // })

    // toggle top level nav item
    $parentNavMenu.on('mousedown', '.navbar__top-item > .link', function(e) {
      e.preventDefault();
      if (!$(this).hasClass('open')) {
        // if this isn't already open, close any open siblings before proceeding
        $parentNavMenu.find('.open').removeClass('open');
      }
      $(this).toggleClass('open').next('.sub-nav').toggleClass('open');
    })


    // toggle second level (sub nav) item
    $parentNavMenu.on('mousedown', '.sub-nav-title', function(e) {
      e.preventDefault();
      if (!$(this).hasClass('open')) {
        // if this isn't already open, close any open siblings before proceeding
        $(this).closest('.sub-nav').find('.open').removeClass('open');
      }
      $(this).find('.link').toggleClass('open');
      $(this).toggleClass('open').nextUntil('.sub-nav-title').toggleClass('open');
    });

    // open menu item chevron click - href handling to go here
    $parentNavMenu.on('mousedown', '.icon-ui-forward', function(e) {
      e.stopPropagation();
    });

  }


  // ===========================
  // off canvas button event handler
  // $("body").on('mousedown', '.js-nav-mobile-button',  function() {
  //   if ($('html').hasClass('body--modal-open')) {
  //     closeOffCanvas();
  //   } else {
  //     openOffCanvas();
  //   }
  // })

    // $('body').on('click touchstart', '#js-clickcatcher-canvas', function() {
    //   closeOffCanvas();
    // });



  // DEVELOPER RULE - stop links from acting on click
  $('nav a').on('click', function(e) {
    e.preventDefault();
  })


  function handleWindowSize() {
    if (window.matchMedia("(max-width: 1024px)").matches) {
      if (offCanvasActive !== true) {
        offCanvas();
        window.smallScreen = true;
      }
    } else {
      // initPageLarge();
      window.smallScreen = false;
    }
  }


  // ===========================
  $(document).ready(function() {
    handleWindowSize();

    // extended resize checker
    var width = $(window).width();
    // detect and ignore vertical resize, for touch devices that add and hide silly menu bars on scroll
    $(window).on('resize', _.debounce(function() {
      // do nothing if the width is the same
      if ($(window).width()==width) return;
      // update new width value for next time
      width = $(window).width();
      if (offCanvasActive === true) {
        // closeOffCanvas();
      }
      handleWindowSize();
    }, 250));

  });

})()

