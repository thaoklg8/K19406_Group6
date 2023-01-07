const { I } = inject()
const timeout = require('../common/timeout');
const createNewCompanyLocator = require('./locator')
const settingPageLocator = require('../settingPage/locator')
const connectionPageLocator = require('../connectionPage/locator')
const MyVariable = require('../common/variable');
const customMethod = require('../../utils/customMethod');

module.exports = {
    createNewCompany(website, companyname, option) {
        customMethod.fieldValue(createNewCompanyLocator.websiteField, website);
        customMethod.fieldValue(createNewCompanyLocator.companyNameField, companyname);
        customMethod.clickElement(option);
        customMethod.clickElement(createNewCompanyLocator.createCompanyButton)
        I.waitForElement(settingPageLocator.profileNameLabel, timeout.waitForElement)
        I.seeTextEquals(companyname, settingPageLocator.profileNameLabel)
        customMethod.clickElement(connectionPageLocator.emailLabel)
        I.waitForElement(connectionPageLocator.emailVerifyText, timeout.waitForElement)
        I.seeTextEquals(MyVariable.email, connectionPageLocator.emailVerifyText)
    },
}