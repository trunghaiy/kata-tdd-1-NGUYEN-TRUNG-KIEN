var Calculator = (function () {
  var add = function (numbers) {
    var total = 0,
      delimiter = ',',
      delimiterArray = [],
      pattern = '',
      numbersArray = [];

    if (numbers) {
      if(delimiterArray = numbers.match(/\/\/(.)*\n/)) {
        delimiter = delimiterArray[1];
        numbers = numbers.split('\n')[1];
        pattern = '[' + delimiter + ']';
      }
      else {
        pattern = '[\n,]';
      }

      pattern = new RegExp(pattern);
      numbersArray = numbers.split(pattern);
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
