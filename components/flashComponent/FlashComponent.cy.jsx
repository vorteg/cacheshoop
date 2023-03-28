import React from 'react'
import FlashComponent from './FlashComponent'

describe('<FlashComponent />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FlashComponent />)
  })
})