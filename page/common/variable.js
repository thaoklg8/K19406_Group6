const Myfunctions = require('./functions')
module.exports = {
    email: 'thuthaovu2808@gmail.com',
    password: 'Aa@12345678',
    companyName: 'K19406_Group6 ' + Myfunctions.randomNumber(1, 100),
    website: 'https://' + Myfunctions.randomString(3) + '.com.vn'
}