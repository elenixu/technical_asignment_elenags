describe('Goal Display Test', () => {
  it('should display the correct number of goals', () => {
    cy.visit('http://localhost:3000'); 

    cy.get('.MuiPaper-root').should('have.length', 17);
  });
});
