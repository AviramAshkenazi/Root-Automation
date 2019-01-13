var methodsRegisterPage = require('../../../Page/Register.js')

describe("Create User",()=>{
    it("register",()=>{
        cy.visit('/register');

       methodsRegisterPage.RegisterPage();
    })
})

