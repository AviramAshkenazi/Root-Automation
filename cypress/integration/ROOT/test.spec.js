const methodsLoginPage = require('../../../Page/LoginPage.js')
const methodsleftBar = require('../../../Page/leftBar.js')
const email = "QA@email.com";
const password = "password";

/**
 *Login function to connect to Root
 * @param {string} email the user`s email
 * @param {string} password the user`s password
 */
function login(email,password){
    
    cy.get(':nth-child(2) > .form-control').type(email)
    cy.get(':nth-child(3) > .form-control').type(password)

    cy.get('button.btn').click()
}

describe("Login User",()=>{
    it("Go to root site",()=>{
        cy.visit('/');
    })
    
})
describe("Actoin on left Bar",()=>{
    before(()=>{
        it("login",()=>{
            login();     
        })
    })
    it("Click on search tag",()=>{
        methodsLoginPage.LoginPage();
        cy.get('.modal-footer > .btn').click()
        methodsleftBar.searchAction();
    })   
    it("Click on project tag",()=>{
        methodsleftBar.projectsAction();
    })
    it("Click on meetings",()=>{
        methodsleftBar.mettingsAction();
    })
    it("Click on documents",()=>{
        methodsleftBar.documentsAction();
    })
    it("Click on settings",()=>{
        methodsleftBar.settingsAction();
    })
    it("Click on tasks",()=>{
        methodsleftBar.taskesAction();
    })
    
})