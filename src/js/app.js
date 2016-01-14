// ===========================
// Lodash
// ===========================
require("lodash");
// ===========================
// Lodash end
// ===========================



// ===========================
// Tether
// http://github.hubspot.com/tether/
// ===========================
var Tether = require("tether");
var mbTether;

var tetherTarget = $('.checkout-bag');
var tetherElement = $('.o-minibag-contain');

$('#minibag-contain').on('shown.bs.modal', function (e) {
  // for minibag click shower
  mbTether = new Tether({
    element: tetherElement,
    target: tetherTarget,
    attachment: 'top right',
    targetAttachment: 'bottom right'
  });
});

$('#minibag-contain').on('hidden.bs.modal', function (e) {
  mbTether.destroy();
});



// ===========================
// Tether end
// ===========================



window.isMobileOrTablet = window.matchMedia("only screen and (max-width: 1025px)");

$(document).ready(function() {
    $(window).on('resize', _.debounce(function() {
        window.isMobileOrTablet = window.matchMedia("only screen and (max-width: 1025px)");
    }, 250));
});

// console.log('isMobileOrTablet', window.isMobileOrTablet.matches) // true | false

// $(window).on('resize', _.debounce(function() {
//   console.log('isMobileOrTablet', window.isMobileOrTablet.matches) // true | false
// }));



// ===========================
// Common JS functions
// ===========================
require("./modules/general");
// ===========================
// Common JS end
// ===========================


// ===========================
// Dropdown load - no init required
// ===========================
require("./modules/dropdown");
// ===========================
// Dropdown end
// ===========================

require("./modules/mapbox-init");


// ===========================
// Tabs
// ===========================

require("./modules/tabs");

// open first tab here, so we don't need to include 2x active classes on each usage

$.each($('.c-tabs [role="tablist"]'), function() {
    $(this).find('a:first').tab('show');
});

// ===========================
// Tabs end
// ===========================




// ===========================
// accordion
// ===========================
require("./modules/collapse");

// open specific item example
// todo - currently issues with pre opening tabs this way - to investigate
// $('#collapseThree').collapse('show');

// open all on load example (for non accordion accordion, eg filters)
$(document).ready(function() {
    if (!window.isMobileOrTablet.matches) {

        // on load, open if desktop
        $("#accordion2 [role='tabpanel']").each(function() {
            $(this).collapse('show');
        });

    }
    $(window).on('resize', _.debounce(function() {
        if (!window.isMobileOrTablet.matches) {
            // on resize, open if desktop
            $("#accordion2 [role='tabpanel']").each(function() {
                $(this).collapse('show');
            });

        } else {
            // on resize, close if not desktop
            $("#accordion2 [role='tabpanel']").each(function() {
                $(this).collapse('hide');
            });

        }
    }, 250));
});


// ===========================
// accordion end
// ===========================





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
        topNavItemClass: "navbar__top-item",
        panelClass: "sub-nav",
        panelGroupClass: "sub-nav-group",
        hoverClass: "hover",
        focusClass: "focus",
        openClass: "open"
    });
}


if (!window.isMobileOrTablet.matches) {
    megamenuInit();
}


// ===========================
// Megamenu end
// ===========================

if (window.isMobileOrTablet.matches) {
    require("./modules/off-canvas");
}


// modal temp
require("./vendors/bootstrap/modal");










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


// ===========================
// Sticky Headers
// ===========================

require("./modules/sticky-headers");

// =========================
// Sticky Headers End
// ===========================


// ===========================
// Slick Slider initialisation
// ===========================
var slick = require("./vendors/slick");

$('.o-section-department__slick').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});


// $('.o-product__slider').on('init', function(event, slick){
//   $('.slick-active').prev().addClass('slick-item-prev');
//   $('.slick-active').next().addClass('slick-item-next');
// });

$('.o-product__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px'
});



// $('.o-product__slider').on('afterChange', function(event, slick, currentSlide){
//   $('.slick-item-prev').removeClass('slick-item-prev');
//   $('.slick-item-next').removeClass('slick-item-next');
//   $('.slick-active').prev().addClass('slick-item-prev');
//   $('.slick-active').next().addClass('slick-item-next');
// });

// $('.o-product__slider').on('beforeChange', function(event, slick, currentSlide){
//   $('.slick-item-prev').next().addClass('slick-item-prev');
//   $('.slick-item-next').next().addClass('slick-item-next');
// });
// ===========================
// Slick Slider End
// ===========================


// ===========================
// Range Slider init
// ===========================
(function() {
    if ($("#filters--range").length) {
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
        $(this).toggleClass('active');
        $('.header--search-bar').toggleClass('active').find('input').focus();
    });
})();

(function() {
    // search results layout switch
    $('.js-results-tight').on('click', function(e) {
        e.preventDefault();
        if (!$(this).hasClass('active')) {

            $(this).addClass('active')
                .siblings().removeClass('active')
                .closest('.search-results__main')
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
                .closest('.search-results__main')
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
