import {generateKey} from '../utils/generate-key.js'
import * as elements from '../selectors/global-selectors'

Cypress.Commands.add('addTodoThroughLocalStorage', (todoNames, isCompleted) => {
    let arrayTodos = [];
    for(let i = 0; i < todoNames.length; i++){
        arrayTodos.push({"id": generateKey(), "title": todoNames[i], "completed": isCompleted[i]})
    }
    window.localStorage.setItem('react-todos', JSON.stringify(arrayTodos));
    cy.visit('/')
});

Cypress.Commands.add('filterActive', () => {
    cy.get(elements.filterActive).click();
});

Cypress.Commands.add('filterCompleted', () => {
    cy.get(elements.filterCompleted).click();
});