const { I } = inject()
const timeout = require('../common/timeout')
const financePageLocator = require('./locator')
const customMethod = require("../../utils/customMethod")
const myFunction = require('../common/functions')

module.exports = {
    verifyResult(transactionID, description, value) {
        customMethod.clickElement(financePageLocator.financeTab)
        customMethod.clickElement(financePageLocator.financeDetailsTab)
        customMethod.clickElement(financePageLocator.allTransactionButton)
        customMethod.fieldValue(financePageLocator.searchField, description)
        I.waitForVisible(financePageLocator.result)
        I.wait(2)
        I.see(transactionID, financePageLocator.result)
        I.see(description, financePageLocator.result)
        I.see(value, financePageLocator.result)
    }
}   