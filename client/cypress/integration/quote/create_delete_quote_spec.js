describe("Reading Quote", () => {
  beforeEach(() => {
    cy.login();
  });
  it("Users can create and delete quote", () => {
    cy.visit("/");
    cy.get('[data-testid="AddIcon"]').click();
    cy.get("#name").type("Test Quote");
    cy.get("#address").type("Test Address");
    cy.get("#item").type("Test Item");
    cy.get("#price").type("10000");
    cy.get('[data-testid="add-content"]').click();
    cy.get(
      ":nth-child(3) > .MuiBox-root > .css-1jefj13-MuiFormControl-root-MuiTextField-root > .MuiOutlinedInput-root"
    ).type("Test Item 2");
    cy.get(
      ":nth-child(3) > .MuiBox-root > .css-tghzsf-MuiFormControl-root-MuiTextField-root > .MuiOutlinedInput-root > #price"
    ).type("9000");
    cy.get('[data-testid="add-content"]').click();
    cy.get(
      ':nth-child(4) > .css-e53awj-MuiStack-root > [data-testid="delete-content"]'
    ).click();
    cy.get("#memo").type("Test Memo");
    cy.get('[data-testid="create-form"]').click();
    cy.get(":nth-child(2) > .MuiCardContent-root > .MuiTypography-h6").should(
      "contain.text",
      "Test Address"
    );
    cy.get(
      ':nth-child(2) > .MuiCardActions-root > [data-testid="delete-quote-btn"]'
    ).click();
    cy.get(":nth-child(2) > .MuiCardContent-root > .MuiTypography-h6").should(
      "not.contain.text",
      "Test Address"
    );
  });
});
