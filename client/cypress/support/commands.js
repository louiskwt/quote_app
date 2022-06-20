import "@testing-library/cypress/add-commands";

// Basic commands
Cypress.Commands.add("access", () => {
  cy.visit(Cypress.config("baseUrl"));
});
