var selectBox = require("../modules/selectbox");



/* This needs to be re-written into the selectbox plugin */

$('body.page--pdp').on('change', 'select.js-product-select--size', function() {
  var selectedOption = $(this).val();
  if (selectedOption.toLowerCase().indexOf("ewis") >= 0) {
    $('#dev-pdpworks--panel1').collapse('show');
  } else {
    $('.js-ewis-hide').show();
    $('#dev-pdpworks--panel1').collapse('hide');
  }
});
