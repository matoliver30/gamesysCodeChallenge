import Common from '../support/pages/common'
import SignUp from '../support/pages/signUp'

describe('Given I want to sign up', () => {
    beforeEach(() => {
        const signUp = new SignUp();
        signUp.visit()
        cy.wrap(signUp).as('signUp');
        cy.fixture('testData.json').then((testData) => {
            cy.wrap(testData.signUp).as('signUpData');
        });
    });

    it('should succeed the registration when I fill the form correctly', function () {
        this.signUp.setUsername(this.signUpData.validUsername);
        this.signUp.setPassword(this.signUpData.validPassword);
        this.signUp.setPasswordConfirmation(this.signUpData.validPassword).type('{enter}');
        this.signUp.setTermsAndConditions(true);
        this.signUp.setEmailMarketing(true);

        this.signUp.getUsername().isValid();
        this.signUp.getUsernameMessage().hasNoError();
        this.signUp.getPassword().isValid();
        this.signUp.getPasswordMessage().should('not.exist');
        this.signUp.getPasswordConfirmation().isValid();
        this.signUp.getPasswordConfirmationMessage().should('not.exist');
        this.signUp.getTermsAndConditions().isValid();
        this.signUp.getTermsAndConditionsMessage().should('not.exist');

        this.signUp.getSignIn().click();

        const common = new Common();
        common.getTitle().should('have.text', common.TITLES.success)
        common.getInfo().should(($element) => {
            expect($element.text().trim()).equal(common.INFO.success);
        });
    });

    it('should inform me the required fields when I try to submit empty fields', function () {
        this.signUp.getSignIn().click()

        this.signUp.getUsername().isInvalid();
        this.signUp.getUsernameMessage().hasError().should('have.text', this.signUp.ERRORS.usernameRequired);
        this.signUp.getPassword().isInvalid();
        this.signUp.getPasswordMessage().hasError().should('have.text', this.signUp.ERRORS.passwordRequired);
        this.signUp.getPasswordConfirmation().isInvalid();
        this.signUp.getPasswordConfirmationMessage().hasError().should('have.text', this.signUp.ERRORS.passwordConfirmationRequired);
        this.signUp.getTermsAndConditions().isInvalid();
        this.signUp.getTermsAndConditionsMessage().hasError().should('have.text', this.signUp.ERRORS.termsAndConditionsRequired);
    });

    it('should inform me when my username does not match the requirements', function () {
        this.signUp.setUsername(this.signUpData.shortUsername).type('{enter}');
        this.signUp.getUsername().isInvalid();
        this.signUp.getUsernameMessage().hasError().should('have.text', this.signUp.ERRORS.usernameTooShort)

        this.signUp.getUsername().clear();
        this.signUp.setUsername(this.signUpData.usernameWithInvalidChars).type('{enter}');
        this.signUp.getUsername().isInvalid();
        this.signUp.getUsernameMessage().hasError().should('have.text', this.signUp.ERRORS.usernameInvalidChars)

        this.signUp.getUsername().clear();
        this.signUp.setUsername(this.signUpData.usernameWithSpace).type('{enter}');
        this.signUp.getUsername().isInvalid();
        this.signUp.getUsernameMessage().hasError().should('have.text', this.signUp.ERRORS.usernameInvalidChars)
    });

    it('should inform me when my password does not match the requirements', function () {
        this.signUp.setPassword(this.signUpData.shortPassword).type('{enter}');
        this.signUp.getPassword().isInvalid();
        this.signUp.getPasswordMessage().hasError().should('have.text', this.signUp.ERRORS.passwordTooShort);

        this.signUp.getPassword().clear();
        this.signUp.setPassword(this.signUpData.missingUpperPassword).type('{enter}');
        this.signUp.getPassword().isInvalid();
        this.signUp.getPasswordMessage().should('exist').hasError().should('have.text', this.signUp.ERRORS.passwordMissingUpper);

        this.signUp.getPassword().clear();
        this.signUp.setPassword(this.signUpData.missingLowerPassword).type('{enter}');
        this.signUp.getPassword().isInvalid();
        this.signUp.getPasswordMessage().exists().hasError().should('have.text', this.signUp.ERRORS.passwordMissingLower);

        this.signUp.getPassword().clear();
        this.signUp.setPassword(this.signUpData.missingNumberPassword).type('{enter}');
        this.signUp.getPassword().isInvalid();
        this.signUp.getPasswordMessage().exists().hasError().should('have.text', this.signUp.ERRORS.passwordMissingNumber);

        this.signUp.getPassword().clear();
        this.signUp.setPassword(this.signUpData.validPassword).type('{enter}');
        this.signUp.getPassword().isValid();
        this.signUp.getPasswordMessage().should('not.exist');
    });

    it('should inform me when my password confirmation does not match with my password', function () {
        this.signUp.setPassword(this.signUpData.validPassword);

        this.signUp.setPasswordConfirmation(this.signUpData.missingUpperPassword).type('{enter}');
        this.signUp.getPasswordConfirmation().isInvalid();
        this.signUp.getPasswordConfirmationMessage().exists().should('have.text', this.signUp.ERRORS.passwordConfirmationNoMatch);
    });
});