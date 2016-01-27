 'use strict';


 module.exports = function(value1, value2) {
    var numberValue1 = parseInt(value1.substr(1));
    var numberValue2 = parseInt(value2.substr(1));

    var difference = (numberValue1 - numberValue2);
    return '£' + difference.toFixed(2);

 };