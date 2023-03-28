describe('Theme Base', () => {
  it('Should have NextUI base theme', () => {
    cy.visit('/') // Visita la página de inicio de tu aplicación
    cy.get('body').should('have.css', 'background-color', 'rgb(255, 255, 255)') // Verifica que el color de fondo sea blanco
    // cy.get('h1').should('have.css', 'font-family', 'Inter') // Verifica que el tipo de letra de los encabezados sea Inter
    // cy.get('button').should('have.css', 'background-color', 'rgb(0, 0, 238)') // Verifica que el color de fondo de los botones sea azul
  })
})