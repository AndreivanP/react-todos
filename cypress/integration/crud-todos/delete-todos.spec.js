/// <reference types="cypress" />

import Data from '../../utils/data'
import * as elements from '../../selectors/global-selectors'

describe('As an user, I want to delete todos so that I can remove it from my list', () => {

    it('Delete an incomplete todo from a list containing a single item', () => {
        const todoData = [{ name: Data.setRandomDesc(), isCompleted: false }]

        cy.addTodoThroughLocalStorage(todoData);

        cy.deleteTodo(todoData[0].name);

        cy.get(elements.listTodo).should('have.length', 0);
    });

    it('Delete a completed todo from a list containing a single item', () => {
        const todoData = [{ name: Data.setRandomDesc(), isCompleted: true }]

        cy.addTodoThroughLocalStorage(todoData);

        cy.deleteTodo(todoData[0].name);

        cy.get(elements.listTodo).should('have.length', 0);
    });

    it('Delete a completed todo from a list containing three itens', () => {
        const todoData = [{ name: Data.setRandomDesc(), isCompleted: true },
        { name: Data.setRandomDesc(), isCompleted: false },
        { name: Data.setRandomDesc(), isCompleted: true }]

        cy.addTodoThroughLocalStorage(todoData);

        cy.deleteTodo(todoData[0].name);

        cy.get(elements.listTodo).should('have.length', 2);
    });

    it('Delete an incomplete todo from a list containing four itens', () => {
        const todoData = [{ name: Data.setRandomDesc(), isCompleted: true },
        { name: Data.setRandomDesc(), isCompleted: false },
        { name: Data.setRandomDesc(), isCompleted: false },
        { name: Data.setRandomDesc(), isCompleted: false }]

        cy.addTodoThroughLocalStorage(todoData);

        cy.deleteTodo(todoData[3].name);

        cy.get(elements.listTodo).should('have.length', 3);
    });
});
