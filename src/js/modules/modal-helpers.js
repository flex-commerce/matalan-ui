// $('body').on('shown.bs.modal', function(){
//     // modalScreenLock();
// })

// function modalScreenLock() {
//   $(document).ready(function () {
//       var offsetY = window.pageYOffset,
//           $body = $('body'),
//           $win = $(window),
//           $close = $('.close'),
//           $open = $('.open'),
//           $holder = $('#popupholder'),
//           $stuff = $('#stuff');
//       // Close with 'esc' key
//       $(document).keyup(function (e) {
//           if (e.keyCode == 27) $close.trigger('click');
//       });
//       $open.click(function () {
//           offsetY = window.pageYOffset;
//           // Block scrolling
//           $body.css({
//               'position': 'fixed',
//                   'color': '#FFFF00',
//                   'backgroundColor': '#00D',
//                   'top': -offsetY + 'px'
//           });
//           // Show popup
//           $holder.css('display', 'block');
//       });

//       $close.click(function () {
//           // Allow scrolling again
//           $body.css({
//               'position': 'static',
//                   'color': '',
//                   'backgroundColor': ''
//           });
//           /**
//            * Remove the following scrollTop()'s if you want.
//            * just a UI tweak that the user would expect.
//            **/
//           // Make the page stay at the position it was at before the overlay
//           $win.scrollTop(offsetY);
//           // Reset the overlay scroll position to the top
//           $stuff.scrollTop(0);
//           // Hide popup
//           $holder.css('display', 'none');
//       });
//   });

// }



