//import { describe } from "cypress";

describe("Sample Test Suite", () => {
  it("Visit website", () => {
    cy.visit("http://localhost:3000");
  });
  it("Write into input", () => {
    cy.get("input").type("Apfel");
  });
  it("Press button", () => {
    cy.get("button").click();
  });
  it("Check if item was added", () => {
    cy.get("li").contains("Apfel");
  });
  it("Remove item and check if it was removed", () => {
    cy.get("li").click();
  });
});
