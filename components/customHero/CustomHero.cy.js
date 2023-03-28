import React from 'react'
import CustomHero from './CustomHero'

describe('<CustomHero />', () => {

  it('renders', () => {
    cy.mount(<CustomHero />) 
    cy.get('h1').should('contain', 'Bienvenido a la tienda') // verifica que el encabezado se haya renderizado
    // errors, so we let them fail the test
})
    // see: https://on.cypress.io/mounting-react
    
  })