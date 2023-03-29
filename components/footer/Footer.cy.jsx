import React from 'react'
import Footer from './Footer'

describe('<Footer />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Footer />)
    cy.viewport(720, 750) // Set viewport to 550px x 750px
    
  })
})