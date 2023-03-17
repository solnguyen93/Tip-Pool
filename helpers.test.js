describe('Servers test (with setup and tear-down)', function () {
    beforeEach(function () {
        // initialization logic
        serverNameInput.value = 'Alice';
    });

    it('calculation for tip percent', function () {
        expect(calculateTipPercent('100', '5')).toEqual(5);
    });

    // it('should delete server from allServers', function () {
    //     serverNameInput.value = 'Tim';
    //     submitServerInfo();
    // });

    // it('btn', function () {
    //     addDeleteBtn(newTr, 'X');
    // });

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
