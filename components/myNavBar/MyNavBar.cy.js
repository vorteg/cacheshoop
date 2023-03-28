import React from 'react'
import MyNavBar from './MyNavBar'

describe('<MyNavBar />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MyNavBar />)
  })
})