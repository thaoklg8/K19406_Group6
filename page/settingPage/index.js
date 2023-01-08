const { I } = inject()
const timeout = require('../common/timeout')
const settingPageLocator = require('./locator')
const customMethod = require("../../utils/customMethod")
const createNewCompanyLocator = require('../createNewCompany/locator')
const { createAPI } = require('../API')
const funct = require('../common/variable')

module.exports = {
    viewCreationPage() {
        customMethod.clickElement(settingPageLocator.profileNameLabel)
        customMethod.clickElement(settingPageLocator.changeCompanyButton)
        customMethod.clickElement(settingPageLocator.addNewButton)
        I.waitForElement(createNewCompanyLocator.titleText, timeout.waitForElement)
    },
    editCompany(fullname) {
        customMethod.clickElement(settingPageLocator.menuIcon)
        customMethod.clickElement(settingPageLocator.settingTab)
        I.waitForElement(settingPageLocator.profileTitle, timeout.waitForElement)
        customMethod.fieldValue(settingPageLocator.fullNamefield, fullname)
        I.pressKey('Tab')
        I.waitForElement(settingPageLocator.doneIcon, timeout.waitForElement)
        I.attachFile(settingPageLocator.uploadFileButton, '/data/image1.png')
        I.waitForVisible(settingPageLocator.imageCropper, timeout.waitForElement)
        customMethod.clickElement(settingPageLocator.saveImageButton)
        I.waitForVisible(settingPageLocator.profileImage, timeout.waitForElement)
    },
    createAPI() {
        customMethod.clickElement(settingPageLocator.settingTab)
        customMethod.clickElement(settingPageLocator.tabAPIkey)
        customMethod.clickElement(settingPageLocator.APIButton)
        customMethod.fieldValue(settingPageLocator.inputAPIName, funct.nameAPI)
        I.wait(1)
        customMethod.clickElement(settingPageLocator.createButton)
        customMethod.clickElement(settingPageLocator.xongButton)
        I.wait(2)
    },
    editAPI() {
        customMethod.clickElement(settingPageLocator.editButton)
        customMethod.fieldValue(settingPageLocator.inputAPIName, "EDIT TEST")
        I.wait(1)
        customMethod.clickElement(settingPageLocator.createButton)
        I.wait(2)
    },
    deleteAPI() {
        customMethod.clickElement(settingPageLocator.deleteButton)
        customMethod.clickElement(settingPageLocator.dongYButton)
        I.wait(2)
    }

}