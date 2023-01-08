const { I } = inject()
const settingPageFunction = require('../page/settingPage/index');
const Myfunctions = require('../page/common/functions')
const MyVariable = require('../page/common/variable')

Given('I edit company to {string}', (fullname) => {
    settingPageFunction.editCompany(fullname)
});
Given('I create API key', () => {
    settingPageFunction.createAPI()
});
Given('I edit API key', () => {
    settingPageFunction.editAPI()
});
Given('I delete API key', () => {
    settingPageFunction.deleteAPI()
});