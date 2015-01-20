var Calculator = (function () {
  var add = function (numbers) {
    var total = 0,
      delimiter = ',',
      delimiters,
      numbersArray = [],
      negativeArray = [];

    if (!numbers) {
      return total;
    }

    if (numbers.indexOf('//') === 0) {
      if(numbers.indexOf('[') == 2) {
        delimiters = numbers.split('\n')[0];
        delimiter = numbers.substring(3, delimiters.length - 1);
      }
      else {
        delimiter = numbers.substr(2, 1);
      }
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
    return total;
  };

  return {
    add: add
  };
})();
