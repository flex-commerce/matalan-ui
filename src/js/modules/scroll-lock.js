// // prevent scroll in container from propagating out to the doc body when we scroll too far
// // to be checked for x browser and toggled for mob if mouse events trigger there

$(document).on('DOMMouseScroll mousewheel', '.js-scroll-hold', function(ev) {
  console.log('scroll blocked');

  var $this        = $(this),
      scrollTop    = this.scrollTop,
      scrollHeight = this.scrollHeight,
      height       = $this.height(),
      delta        = (ev.type == 'DOMMouseScroll' ? ev.originalEvent.detail * -40 : ev.originalEvent.wheelDelta),
      up           = delta > 0,
      activeBreak = $(this).data('scrollResponsive');

  var prevent = function() {
    ev.stopPropagation();
    ev.preventDefault();
    ev.returnValue = false;
    return false;
  };

  if (
    (window.matchMedia("(min-width: 0)").matches && activeBreak == 'sm+') ||
    (window.matchMedia("(max-width: 720px)").matches && activeBreak == 'sm') ||
    (window.matchMedia("(max-width: 1024px)").matches && activeBreak == 'sm-md') ||
    (window.matchMedia("(min-width: 720px) and (max-width: 1024px)").matches && activeBreak == 'md') ||
    (window.matchMedia("(min-width: 720px)").matches && activeBreak == 'md+') ||
    (window.matchMedia("(min-width: 1025px)").matches && activeBreak == 'lg')
  ) {
    // adjust delta for edge case scrolls - default is * -1
    if (!up && (delta * -1) > scrollHeight - height - scrollTop) {
      // Scrolling down, but this will take us past the bottom.
      $this.scrollTop(scrollHeight);
      return prevent();

    } else if (up && delta > scrollTop) {
      // Scrolling up, but this will take us past the top.
      $this.scrollTop(0);
      return prevent();
    }
  }
});
