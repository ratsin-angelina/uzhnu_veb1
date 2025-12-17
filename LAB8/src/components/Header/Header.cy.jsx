import React from 'react'; 
import Header from './Header';

describe('Header component', () => {
  it('renders header with brand name', () => {
    cy.mount(<Header />);

    cy.contains('SPANISH cuisine').should('exist');
  });

  it('renders navigation links', () => {
    cy.mount(<Header />);

    cy.contains('Головна').should('exist');
    cy.contains('Меню').should('exist');
    cy.contains('Про нас').should('exist');
    cy.contains('Контакти').should('exist');
    cy.contains('Бронювання').should('exist');
  });

  it('renders logo image', () => {
    cy.mount(<Header />);

    cy.get('img[alt="Логотип"]').should('exist');
  });
});