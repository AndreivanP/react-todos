/// <reference types="cypress" />

import Data from '../../utils/data'
import * as elements from '../../selectors/global-selectors'

describe('As an user, I want to filter todos so that I can view the filtered todos', () => {

  beforeEach(() => {
    const todoData = [{name: Data.setRandomDesc(), isCompleted: false},
                      {name: Data.setRandomDesc(), isCompleted: false},
                      {name: Data.setRandomDesc(), isCompleted: true},
                      {name: Data.setRandomDesc(), isCompleted: false},
                      {name: Data.setRandomDesc(), isCompleted: true}]
    cy.addTodoThroughLocalStorage(todoData);
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
