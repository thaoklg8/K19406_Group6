const { I } = inject()
const financePageLocator = require('../page/financePage/locator');
const financePageFunction = require('../page/financePage/index');
const Myfunctions = require('../page/common/functions')

Given('I search {string} {string} {string} in finance Book', (transactionID, description, value) => {
    financePageFunction.verifyResult(transactionID, description, value)
});


