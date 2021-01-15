class SignUp {
    _URL = 'http://localhost:5000'
    _USERNAME = '#username'
    _USERNAME_MESSAGE = '#username-help'
    _PASSWORD = '#password'
    _PASSWORD_MESSAGE = '#password-help'
    _PASSWORD_CONFIRMATION = '#cpassword'
    _PASSWORD_CONFIRMATION_MESSAGE = '#cpassword-help'
    _TERMS_AND_CONDITIONS = '#termsandconditions'
    _TERMS_AND_CONDITIONS_MESSAGE = '#termsandconditions-help'
    _MARKETING = '#marketing'
    _SIGN_IN = 'button.btn-primary'

    ERRORS = {
        usernameRequired: 'Username is required',
        usernameTooShort: 'Username is too short',
        usernameInvalidChars: 'Username has invalid characters',
        passwordRequired: 'Password is required',
        passwordTooShort: 'Password is too short, it should have at lease 7 characters',
        passwordMissingUpper: 'Password must contain at least one uppercase letter',
        passwordMissingLower: 'Password must contain at least one lowercase letter',
        passwordMissingNumber: 'Password must contain at least one number',
        passwordConfirmationRequired: 'Password Confirmation is required',
        passwordConfirmationNoMatch: 'Password Confirmation does not match password field',
        termsAndConditionsRequired: 'You must agree to the terms and conditions before proceeding'
    }

    visit() { cy.visit(this._URL) }
    getUsername() { return cy.get(this._USERNAME) }
    getUsernameMessage() { return cy.get(this._USERNAME_MESSAGE) }
    getPassword() { return cy.get(this._PASSWORD) }
    getPasswordMessage() { return cy.get(this._PASSWORD_MESSAGE) }
    getPasswordConfirmation() { return cy.get(this._PASSWORD_CONFIRMATION) }
    getPasswordConfirmationMessage() { return cy.get(this._PASSWORD_CONFIRMATION_MESSAGE) }
    getTermsAndConditions() { return cy.get(this._TERMS_AND_CONDITIONS) }
    getTermsAndConditionsMessage() { return cy.get(this._TERMS_AND_CONDITIONS_MESSAGE) }
    getEmailMarketing() { return cy.get(this._MARKETING) }
    getSignIn() { return cy.get(this._SIGN_IN) }

    setUsername(username) { return this.getUsername().type(username) }
    setPassword(password) { return this.getPassword().type(password) }
    setPasswordConfirmation(passwordConfirmation) { return this.getPasswordConfirmation().type(passwordConfirmation) }
    setTermsAndConditions(option) { return option ? this.getTermsAndConditions().check() : this.getTermsAndConditions().uncheck() }
    setEmailMarketing(option) { return option ? this.getEmailMarketing().check() : this.getEmailMarketing().uncheck() }
}

export default SignUp