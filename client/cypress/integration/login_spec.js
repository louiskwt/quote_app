describe('login', () => {
    it('Users can login and see the quotes', () => {
        cy.visit('http://localhost:3000/login');
    
        cy.findByRole('textbox', {  name: /用户名/i}).type(Cypress.env('name'));
        cy.findByLabelText(/密碼/i).type(Cypress.env('pw'));
        cy.findByRole('button', {  name: /登入/i}).click();
        cy.get('h1').should('include.text', '曾氏工程公司');
    })
});