describe('Servers test (with setup and tear-down)', function () {
    beforeEach(function () {
        // initialization logic
        serverNameInput.value = 'Alice';
    });

    it('should add a new server to allServers on submitServerInfo()', function () {
        submitServerInfo();
        expect(Object.keys(allServers).length).toEqual(1);
        expect(allServers['server' + serverId].serverName).toEqual('Alice');
    });

    it('should give Alice $5', function () {
        submitServerInfo();
        billAmtInput.value = '10';
        tipAmtInput.value = '5';
        submitPaymentInfo();
        updateServerTable();
        let newTr = document.querySelectorAll('#server1 td');
        expect(newTr[0].innerText).toEqual('Alice');
        expect(newTr[1].innerText).toEqual('$5.00');
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
