module.exports = 
{
  searchAction,
  taskesAction,
  projectsAction,
  mettingsAction,
  documentsAction,
  settingsAction
};

/**
 * @description click on the search buttom
 */
function searchAction(){
    cy.get(':nth-child(1) > .menu-item').click()
}

/**
 * @description click on the tasks buttom
 */
function taskesAction(){
    cy.get(':nth-child(2) > .menu-item').click()
}

/**
 * @description click on the projects buttom
 */
function projectsAction(){
    cy.get(':nth-child(3) > .menu-item').click()
}

/**
 * @description click on mettings buttom
 */
function mettingsAction(){
    cy.get(':nth-child(4) > .menu-item').click()
}

/**
 * @description click on documents buttom
 */
function documentsAction(){
    cy.get(':nth-child(5) > .menu-item').click()
}

/**
 * @description click on settings buttom
 */
function settingsAction(){
    cy.get(':nth-child(6) > .menu-item').click()
}