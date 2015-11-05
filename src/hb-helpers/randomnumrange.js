 'use strict';


 module.exports = function(min, max, zeros) {

   function zeroPad(num, places) {
     var zero = places - num.toString().length + 1;
     return Array(+(zero > 0 && zero)).join("0") + num;
   }

   var n = Math.floor(Math.random() * (max - min + 1)) + min;

   return zeroPad(n, zeros);

 };


/*
Usage
  {{randomrange x y z}}
  x : lower limit
  y : upper limit
  z: leading zeros
 */