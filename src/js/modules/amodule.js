// (function () {

//     var myRevealingModule = function () {

//             var _privateVar = "Ben Cherry",
//                 publicVar = "Hey there!";

//             function _privateFunction() {
//                 console.log( "Name:" + _privateVar );
//             }

//             function publicSetName( strName ) {
//                 _privateVar = strName;
//             }

//             function publicGetName() {
//                 privateFunction();
//             }


//             // Reveal public pointers to
//             // private functions and properties

//             return {
//                 setName: publicSetName,
//                 greeting: publicVar,
//                 getName: publicGetName
//             };

//         };


//     return myRevealingModule;

//     // myRevealingModule.setName( "Paul Kinlan" );

// })();
