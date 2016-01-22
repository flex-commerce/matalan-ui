(function(){
  'use strict';

console.log('woo');


  var key = "TF99-JU78-PD69-CP74";

  function lookupPostcode(Postcode) {
      $.getJSON("http://services.postcodeanywhere.co.uk/CapturePlus/Interactive/Find/v2.10/json3.ws?callback=?", {

              Key: key,
              SearchTerm: Postcode
          },
          function(data) {
              // Test for an error
              if (data.Items.length == 1 && typeof(data.Items[0].Error) != "undefined") {
                  // Show the error message
                  console.log(data.Items[0].Description);
              } else {
                  // Check if there were any items found
                  if (data.Items.length == 0)
                      console.log("Sorry, there were no results");
                  else {
                      $('.populateAddresses').html('');
                      var toAppend = '<select id="pa-address-select" class="col-12@xs u-pad-0 selectbox-full ">';
                      $.each(data.Items, function(i, o) {
                          toAppend += '<option value="' + o.Id + '">' + o.Text + '</option>';
                      });
                      toAppend += '</select>';
                      $('.populateAddresses').append(toAppend);
                      $('.populateAddresses select').selectBox();

                      $('#pa-address-select').on('change', function(e) {
                          var addressId = $(this).val();

                          retrieveAddress(addressId);
                      });
                  }
              }
          });
  }

  function retrieveAddress(id) {
      $.ajax({
          url: "//services.postcodeanywhere.co.uk/CapturePlus/Interactive/Retrieve/v2.10/json3.ws",
          dataType: "jsonp",
          data: {
              key: key,
              id: id
          },
          success: function(data) {
              if (data.Items.length)
                  populateAddress(data.Items[0]);
          }
      });
  }

  function populateAddress(address) {
      $('#pa-postcode').val(address.PostalCode);
      $('#pa-line1').val(address.Line1);
      $('#pa-line2').val(address.Line2);
      $('#pa-city').val(address.City);

      // $("#address").html(address.Label.replace(/\n/g, '<br/>'));
  }



  // ==========================
  // Postcode Anywhere
  // ==========================
  $("#pa-postcode").keyup(function() {
      $("#pa-postcode").val($(this).val());
  });

  $('#pa-address-lookup').on('click', function(e) {

      e.preventDefault();

      var thisParentWrapper = $(this).closest('[data-app="address-lookup--wrapper"]');

      var line1 = $(thisParentWrapper).find( '[data-app="pa-line1"]' );

      console.log( line1 );
      // ['data-app="pa-postcode"']
      // ['data-app="pa-line1"']
      // ['data-app="pa-line2"']
      // ['data-app="pa-city"']
      // ['data-app="pa-country"']


      var postcodeValue = $("#pa-postcode").val();
      lookupPostcode(postcodeValue);
  });

  // ==========================
  // Postcode Anywhere End
  // ==========================


}());