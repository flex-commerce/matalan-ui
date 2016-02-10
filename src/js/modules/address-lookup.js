(function(){
  'use strict';


  var key = "TF99-JU78-PD69-CP74";

  function lookupPostcode(Postcode, thisParentWrapper) {
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
                      $(thisParentWrapper).find('.find-address-wrapper').show();
                      $(thisParentWrapper).find('.populateAddresses').html('');
                      var toAppend = '<select data-app="pa-address-select" class="col-12@xs u-pad-0 selectbox-full ">';
                      $.each(data.Items, function(i, o) {
                          toAppend += '<option value="' + o.Id + '">' + o.Text + '</option>';
                      });
                      toAppend += '</select>';
                      $(thisParentWrapper).find('.populateAddresses').append(toAppend);
                      $(thisParentWrapper).find('.populateAddresses select').selectBox();

                      $(thisParentWrapper).find('select[data-app=pa-address-select]').on('change', function(e) {
                          var addressId = $(this).val();

                          retrieveAddress(addressId, thisParentWrapper);
                      });
                  }
              }
          });
  }

  function retrieveAddress(id, thisParentWrapper) {
      $.ajax({
          url: "//services.postcodeanywhere.co.uk/CapturePlus/Interactive/Retrieve/v2.10/json3.ws",
          dataType: "jsonp",
          data: {
              key: key,
              id: id
          },
          success: function(data) {
              if (data.Items.length)
                  populateAddress(data.Items[0], thisParentWrapper);
          }
      });
  }

  function populateAddress(address, thisParentWrapper) {
      $(thisParentWrapper).find('input[data-app=pa-postcode]').val(address.PostalCode);
      $(thisParentWrapper).find('input[data-app=pa-line1]').val(address.Line1);
      $(thisParentWrapper).find('input[data-app=pa-line2]').val(address.Line2);
      $(thisParentWrapper).find('input[data-app=pa-city]').val(address.City);
      $(thisParentWrapper).find('input[data-app=pa-country]').val(address.CountryName);
  }



  // ==========================
  // Postcode Anywhere
  // ==========================

// TODO - this has been renamed
  $('.js-address-lookup').on('click', function(e) {

      e.preventDefault();
      var thisParentWrapper = $(this).closest('[data-app="address-lookup--wrapper"]');
      var postcodeValue = $(thisParentWrapper).find('[data-app=pa-postcode]').val();

      lookupPostcode(postcodeValue, thisParentWrapper);
  });

  // ==========================
  // Postcode Anywhere End
  // ==========================


}());