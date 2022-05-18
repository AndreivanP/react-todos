# react-todos
Demo test automation framework using Cypress

# Pre requirements
- It's needed to have npm version greater than 8.0.0 installed.
- It's needed to have node.js version greater than 14.0.0 installed.

# Getting Started
- Run npm install to install all the needed dependencies.
- Run npm run cy:regression to run all the tests on headless mode using Chrome browser.
- In case you'd like to run using Cypress runner you can do so by running npx cypress open.

# Test cases
- All test cases are within integration folder. 
- On integration/crud-todos the focus was to cover the basic scenarios for all the CRUD operations. 
- On integration/filters-todos the idea was to cover some of the the functionalities related to filtering todos.

# Technicalities
- The baseUrl used on all the tests across the framework comes from the file cypress.json
- Test cases were built to be independent that means it's possible to run a specific test case without the need to run another test case before. In order to achive this to perform the test setup it was create a localstorage manipalator method which can be found on support/commands.js.
- All the "identifiers ids" from the UI are present on the file selectors/global-selector.js
- It's possible to execute the tests from a docker container. For that there are two files: Dockerfile and docker-compose.yml. In order to build the image you can run docker-compose -f docker-compose.yml build and in order to create the container docker-compose -f docker-compose.yml up -d and to run all the tests from docker container you can run docker-compose -f docker-compose.yml exec -T e2e-runner npm run cy:regression. Note that this is optional and it's mandatory to have docker installed on your localhost.
- There is a github actions workflow which uses the docker setup mentioned above and it is trigger every time a PR is open on main branch.

# Further improvements
- Add a report tool.
- Create extra tests to increase testing coverage.
