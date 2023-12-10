describe('helper test (with setup and tear-down)', function () {
  beforeEach(function () {
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
    submitPaymentInfo();
  });

  it('should sum total tip on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipAmt')).toEqual(15);

    billAmtInput.value = 200;
    tipAmtInput.value = 30;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipAmt')).toEqual(45);
  });
  it('should sum total bill on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('billAmt')).toEqual(100);

    billAmtInput.value = 200;
    tipAmtInput.value = 30;

    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(300);
  });
  it('should sum total tip percentage on sumPaymentTotal()', function () {
    expect(sumPaymentTotal('tipPercent')).toEqual(15);

    billAmtInput.value = 200;
    tipAmtInput.value = 30;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(30);
  });

  afterEach(function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    allPayments = {};
    paymentId = 0;
  });
});
