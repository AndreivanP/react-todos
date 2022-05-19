/// <reference types="cypress" />

import Data from '../../utils/data'
import * as elements from '../../selectors/global-selectors'

describe('As an user, I want to create todos so that I can have a list of todos', () => {
    let todoName = Data.setRandomDesc();

    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Create five todos in a row when there is no todo added', () => {
        let todoNameFive;
        for(let i = 0; i < 5; i++){
            todoNameFive = Data.setRandomDesc();
            cy.addTodo(todoNameFive);
            cy.get(elements.listTodo)
                .should('have.length', i+1)
                .last()
                .should('have.text', todoNameFive);
        }
    });

    it('Add a new todo after set the current items to completed', () => {
        const todoData = [{name: Data.setRandomDesc(), isCompleted: false},
                          {name: Data.setRandomDesc(), isCompleted: false},
                          {name: Data.setRandomDesc(), isCompleted: true},
                          {name: Data.setRandomDesc(), isCompleted: false},
                          {name: Data.setRandomDesc(), isCompleted: true}]

        cy.addTodoThroughLocalStorage(todoData);

        cy.filterCompleted();
        cy.addTodo(todoName);
        cy.filterActive();
        cy.get(elements.listTodo)
            .last()
            .should('have.text', todoName);
    })

    it('Add a new todo after filter only active items', () => {
        const todoData = [{name: Data.setRandomDesc(), isCompleted: false},
                          {name: Data.setRandomDesc(), isCompleted: true},
                          {name: Data.setRandomDesc(), isCompleted: false}]

        cy.addTodoThroughLocalStorage(todoData);
        
        cy.filterActive();
        cy.addTodo(todoName);
        cy.get(elements.listTodo)
            .last()
            .should('have.text', todoName);
    })
  })
