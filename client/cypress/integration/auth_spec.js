describe('Protected Page', () => {
    beforeEach(() => {
        cy.access();
    });
    it('Users cannot see the quotes without logging in', () => {
        cy.findByRole('heading', {  name: /請先登入/i}).should('exist');
    });
    it('Users cannot access the create quote page wihtout logging in', () => {
        cy.visit('http://localhost:3000/create');
        cy.findByRole('heading', {  name: /請先登入/i}).should('exist');
    });
    it('Users cannot see quote detail without logging in', () => {
        cy.visit('http://localhost:3000/41');
        cy.findByRole('heading', {  name: /請先登入/i}).should('exist');
    });
    it('Users cannot attempt to update without loggin in', () => {
        cy.visit('http://localhost:3000/update/41');
        cy.findByRole('heading', {  name: /請先登入/i}).should('exist');
    })
});