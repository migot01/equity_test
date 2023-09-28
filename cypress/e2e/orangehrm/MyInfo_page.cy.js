describe('OrangeHRM info page', ()=>{

    beforeEach(()=>{
        //visit login page before each test
        cy.visit('https://opensource-demo.orangehrmlive.com/');

         //login to the app
        cy.get('input[name="username"]').type('Admin')
          .get('input[name="password"]').type('admin123')
          .get('button[type="submit"]').click();
    });

    it('Verify user can locate MyInfo Page', ()=>{

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

    });

    it('verify user can Change the Employee ID and SSN', ()=>{

        const newEmployeeId = "12345";
        const newSSN = "54321";

        //locate myInfo and navigate to it
        cy.get('.oxd-main-menu-item')
          .find('span')
          .contains('My Info')
          .click();

        //locate employeeid and clear
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(2) > input')
          .clear();

        //locate SSN and clear
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div > div:nth-child(2) > input')
          .clear()

        //enter new values for EmployeeID and SSN
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div > div:nth-child(2) > input')
          .type(newEmployeeId);
        cy.get('#app > div.oxd-layout > div.oxd-layout-container > div.oxd-layout-context > div > div > div > div.orangehrm-edit-employee-content > div.orangehrm-horizontal-padding.orangehrm-vertical-padding > form > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div > div:nth-child(2) > input')
          .type(newSSN);

        //click save button and save changes 
        cy.get('button[type="submit"]')
          .click({ multiple: true })

    })

})