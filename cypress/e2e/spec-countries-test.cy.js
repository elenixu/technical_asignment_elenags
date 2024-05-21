describe('Country Display Test', () => {
  it('should display 5 countries for each goal', () => {
    cy.visit('http://localhost:3000'); 

    
    cy.get('.MuiPaper-root').each(($card) => {
      cy.wrap($card).find('.MuiTableBody-root').find('tr').should('have.length', 5);
    });
  });
});