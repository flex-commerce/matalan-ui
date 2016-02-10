var selectBox = require("../modules/selectbox");




$('body.page--pdp').on('click', '.selectbox-disabled', function() {
  console.log('click show');
  $('#dev-pdpworks--panel1').collapse('show');
});

$('body.page--pdp').on('click', '.selectbox-dropdown-menu li', function() {
  console.log('click hide');
  // alert('hide');
  // $('#dev-pdpworks--panel1').collapse('hide');
});
