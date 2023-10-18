const THEME_DARK = "rgb(0, 0, 0)";
const THEME_LIGHT = "rgb(255, 255, 255)";

describe("Theme Switch", () => {
  it("should toggle the theme when the switch is clicked", () => {
    cy.visit("/");

    cy.get("[data-cy=nav-switch]").should("not.be.checked");
    cy.get("body").should("have.css", "background-color", `${THEME_DARK}`);

    cy.get("nav label").click();
    cy.get("[data-cy=nav-switch]").should("be.checked");
    cy.get("body").should("have.css", "background-color", `${THEME_LIGHT}`);

    cy.get("nav label").click();
    cy.get("[data-cy=nav-switch]").should("not.be.checked");
    cy.get("body").should("have.css", "background-color", `${THEME_DARK}`);
  });
});
