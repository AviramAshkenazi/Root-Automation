module.exports = {

} 

function unit(){
    return cy.get('[ng-model="item.unit"]');
}

function phoneNumber(){
    return cy.get('[ng-model="item.tel"]');
}

function internalTelphone(){
    return cy.get('[ng-model="item.internalTel"]');
}

function files(){
    return cy.get('.detail-tabs-switcher > :nth-child(2)');
}

function folders(){
    return cy.get('.detail-tabs-switcher > :nth-child(3)');
}

function signatures(){
    return cy.get('.detail-tabs-switcher > :nth-child(4)');
}