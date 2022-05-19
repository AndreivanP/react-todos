/// <reference types="cypress" />

import Data from '../../utils/data'
import * as elements from '../../selectors/global-selectors'

describe('As an user, I want to update todos so that I can view the updated todo on a list', () => {

    it('Set a todo as completed', () => {
        const todoData = [{name: Data.setRandomDesc(), isCompleted: false}];

        cy.addTodoThroughLocalStorage(todoData);

        cy.get(elements.toggleComplete).click();
        cy.get(elements.listTodo).should('have.class', 'completed');
    });

    it('Set a todo as incomplete', () => {
        const todoData = [{name: Data.setRandomDesc(), isCompleted: true}];

        cy.addTodoThroughLocalStorage(todoData);

        cy.get(elements.toggleComplete).click();
        cy.get(elements.listTodo).should('not.have.class', 'completed');
    });

    it('Set all todos as completed', () => {
        const todoData = [{name: Data.setRandomDesc(), isCompleted: false},
                          {name: Data.setRandomDesc(), isCompleted: true},
                          {name: Data.setRandomDesc(), isCompleted: false}];

        cy.addTodoThroughLocalStorage(todoData);

        cy.get(elements.toggleCompleteAll).click({force: true});
        cy.get(elements.listTodo).should('have.class', 'completed');
    });

    it('Update a todos description of an incomplete todo', () => {
        let todoUpdated = Data.setRandomDesc(); 
        const todoData = [{name: Data.setRandomDesc(), isCompleted: false}];

        cy.addTodoThroughLocalStorage(todoData);

        cy.updateTodo(todoData[0].name, todoUpdated);
        cy.get(elements.listTodo).should('have.text', `${todoUpdated}`);
    });

    it('Update a todos description of completed todo', () => {
        let todoUpdated = Data.setRandomDesc(); 
        const todoData = [{name: Data.setRandomDesc(), isCompleted: true}];

        cy.addTodoThroughLocalStorage(todoData);

        cy.updateTodo(todoData[0].name, todoUpdated);
        cy.get(elements.listTodo).should('have.text', `${todoUpdated}`);
    });
  })
