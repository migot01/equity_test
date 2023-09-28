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

});
