import {generateKey} from '../utils/generate-key.js'

Cypress.Commands.add('addTodoThroughLocalStorage', (todoNames, isCompleted) => {
    let arrayTodos = [];
    for(let i = 0; i < todoNames.length; i++){
        arrayTodos.push({"id": generateKey(), "title": todoNames[i], "completed": isCompleted[i]})
    }
    window.localStorage.setItem('react-todos', JSON.stringify(arrayTodos));
    cy.visit('/')
});