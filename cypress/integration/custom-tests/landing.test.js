/// <reference types="cypress" />
/* eslint-disable */
describe("Landing Page test", () => {
  it("VISIT HOME PAGE", () => {
    cy.visit("/");
    cy.get('[data-cy="learn-react-link"]').then((ele) => {
      cy.expect(ele).to.have.text("Learn React");
    });
  });
});
