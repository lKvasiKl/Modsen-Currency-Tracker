describe("Currency Converter Module", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should open and close modal", () => {
    cy.get("[data-cy=currency-card]").should("be.visible");

    cy.wait(1000);
    cy.get("[data-cy=currency-card]").eq(3).click();
    cy.get("[data-cy=currency-modal]").should("be.visible");
    cy.get("[data-cy=amount-input]").should("be.exist");
    cy.get("[data-cy=to-currency]").should("be.exist");
    cy.get("[data-cy=convert-button]").should("be.exist");

    cy.get("[data-cy=close-modal-button]").click();
    cy.get("[data-cy=currency-modal]").should("not.exist");
  });

  it("should conver currency", () => {
    cy.wait(1000);
    cy.get("[data-cy=currency-card]").eq(2).click();

    cy.get("[data-cy=amount-input]").type("{selectAll}100");
    cy.get("[data-cy=to-currency]").click();
    cy.get("[data-cy=select-option-EUR]").click();
    cy.get("[data-cy=convert-button]").click();

    cy.get("[data-cy=converted-result]").should("exist");
  });

  it("should return empty string for 0", () => {
    cy.wait(1000);
    cy.get("[data-cy=currency-card]").eq(5).click();

    cy.get("[data-cy=amount-input]").type("{selectAll}0");
    cy.get("[data-cy=to-currency]").click();
    cy.get("[data-cy=select-option-BTC]").click();
    cy.get("[data-cy=convert-button]").click();

    cy.get("[data-cy=converted-result]").should("not.have.descendants");
  });
});
