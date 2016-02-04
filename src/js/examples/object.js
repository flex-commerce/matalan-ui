module.exports = function() {

  var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  function thisalert() {
    alert('im an alert');
  }

  return {
    name: function(number) {
      return names[number];
    },
    number: function(name) {
      return names.indexOf(name);
    },
    alert: thisalert
  };


};

// console.log(weekDay.name(weekDay.number("Saturday")));
