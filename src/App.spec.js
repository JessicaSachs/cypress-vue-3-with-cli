import { mount } from '@cypress/vue'
import App from './App'

describe('App', () => {
  it('renders the welcome message and shows the welcome image', () => {
    mount(App)

    cy.get(document.body)
      .should('contain.text', 'Welcome')
      .and('contain.html', 'img')
      .get('a')
      .should('contain.text', 'eslint')
  })
})