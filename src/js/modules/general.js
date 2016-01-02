(function ($) {
  'use strict';


  function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
  }

  $('body').on('click', '.close', function() {
    var parentId = $(this).data('close');
    $('#' + parentId).hide();
  });

  $('body').on('click', '.email-signup', function() {
    var parentId = $(this).data('close');
    $('#' + parentId).hide();
    $('.signup-success').show();
  });

  $('form#email-signup').submit(function(e){
    e.preventDefault();
    $(this).hide();
    $('.signup-success').show();
  });

  $('form[name=searchProducts]').submit(function(e){
    e.preventDefault();
    console.log($('input[name=searchTermMobile]').val());
    console.log($('input[name=searchTerm]').val());
    if ($('input[name=searchTerm]').val() == 'dresses' || $('input[name=searchTermMobile]').val() == 'dresses') {
      window.location.href = './search-results.html';
    } else {
      window.location.href = './no-results.html';
    }
  });

  $('body').on('click', '.clear__filters', function() {
    $('.o-filters__inner').find('input[type=checkbox]:checked').removeAttr('checked');
    $('.o-filters__inner').find('input[type=radio]:checked').removeAttr('checked');
  });

  // ==========================


  $('#dev-debug').on('click', function() {
    $(this).parent('li').toggleClass('active');
    $('html').toggleClass('dev-debug');
  })
  $('#grid-debug').on('click', function() {
    $(this).parent('li').toggleClass('active');
    $('html').toggleClass('grid-debug');
  })
  $('#nudge-debug').on('click', function() {
    $(this).parent('li').toggleClass('active');
    $('html').toggleClass('nudge-debug');
  });


  // ==========================

  $('.js-add-item').on('click', function() {
    var valueBox = $(this).parent().find('span'),
        hiddenInput = $(this).parent().find('input'),
        value = parseInt(valueBox.html(),10),
        maxValue = 10,
        newValue = value + 1;

    if (newValue <= maxValue) {
      valueBox.html(newValue);
      hiddenInput.val(newValue);
    }
  });

  $('.js-remove-item').on('click', function() {
    var valueBox = $(this).parent().find('span'),
        hiddenInput = $(this).parent().find('input'),
        value     = parseInt(valueBox.html(),10),
        minValue  = 1,
        newValue  = value - 1;

    if (newValue >= minValue) {
      valueBox.html(newValue);
      hiddenInput.val(newValue);
    }
  });


  // ==========================


  // $(".c-tabs__header li a").click(function(e) {
  //     e.preventDefault();
  //     $(this).parent().addClass("active");
  //     $(this).parent().siblings().removeClass("active");
  //     var tab = $(this).attr("href");
  //     $(".c-tabs__content > div").not(tab).css("display", "none");
  //     $(tab).fadeIn();
  // });

  // $(".c-tabs--accordion").click(function(e) {
  //     e.preventDefault();
  //     $(this).find('.o-product-detail__content, .o-my-account__content').toggleClass("active");
  //     $(this).find('.o-product-detail__title i, .o-my-account__title i').toggleClass("icon-plus icon-minus");
  //     $(this).siblings().find('.o-product-detail__content, .o-my-account__content').removeClass("active");
  //     $(this).siblings().find('.o-product-detail__title i, .o-my-account__title i').removeClass("icon-minus").addClass('icon-plus');
  // });

  $('.filter--colours li').click(function(e) {
    $(this).toggleClass('active');
    $(this).siblings().removeClass('active');
  });


  // ==========================



  // // Cache selectors outside callback for performance.
  // if ($('#searchHeader').length) {
  //   var $window = $(window),
  //      $stickyEl = $('#searchHeader'),
  //      elTop = $stickyEl.offset().top;

  //   $window.scroll(function() {
  //       $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
  //   });
  // }

})(jQuery);
