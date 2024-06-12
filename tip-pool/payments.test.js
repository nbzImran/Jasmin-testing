describe('server should test put the amounts', () =>{
    beforeEach(() =>{
        billAmtInput.value = 100;
        tipAmtInput.value = 10;
    });

it ('should submit all payment when submit btn is hit', () =>{
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('10');
});

it ('should not add anything after the submit hit', () =>{
    billAmtInput.value = '';
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
});

it('should payment append after hit submit', function (){
    let payment = createCurPayment();
    allPayments['payment1'] = payment;

    appendPaymentTable(payment);

    let TdList = document.querySelectorAll('#paymentTable tbody tr td');

    expect(TdList.length).toEqual(4);
    expect(TdList[0].innerText).toEqual('$100');
    expect(TdList[1].innerText).toEqual('$10');
    expect(TdList[2].innerText).toEqual('10%');
    expect(TdList[3].innerText).toEqual('X')
});

it ('should empty the input for next pay',function(){
    billAmtInput.value = '';
    tipAmtInput.value = '';
    let Payments = createCurPayment();

    expect(Payments).toEqual(undefined);
});


afterEach(function(){
    billAmtInput.value = '';
    tipAmtInput.value = '';
    paymentTbody.innerHTML = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    serverTbody.innerHTML = '';
    paymentId = 0;
    allPayments = {};
});

})