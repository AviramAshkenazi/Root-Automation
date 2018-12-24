

let getUserProfile = (cy)=>{
    let userProfile = {
        general:{
            fullName: cy.get('#name'),
        emailAddress:  cy.get('#email'),
        profilePicture: cy.get('.actions > .replace'),
        reset: cy.get('.actions > .reset'),
        Password:{
            changhPassword: cy.get('.panel-title > .ng-binding'),
            currentPassword: cy.get('#password'),
            newPassword: cy.get('#newpassword'),
            savenewPassword: cy.get('.save > .btn')
        } 
    },
    notification:{
        weekleyEmailMyTask: {
            selector: cy.get(':nth-child(2) > .ui-select-container > .ui-select-match > .btn-default'),
            option:{
                yes: cy.get('#ui-select-choices-row-19-0 > .ui-select-choices-row-inner > .ng-binding'),
                no: cy.get('#ui-select-choices-row-19-1 > .ui-select-choices-row-inner > .ng-binding')
            }
            
        },
        weekleyEmailGivenTask:{
            selector: cy.get(':nth-child(3) > .ui-select-container > .ui-select-match > .btn-default'), 
            option:{
                yes: cy.get('#ui-select-choices-row-20-0 > .ui-select-choices-row-inner > .ng-binding'),
                no: cy.get('#ui-select-choices-row-20-1 > .ui-select-choices-row-inner > .ng-binding')
            }
        },
        dailyEmailMyTask: {
            selector: cy.get(':nth-child(4) > .ui-select-container > .ui-select-match > .btn-default'),
            option:{
                yes: cy.get('#ui-select-choices-row-21-0 > .ui-select-choices-row-inner > .ng-binding'),
                no: cy.get('#ui-select-choices-row-21-1 > .ui-select-choices-row-inner > .ng-binding')
            },
        }
    },
}
return userProfile;
}

module.exports = 
{
  getUserProfile
};