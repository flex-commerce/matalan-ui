/*
  Off canvas / megamenu init
 */

(function() {

  var $parentNavMenu = $('[data-app="accessible-navmenu"]');


  // ===========================
  // Megamenu init
  // ===========================
  function initPageLarge() {
    $parentNavMenu.accessibleMegaMenu({
      /* prefix for generated unique id attributes, which are required to indicate aria-owns, aria-controls and aria-labelledby */
      uuidPrefix: "accessible-menu",
      menuClass: "c-navbar",
      topNavItemClass: "navbar--top-item",
      panelClass: "sub-nav",
      panelGroupClass: "sub-nav-group",
      hoverClass: "hover",
      focusClass: "focus",
      openClass: "open"
    });
  }


  // ===========================
  // Off Canvas
  // ===========================
  var clickCatcher = '<div id="js-clickcatcher-canvas" class="js-clickcatcher"></div>'
  var offCanvasActive;

  function closeOffCanvas() {
    $('html').removeClass("body--scroll-lock");
    $parentNavMenu.removeClass("active");
    $('#js-clickcatcher-canvas').remove();
    offCanvasActive = false;
  }

  function openOffCanvas() {
    $('html').addClass("body--scroll-lock");
    $parentNavMenu.addClass("active");
    $('body').append(clickCatcher);
    offCanvasActive = true;
  }


  // off canvas navigation rules
  function offCanvas() {
    $('body').on('click', '#js-clickcatcher-canvas', function() {
      closeOffCanvas();
    })

    // toggle top level nav item
    $parentNavMenu.on('click', '.navbar--top-item > .link', function(e) {
      e.preventDefault();
      if (!$(this).hasClass('open')) {
        // if this isn't already open, close any open siblings before proceeding
        $parentNavMenu.find('.open').removeClass('open');
      }
      $(this).toggleClass('open').next('.sub-nav').toggleClass('open');
    })


    // toggle second level (sub nav) item
    $parentNavMenu.on('click', '.sub-nav-title', function(e) {
      e.preventDefault();
      if (!$(this).hasClass('open')) {
        // if this isn't already open, close any open siblings before proceeding
        $(this).closest('.sub-nav').find('.open').removeClass('open');
      }
      $(this).find('.link').toggleClass('open');
      $(this).toggleClass('open').nextUntil('.sub-nav-title').toggleClass('open');
    });

    // open menu item chevron click - href handling to go here
    $parentNavMenu.on('click', '.icon-ui-arr-right', function(e) {
      e.stopPropagation();
    });

  }


  // ===========================
  // off canvas button event handler
  $(".nav-mobile-button").on('click', function() {
    if ($('html').hasClass('body--scroll-lock')) {
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
      initPageLarge();
      window.smallScreen = false;
    }
  }


  // ===========================
  $(document).ready(function() {
    handleWindowSize();

    $(window).on('resize', _.debounce(function() {
      if (offCanvasActive === true) {
        closeOffCanvas();
      }
      handleWindowSize();
    }, 250));

  });

})()
