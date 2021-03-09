import HelloWorld from '@/components/HelloWorld'
import { mount } from '@cypress/vue'

describe('HelloWorld', () => {
  it('smoke tests', () => {
    expect(true).to.be.true
  })

  it('renders the component', () => {
    const message = 'Hello! Welcome to your Vue 3 app ✌️🌲!'
    mount(HelloWorld, {
      props: {
          msg: message
      }
    })

    cy.get('[data-testid=hello-title]')
      .should('contain.text', message)
  })
})