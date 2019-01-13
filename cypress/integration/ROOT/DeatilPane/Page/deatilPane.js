module.exports = {

}

/**
 * @description set item as favorite
 */
function setAsFavorite(){
    cy.get('.detail-favorite')
}


/**
 * @description set assignee to the item
 */
function selectAssignee(){
    cy.get('[tooltip-template="Assignee"] > .ui-select-container > .ui-select-match > .btn-default')
}

/**
 * @description pick date to the item
 */
function pickDate(){
    cy.get('.detail-due > input')
}

/**
 * @description set date as today dates
 */
function pickTodayDate(){
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default')
}

//item's status
/**
 * @description set items status
 */
function pickStatus(){
    cy.get('.detail-status')
}

/**
 * @description new status
 */
function newStatus(){
    cy.get('span.new')
}

/**
 * @description assign status
 */
function assignStatus(){
    cy.get('span.assigned')
}

/**
 * @description in progress status
 */
function inProgressStatus(){
    cy.get('span.in-progress')
}

/**
 * @description canceled status
 */
function canceledStatus(){
    cy.get('span.canceled')
}

/**
 * @description done status
 */
function doneStatus(){
    cy.get('span.done')
}

/**
 * @description archived status
 */
function archivedStatus(){
    cy.get('span.archived')
}

// color packer
/**
 * @description set color for the items
 */
function colorPacker(){
    cy.get('.detail-color')
}

// hi chat
/**
 * @description click on hi chat
 */
function hiChat(){
    cy.get('#HI')
}

// more option
/**
 * @description more option botoom
 */
function moreOption(){
    cy.get('.detail-menu > .dropdown-trigger')
}

/**
 * @description set item name
 */
function itemName(){
    cy.get('.item-title').should('be.visible')
}

/**
 * @description enter item description
 */
function itemDescription(){
    cy.get('.detail-desc')
}

/**
 * @description add tages
 */
function tagesButtom(){
    cy.get('.detail-tags-add-btn > .tooltips > tip-cont > .ng-scope')
}

/**
 * @description set tages name
 */
function tagesInput(){
    cy.get('.detail-tags-input > .ui-select-container > .ui-select-search')
}