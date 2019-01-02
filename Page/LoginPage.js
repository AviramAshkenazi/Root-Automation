module.exports = 
{
  LoginPage:LoginPage
};

/**
 * @description go to root site and login to the app
 */
function LoginPage(){
    cy.visit('/');
    
    cy.get(':nth-child(2) > .form-control').should('be.visible').type("QA1@email.com")
    cy.get(':nth-child(3) > .form-control').should('be.visible').type("password")
    
    cy.get('.btn').should('be.visible').click();
    cy.wait(5000);
    cy.get('.modal-footer > .btn').should('be.visible').click();
    
}