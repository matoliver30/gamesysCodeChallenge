# QA AUTOMATION TECHNICAL TEST

Thank you for applying to this role at Gamesys! We appreciate that every candidate's time is precious, and the aim of this test is to take as little as possible for you to be able to show us your great skills.

<br />

## Objective

The objective of this test is to test an application functionally. We would like to see how you code, how well you pair with other members of the team (if you're taking the test with us and not at home), and how you approach testing in general: what are you going to test? What tools do you prefer? What paradigms and frameworks will you use?

The application is a simple form, with a few conditions that show or hide its elements according to what you select.

**You will not be required to make changes to the application, it is simply included here so you can refer to the code.**

We use [Cypress](https://cypress.io) in our stack, and we have already set it up if you want to use it for the test. It comes preinstalled with bindings from `@testing-library`, if that is something you wish to use.

You can find a sample test in `cypress/integration/app.spec.js`.

<br />

### Story description and A.C.

This is the description of the story we would like you to test. Please take your time reading it and making sure that all cases are covered in the A.C.

```
As a user
I want to fill the form correctly
So that I can sign up

Acceptance criteria:

- All fields are required
- Username should have at least 3 alphanumeric characters, and no spaces or symbols are allowed.
- Password should be at least 7 characters long
- Password should contain at least a lowercase letter, an uppercase letter and a number
- Terms and conditions agreement should be ticked
- Form should submit and success message should appear
```

## Local set up - Take home test

If you prefer to take this test home on your time, you can spin it up by running these simple commands at the root of the project:

`yarn`

`yarn start`

This will serve the application and open an instance of Cypress in the same terminal window.

The test is designed to take you no longer than 2 hours. While we won't monitor the time you spend on it, we encourage you not to spend too much time on it!

Once you have completed it, please send the files back to us either in a compressed folder, or by adding it to a new GitHub repo and sending us the link.

If you went with a different solution than Cypress, please include instructions below to explain how to run it in our local environments.

<br />

## How to run the tests

The tests were written using Cypress so once you have installed all the dependencies on `/package.json` you can run the
tests with the commands below.

To run the tests on headed mode where you can see them running:
```
cypress run --spec "cypress/integration/singUpFormTests.spec.js" --headed // Electron headed
cypress run --spec "cypress/integration/singUpFormTests.spec.js" --browser chrome // Chrome headed
cypress run --spec "cypress/integration/singUpFormTests.spec.js" --browser firefox // Chrome headed
```

To run the tests on headless mode where you can't see them running:
```
cypress run --spec "cypress/integration/singUpFormTests.spec.js" // Electron headless
cypress run --spec "cypress/integration/singUpFormTests.spec.js" --browser chrome --headless // Chrome headless
cypress run --spec "cypress/integration/singUpFormTests.spec.js" --browser firefox --headless // Firefox headless
```

You can look at [Cypress Docs](https://docs.cypress.io/guides/guides/command-line.html#cypress-run-browser-lt-browser-name-or-path-gt)
for more info on supported browsers and how to change between them.

**Happy testing!**
