it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 10000,
    years: 8,
    rate: 5.8,
  };
  expect(calculateMonthlyPayment(values)).toEqual('130.44');
});

it('should return a result with 2 decimal places', function () {
  // ..
  const values = {
    amount: 14142.2,
    years: 10,
    rate: 5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('150.00');
});

/// etc
