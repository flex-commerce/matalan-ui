 'use strict';


 module.exports = function(min, max, block) {

   var n = Math.floor(Math.random() * (max - min + 1)) + min;

   var accum = '';
   for (var i = 0; i < n; ++i)
     accum += block.fn(i + 1);

   return i, accum;

 };



/*
Usage
  {{timesrand x y}}
  x : lower limit
  y : upper limit
 */