describe('Test du bouton', () => {
    it('Vérifie que le bouton est visible et peut être cliqué', () => {
      // On charge la page HTML
      cy.visit('index.html');
      
      // On vérifie que le bouton existe
      cy.get('button').should('be.visible');
  
      // On clique sur le bouton (si tu as une action associée)
      cy.get('button').click();
  
      // Tu peux vérifier l'effet après le clic (par exemple, un changement de texte)
      cy.get('button').should('have.text', 'Clic effectué');
    });
  });
  