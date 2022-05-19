/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import * as elements from '../../selectors/global-selectors'

describe('As an user, I want to filter todos so that I can view the filtered todos', () => {

  beforeEach(() => {
    const todosNames = [faker.lorem.words(), faker.lorem.words(), faker.lorem.words(), 
                        faker.lorem.words(), faker.lorem.words()];
    const todosIsCompleted = [false, false, true, false, true];
    cy.addTodoThroughLocalStorage(todosNames, todosIsCompleted);
  })

  it('Filter Active todos', () => {
    cy.filterActive();
    cy.get(elements.listTodo).should('have.length', 3)
  });

  it('Filter Completed todos', () => {
    cy.filterCompleted();
    cy.get(elements.listTodo).should('have.length', 2)
  });
})
