class Common {
    _TITLE = 'h1'
    _SUB_TITLE = 'h2'
    _INFO = 'p'

    TITLES = {
        signUp: 'Sign Up',
        success: 'Success!'
    }

    SUB_TITLES = {
        signUp: 'Account',
    }

    INFO = {
        success: 'You have been successfully registered!'
    }

    getTitle() { return cy.get(this._TITLE) }
    getSubTitle() { return cy.get(this._SUB_TITLE) }
    getInfo() { return cy.get(this._INFO) }
}

export default Common