const { I } = inject()
const settingPageFunction = require('../page/settingPage/index');
const Myfunctions = require('../page/common/functions')
const MyVariable = require('../page/common/variable')

Given('I edit company to {string}', (fullname) => {
    settingPageFunction.editCompany(fullname)
});
Given('I add new member {string}', (member) => {
    settingPageFunction.addNewMember(member)
});
Given('I delete member {string}', (member) => {
    settingPageFunction.deleteMember(member)
});
Given('I delete company', () => {
    settingPageFunction.deleteCompany(MyVariable.companyName)
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