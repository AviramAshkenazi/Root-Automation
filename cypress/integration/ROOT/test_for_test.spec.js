const methodsLoginPage = require('../../../Page/LoginPage.js')
const methodsleftBar = require('../../../Page/leftBar.js')
const methodsRightBar = require('../../../Page/rightBar.js')
const methodsUserProfile = require('../../../Elements/userPorfile.js')

describe("getUserProfile", ()=> {
    it("juda",() =>{
        console.log(methodsUserProfile.getUserProfile(cy).general)
    } ) 
})