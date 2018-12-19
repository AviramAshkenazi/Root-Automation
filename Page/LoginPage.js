module.exports = 
{
  LoginPage:LoginPage
};

function LoginPage(){
    cy.get(':nth-child(2) > .form-control').type("QA@email.com")
    cy.get(':nth-child(3) > .form-control').type("password")

    cy.get('.btn').click()

    /*cy.get('.modal-footer > .btn').click()*/
}