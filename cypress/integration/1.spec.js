/// <reference types="cypress" />

it ('By Contains', () => {
    cy.visit ('https://next.privat24.ua/mobile?lang=en');
    cy.contains("To the cart");
})

it.only ('By Contains', () => {
    cy.visit ('https://next.privat24.ua/mobile?lang=en');
    cy.get('footer').contains("JOIN the team", {matchCase : false});
})