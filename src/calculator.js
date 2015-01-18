var Calculator = (function () {
  var add = function (numbers) {
    var total = 0;
    if (numbers) {
      var numbersArray = numbers.split(',');
      if (numbersArray.length > 2) {
        return;
      }
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
