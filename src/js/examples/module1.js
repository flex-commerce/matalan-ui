var counter = 0;

function _multiplyCounter(x) {
  counter = counter * x;
  return counter;
};

var _bar = function(){
  return counter;
}


// module exporting an object
module.exports = {

  incrementCounter: function() {
    counter++;
    return counter;
  },

  resetCounter: function() {
    console.log("counter value prior to reset: " + counter);
    counter = 0;
    return counter;
  },

  multiply: function() {
    _multiplyCounter(5);
  },

  show: _bar

};


// usage
// =====
//
// module1.incrementCounter());
// module1.foo());