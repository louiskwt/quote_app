import '@testing-library/cypress/add-commands'

// Basic commands
Cypress.Commands.add('access', () => {
    cy.visit('http://localhost:3000');
})