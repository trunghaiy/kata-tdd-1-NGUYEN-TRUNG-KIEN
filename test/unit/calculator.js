describe('Calculator object', function () {
  var number = "1,2,3";

  it('should return zero when numbers is empty', function () {
    expect(Calculator.add('')).toEqual(0);
  });

  it('should return number itself when receive one number', function () {
    expect(Calculator.add('1')).toEqual(1);
  });

  it('should return the total of numbers when receive two numbers', function() {
    expect(Calculator.add('1,2')).toEqual(3);
  });
});
