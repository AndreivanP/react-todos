# react-todos
Demo test automation framework using Cypress

# Pre Requirements
- It's needed to have npm version greater than 8.0.0 installed.
- It's needed to have node.js version greater than 14.0.0 installed.

# Getting Started
- Run "npm install" to install all the needed dependencies.
- Run "npm run cy:regression" to run all the tests on headless mode using Chrome browser.
- In case you'd like to run using Cypress runner you can do so by running "npx cypress open".

# Test Cases
- All test cases are within "integration" folder. 
- On "integration/crud-todos" the focus was to cover the basic scenarios for all the CRUD operations. 
- On "integration/filters-todos" the idea was to cover some of the the functionalities related to filtering todos.

# Technicalities
- The baseUrl used on all the tests across the framework comes from the file "cypress.json".
- Test cases were built to be independent that means it's possible to run a specific test case without the need to run another test case before. In order to achive this to perform the test setup it was created a localstorage manipulator method which can be found on "support/commands.js".
- All the "identifiers ids" from the UI are present on the file "selectors/global-selector.js".
- The test data is created using an external library called "faker-js".
- It's possible to execute tests from a docker container. For that there are two files: "Dockerfile" and "docker-compose.yml". In order to build the image you can run "docker-compose -f docker-compose.yml build" and in order to create the container run "docker-compose -f docker-compose.yml up -d" and to run all the tests from docker container you can run "docker-compose -f docker-compose.yml exec -T e2e-runner npm run cy:regression". Note that this is optional and it's mandatory to have docker installed on your localhost.
- There is a github actions workflow which uses the docker setup mentioned above and it is triggered every time a PR is open on main branch.

# Further Improvements
- Add a report tool such as mochaawesome or allure reports.
- Create extra tests to increase testing coverage.
- Some assertions can be done in a better way but due the time constraint they were simplified.