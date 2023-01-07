const { I } = inject()
const connectionPageLocator = require('../page/connectionPage/locator');
const connectionPageFunction = require('../page/connectionPage/index');
const Myfunctions = require('../page/common/functions')

Given('I add new bank {string} {string} {string}', (bankname, username, password) => {
    connectionPageFunction.addNewBank(bankname, username, password, connectionPageLocator.optionBankRadio + '[' + Myfunctions.randomNumber(1, 3) + ']')
});
Given('I update Bank information with {string} {string}', (name, newpass) => {
    connectionPageFunction.updateBankInfor(name, newpass)
});
Given('I delete card {string}', async (reminiscentname) => {
    await connectionPageFunction.deleleBankCard(reminiscentname, '123456789')
});


