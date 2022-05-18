/// <reference types="cypress" />

import { faker } from '@faker-js/faker';

describe('As an user, I want to filter todos so that I can view the filtered todos', () => {

    beforeEach(() => {
        const todosNames = [faker.lorem.words(), faker.lorem.words(), faker.lorem.words(), faker.lorem.words(), faker.lorem.words()];
        const todosIsCompleted = [false, false, true, false, true];
        cy.addTodoThroughLocalStorage(todosNames, todosIsCompleted);
      })

    it('Filter Active todos', () => {
        cy.get('a[href*="active"]').click();
        cy.get('.todo-list li').should('have.length', 3)
    });

    it('Filter Completed todos', () => {
        cy.get('a[href*="completed"]').click();
        cy.get('.todo-list li').should('have.length', 2)
    });
  })
