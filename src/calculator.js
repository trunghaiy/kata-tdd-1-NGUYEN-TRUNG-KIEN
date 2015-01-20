var Calculator = (function () {
  var add = function (numbers) {
    var total = 0,
      delimiter = ',',
      numbersArray = [],
      negativeArray = [];

    if (numbers) {
      if (numbers.indexOf('//') === 0) {
        delimiter = numbers.substr(2, 1);
        numbers = numbers.split('\n')[1];
      }
      else {
        numbers = numbers.replace('\n', ',');
      }

      numbersArray = numbers.split(delimiter);
      for (var i = 0; i < numbersArray.length; i++) {
        if (parseInt(numbersArray[i]) < 0) {
          negativeArray.push(numbersArray[i]);
        }
        if (numbersArray[i] > 1000) {
          continue;
        }
        total += parseInt(numbersArray[i]);
      }

      if (negativeArray.length > 0) {
        throw 'Negatives not allowed: ' + negativeArray.join(',');
      }
    }
    return total;
  };

  return {
    add: add
  };
})();
