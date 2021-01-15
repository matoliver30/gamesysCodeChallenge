// Documentation for Cypress: https://docs.cypress.io/guides/overview/why-cypress.html

describe('Given the test app', () => {
	it('should visit the app', () => {
		cy.visit('http://localhost:5000');

		cy.contains('Sign Up').should('be.visible');
	});
});
