
it('should calculate the monthly rate correctly', function () {
  const values = {
    amount: 1000,
    years: 5,
    rate: 12,
  };
  expect(calculateMonthlyPayment(values)).toEqual('22.24');
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 1034,
    years: 5,
    rate: 12,
  }
  expect(calculateMonthlyPayment(values)).toEqual("23.00")
});


