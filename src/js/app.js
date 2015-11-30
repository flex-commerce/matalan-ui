// ===========================
// jQuery auto require testing
// ===========================
// console.log($);
// ===========================
// jQuery testing end
// ===========================


// ===========================
// Lodash testing
// ===========================
require("lodash");
// console.log(_);
// ===========================
// Lodash testing end
// ===========================




// ===========================
// Dropdown load - no init required
// ===========================
require("./modules/dropdown");
// ===========================
// Dropdown end
// ===========================


window.isMobileOrTablet = window.matchMedia("only screen and (max-width: 1025px)");

$(document).ready(function() {
  $(window).on('resize', _.debounce(function() {
    window.isMobileOrTablet = window.matchMedia("only screen and (max-width: 1025px)");
  }, 250));
});

// ===========================
// Megamenu init
// ===========================
function megamenuInit() {
  var accessibleMegaMenu = require("./modules/menu-accessible");
  var parentNavMenu = $('[data-app="accessible-navmenu"]');

  parentNavMenu.accessibleMegaMenu({
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

// console.log('mm', window.isMobileOrTablet.matches);

if (!window.isMobileOrTablet.matches) {
  megamenuInit();
}


// ===========================
// Megamenu end
// ===========================


if (window.isMobileOrTablet.matches) {
  require("./modules/off-canvas");
}

// ===========================
// SelectBox init
// ===========================
var selectBox = require("./modules/selectbox");

$('select').selectBox({
  mobile: false,
  loopOptions: true
});
// ===========================
// SelectBox End
// ===========================


var slick = require("./modules/slick");

$('.o-section-department--slick').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 400,
      settings: "unslick"
    }
  ]
});


// ===========================
// Range Slider init
// ===========================
(function() {
    if(  $("#filters--range").is(":visible") == true ) {
    var noUiSlider = require("./modules/nouislider");

    var slider = document.getElementById('filters--range');
    var sliderValues = [
      document.getElementById('slider-value-lower'),
      document.getElementById('slider-value-upper')
    ];

    noUiSlider.create(slider, {
      start: [20, 80],
      connect: true,
      range: {
        'min': 0,
        'max': 100
      }
    });
    slider.noUiSlider.on('update', function(values, handle) {
      sliderValues[handle].innerHTML = '£' + Math.round(values[handle]).toFixed(0);
    });
  }
})();
// ===========================
// Range Slider End
// ===========================



// Self Initialising...
require("./modules/minibag");
require("./modules/filters");
require("./modules/scroll-lock");
// Self Initialising end


// ===========================
// Misc rules to tidy
// ===========================
(function() {
  // header - show mobile search input field
  $('.header--mobile-search').on('click', function() {
    $('.header--search-bar').toggleClass('active');
  });
})();

(function() {
  // search results layout switch
  $('.js-results-tight').on('click', function(e) {
      e.preventDefault();
      if (!$(this).hasClass('active')) {

        $(this).addClass('active')
          .siblings().removeClass('active')
          // .find('.icon')
          // .removeClass("icon-ui-tight-o")
          // .addClass('icon-ui-tight')
          .closest('.search-results--main')
          .removeClass('search-results__wide')
          .addClass('search-results__tight');
      }
    });
    // search results layout switch cont.
  $('.js-results-wide').on('click', function(e) {
    e.preventDefault();
    if (!$(this).hasClass('active')) {

      $(this).addClass('active')
        .siblings().removeClass('active')
        // .find('.icon')
        // .removeClass("icon-ui-wide-o")
        // .addClass('icon-ui-wide')
        .closest('.search-results--main')
        .removeClass('search-results__tight')
        .addClass('search-results__wide');
    }
  });
})();

(function() {
  // global alert event
  $(".global-test").click(function() {
    $(".c-alert-global").toggleClass("active");
  });
})();



(function() {

  // filter collapse / expand
  var toggleFilterCollapse = function(target) {
    $(target).toggleClass('collapse');
    // console.log($(target));
    $(target).find('.icon').toggleClass("icon-plus icon-minus");
  };

  $('body').on('click', '.filter--title', function() {
    toggleFilterCollapse($(this));
  });
  // console.log(isMobileOrTablet);
  if (!window.isMobileOrTablet.matches) {
    toggleFilterCollapse('.filter--title');
  }
})();


// syntax highlighter
// hljs.configure({
//   useBR: false,
//   fixMarkup: true
// });
// hljs.initHighlighting();


// Filters Show more
(function() {
  $('body').on('click', '.filters--show-more', function() {
    $(this).hide();
    $(this).parent().find('label').css('display', 'block');
  });
})();



// bugherd
(function(d, t) {
  var bh = d.createElement(t),
    s = d.getElementsByTagName(t)[0];
  bh.type = 'text/javascript';
  bh.src = '//www.bugherd.com/sidebarv2.js?apikey=uswxmej5ryhotdtsi4yw9g';
  s.parentNode.insertBefore(bh, s);
})(document, 'script');
