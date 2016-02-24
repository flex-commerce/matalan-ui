$('#deliveryAddressAccord').on('change', function(e) {

  var chooseDelivery = $('#checkout-delivery-delivery');
  var chooseCollect = $('#checkout-delivery-collect');
  var target = e.target;

  if (target.value === 'click-and-collect')  {
    chooseDelivery.addClass('is-hidden');
    chooseCollect.removeClass('is-hidden');
  } else {
    chooseDelivery.removeClass('is-hidden');
    chooseCollect.addClass('is-hidden');
  }

});



  // // checkout navigation method - these to be moved to checkout js file
  // $("#termsAndConditionsAccepted").on("click", function(e) {
  //   if ($(this).is(':checked')) {
  //     $('.iFrameWrapper').show();
  //   } else {
  //     $('.iFrameWrapper').hide();
  //   }
  // });

  // // checkout navigation method - these to be moved to checkout js file
  // $('form#email-signup').submit(function(e) {
  //   e.preventDefault();
  //   $(this).hide();
  //   $('.signup-success').show();
  // });

  // // checkout navigation method - these to be moved to checkout js file
  // $('#addressEntry').keypress(function(e) {
  //   if (e.which == 13) {
  //     e.preventDefault();
  //     $(this).parent().find('a').click();
  //   }
  // });

  // // checkout navigation method - these to be moved to checkout js file
  // $('input[name=billingaddress]').on('change', function() {
  //   $('.address-picker').toggle();
  // });

  // // checkout navigation method - these to be moved to checkout js file
  // $('input[name=deliveryaddress]').on('change', function() {
  //   if ($(this).attr("value") === "addressbook") {
  //     $(".o-box").not(".o-addressbook").hide();
  //     $(".o-addressbook").show();
  //     $(".o-submit-button").show();
  //   } else if ($(this).attr("value") === "newaddress") {
  //     $(".o-box").not(".o-newaddress").hide();
  //     $(".o-newaddress").show();
  //   } else {
  //     $(".o-box").not(".o-submit-button").hide();
  //     $(".o-submit-button").show();
  //   }
  // });

  // // checkout navigation method - these to be moved to checkout js file
  // $('input[name=deliverytype]').on('change', function() {
  //   if ($(this).attr("value") === "click-and-collect") {
  //     $(".o-box").not(".o-click-and-collect").hide();
  //     $(".o-click-and-collect").show();
  //   } else {
  //     $(".o-box").not(".o-submit-button").hide();
  //     $(".o-submit-button").show();
  //   }
  // });

  // // checkout navigation method - these to be moved to checkout js file
  // $('.js-edit-address').on('click', function() {
  //   $('.address-picker').toggle();
  //   $("#newaddress").prop('checked', true);
  // });
