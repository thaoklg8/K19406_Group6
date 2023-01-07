const { I } = inject()
const settingPageFunction = require('../page/settingPage/index');
Given('I go to create new company page', () => {
    settingPageFunction.viewCreationPage()
});