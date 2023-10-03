/* eslint-disable cypress/no-unnecessary-waiting */

beforeEach(() => {
  cy.visit("/timeline");
});

describe("Check timeline currency select", () => {
  it("should check currency card title and id", () => {
    cy.get("[data-cy=currency-select]").select("Euro");
    cy.get("[data-cy=currency-info-text]").invoke("text").should("eq", "Euro");
    cy.get("[data-cy=currency-info-id]").invoke("text").should("eq", "EUR");

    cy.get("[data-cy=currency-select]").select("Bitcoin");
    cy.get("[data-cy=currency-info-text]")
      .invoke("text")
      .should("eq", "Bitcoin");
    cy.get("[data-cy=currency-info-id]").invoke("text").should("eq", "BTC");

    cy.get("[data-cy=currency-select]").select("Canadian Dollar");
    cy.get("[data-cy=currency-info-text]")
      .invoke("text")
      .should("eq", "Canadian Dollar");
    cy.get("[data-cy=currency-info-id]").invoke("text").should("eq", "CAD");
  });
});

describe("Check currency input modal", () => {
  it("should open and close currency modal", () => {
    cy.get("[data-cy=currency-select]").select("Euro");
    cy.get("[data-cy=currency-info-text]").invoke("text").should("eq", "Euro");
    cy.get("[data-cy=currency-info-id]").invoke("text").should("eq", "EUR");

    cy.get("[data-cy=currency-info]").click();
    cy.get("[data-cy=currency-modal]").should("be.visible");
    cy.get("[data-cy=prev-date]").should("be.visible");
    cy.get("[data-cy=date-picker]").should("be.visible");
    cy.get("[data-cy=next-date]").should("be.visible");
    cy.get('input[name="openPriceInput"]').should("be.visible");
    cy.get('input[name="highPriceInput"]').should("be.visible");
    cy.get('input[name="lowPriceInput"]').should("be.visible");
    cy.get('input[name="closePriceInput"]').should("be.visible");
    cy.get("[data-cy=add-price-button]").should("be.visible");

    cy.get("[data-cy=close-modal-button]").click();
    cy.get("[data-cy=currency-modal]").should("not.exist");
  });
});

describe("Check currency input modal", () => {
  it("should open and close currency modal", () => {
    cy.get("[data-cy=currency-select]").select("Euro");

    cy.get("[data-cy=currency-info]").click();
    cy.get("[data-cy=currency-modal]").should("be.visible");
    cy.get("[data-cy=prev-date]").should("be.visible");
    cy.get("[data-cy=date-picker]").should("be.visible");
    cy.get("[data-cy=next-date]").should("be.visible");
    cy.get('input[name="openPriceInput"]').should("be.visible");
    cy.get('input[name="highPriceInput"]').should("be.visible");
    cy.get('input[name="lowPriceInput"]').should("be.visible");
    cy.get('input[name="closePriceInput"]').should("be.visible");
    cy.get("[data-cy=add-price-button]").should("be.visible");

    cy.get("[data-cy=close-modal-button]").click();
    cy.get("[data-cy=currency-modal]").should("not.exist");
  });
});

describe("Check chart and notifiaction", () => {
  it("should receive a notification, build a chart and clear chart data", () => {
    cy.get("[data-cy=currency-select]").select("Bitcoin");

    cy.get("[data-cy=currency-info]").click();
    cy.get("[data-cy=prev-date]").should("be.visible");

    const numberOfIterations = 30;
    for (let i = 0; i < numberOfIterations; i++) {
      const lowPrice = Math.floor(Math.random() * 9) + 2;
      const highPrice = Math.floor(Math.random() * 6) + 27;
      const openPrice = Math.floor(Math.random() * 16) + 11;
      const closePrice = Math.floor(Math.random() * 16) + 11;

      cy.get('input[name="openPriceInput"]').type(`{selectAll}${openPrice}`);
      cy.get('input[name="highPriceInput"]').type(`{selectAll}${highPrice}`);
      cy.get('input[name="lowPriceInput"]').type(`{selectAll}${lowPrice}`);
      cy.get('input[name="closePriceInput"]').type(`{selectAll}${closePrice}`);

      cy.get("[data-cy=add-price-button]").click();

      if (i < numberOfIterations - 1) {
        cy.get("[data-cy=next-date]").click();
      }
    }

    cy.get("[data-cy=currency-modal]").should("not.exist");

    cy.get("[data-cy=notification]").should("be.visible");
    cy.wait(3000);
    cy.get("[data-cy=notification]").should("not.exist");

    cy.get("[data-cy=build-chart-button]").should("be.visible");
    cy.get("[data-cy=clear-chart-data-button]").should("be.visible");

    cy.get("[data-cy=build-chart-button]").click();
    cy.get("canvas").should("have.length", 1);

    cy.get("[data-cy=clear-chart-data-button]").click();
    cy.get("canvas").should("not.exist");
  });
});
