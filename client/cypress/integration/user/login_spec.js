describe("login page", () => {
  it("Users can login by using the login form", () => {
    cy.visit("http://localhost:3000/login");

    cy.get('[data-test="username"]').type(Cypress.env("name"));
    cy.get('[data-testid="login-btn"]').click();

    // cy.findByLabelText(/密碼/i).type(Cypress.env("pw"));
    // cy.findByRole("button", { name: /登入/i }).click();
    // cy.get("h1").should("include.text", "曾氏工程公司");
  });
});
