/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import * as elements from '../../selectors/global-selectors'

describe('As an user, I want to update todos so that I can view the updated todo on a list', () => {

    it('Set a todo as completed', () => {
        const todosNames = [faker.lorem.words()];
        const todosIsCompleted = [false];
        cy.addTodoThroughLocalStorage(todosNames, todosIsCompleted);
        cy.get(elements.toggleComplete).click();
        cy.get(elements.listTodo).should('have.class', 'completed');

    });

    it('Set a todo as uncompleted', () => {
        const todosNames = [faker.lorem.words()];
        const todosIsCompleted = [true];
        cy.addTodoThroughLocalStorage(todosNames, todosIsCompleted);
        cy.get(elements.toggleComplete).click();
        cy.get(elements.listTodo).should('not.have.class', 'completed');
    });

    it('Set all todos as completed', () => {
        const todosNames = [faker.lorem.words(), faker.lorem.words(), faker.lorem.words()];
        const todosIsCompleted = [false, true, false];
        cy.addTodoThroughLocalStorage(todosNames, todosIsCompleted);
        cy.get(elements.toggleCompleteAll).click({force: true});
        cy.get(elements.listTodo).should('have.class', 'completed');
    });

    it('Update a todos description', () => {
        let todoName = faker.lorem.words();
        let todoUpdated = faker.lorem.words(); 
        const todosNames = [todoName];
        const todosIsCompleted = [true];
        cy.addTodoThroughLocalStorage(todosNames, todosIsCompleted);
        cy.get(elements.listTodo)
            .should('have.text', todoName)
            .dblclick()
            .clear()
            .type(`${todoUpdated}{enter}`);
        cy.get(elements.listTodo).should('have.text', `${todoUpdated}`);
    });
  })
