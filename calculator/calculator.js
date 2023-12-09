window.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('calc-form');
  if (form) {
    setupIntialValues();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +document.getElementById('loan-amount').value,
    years: +document.getElementById('loan-years').value,
    rate: +document.getElementById('loan-rate').value,
  };
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let values = {
    amount: 10000,
    years: 8,
    rate: 5.8,
  };
  let loanAmount = document.getElementById('loan-amount');
  loanAmount.value = values.amount;
  let loanYear = document.getElementById('loan-years');
  loanYear.value = values.years;
  let loanRate = document.getElementById('loan-rate');
  loanRate.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let currebtValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currebtValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
//monthly pay = P*i / 1-(1+i)-n
//- P = Amount of principle
//i = periodic interest rate (in our case yearly rate ÷ 12)
// n = total number of payments (years × 12)
function calculateMonthlyPayment(values) {
  let monthlyRate = values.rate / 100 / 12;
  //console.log(monthlyRate);
  let n = values.years * 12;
  //console.log(n);
  //console.log(monthlyRate * values.amount);
  //console.log(1 - Math.pow(1 + monthlyRate, -n));
  return (
    (monthlyRate * values.amount) /
    (1 - Math.pow(1 + monthlyRate, -n))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let monthlyPayment = document.getElementById('monthly-payment');
  monthlyPayment.innerText = monthly;
}
