describe('CURD Operations', () => {
    beforeEach(() => {
        cy.access();
    });
    it('Users can create and read quote', () => {
        // visit create quote page
        cy.get('a > .MuiButtonBase-root').click();
        // Creating quote
        cy.get('#name').type('test-quote');
        cy.get('#address').type('La Lumiere, Lee Kung Street');
        cy.get('#item').type('testing');
        cy.get('#price').type('testing');
        cy.get('.css-15c2ieu-MuiButtonBase-root-MuiButton-root').click();
        const newQuote = cy.get(':nth-child(4) > .MuiCardContent-root > .MuiTypography-h6');
        assert.exists(newQuote, 'new quote has been added');
    });

    it('User can update Quote', () => {
        // visit create quote page
        cy.get(':nth-child(4) > .MuiCardActions-root > .MuiButton-outlinedPrimary > a').click();
        // Updating quote
        cy.get('a > .MuiButtonBase-root').click();
        cy.get('#address').clear().type('updated-address');
        cy.get('.MuiButton-containedSuccess').click();
        cy.get(':nth-child(4) > .MuiCardContent-root > .MuiTypography-h6').should('contain.text', 'updated-address');
    });

    it('User can delete Quote', () => {
        // visit create quote page
        cy.get(':nth-child(4) > .MuiCardActions-root > .MuiButton-outlinedError').click();
        // assert quote number after delete
       cy.get('[data-cy=quote-card]').should('have.length', 2);
    });
});