var Calculator = (function () {
  var add = function (numbers) {
    var total = 0;
    if (numbers) {
      var numbersArray = numbers.split(/[\n,]/);
      for (var i = 0; i < numbersArray.length; i++) {
        total += parseInt(numbersArray[i]);
      }
    }
    return total;
  };

  return {
    add: add
  };
})();
