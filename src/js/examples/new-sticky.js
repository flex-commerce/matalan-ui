// var stickyHeaders = (function() {


module.exports = function(el) {

  var $window = $(window);
  var $el = $(el);

  var load = function() {

    if (typeof el === "object" && el instanceof jQuery && el.length > 0) {

      // $el = el.each(function() {
    var $thisSticky = $el.wrap('<div class="followWrap u-mar-b-medium" />');
    $thisSticky
      .data('originalPosition', $thisSticky.offset().top)
      .data('originalHeight', $thisSticky.outerHeight())
      .parent().height($thisSticky.outerHeight());
      // });

      $window.on("scroll", function() {
        _whenScrolling();
      });

    }

  };


  var _whenScrolling = function() {

    $el.each(function(i) {
      var $thisSticky = $(this),
      $stickyPosition = $thisSticky.data('originalPosition');

      if ($stickyPosition <= $window.scrollTop()) {
        var $nextSticky = $el.eq(i + 1),
        $nextStickyPosition = $nextSticky.data('originalPosition') - $thisSticky.data('originalHeight');
        $thisSticky.addClass("fixed");
        if ($nextSticky.length > 0 && $thisSticky.offset().top >= $nextStickyPosition) {
          $thisSticky.addClass("absolute").css("top", $nextStickyPosition);
        }

      } else {
        var $prevSticky = $el.eq(i - 1);
        $thisSticky.removeClass("fixed");
        if ($prevSticky.length > 0 && $window.scrollTop() <= $thisSticky.data('originalPosition') - $thisSticky.data('originalHeight')) {
          $prevSticky.removeClass("absolute").removeAttr("style");
        }
      }
    });
  };

  return {
    load: load
  };

}

// })();


