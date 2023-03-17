describe('Servers test (with setup and tear-down)', function () {
    beforeEach(function () {
        // initialization logic
        serverNameInput.value = 'Alice';
    });

    it('should add bill amt, tip amt, tip percent', function () {
        submitServerInfo();
        billAmtInput.value = '10';
        tipAmtInput.value = '4';
        submitPaymentInfo();
        updateServerTable();
        let newTr = document.querySelectorAll('#payment1 td');
        expect(newTr[0].innerText).toEqual('$10');
        expect(newTr[1].innerText).toEqual('$4');
        expect(newTr[2].innerText).toEqual('40%');
    });

    it('should not ab able to submit with empty bill amt', function () {
        billAmtInput.value = '0';
        tipAmtInput.value = '10';
        submitPaymentInfo();
        expect(createCurPayment()).toEqual(undefined);
    });

    it('should add bill total, tip total, tip percent avg', function () {
        submitServerInfo();
        billAmtInput.value = '10';
        tipAmtInput.value = '4';
        submitPaymentInfo();
        billAmtInput.value = '100';
        tipAmtInput.value = '20';
        submitPaymentInfo();
        updateServerTable();
        let summaryTd = document.querySelectorAll('#summaryTable td');
        expect(summaryTd[0].innerText).toEqual('$110');
        expect(summaryTd[1].innerText).toEqual('$24');
        expect(summaryTd[2].innerText).toEqual('30%'); //20% & 40% so 30%
    });

    afterEach(function () {
        allServers = {};
        serverId = 0;
        serverTbody.innerHTML = '';
        serverNameInput.value = '';
        billAmtInput.value = '';
        tipAmtInput.value = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        paymentId = 0;
        paymentTbody.innerHTML = '';
    });
});
