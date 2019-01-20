module.exports = 
{
    notifications,
    general,
    closeProfilePage,
    name,
    emailAddress,
    chanagePassword,
    replaceProfilePicture,
    resetProfilePicture,
    weekleyEmailMyTask,
    weekleyEmailGivenTask,
    dailyEmailMyTask
};

/**
 *@description returns notifications from profile page
 */
function notifications(){
   return cy.get('.tabs > ul > :nth-child(2) > .ng-binding')
}

/**
 * @description returns general from profile page
*/
function general(){
    return cy.get('.tabs > ul > :nth-child(1) > .ng-binding')
}

/**
 * @description click on the close buttom in the profile page
 */
function closeProfilePage(){
    return cy.get('.closeBtn').click();
}

/**
 * @description return on the chanage name input
 */
function name(){
    return cy.get('#name')
}

/**
 * @description return on chanage email address input
 */
function emailAddress(){
    return cy.get('#email')
}

/**
 * @description return the chanage password buttom
 */
function chanagePassword(){
    return cy.get('.panel-title > .ng-binding')
}

/**
 * @description return the replace profile picture buttom
 */
function replaceProfilePicture(){
    return cy.get('.actions > .replace')
}

/**
 * @description return the reset profile picture buttom
 */
function resetProfilePicture(){
    return cy.get('.actions > .reset')
}

/**
 * @description return "I Want To Get Mail Every Week About My Tasks" input 
 */
function weekleyEmailMyTask(){
    return cy.get(':nth-child(2) > .ui-select-container > .ui-select-match > .btn-default')
}

/**
 * @description return "I Want To Get Mail Every Week About Given Tasks" input
 */
function weekleyEmailGivenTask(){
    return cy.get(':nth-child(3) > .ui-select-container > .ui-select-match > .btn-default')
}

/**
 * @description return "I Want To Get Mail Every Day About My Tasks" input
 */
function dailyEmailMyTask(){
    return cy.get(':nth-child(4) > .ui-select-container > .ui-select-match > .btn-default')
}