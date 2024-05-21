describe('WebP Image Test', () => {
  it('should load images as webp format', () => {
    cy.visit('http://localhost:3000'); 

   
    cy.get('img').each(($img) => {
      const src = $img.attr('src');
      cy.wrap(src).should('include', '.webp');
    });
  });
});