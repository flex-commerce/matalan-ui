// var selectBox = require("../modules/selectbox");



/* This needs to be re-written into the selectbox plugin */

$('body.page--pdp').on('change', 'select.js-product-select--size', function() {
  var selectedOption = $(this).val();
  if (selectedOption.toLowerCase().indexOf("ewis") >= 0) {
    $('.js-ewis-hide').hide();
    $('#pdp__ewis__panel').collapse('show');
  } else {
    $('.js-ewis-hide').show();
    $('#pdp__ewis__panel').collapse('hide');
  }
});
