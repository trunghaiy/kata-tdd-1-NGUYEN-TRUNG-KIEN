describe('Calculator object', function () {
  it('should return zero when numbers is empty', function () {
    expect(Calculator.add('')).toEqual(0);
  });

  it('should return number itself when receive one number', function () {
    expect(Calculator.add('1')).toEqual(1);
  });

  it('should return the total of numbers when receive two numbers', function () {
    expect(Calculator.add('1,2')).toEqual(1 + 2);
  });

  it('should return the total of unknow amount of numbers', function () {
    expect(Calculator.add('1,2,3,4,5')).toEqual(1 + 2 + 3 + 4 + 5);
  });

  it('should handle new lines between numbers', function () {
    expect(Calculator.add('1\n2,3')).toEqual(1 + 2 + 3);
  });

  it('should support different limiter', function () {
    expect(Calculator.add('//;\n1;2')).toEqual(1 + 2);
  });

  it('should throw an exception for one negative', function () {
    expect(function () {
      Calculator.add('-1, 1, 2');
    }).toThrow('Negatives not allowed: -1');
  });

  it('should throw an exception for negatives', function () {
    expect(function () {
      Calculator.add('-1, -2, 1, 2');
    }).toThrow('Negatives not allowed: -1, -2');
  });

  it('should ignore numbers bigger than 1000', function () {
    expect(Calculator.add('2, 1001')).toEqual(2);
  });
});
