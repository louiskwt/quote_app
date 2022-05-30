describe('quotes', () => {
    beforeEach(() => {
        cy.access();
    });
    it('Users can see the quotes rendered at HomePage', () => {
        cy.get('[class=quote-card]').should('have.length', 3);
    })
});