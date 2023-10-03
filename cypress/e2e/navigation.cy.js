beforeEach(() => {
  cy.visit("/");
});

describe("Navbar items", () => {
  it("the number links should be four", () => {
    cy.get("[data-cy=nav-links-container]").children().should("have.length", 4);
  });

  it("should check navlinks names", () => {
    cy.get("[data-cy=nav-Home]").invoke("text").should("eq", "Home");
    cy.get("[data-cy=nav-Timeline]").invoke("text").should("eq", "Timeline");
    cy.get("[data-cy=nav-BankCard]").invoke("text").should("eq", "BankCard");
    cy.get("[data-cy=nav-Contato]").invoke("text").should("eq", "Contato");
  });
});

describe("Navigation test", () => {
  it("should check navigation", () => {
    cy.get("[data-cy=nav-Home]").click();
    cy.location("pathname").should("eq", "/");

    cy.get("[data-cy=nav-Timeline]").click();
    cy.location("pathname").should("eq", "/timeline");

    cy.get("[data-cy=nav-BankCard]").click();
    cy.location("pathname").should("eq", "/bank-card");

    cy.get("[data-cy=nav-Contato]").click();
    cy.location("pathname").should("eq", "/contato");
  });
});
