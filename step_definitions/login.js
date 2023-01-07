const { I } = inject()
const loginFunction = require('../page/login/index.js')
const loginLocator = require('../page/login/locator.js')
const MyVariable = require('../page/common/variable')
Given('I login to Casso page', () => {
  loginFunction.login(loginLocator.urlLoginPage, MyVariable.email, MyVariable.password)
});