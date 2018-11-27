module.exports = 
{
  RegisterPage:RegisterPage
};

function RegisterPage(){
    cy.get(':nth-child(2) > .form-control').click() // go to register form
    cy.get(':nth-child(2) > .form-control').type("QA")
    cy.get(':nth-child(3) > .form-control').type("QA@email.com")
    cy.get(':nth-child(4) > .form-control').type("QA")
    cy.get(':nth-child(5) > .form-control').type("password")
    cy.get(':nth-child(6) > .form-control').type("password")
    cy.get('.btn').click()
}