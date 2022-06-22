describe("Reading Quote", () => {
  beforeEach(() => {
    cy.login();
  });
  it("Users can create and read quote", () => {
    // visit create quote page
    cy.visit("/");
    cy.get(
      ":nth-child(2) > .MuiCardActions-root > .MuiButton-outlinedPrimary"
    ).click();
    cy.get('[data-testid="client"]').should("be.visible");
  });
});
