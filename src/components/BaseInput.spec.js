import { mount } from '@cypress/vue'
import BaseInput from './BaseInput'

describe('BaseInput', () => {
  it('mounts', () => {
    const inputValue = 'Hello World'
    const placeholder = 'Type in here...'

    mount(BaseInput)
    cy.get('[data-testid=input]')
      .should('have.attr', 'placeholder', placeholder)
      .type(inputValue)
      .should('have.value', inputValue)
      .should('not.have.value', placeholder)
  })
})