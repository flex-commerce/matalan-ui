(function() {
  'use strict';


  var key = "TF99-JU78-PD69-CP74";
  /*http://services.postcodeanywhere.co.uk/CapturePlus/Interactive/Find/v2.10/json3.ws?callback=?*/
  function lookupPostcode(Postcode, thisParentWrapper) {
    $.getJSON("http://services.postcodeanywhere.co.uk/PostcodeAnywhere/Interactive/FindByPostcode/v1.00/json3.ws?callback=?", {
        Key: key,
        Postcode: Postcode
      },
      function(data) {
        console.log(data)
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
            var toAppend = '<select data-app="pa-address-select" class="col-12@xs u-pad-0">';
            $.each(data.Items, function(i, o) {
              toAppend += '<option value="' + o.Id + '">' + o.StreetAddress + ", " + o.Place + '</option>';
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

  // Version 2 method
  // function retrieveAddress(id, thisParentWrapper) {
  //     $.ajax({
  //         url: "//services.postcodeanywhere.co.uk/CapturePlus/Interactive/Retrieve/v2.10/json3.ws",
  //         dataType: "jsonp",
  //         data: {
  //             key: key,
  //             id: id
  //         },
  //         success: function(data) {
  //             if (data.Items.length)
  //                 populateAddress(data.Items[0], thisParentWrapper);
  //         }
  //     });
  // }
  //
  function retrieveAddress(id, thisParentWrapper) {
    $.getJSON("http://services.postcodeanywhere.co.uk/PostcodeAnywhere/Interactive/RetrieveById/v1.30/json3.ws?callback=?", {
        Key: key,
        Id: id
      },
      function(data) {
        // Test for an error
        if (data.Items.length == 1 && typeof(data.Items[0].Error) != "undefined") {
          // Show the error message
          alert(data.Items[0].Description);
        } else {
          // Check if there were any items found
          if (data.Items.length == 0)
            alert("Sorry, there were no results");
          else {
            populateAddress(data.Items[0], thisParentWrapper);
            // PUT YOUR CODE HERE
            //FYI: The output is a JS object (e.g. data.Items[0].Udprn), the keys being:
            //Udprn
            //Company
            //Department
            //Line1
            //Line2
            //Line3
            //Line4
            //Line5
            //PostTown
            //County
            //Postcode
            //Mailsort
            //Barcode
            //Type
            //DeliveryPointSuffix
            //SubBuilding
            //BuildingName
            //BuildingNumber
            //PrimaryStreet
            //SecondaryStreet
            //DoubleDependentLocality
            //DependentLocality
            //PoBox
            //PrimaryStreetName
            //PrimaryStreetType
            //SecondaryStreetName
            //SecondaryStreetType
            //CountryName
            //CountryISO2
            //CountryISO3
          }
        }
      });
  }

  function populateAddress(address, thisParentWrapper) {
    $(thisParentWrapper).find('input[data-app=pa-postcode]').val(address.PostalCode);
    $(thisParentWrapper).find('input[data-app=pa-line1]').val(address.Line1);
    $(thisParentWrapper).find('input[data-app=pa-line2]').val(address.Line2);
    $(thisParentWrapper).find('input[data-app=pa-city]').val(address.PostTown);
    $(thisParentWrapper).find('input[data-app=pa-country]').val(address.CountryName);
  }



  // ==========================
  // Postcode Anywhere
  // ==========================

  $('.pa-address-lookup').on('click', function(e) {

    e.preventDefault();
    var thisParentWrapper = $(this).closest('[data-app="address-lookup--wrapper"]');
    var postcodeValue = $(thisParentWrapper).find('[data-app=pa-postcode]').val();

    lookupPostcode(postcodeValue, thisParentWrapper);
  });

  // ==========================
  // Postcode Anywhere End
  // ==========================


}());
