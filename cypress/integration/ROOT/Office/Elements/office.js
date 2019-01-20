module.exports = {
    unit,
    phoneNumber,
    internalTelphone,
    files,
    folders,
    manageFolders,
    signatures,
    fullName,
    rank,
    unitSign,
    role,
    addSignatures
} 

/**
 * @description enter unit name/number
 */
function unit(){
    return cy.get('[ng-model="item.unit"]');
}

/**
 * @description enter phone number
 */
function phoneNumber(){
    return cy.get('[ng-model="item.tel"]');
}

/**
 * @description enter internal telphone
 */
function internalTelphone(){
    return cy.get('[ng-model="item.internalTel"]');
}

/**
 * @description add fiels to the folder
 */
function files(){
    return cy.get('.detail-tabs-switcher > :nth-child(2)');
}

/**
 * @description add folders to the office
 */
function folders(){
    return cy.get('.detail-tabs-switcher > :nth-child(3)');
}

/**
 * @description manage the folders 
 */
function manageFolders(){
    cy.get(':nth-child(1) > .orange-btn');
}

/* signatures */
/**
 * @description singnatuers field
 */
function signatures(){
    return cy.get('.detail-tabs-switcher > :nth-child(4)');
}

/**
 * @description full name for the sign
 */
function fullName(){
    cy.get('form.ng-pristine > :nth-child(1) > .form-control');
}

/**
 * @description rank for the sign
 */
function rank(){
    cy.get('.col-xs-2 > .form-control');
}

/**
 * @description role for the sign
 */
function role(){
    cy.get(':nth-child(3) > .form-control');
}

/**
 * @description unit name/number for the sign
 */
function unitSign(){
    cy.get(':nth-child(4) > .form-control');
}

/**
 * @description add sign buttom
 */
function addSignatures(){
    cy.get('.addSignature')
}