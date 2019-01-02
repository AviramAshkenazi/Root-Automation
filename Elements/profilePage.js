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
    cy.get('.tabs > ul > :nth-child(2) > .ng-binding')
}

/**
 * @description returns general from profile page
*/
function general(){
    cy.get('.tabs > ul > :nth-child(1) > .ng-binding')
}

/**
 * @description click on the close buttom in the profile page
 */
function closeProfilePage(){
    cy.get('.closeBtn').click();
}

/**
 * @description return on the chanage name input
 */
function name(){
    cy.get('#name')
}

/**
 * @description return on chanage email address input
 */
function emailAddress(){
    cy.get('#email')
}

/**
 * @description return the chanage password buttom
 */
function chanagePassword(){
    cy.get('.panel-title > .ng-binding')
}

/**
 * @description return the replace profile picture buttom
 */
function replaceProfilePicture(){
    cy.get('.actions > .replace')
}

/**
 * @description return the reset profile picture buttom
 */
function resetProfilePicture(){
    cy.get('.actions > .reset')
}

/**
 * @description return "I Want To Get Mail Every Week About My Tasks" input 
 */
function weekleyEmailMyTask(){
    cy.get(':nth-child(2) > .ui-select-container > .ui-select-match > .btn-default')
}

/**
 * @description return "I Want To Get Mail Every Week About Given Tasks" input
 */
function weekleyEmailGivenTask(){
    cy.get(':nth-child(3) > .ui-select-container > .ui-select-match > .btn-default')
}

/**
 * @description return "I Want To Get Mail Every Day About My Tasks" input
 */
function dailyEmailMyTask(){
    cy.get(':nth-child(4) > .ui-select-container > .ui-select-match > .btn-default')
}