module.exports = 
{
 
};

/**
 * @description open new project from "create new item" line
 */
function openNewProject(){
    cy.get('.create-new-item')
}

// new project page

/**
 * @description set project as favorite
 */
function setAsFavorite(){
    cy.get('.detail-favorite')
}

/**
 * @description set assignee to the project
 */
function selectAssignee(){
    cy.get('[tooltip-template="Assignee"] > .ui-select-container > .ui-select-match > .btn-default')
}

// project date's

/**
 * @description pick date to the project
 */
function pickDate(){
    cy.get('#dp1545740681010')
}

/**
 * @description set date as today dates
 */
function pickTodayDate(){
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default')
}

//project's status
/**
 * @description set project status
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
 * @description set color for the projects
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
 * @description 
 */
function policy(){
    cy.get('.detail-menu > .dropdown-menu > :nth-child(1) > a > .ng-binding').should('be.visible')
}

/**
 * @description 
 */
function publish(){
    cy.get('.detail-menu > .dropdown-menu > :nth-child(2) > a > .ng-binding').should('be.visible')
}

// project deatils 
/**
 * @description set project name
 */
function projectName(){
    cy.get('.item-title').should('be.visible')
}

/**
 * @description enter project description
 */
function projectDescription(){
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

// sub projects
/**
 * @description add sub projects
 */
function subProject(){
    cy.get('.add-sub-projects')
}

/**
 * @description create new sub project line
 */
function createNewSubProjects(){
    cy.get('.icu-sub-project-list > .list-table > .projects > tbody > .ng-scope > .name')
}

/**
 * @description set sub projects name
 */
function subProjectsName(){
    cy.get('[data-id="5c2a07a9b7ef45143dcb0c72"] > .name')
}

/**
 * @description set sub projects assigne 
 */
function subProjectsAssigne(){
    cy.get('.user > .ui-select-container > .ui-select-match > .btn-default')
}

/**
 * @description set sub projects status
 */
function subProjectsStatus(){
    cy.get('.status > .ui-select-container > .ui-select-match > .btn-default')
}

/**
 * @description sub projects date
 */
function subProjectsDate(){
    cy.get('#dp1546256224341')
}

/**
 * @description go to sub project page
 */
function subProjectPage(){
    cy.get('[data-id="5c2a07a9b7ef45143dcb0c72"] > .arrow')
}

/**
 * @description delete sub projects
 */
function deleteSubProject(){
    cy.get('[data-id="5c2a07a9b7ef45143dcb0c72"] > .delete')
}

// template
/**
 * @description open projects template 
 */
function projectsTemplate(){
    cy.get('.open-template-menu > .dropdown-trigger')
}

/**
 * @description set template name
 */
function templateName(){
    cy.get('.new-template > div > .ng-pristine')
}

/**
 * @description set for who the template will be visble
 */
function visibleTemplate(){
    cy.get('.template-watcher > .ui-select-match > .btn-default')
}

/**
 * @description save the new template
 */
function saveTemplate(){
    cy.get('.save-template')
}


/**
 * @description write some update
 */
function updateField(){
    cy.get('.add-update-form > .ng-pristine')
}

/**
 * @description upload attachment
 */
function attachment(){
    cy.get('.attachment')
}

/**
 * @description add update bottom
 */
function addUpdate(){
    cy.get('.action-buttons > .save')
}

/**
 * @description activities filed
 */
function activites(){
    cy.get('.detail-tabs-switcher > :nth-child(1)')
}

/**
 * @description files filed
 */
function files(){
    cy.get('.detail-tabs-switcher > :nth-child(2)')
}

/**
 * @description tasks filed
 */
function tasks(){
    cy.get('.detail-tabs-switcher > :nth-child(3)')
}

/**
 * @description manage tasks bottom to open tasks from the projects
 */
function manageTasks(){
    cy.get('.orange-btn .ng-binding')
}

/**
 * @description add member bottom
 */
function addMember(){
    cy.get('#addMember > .tooltips > tip-cont > .fa')
}

/**
 * @description choose the friend who you wish to add to the project
 */
function newMemberInput(){
    cy.get('.new-member-input > .ui-select-container > .ui-select-match > .btn-default')
}

