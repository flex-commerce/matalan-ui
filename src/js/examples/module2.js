var myPrivateNum, myPrivateMethod;

// A private counter variable
myPrivateNum = 0;

// A private function which logs any arguments
myPrivateMethod = function(foo) {
  console.log('myPrivateMethod says ', foo);
};


// module exporting a function
module.exports = function() {
  return {

    // A public variable
    myPublicVar: "foo",

    // A public function utilizing private sources
    myPublicFunction: function(bar) {

      // Increment our private counter
      myPrivateNum++;
      console.log('myPrivateNum is ', myPrivateNum);

      // Call our private method using bar
      myPrivateMethod(bar);

    }
  };
};


// usage
// =====
//
// module2().myPublicVar;
// module2().myPublicFunction('bar');