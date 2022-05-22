import {generateKey} from '../utils/generate-key.js'
import * as elements from '../selectors/global-selectors'

Cypress.Commands.add('addTodoThroughLocalStorage', (todoData) => {
    let arrayTodos = [];
    for(let i = 0; i < todoData.length; i++){
        arrayTodos.push({"id": generateKey(), "title": todoData[i].name, "completed": todoData[i].isCompleted})
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

Cypress.Commands.add('addTodo', (todoName) => {
    cy.get(elements.newTodo).type(`${todoName}{enter}`);
});

Cypress.Commands.add('updateTodo', (oldName, newName) => {
    cy.get(elements.listTodo)
        .should('have.text',oldName)
        .dblclick()
        .clear()
        .type(`${newName}{enter}`);
});

Cypress.Commands.add('deleteTodo', (todoName) => {
    cy.get(elements.todoListLabel)
        .contains(todoName)
        .next()
        .invoke('show')
        .click();
});