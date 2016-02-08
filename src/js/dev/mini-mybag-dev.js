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