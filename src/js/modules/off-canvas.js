/*
  Off canvas / megamenu init
 */

(function() {

  var $parentNavMenu = $('[data-app="accessible-navmenu"]');





  // ===========================
  // Off Canvas
  // ===========================
  var clickCatcher = '<div id="js-clickcatcher-canvas" class="js-clickcatcher"></div>'
  var offCanvasActive;

  function closeOffCanvas() {
    $('html').removeClass("body--modal-open");
    $parentNavMenu.removeClass("active");
    $('#js-clickcatcher-canvas').remove();
    offCanvasActive = false;
  }

  function openOffCanvas() {
    $('html').addClass("body--modal-open");
    $parentNavMenu.addClass("active");
    $('body').append(clickCatcher);
    offCanvasActive = true;
  }


  // off canvas navigation rules
  function offCanvas() {
    $('body').on('mousedown', '#js-clickcatcher-canvas', function() {
      closeOffCanvas();
    })

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
    $parentNavMenu.on('mousedown', '.icon-arr-forward', function(e) {
      e.stopPropagation();
    });

  }


  // ===========================
  // off canvas button event handler
  $(".nav-mobile-button").on('mousedown', function() {
    if ($('html').hasClass('body--modal-open')) {
      closeOffCanvas();
    } else {
      openOffCanvas();
    }
  })

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
        closeOffCanvas();
      }
      handleWindowSize();
    }, 250));

  });

})()

