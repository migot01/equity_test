describe('OrangeHRM Login Page Test', ()=>{

    beforeEach(()=>{
        //visit login page before each test
        cy.visit('https://opensource-demo.orangehrmlive.com/')
    });

    it('should display login page and sbubmit it', ()=>{

        //Verify that login form is visible
        cy.get('.oxd-form').should('be.visible');

        //Fill in username and password
        cy.get('input[name="username"]').type('Admin')
          .get('input[name="password"]').type('admin123');

        //click login button
        cy.get('button[type="submit"]').click();

        //verify user is directed to dashboard
        cy.get('span.oxd-topbar-header-breadcrumb')
          .find('h6')
          .contains('Dashboard');
        cy.url().should('include', '/dashboard/index')
    });

    it('Verify error message with wrong creds', ()=>{

        cy.get('input[name="username"]').type('Admin')
          .get('input[name="password"]').type('admin1235')
          .get('button[type="submit"]').click();
        
        //check error message is visible
        cy.get('.oxd-text.oxd-text--p.oxd-alert-content-text')
          .contains('Invalid credentials');

    });

    it('display error message for missing username and password', ()=>{

        cy.get('button[type="submit"]').click();

        //check error message is visible
        cy.get('.oxd-form-row')
          .find('span')
          .contains('Required');

    });

    it('verify forget password link works', ()=>{

        //navigate to forgot password link and click on it
        cy.get('.orangehrm-login-forgot')
          .find('p')
          .contains('Forgot your password? ')
          .click();

        //Verify user is directed to forget password page
        cy.get('form.oxd-form')
          .find('h6')
          .contains('Reset Password');
        cy.url().should('include','/requestPasswordResetCode')

    });

});
