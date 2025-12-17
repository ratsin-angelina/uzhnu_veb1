// src/pages/SpecialOffers.cy.jsx
import React from "react";
import { mount } from "cypress/react";
import SpecialOffers from "./SpecialOffers";

describe("SpecialOffers component", () => {
  beforeEach(() => {
    mount(<SpecialOffers />);
  });

  it("рендерить заголовок секції", () => {
    cy.contains("СПЕЦІАЛЬНІ ПРОПОЗИЦІЇ").should("exist");
  });

  it("показує першу пропозицію за замовчуванням", () => {
    cy.contains("Вечір Тапасів").should("exist");
    cy.contains("Знижка 20%").should("exist");
  });

  it("перемикає слайд вправо (next)", () => {
    cy.contains(">").click();

    cy.contains("Келих Сангрії у подарунок").should("exist");
  });

  it("перемикає слайд вліво (prev)", () => {
    cy.contains(">").click(); // переходимо на другий
    cy.contains("<").click(); // повертаємось

    cy.contains("Вечір Тапасів").should("exist");
  });

  it("перемикає слайд по кліку на індикатор (dot)", () => {
    cy.get("span").eq(2).click();

    cy.contains("Спеціальна пропозиція від Шефа").should("exist");
  });

  it("відображає кнопку 'Детальніше'", () => {
    cy.contains("Детальніше →")
      .should("exist")
      .and("have.attr", "href", "#details");
  });
});
