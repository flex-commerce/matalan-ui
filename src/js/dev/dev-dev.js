
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