module.exports = 
{
 
};

// new project page

// project date's



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

