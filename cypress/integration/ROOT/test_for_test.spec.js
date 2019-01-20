const methodsLoginPage = require('./Login/Page/loginPage.js')
const methodsleftBar = require('./Left bar actions/Page/leftBar.js')
const methodsRightBar = require('../../../Page/rightBar.js')
const methodsUserProfile = require('../../../Page/profilePage.js')


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

describe("Plus Button",()=>{

    beforeEach( ()=> {  
          cy.visit('/');
          methodsLoginPage.LoginPage();
          cy.wait(5000)
      });
      it("Create Task With Plus Button",()=>{
      });
    });