/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import * as elements from '../../selectors/global-selectors'

describe('As an user, I want to create todos so that I can have a list of todos', () => {
    let todoName = faker.lorem.words();

    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Create five todos in a row when there is no todo added', () => {
        let todoNameFive;
        for(let i = 0; i < 5; i++){
            todoNameFive = faker.lorem.words();
            cy.get(elements.newTodo).type(`${todoNameFive}{enter}`);
            cy.get(elements.listTodo)
                .should('have.length', i+1)
                .last()
                .should('have.text', todoNameFive);
        }
    });

    it('Add a new todo after set the current items to completed', () => {
        const todosNames = [faker.lorem.words(), faker.lorem.words(), faker.lorem.words(), 
            faker.lorem.words(), faker.lorem.words()];
        const todosIsCompleted = [false, false, true, false, true];
        cy.addTodoThroughLocalStorage(todosNames, todosIsCompleted);
        cy.filterCompleted();
        cy.get(elements.newTodo).type(`${todoName}{enter}`);
        cy.filterActive();
        cy.get(elements.listTodo)
            .last()
            .should('have.text', todoName);
    })

    it('Add a new todo after filter only active items', () => {
        const todosNames = [faker.lorem.words(), faker.lorem.words(), faker.lorem.words(), 
            faker.lorem.words(), faker.lorem.words()];
        const todosIsCompleted = [false, false, true, false, true];
        cy.addTodoThroughLocalStorage(todosNames, todosIsCompleted);
        cy.filterActive();
        cy.get(elements.newTodo).type(`${todoName}{enter}`);
        cy.get(elements.listTodo)
        .last()
        .should('have.text', todoName);
    })
  })
