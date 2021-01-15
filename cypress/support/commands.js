// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import '@testing-library/cypress/add-commands';

Cypress.Commands.add("isValid", { prevSubject: 'element'}, ($element) => {
    cy.wrap($element).should('have.class', 'is-valid');
});

Cypress.Commands.add("isInvalid", { prevSubject: 'element'}, ($element) => {
    cy.wrap($element).should('have.class', 'is-invalid');
});

Cypress.Commands.add("hasError", { prevSubject: 'element'}, ($element) => {
    cy.wrap($element).should('have.class', 'text-danger');
});

Cypress.Commands.add("hasNoError", { prevSubject: 'element'}, ($element) => {
    cy.wrap($element).should('have.class', 'text-muted');
});

Cypress.Commands.add("exists", { prevSubject: 'element'}, ($element) => {
    cy.wrap($element).should('exist');
});
