module.exports = 
{
    notifications,
    general,
    close,
    name,
    emailAddress,
    chanagePassword,
    replaceProfilePicture,
    resetProfilePicture,
    weekleyEmailMyTask,
    weekleyEmailGivenTask,
    dailyEmailMyTask
};

function notifications(){
    cy.get('.tabs > ul > :nth-child(2) > .ng-binding')
}
function general(){
    cy.get('.tabs > ul > :nth-child(1) > .ng-binding')
}

function close(){
    cy.get('.closeBtn')
}

function name(){
    cy.get('#name')
}

function emailAddress(){
    cy.get('#email')
}

function chanagePassword(){
    cy.get('.panel-title > .ng-binding')
}

function replaceProfilePicture(){
    cy.get('.actions > .replace')
}

function resetProfilePicture(){
    cy.get('.actions > .reset')
}

function weekleyEmailMyTask(){
    cy.get(':nth-child(2) > .ui-select-container > .ui-select-match > .btn-default')
}

function weekleyEmailGivenTask(){
    cy.get(':nth-child(3) > .ui-select-container > .ui-select-match > .btn-default')
}

function dailyEmailMyTask(){
    cy.get(':nth-child(4) > .ui-select-container > .ui-select-match > .btn-default')
}