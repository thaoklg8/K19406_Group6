const { I } = inject()
const createNewCompanyFunction = require('../page/createNewCompany/index.js')
const createNewCompanyLocator = require('../page/createNewCompany/locator.js')
const Myfunctions = require('../page/common/functions');
const MyVariable = require('../page/common/variable.js');

Given('I create a new company', () => {
    createNewCompanyFunction.createNewCompany(MyVariable.website, MyVariable.companyName, createNewCompanyLocator.optionsRadio + '[' + Myfunctions.randomNumber(1, 6) + ']')
});