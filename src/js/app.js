// ===========================
// Lodash
// ===========================
require("lodash");
// ===========================
// Lodash end
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
var PhotoSwipe = require("./vendors/photoswipe");
var PhotoSwipeUI_Default = require("./vendors/photoswipe-ui");

$('.o-product__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '40px'
});


var initPhotoSwipeFromDOM = function(gallerySelector) {

    // parse slide data (url, title, size ...) from DOM elements
    // (children of gallerySelector)
    var parseThumbnailElements = function(el) {
        var thumbElements = el.childNodes,
            numNodes = thumbElements.length,
            items = [],
            figureEl,
            linkEl,
            size,
            item;

        for (var i = 0; i < numNodes; i++) {

            figureEl = thumbElements[i]; // <figure> element

            // include only element nodes
            if (figureEl.nodeType !== 1) {
                continue;
            }

            linkEl = figureEl.children[0]; // <a> element

            size = linkEl.getAttribute('data-size').split('x');

            // create slide object
            item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10)
            };



            if (figureEl.children.length > 1) {
                // <figcaption> content
                item.title = figureEl.children[1].innerHTML;
            }

            if (linkEl.children.length > 0) {
                // <img> thumbnail element, retrieving thumbnail url
                item.msrc = linkEl.children[0].getAttribute('src');
            }

            item.el = figureEl; // save link to element for getThumbBoundsFn
            items.push(item);
        }

        return items;
    };

    // find nearest parent element
    var closest = function closest(el, fn) {
        return el && (fn(el) ? el : closest(el.parentNode, fn));
    };

    // triggers when user clicks on thumbnail
    var onThumbnailsClick = function(e) {
        e = e || window.event;
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var eTarget = e.target || e.srcElement;

        // find root element of slide
        var clickedListItem = closest(eTarget, function(el) {
            return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
        });

        if (!clickedListItem) {
            return;
        }

        // find index of clicked item by looping through all child nodes
        // alternatively, you may define index via data- attribute
        var clickedGallery = clickedListItem.parentNode,
            childNodes = clickedListItem.parentNode.childNodes,
            numChildNodes = childNodes.length,
            nodeIndex = 0,
            index;

        for (var i = 0; i < numChildNodes; i++) {
            if (childNodes[i].nodeType !== 1) {
                continue;
            }

            if (childNodes[i] === clickedListItem) {
                index = nodeIndex;
                break;
            }
            nodeIndex++;
        }



        if (index >= 0) {
            // open PhotoSwipe if valid index found
            openPhotoSwipe(index, clickedGallery);
        }
        return false;
    };

    // parse picture index and gallery index from URL (#&pid=1&gid=2)

    var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
        var pswpElement = document.querySelectorAll('.pswp')[0],
            gallery,
            options,
            items;

        items = parseThumbnailElements(galleryElement);

        // define options (if needed)
        options = {
            //             loop:false,
            // define gallery index (for URL)
            galleryUID: galleryElement.getAttribute('data-pswp-uid'),

            getThumbBoundsFn: function(index) {
                // See Options -> getThumbBoundsFn section of documentation for more info
                var thumbnail = items[index].el.getElementsByTagName('img')[0], // find thumbnail
                    pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                    rect = thumbnail.getBoundingClientRect();

                return {
                    x: rect.left,
                    y: rect.top + pageYScroll,
                    w: rect.width
                };
            }

        };

        // PhotoSwipe opened from URL
        if (fromURL) {
            if (options.galleryPIDs) {
                // parse real index when custom PIDs are used
                // http://photoswipe.com/documentation/faq.html#custom-pid-in-url
                for (var j = 0; j < items.length; j++) {
                    if (items[j].pid == index) {
                        options.index = j;
                        break;
                    }
                }
            } else {
                // in URL indexes start from 1
                options.index = parseInt(index, 10) - 1;
            }
        } else {
            options.index = parseInt(index, 10);
        }

        // exit if index not found
        if (isNaN(options.index)) {
            return;
        }

        if (disableAnimation) {
            options.showAnimationDuration = 0;
        }

        // Pass data to PhotoSwipe and initialize it
        gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
        var psIndex = gallery.getCurrentIndex();
        var psIndexSlick = psIndex - 1;
        console.log(psIndexSlick);
        gallery.listen('afterChange', function() {
            var psIndex = gallery.getCurrentIndex();
            var psIndexSlick = psIndex - 1;
            console.log(psIndexSlick);
            $(".o-product__slider").slick("slickGoTo", psIndexSlick);
        });
    };


    // loop through all gallery elements and bind events
    var galleryElements = document.querySelectorAll(gallerySelector);

    for (var i = 0, l = galleryElements.length; i < l; i++) {
        galleryElements[i].setAttribute('data-pswp-uid', i + 1);
        galleryElements[i].onclick = onThumbnailsClick;
    }





};

// execute above function
initPhotoSwipeFromDOM('.product-images');


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
