/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import * as elements from '../../selectors/global-selectors'

describe('As an user, I want to create todos so that I can have a list of todos', () => {
    let todoName = faker.lorem.words();

    beforeEach(() => {
      cy.visit('/')
    })
  
    it('Create a single todo', () => {
        cy.get(elements.newTodo).type(`${todoName}{enter}`);
        cy.get('.view > label').contains(`${todoName}`);
    })

    it('Create five todos in a row', () => {
        let todoNameFive;
        for(let i = 0; i < 5; i++){
            todoNameFive = faker.lorem.words();
            cy.get(elements.newTodo).type(`${todoNameFive}{enter}`);
            cy.get(elements.listTodo)
                .should('have.length', i+1)
                .last()
                .should('have.text', todoNameFive);
        }
    })
  })
