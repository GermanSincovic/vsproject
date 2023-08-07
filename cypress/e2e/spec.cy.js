describe('template spec', () => {
  it('Перевірка титульної сторінки', () => {
    cy.visit('https://google.com'); // Відкриваємо веб-сайт за адресою
  
      cy.title().should('include', 'Google'); // Перевіряємо, чи титульна сторінка містить 'Example Domain'
  })
})