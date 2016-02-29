var $body = $('body');

require("lodash");

// Examples
// ===========================
// console.warn('Module 0');
// var module0 = require("./examples/module0");
// console.log( module0('Hello') );

// console.warn('Module 1');
// var module1 = require("./examples/module1");
// console.log('module1', module1);
// module1.incrementCounter();
// console.log(module1.incrementCounter());
// module1.multiply();
// console.log('x', module1.show());

// console.warn('Module 2');
// var module2 = require("./examples/module2");
// console.log('myPublicVar is ', module2().myPublicVar);
// module2().myPublicFunction('bar');



// deckard - xBrowser detections
// ===========================
require("./vendors/deckard");

function isIE9() {
  if ($.browser.ie && $.browser.version === "9.0") {
    return true;
  }
  return false;
}
// .. end deckard
// ===========================

// Typeahead JS
// ===========================
require("./vendors/typeahead");

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substringRegex;

    // an array that will be populated with substring matches
    matches = [];

    // regex used to determine if a string contains the substring `q`
    var substrRegex = new RegExp(q, 'i');

    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        matches.push(str);
      }
    });

    cb(matches);
  };
};

var states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
  'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
  'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
  'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
  'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

$('.js-search-typeahead').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
}, {
  name: 'states',
  source: substringMatcher(states)
});

$('.o-form--input-pack--typeahead input').focus(function() {
  $('.o-form--input-pack--typeahead .icon').css('color', 'transparent');
}).blur(function() {
  $('.o-form--input-pack--typeahead .icon').css('color', 'inherit');
});

// .. end Typeahead JS
// ===========================







// custom setup detection for mobile or tablet
// =========================//

function handleMatchMedia() {
  if (isIE9()) {
    window.isMobileOrTablet = false;

  } else {
    window.isMobileOrTablet = window.matchMedia("only screen and (max-width: 1025px)").matches;

    $(window).on('resize', _.debounce(function() {
      window.isMobileOrTablet = window.matchMedia("only screen and (max-width: 1025px)").matches;
      // console.log(window.isMobileOrTablet);
    }, 250));

  }
}

handleMatchMedia();


// console.log('isMobileOrTablet', window.isMobileOrTablet);

// true | false
// example simple throttled check
// $(window).on('resize', _.debounce(function() {
//   console.log('isMobileOrTablet', window.isMobileOrTablet)
// }));


// end setup detection for mobile or tablet
// ===========================



require("modules/fullscreen-handle");



// pointer events polyfill
// ===========================

require("pepjs");

// pepjs added to bring some sensibility to ios touch events. to investigate buggy ipad behaviour yet.
//
// cross touch / mouse events are now available via
// pointermove:   pointer moves, similar to touchmove or mousemove.
// pointerdown:   pointer is activated, or a device button held.
// pointerup:     pointer is deactivated, or a device button released.
// pointerover:   pointer has moved onto an element.
// pointerout:    pointer is no longer on an element it once was.
// pointerenter:  pointer enters the bounding box of an element.
// pointerleave:  pointer leaves the bounding box of an element.
// pointercancel: pointer will no longer generate events.
//
// $('body').on('pointerdown', function(e){
//   alert(e.target);
// })

// end pointer events polyfill
// ===========================



// the bit that fixed the modals
// =============================

var bodyFix = require("./modules/body-fix");

// before the modal is to be shown
$('body').on('show.bs.modal', function() {
  // but not for the minibag
  if ($('body').hasClass('modal-open--minibag') && !window.isMobileOrTablet) return;
  bodyFix.lock();
});

// then after the modal has already been hidden
$('body').on('hidden.bs.modal', function() {
  bodyFix.unlock();
});

// end the bit that fixed the modals
// =================================



// Tether
// http://github.hubspot.com/tether/
// ===========================

// current tooltip dependency checks for window.tether so we require it there
window.Tether = require("tether");

var tether;
var tetherTarget = $('.js-minibag--checkout');
var tetherElement = $('.o-bag-contain');

$('#minibag-contain').on('shown.bs.modal', function(e) {
  if (!window.isMobileOrTablet) {
    // for minibag click shower
    tether = new Tether({
      element: tetherElement,
      target: tetherTarget,
      attachment: 'top right',
      targetAttachment: 'bottom right'
    });
    tether.position();
  }
});

$('#minibag-contain').on('hidden.bs.modal', function(e) {
  if (tether !== undefined) {
    tether.disable();
  }

  // clear any inline styles that we've set with JS
  $('#minibag-contain').attr('style', '');
});

// Tether end
// ===========================



// require("./modules/validation-tooltip");
require("./modules/star-ratings");
require("./modules/sizeguide.js");


//Ewis
require("./modules/ewis");


// Dropdown
// ===========================
require("./modules/dropdown");
// ===========================


// Tabs
// ===========================
require("./modules/tabs-init");
// ===========================


// Google maps init
// ===========================
if ($body.hasClass('page--requiremaps')) {
  require("./modules/google-maps-init");
}
// ===========================


// accordion /collapse
// ===========================
require("./modules/collapse");

// open specific item example
// todo - currently issues with pre opening tabs this way - to investigate
// $('#collapseThree').collapse('show');

// open collapse examples
$(document).ready(function() {
  var pageBody = $('body');
  if (pageBody.hasClass('page--checkout-1')) {
    $('#billingAddressAccord').collapse('show');
  }
});

// accordion /collapse end
// ===========================




// Mobile Nav
// ===========================
if (window.isMobileOrTablet) {
  require("./modules/off-canvas");
}


// Desktop Nav
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


if (!window.isMobileOrTablet) {
  megamenuInit();
}

// Nav end
// ===========================





// modal temp
var BootstrapDialog = require("./vendors/bs-dialog");

$("[data-myacc='address-delete']").on('click', function(e) {

  var addressRef = $(this).parent().next('h5').text();

  BootstrapDialog.show({
    title: 'Confirm Delete',
    message: 'Are you sure you want to delete ' + addressRef + '?',
    closable: true,
    buttons: [{
      label: 'Cancel',
      cssClass: 'c-btn c-btn-primary',
      action: function(dialogRef) {
        dialogRef.close();
      }
    }, {
      id: 'delete-' + addressRef,
      label: 'Delete ' + addressRef,
      cssClass: 'c-btn c-btn-secondary',
      action: function(dialogRef) {
        dialogRef.close();
      }
    }]
  });

});



// ===========================
// Bootstrap components init
// ===========================

var Tooltip = require("./vendors/bootstrap/tooltip");


$(function() {
  $('[data-toggle="tooltip"]').tooltip();
})


require("./vendors/bootstrap/popover");

$(function() {
  $('[data-toggle="popover"]').popover();
});
var charLength = 0;
var showPopover = function() {
    $(this).val('');
    $(this).popover('show');
  },
  hidePopover = function() {
    charLength = 0;
    $(this).popover('hide');
  };

function wheretoplace() {
  var offset = $("#target").offset();
  if (width < 1000) return 'top';
  return 'right';
}

$('[data-validation="password"]').popover({
    trigger: 'manual',
    html: true,
    placement: function(context, source) {
      var offset = ($(window).width() - ($(source).offset().left + $(source).outerWidth()));
      console.log(offset);
      if (offset < 300) return 'top';
      return 'right';
    },
    content: function(context, source) {
      var thisId = $(source).attr('id');
      console.log(thisId);
      return "<p><strong>Passwords must use 3 of the below:</strong></p><ul class='o-list__validation'><li class='pass-check-1'>Must be 8 to 32 characters</li><li class='pass-check-2'>Must container upper and lowercase letters</li><li class='pass-check-3'>Must contain at least 1 number</li><li class='pass-check-4'>Must contain at least 1 special character</li></ul>"
    }
  })
  .focus(showPopover)
  .blur(hidePopover)
  .keyup(function() {

    if (this.value.length >= 8 && this.value.length <= 32) {
      $('.pass-check-1').addClass('success');
    } else {
      $('.pass-check-1').removeClass('success');
    }

    /*contains lowercase and uppercase characters*/
    if (this.value.match(/[a-z]+/) && this.value.match(/[A-Z]+/)) {
      $('.pass-check-2').addClass('success');
    } else {
      $('.pass-check-2').removeClass('success');
    }

    /*contains digits*/
    if (this.value.match(/[0-9]+/)) {
      $('.pass-check-3').addClass('success');
    } else {
      $('.pass-check-3').removeClass('success');
    }

    if (this.value.match(/[$£&+,:;=?@#|'<>.^*()%!-]+/)) {
      $('.pass-check-4').addClass('success');
    } else {
      $('.pass-check-4').removeClass('success');
    }

  });

$('[data-validation="password-confirm"]').popover({
    trigger: 'manual',
    html: true,
    placement: function(context, source) {
      var offset = ($(window).width() - ($(source).offset().left + $(source).outerWidth()));
      console.log(offset);
      if (offset < 300) return 'top';
      return 'right';
    },
    content: function(context, source) {
      return "<p><strong>Passwords must correctly match:</strong></p><ul class='o-list__validation'><li class='pass-confirm-check-1'>Passwords match</li></ul>"
    }
  })
  .focus(showPopover)
  .blur(hidePopover)
  .keyup(function() {
    var password = $('[data-validation="password"]').val();
    var confirmPassword = $('[data-validation="password-confirm"').val();

    if (password === confirmPassword && this.value.length >= 8) {
      $('.pass-confirm-check-1').addClass('success');
    } else {
      $('.pass-confirm-check-1').removeClass('success');
    }

  });


// ===========================
// Bootstrap components end
// ===========================





// UI Modules
// ===========================
var selectBox = require("./modules/selectbox");

$('select').selectBox({
  mobile: false,
  loopOptions: true
});


// Self Initialising...
require("./modules/slickswipe-init");
require("./modules/rangeslider-init");
require("./modules/minibag");
require("./modules/filters");
require('./modules/address-lookup');

if (!isIE9()) {
  require("./modules/scroll-lock");
}







// syntax highlighter
// hljs.configure({
//   useBR: false,
//   fixMarkup: true
// });
// hljs.initHighlighting();

// bugherd
// (function(d, t) {
//   var bh = d.createElement(t),
//   s = d.getElementsByTagName(t)[0];
//   bh.type = 'text/javascript';
//   bh.src = '//www.bugherd.com/sidebarv2.js?apikey=uswxmej5ryhotdtsi4yw9g';
//   s.parentNode.insertBefore(bh, s);
// })(document, 'script');
