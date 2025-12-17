import React from "react";
import { mount } from "cypress/react";
import Footer from "./Footer";

describe("Footer component", () => {
  beforeEach(() => {
    mount(<Footer />);
  });

  it("рендерить логотип футера", () => {
    cy.get("img[alt='Spanish Cuisine Logo']").should("exist");
  });

  it("відображає поточний рік у копірайті", () => {
    const year = new Date().getFullYear();
    cy.contains(`© ${year} Spanish Cuisine`).should("exist");
  });

  it("містить навігаційні посилання", () => {
    cy.contains("Меню").should("have.attr", "href", "#menu");
    cy.contains("Про нас").should("have.attr", "href", "#about");
    cy.contains("Доставка").should("have.attr", "href", "#delivery");
    cy.contains("Пропозиції").should("have.attr", "href", "#offers");
  });

  it("показує контактний телефон та email", () => {
    cy.contains("+38 (044) 123 45 67")
      .should("have.attr", "href", "tel:+380441234567");

    cy.contains("info@spanishcuisine.ua")
      .should("have.attr", "href", "mailto:info@spanishcuisine.ua");
  });

  it("містить посилання на бронювання", () => {
    cy.contains("Забронювати столик →")
      .should("exist")
      .and("have.attr", "href", "#reservation");
  });
});
