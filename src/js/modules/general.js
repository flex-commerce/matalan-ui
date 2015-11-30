(function ($) {
  'use strict';
  $('body').on('click', '.close', function() {
    var parentId = $(this).data('close');
    $('#' + parentId).hide();
  });

})(jQuery);