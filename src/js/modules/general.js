(function($) {
    'use strict';
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

    function validateEmail(email) {
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        return re.test(email);
    }

    $('body').on('click', '.close', function() {
        var parentId = $(this).data('close');
        $('#' + parentId).hide();
    });

    $('body').on('click', '#checkoutCreateAccount', function() {
        $('.create-account-container').toggle();

        window.onbeforeunload = function() {
            return "Are you sure you don't want to create an account?";
        };
    });

    $(".zoom").bind("click", function(e) {
        var ez = $('.zoom').data('elevateZoom');
        $.fancybox(ez.getGalleryList());
        return false;
    });

    $("#termsAndConditionsAccepted").on("click", function(e) {
        if ($(this).is(':checked')) {
            $('.iFrameWrapper').show();
        } else {
            $('.iFrameWrapper').hide();
        }
    });

    $('form#email-signup').submit(function(e) {
        e.preventDefault();
        $(this).hide();
        $('.signup-success').show();
    });

    $('#addressEntry').keypress(function(e) {
        if (e.which == 13) {
            e.preventDefault();
            $(this).parent().find('a').click();
        }
    });


    $('input[name=deliveryaddress]').on('change', function() {
        $('.address-picker').toggle();
    });

    $('.editAddress').on('click', function() {
        $('.address-picker').toggle();
        $("#newaddress").prop('checked', true);
    });

    $('.o-login__email-submit').on('click', function(e) {
        e.preventDefault();
        $('.o-login__email').hide();
        $('.o-login__password').show();
    });

    $('.o-login__password-forgotten').on('click', function(e) {
        e.preventDefault();
        $('.o-login__password').hide();
        $('.o-login__forgotten-password').show();
    });

    $('form[name=searchProducts]').submit(function(e) {
        e.preventDefault();
        // console.log($('input[name=searchTermMobile]').val());
        // console.log($('input[name=searchTerm]').val());
        if ($('input[name=searchTerm]').val() == 'dresses' || $('input[name=searchTermMobile]').val() == 'dresses') {
            window.location.href = './search-results.html';
        } else {
            window.location.href = './no-results.html';
        }
    });

    $('form#createAccountForm').submit(function(e) {
        e.preventDefault();
        // console.log($('input[name=searchTermMobile]').val());
        // console.log($('input[name=searchTerm]').val());
        $('.create-account-container').hide();
        $('.account-created-container').show();
        window.onbeforeunload = function() {
            // blank function do nothing
        }
    });





    $('body').on('click', '.js-clear__filters', function() {
        $('.o-filters__inner').find('input[type=checkbox]:checked').removeAttr('checked');
        $('.o-filters__inner').find('input[type=radio]:checked').removeAttr('checked');
    });

    // ==========================


    $('#dev-debug').on('click', function() {
        $(this).parent('li').toggleClass('active');
        $('html').toggleClass('dev-debug');
    });
    $('#grid-debug').on('click', function() {
        $(this).parent('li').toggleClass('active');
        $('html').toggleClass('grid-debug');
    });
    $('#nudge-debug').on('click', function() {
        $(this).parent('li').toggleClass('active');
        $('html').toggleClass('nudge-debug');
    });


    // ==========================

    $('.js-add-item').on('click', function() {
        var valueBox = $(this).parent().find('span'),
            hiddenInput = $(this).parent().find('input'),
            value = parseInt(valueBox.html(), 10),
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
            value = parseInt(valueBox.html(), 10),
            minValue = 1,
            newValue = value - 1;

        if (newValue >= minValue) {
            valueBox.html(newValue);
            hiddenInput.val(newValue);
        }
    });

    // ==========================
    // Postcode Anywhere
    // ==========================
    $("#pa-postcode").keyup(function() {
        $("#pa-postcode").val($(this).val());
    });

    $('#pa-address-lookup').on('click', function(e) {
        e.preventDefault();
        var postcodeValue = $("#pa-postcode").val();
        lookupPostcode(postcodeValue);
    });



    // ==========================
    // Postcode Anywhere End
    // ==========================


    // ==========================

    $('.filter--colours li').click(function(e) {
        $(this).toggleClass('active');
        $(this).siblings().removeClass('active');
    });


    // ==========================

    (function() {
        // investigate adding star markup here?

        var ratingsHolders = $.find("[data-rating]");
        var rated = 0;

        if (ratingsHolders.length) {
            $.each(ratingsHolders, function(i) {
                if ($(this).children('.icon').length === 5) {
                    rated = $(this).data('rating');
                    $(this).children('.icon').slice(0, rated).addClass('active');
                }
            });
        }

    })();









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
