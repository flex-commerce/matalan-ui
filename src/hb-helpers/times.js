 'use strict';


 module.exports = function(n, block) {

   var accum = '';
   for (var i = 0; i < n; ++i)
     accum += block.fn(i + 1);

   return i, accum;

 };
