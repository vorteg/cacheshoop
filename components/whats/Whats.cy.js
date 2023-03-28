
import Whats from './Whats'


describe('<Whats Button />', () => {

  it('renders', () => {
    cy.mount(<Whats />) 
    //cy.get('h6').should('contain', 'Aqui van las distintas formas de pago.') // verifica que el encabezado se haya renderizado
    // errors, so we let them fail the test
})
    // see: https://on.cypress.io/mounting-react
    
  })