const methodsLoginPage = require('./Login/Page/loginPage.js')
const methodsleftBar = require('./Left bar actions/Page/leftBar.js')
const methodsRightBar = require('../../../Page/rightBar.js')
const methodsUserProfile = require('../../../Page/profilePage.js')


const email = "QA@email.com";
const password = "password";

/**
 *Login function to connect to Root
 * @param {string} email the user`s email
 * @param {string} password the user`s password
 */
function login(email,password){
    
    cy.get(':nth-child(2) > .form-control').type(email)
    cy.get(':nth-child(3) > .form-control').type(password)

    cy.get('button.btn').click()
}

describe("Plus Button",()=>{

    beforeEach( ()=> {  
          cy.visit('/');
          methodsLoginPage.LoginPage();
          cy.wait(5000)
      });
      it("Create Task With Plus Button",()=>{
        methodsRightBar.plusButton();
        methodsRightBar.createTask();
        //cy.pause();
        console.log(cy.get('.containerVertical').find('tr').should('have.length', 2))
      });
      it("Create project With Plus Button",()=>{
        methodsRightBar.plusButton();
        methodsRightBar.createProject();
        //cy.pause();
        console.log(cy.get('.containerVertical').find('tr').should('have.length', 2))
      });
      it("Create discussion With Plus Button",()=>{
        methodsRightBar.plusButton();
        methodsRightBar.createDiscussion();
        //cy.pause();
        console.log(cy.get('.containerVertical').find('tr').should('have.length', 2))
      });
      it("Create document With Plus Button",()=>{
        methodsRightBar.plusButton();
        methodsRightBar.createDocument();
        //cy.pause();
        console.log(cy.get('.containerVertical').find('tr').should('have.length', 2))
      });
      it("Rename the account",()=>{
        methodsRightBar.profileButton();
        methodsRightBar.profilePage();
        methodsUserProfile.chanageAccountName();
      });
      it("Chanage the account email",()=>{
        methodsRightBar.profileButton();
        methodsRightBar.profilePage();
        methodsUserProfile.chanageAccountEmailAddress();
      });
      describe("Project tag",()=>{
        it("Click on project tag",()=>{
            methodsleftBar.projectsAction();
        });
        it("Open new project",()=>{
          
        });
      });
});


// describe("Login User",()=>{
//     it("Go to root site",()=>{
//         cy.visit('/');
//     })
    
// })
// describe("Actoin on left Bar",()=>{
//     before(()=>{
//         it("login",()=>{
//             // login();     
//         })
//     })
    // it("Click on search tag",()=>{
        // methodsLoginPage.LoginPage();
        
        // cy.get('.modal-footer > .btn').should('be.visible').click();
        // methodsleftBar.searchAction();
    // })   
    // it("Click on project tag",()=>{
    //     methodsleftBar.projectsAction();
    // })
    // it("Click on meetings",()=>{
    //     methodsleftBar.mettingsAction();
    // })
    // it("Click on documents",()=>{
    //     methodsleftBar.documentsAction();
    // })
    // it("Click on settings",()=>{
    //     methodsleftBar.settingsAction();
    // })
    // it("Click on tasks",()=>{
    //     methodsleftBar.taskesAction();
    // })
// })
// describe("Plus buttom",()=>{
    // beforeEach(()=>{
        // methodsRightBar.plusButton();
    // })
    // it("Create new task",()=>{
        // methodsRightBar.createTask();
    // })
    // it("Create new project",()=>{
    //     methodsRightBar.createProject();
    // })
    // it("Create new discussion",()=>{
    //     methodsRightBar.createProject();
    // })
    //  it("Create new document",()=>{
    //     methodsRightBar.createProject();
    //  })
//  })
// describe ("Profile page",()=>{
//     beforeEach(()=>{
//         methodsRightBar.profileButton();
//     })
//     it("Open profile page",()=>{
//         methodsRightBar.profilePage();
//     })
//     it("Close the page",()=>{
//         methodsRightBar.closeProfilePage();
//     })
//     it("Rename user",()=>{
//         methodsRightBar.profilePage();
//         methodsUserProfile.getUserProfile(cy).general.fullName.type("Juda the king")
//     })
// })