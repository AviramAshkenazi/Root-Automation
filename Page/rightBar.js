const methodsProfilePage = require('../Elements/profilePage.js')

module.exports = 
{
  plusButton,
  createTask,
  createProject,
  createDiscussion,
  createDocument,
  closeProfilePage,
  profilePage,
  profileButton,
  createWebhook,
  Logout,
  Inbox
};

function clickButton(cy,selector){
    return cy.get(selector).should('be.visible').click();
}

/**
 * @description click on the plus butoom
 */
function plusButton(){
    // cy.wait(10000);
    cy.get('div.add-menu.dropdown').should('be.visible').click()
}

/**
 * @description create task from the plus butoom
 */
function createTask(){
    cy.get('.add-menu > .dropdown-menu > :nth-child(1) > a').should('be.visible').click()
}

/**
 * @description create project from the plus butoom
 */
function createProject(){
    cy.get('.add-menu > .dropdown-menu > :nth-child(2) > a').should('be.visible').click()
}

/**
 * @description create discussion from the plus buttom
 */
function createDiscussion(){
    cy.get('.add-menu > .dropdown-menu > :nth-child(3) > a').should('be.visible').click()
}

/**
 * @description create document from the plus buttom
 */
function createDocument(){
    cy.get('.add-menu > .dropdown-menu > :nth-child(4) > a').should('be.visible').click()
}

/**
 * @description click on the profile butoom
 */
function profileButton(){
    cy.get('.dropdown-toggle > .avatar').should('be.visible').click({force:true})
}

/**
 * @description click on the profile page
 */
function profilePage(){
    cy.get('.user-menu > .dropdown-menu > :nth-child(1) > .ng-binding').should('be.visible').click()
}

//No nedded 
function createWebhook(){
    cy.get('.user-menu > .dropdown-menu > :nth-child(2) > .ng-binding').should('be.visible').click()
}

/**
 * @description click on logout buttom
 */
function Logout(){
    cy.get('.user-menu > .dropdown-menu > :nth-child(3) > .ng-binding').should('be.visible').click()
}

/**
 * @description click on the inbox buttom
 */
function Inbox(){
    cy.get('.user-menu > .dropdown-menu > :nth-child(4) > .ng-binding').should('be.visible').click()
}

/**
 * @description click on the close buttom on the profile page
 */
function closeProfilePage(){
    methodsProfilePage.closeProfilePage();
}