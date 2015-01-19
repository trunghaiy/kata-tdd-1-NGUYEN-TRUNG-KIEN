var Calculator = (function () {
  var add = function (numbers) {
    var total = 0,
      delimiter = ',',
      pattern = '',
      delimiterArray = [],
      numbersArray = [],
      negativeArray = [];

    if (numbers) {
      if (delimiterArray = numbers.match(/\/\/\[([^\n]+)\]\n/)) {
        delimiter = delimiterArray[1];
        numbers = numbers.split('\n')[1];
        pattern = delimiter;
      }
      else {
        numbers = numbers.replace('\n', ',');
        pattern = ',';
      }

      numbersArray = numbers.split(pattern);
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
