var methodsLoginPage = require('../../../Page/LoginPage.js')

describe("Login User",()=>{
    it("login",()=>{
        cy.visit('/');

        methodsLoginPage.LoginPage();
    })
    it("resize the page",()=>{
        cy.get('.modal-footer > .btn').click()

        /*for(let i; i <= 4; i++){
            cy.get('.hide-butt').click()
        }*/
        
        cy.get('.hide-butt').click()
    })
})