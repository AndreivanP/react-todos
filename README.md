[![E2E tests](https://github.com/AndreivanP/react-todos/actions/workflows/ci.yml/badge.svg)](https://github.com/AndreivanP/react-todos/actions/workflows/ci.yml)

# react-todos
Demo test automation framework using Cypress

# Pre Requirements
- It's needed to have npm version greater than 8.0.0 installed.
- It's needed to have node.js version greater than 14.0.0 installed.

## Setup

1. Clone and access the cloned repo folder

    `$ git clone git@github.com:AndreivanP/react-todos.git`

2. Install the project dependencies

    `$ npm install`

## CLI commands
### Tests Execution

Run `npx cypress open`, to open the Cypress Test Runner.

Run `npm run cy:regression` to run all the tests on headless mode using Chrome browser.

### Relevant optional parameters

* from Cypress
  * `--browser chrome`, to set browser (default is Electron)
  * `--headless`, to headless execution (default for Electron)
  * `--headed`, to non headless execution (default for Chrome/Firefox)
  * `--spec '<file-path>/test-file.spec.js'`, to run specific test file

## Features
### Test suite

* [Cypress][test-tool], to create and run E2E tests
* [Faker][data-tool], to generate randon data for tests
* "App Actions" custom pattern, to organize the test structure
* Environment config, to run tests in multiple environment. It's possible to have multiple `cypress.json` files.

#### Test Cases

- All test cases are within `integration` folder. 
- On `integration/crud-todos` the focus was to cover the basic scenarios for all the CRUD operations. 
- On `integration/filters-todos` the idea was to cover some of the the functionalities related to filtering todos.
- Test cases were built to be independent that means it's possible to run a specific test case without the need to run another test case before. In order to achive this to perform the test setup it was created a localstorage manipulator method which can be found on `support/commands.js`.
- All the "identifiers ids" from the UI are present on the file `selectors/global-selector.js`.

### CI/CD

- It's possible to execute tests from a docker container. For that there are two files: `Dockerfile` and `docker-compose.yml`. In order to build the image you can run `docker-compose -f docker-compose.yml build` and in order to create the container run `docker-compose -f docker-compose.yml up -d` and to run all the tests from docker container you can run `docker-compose -f docker-compose.yml exec -T e2e-runner npm run cy:regression`. Note that this is optional and it's mandatory to have docker installed on your localhost.
- There is a github actions workflow which uses the docker setup mentioned above and it is triggered every time a PR is open on main branch.

# Future Improvements

- Add a report tool such as mochaawesome.
- Create extra tests to increase testing coverage.
- Some assertions can be done in a better way but due the time constraint they were simplified.

<!-- Links list -->
[test-tool]: https://www.cypress.io/how-it-works
[data-tool]: https://www.npmjs.com/package/@faker-js/faker