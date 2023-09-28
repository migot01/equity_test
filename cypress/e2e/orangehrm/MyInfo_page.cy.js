describe('OrangeHRM info page', ()=>{

    beforeEach(()=>{
        //visit login page before each test
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    });

    it('Verify user can locate MyInfo Page', ()=>{

        //login to the app
        cy.get('input[name="username"]').type('Admin')
          .get('input[name="password"]').type('admin123')
          .get('button[type="submit"]').click();

        //locate myInfo and navigate to it
        cy.get('.oxd-main-menu-item')
          .find('span')
          .contains('My Info')
          .click();
        
        //Assert that am on My Info Page
        cy.get('.orangehrm-edit-employee-content')
          .find('h6')
          .contains('Personal Details')
          .url().should('include', 'viewPersonalDetails')

    })

})