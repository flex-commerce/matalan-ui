// ===========================
// Range Slider init
// ===========================
(function() {
  if ($("#filters--range").length) {
    var noUiSlider = require("../vendors/nouislider");

    var slider = document.getElementById('filters--range');

    var sliderDisplay = [
      document.getElementById('slider-display-lower'),
      document.getElementById('slider-display-upper')
    ];

    var sliderValues = [
      document.getElementById('slider-value-lower'),
      document.getElementById('slider-value-upper')
    ];

    var actualSliderValues = [
      document.getElementById('slider-value-lower').value,
      document.getElementById('slider-value-upper').value
    ];

    noUiSlider.create(slider, {
      start: actualSliderValues,
      connect: true,
      range: {
        'min': 0,
        'max': 100
      }
    });

    // value display - leave this one 'bounced' for speedy user feedback
    slider.noUiSlider.on('update', function(values, handle) {
      sliderDisplay[handle].innerHTML = '&pound;' + Math.round(values[handle]).toFixed(0);
    });

    // debounced update of underlying inputs
    slider.noUiSlider.on('update', _.debounce(function(values, handle) {
      sliderValues[handle].value = Math.round(values[handle]).toFixed(0);
    }, 500));

  }
})();
// ===========================
// Range Slider End
// ===========================