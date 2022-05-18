/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import * as elements from '../../selectors/global-selectors'

describe('As an user, I want to delete todos so that I can remove it from my list', () => {

    it('Delete an uncompleted todo from a list containing a single item', () => {
        const todosNames = [faker.lorem.words()];
        const todosIsCompleted = [false];
        cy.addTodoThroughLocalStorage(todosNames, todosIsCompleted);
        cy.get(elements.deleteTodo).click({force: true});
        cy.get(elements.listTodo).should('have.length', 0);  
    });

    it('Delete a completed todo from a list containing a single item', () => {
        const todosNames = [faker.lorem.words()];
        const todosIsCompleted = [true];
        cy.addTodoThroughLocalStorage(todosNames, todosIsCompleted);
        cy.get(elements.deleteTodo).click({force: true});
        cy.get(elements.listTodo).should('have.length', 0);
    });

    it('Delete a completed todo from a list containing three itens', () => {
        const todosNames = [faker.lorem.words(), faker.lorem.words(), faker.lorem.words()];
        const todosIsCompleted = [true, false, true];
        cy.addTodoThroughLocalStorage(todosNames, todosIsCompleted);
        cy.get(elements.deleteTodo).first().click({force: true});
        cy.get(elements.listTodo).should('have.length', 2);
    });

    it('Delete an uncompleted todo from a list containing four itens', () => {
        const todosNames = [faker.lorem.words(), faker.lorem.words(), faker.lorem.words(), faker.lorem.words()];
        const todosIsCompleted = [true, false, false, false];
        cy.addTodoThroughLocalStorage(todosNames, todosIsCompleted);
        cy.get(elements.deleteTodo).last().click({force: true});
        cy.get(elements.listTodo).should('have.length', 3);
    });

  })
