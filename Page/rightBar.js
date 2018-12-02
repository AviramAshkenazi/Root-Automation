const methodsProfilePage = require('../Elements/profilePage.js')

module.exports = 
{
  plusButton,
  createTask,
  createProject,
  createDiscussion,
  createDocument,
  profilePage,
  closeProfilePage,
  profileButton,
  createWebhook,
  Logout,
  Inbox
};

function plusButton(){
    cy.get('.dropdown-toggle > .tooltips > tip-cont > .fa').click()
}

function createTask(){
    cy.get('.add-menu > .dropdown-menu > :nth-child(1) > a').click()
}

function createProject(){
    cy.get('.add-menu > .dropdown-menu > :nth-child(2) > a').click()
}

function createDiscussion(){
    cy.get('.add-menu > .dropdown-menu > :nth-child(3) > a').click()
}

function createDocument(){
    cy.get('.add-menu > .dropdown-menu > :nth-child(4) > a').click()
}

function profileButton(){
    cy.get('.dropdown-toggle > .avatar').click()
}

function profilePage(){
    cy.get('.user-menu > .dropdown-menu > :nth-child(1) > .ng-binding').click()
}

function closeProfilePage(){
    methodsProfilePage.close().click({force: true});
}

function createWebhook(){
    cy.get('.user-menu > .dropdown-menu > :nth-child(2) > .ng-binding').click()
}

function Logout(){
    cy.get('.user-menu > .dropdown-menu > :nth-child(3) > .ng-binding').click()
}

function Inbox(){
    cy.get('.user-menu > .dropdown-menu > :nth-child(4) > .ng-binding').click()
}
