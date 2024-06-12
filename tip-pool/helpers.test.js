describe('servers should help with tipAmt', function(){
    beforeEach(function (){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
        submitPaymentInfo();
    });

    it ('should sum tip and the total amount', () => {
        expect(sumPaymentTotal('tipAmt')).toEqual(20);

        billAmtInput.value = 150;
        tipAmtInput.value = 30;

        submitPaymentInfo();

        expect(submitPaymentInfo('tipAmt')).toEqual(50);

    })

    it ('should sum total tip precent on sum total amount', function(){
        expect(submitPaymentInfo('tipPrecent')).toEqual(20);

        billAmtInput.value = 120;
        tipAmtInput.value = 20;

        expect(sumPaymentTotal('tipPrecent')).toEqual(40);
    })
})