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
});
