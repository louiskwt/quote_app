import "@testing-library/cypress/add-commands";

// Basic commands
Cypress.Commands.add("access", () => {
  cy.visit(Cypress.config("baseUrl"));
});

Cypress.Commands.add("login", () => {
  let user;
  cy.request("POST", `${Cypress.config("backendBaseUrl")}users/signin`, {
    name: Cypress.env("name"),
    password: Cypress.env("pw"),
  })
    .its("body")
    .then((res) => {
      user = res;
    });

  cy.visit(Cypress.config("baseUrl"), {
    onBeforeLoad: (win) => {
      win.localStorage.setItem("user", JSON.stringify(user));
    },
  });
});
