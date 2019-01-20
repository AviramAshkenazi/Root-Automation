module.exports = 
{
 
};

/**
 * @description search line 
 */
function searchLine(){
    cy.get('.search > .ng-pristine')
}

/**
 * @description favorite filtering 
 */
function sortByFavorite(){
    cy.get('.favorites > .tooltips')
}

/**
 * @description filtering by status: active, archived and all
 */
function filterByStatus(){
    cy.get('[tooltip-template="Filter by activivity status"] > .ui-select-container > .ui-select-match > .btn-default > .ui-select-match-text > .tasks')
}
/*
function filterByActiveStatus(){
    cy.get('#ui-select-choices-row-2-0 > .ui-select-choices-row-inner')
}

function filterByArchivedStatus(){
   cy.get('#ui-select-choices-row-2-1 > .ui-select-choices-row-inner') 
}

function filterByAllStatus(){
    cy.get('#ui-select-choices-row-2-2 > .ui-select-choices-row-inner')
}
*/

/**
 * @description filtering by: Created, Title, Status and bolded
 */
function filtering(){
    cy.get('.button-right-part')
}

/**
 * @description bottom for chanage of visbility after sorting
 */
function chanageSortingView(){
    cy.get('.button-left-part')
}
/*
function filteringByCreated(){
    cy.get('#ui-select-choices-row-3-0 > .ui-select-choices-row-inner')
}

function filteringByTitle(){
    cy.get('#ui-select-choices-row-3-1 > .ui-select-choices-row-inner')
}
*/

/**
 * @description print buttom
 */
function printButtom(){
    cy.get('.print-wrapper')
}

/**
 * @description excel summary report
 */
function excel(){
    cy.get('.excel')
}

/**
 * @description open new item from "create new item" line
 */
function openNewItem(){
    cy.get('.create-new-item')
}