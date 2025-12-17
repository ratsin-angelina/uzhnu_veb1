import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import About from './About';

const WrappedAbout = () => (
  <BrowserRouter>
    <About />
  </BrowserRouter>
);

describe('About component', () => {

  it('navigates to /menu when the "НАШЕ МЕНЮ" card is clicked', () => {
    cy.mount(<WrappedAbout />); 
    
    cy.contains('НАШЕ МЕНЮ').closest('div').click();
    
    cy.location('pathname').should('eq', '/menu'); 
  });
});