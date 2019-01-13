const methodsUserProfile = require('../Elements/profilePage')

module.exports = {
    chanageAccountName,
    chanageAccountEmailAddress
}

/**
 * @description chanage the name of the account
 */
function chanageAccountName(){
    let chanageName = methodsUserProfile.name();
    chanageName.should('be.visible').clear();
    chanageName.should('be.visible').type("QA");
    methodsUserProfile.should('be.visible').closeProfilePage();
    return ;
}

/**
 * @description chanage the email address 
 */
function chanageAccountEmailAddress(){
    let chanage = methodsUserProfile.emailAddress();
    chanage.should('be.visible').clear();
    chanage.should('be.visible').type("QA@email.com");
    methodsUserProfile.should('be.visible').closeProfilePage();
}

/**
 *@description need to wait until upload cypress option
 */
function chanageAccountProfilePicture(){
    methodsUserProfile.replaceProfilePicture.should('be.visible').click()

}