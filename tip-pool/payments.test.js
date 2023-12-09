describe('payment test (with setup and tear-down)', function () {
  beforeEach(function () {
    // initialization logic
    billAmtInput.value = 100;
    tipAmtInput.value = 15;
  });

  it('should add a new Payment to allPayment on submitPaymentInfo()', function () {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('15');
    expect(allPayments['payment1'].tipPercent).toEqual(15);
  });
  // empty payment not allow
  it('should not  add a new payment with empty value on submitPaymentInfo()', function () {
    billAmtInput.value = '';
    submitPaymentInfo();
    expect(Object.keys(allPayments).length).toEqual(1);
  });

  it('should create newPayment on createCurPayment()', function () {
    let expectedPayment = {
      billAmt: '100',
      tipAmt: '15',
      tipPercent: 15,
    };
    expect(createCurPayment()).toEqual(expectedPayment);
  });
  // empty payment not allow
  it('should not  create a new payment with empty value createCurPayment()', function () {
    billAmtInput.value = '';
    tipAmtInput.value = '';

    expect(createCurPayment()).toEqual(undefined);
  });

  it('should update paymentable after appendPaymentTable()', function () {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;
    appendPaymentTable(curPayment);
    let tdList = document.querySelectorAll('#paymentTable tbody tr td');

    expect(tdList.length).toEqual(3);
    expect(tdList[0].innerText).toEqual('$100');
    expect(tdList[1].innerText).toEqual('$15');
    expect(tdList[2].innerText).toEqual('15%');
  });
  //
  //Q -> if i use after each with line 17 .toequal(1) faile my test but if i do not use aftereach line 17 .toequal(0)throw an error
  afterEach(function () {
    // teardown logic
    billAmtInput.value = '';
    tipAmtInput.value = '';
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
  });
});
