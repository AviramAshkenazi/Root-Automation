var methodsLoginPage = require('../../../Page/LoginPage.js')

describe("Login User",()=>{
    it("login",()=>{
        cy.visit('/');

        methodsLoginPage.LoginPage();
        cy.get('.modal-footer > .btn').click()
    })
   
       
})