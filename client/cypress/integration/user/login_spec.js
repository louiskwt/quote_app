describe("login page", () => {
  it("Users can login by using the login form", () => {
    cy.visit("http://localhost:3000/login");

    cy.get('[data-testid="username"]').type(Cypress.env("name"));
    cy.get('[data-testid="login-btn"]').click();
    cy.get(".Toastify__close-button > svg").click();
    cy.get(".Toastify__toast-body").should(
      "contain",
      "登入失敗，請確認帳號密碼"
    );
    cy.get('[data-testid="pw"]').type(Cypress.env("pw")).type("{enter}");
    cy.get(".Toastify__toast-body").should("contain", "登入成功，歡迎");
  });
});
