describe("Page Authentication", () => {
  context("when not logged in", () => {
    it("without authorization gets 403", () => {
      cy.request({
        url: Cypress.config("backendBaseUrl") + "quotes/",
        failOnStatusCode: false,
      })
        .its("status")
        .should("equal", 403);
    });
  });

  context("when logged in", () => {
    it("with authorization gets 200", () => {
      cy.request("POST", Cypress.config("backendBaseUrl") + "users/signin", {
        name: Cypress.env("name"),
        password: Cypress.env("pw"),
      })
        .its("status")
        .should("equal", 200);
    });
  });
});
