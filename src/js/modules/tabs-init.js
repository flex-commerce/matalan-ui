// ===========================
// Tabs
// ===========================

require("./tabs");

// open first tab here, this is so we don't need to include 2x active classes on each usage

if ($('.c-tabs [role="tablist"]').length) {
  $.each($('.c-tabs [role="tablist"]'), function() {
    $(this).find('a:first').tab('show');
  });
}



// responsive tabs-to-accordion js

if ($('.c-tabs--responsive').length) {
  var activeTab = null;
  var elementContainer;
  var tabHeaders;
  var accHeaders;
  var tabIndex;


  $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

    elementContainer = $(this).closest('.c-tabs--responsive');
    tabHeaders = $(elementContainer).find('.c-tabs__header__item a');
    accHeaders = $(elementContainer).find('.c-tabs__header__item--accord a');
    activeTab = e.target;

    if ($.inArray(activeTab, tabHeaders) >= 0) {
      tabIndex = $.inArray(activeTab, tabHeaders);
      $(accHeaders).each(function(){
        $(this).parent().removeClass('accord--active');
      });
      $(accHeaders[tabIndex]).parent('li').addClass('accord--active');
    }

    if($(this).parent().hasClass('c-tabs__header__item--accord')) {
      $(accHeaders).each(function(){
        $(this).parent().removeClass('accord--active');
      });
      $(this).parent().addClass('accord--active');
      tabIndex = $.inArray(activeTab, accHeaders);
      $(tabHeaders[tabIndex]).tab('show');
    }

  })
}



// ===========================
// Tabs end
// ===========================
