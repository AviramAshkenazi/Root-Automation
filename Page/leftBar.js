module.exports = 
{
  searchAction,
  taskesAction,
  projectsAction,
  mettingsAction,
  documentsAction,
  settingsAction
};

function searchAction(){
    cy.get(':nth-child(1) > .menu-item').click()
}

function taskesAction(){
    cy.get(':nth-child(2) > .menu-item').click()
}

function projectsAction(){
    cy.get(':nth-child(3) > .menu-item').click()
}

function mettingsAction(){
    cy.get(':nth-child(4) > .menu-item').click()
}

function documentsAction(){
    cy.get(':nth-child(5) > .menu-item').click()
}

function settingsAction(){
    cy.get(':nth-child(6) > .menu-item').click()
}