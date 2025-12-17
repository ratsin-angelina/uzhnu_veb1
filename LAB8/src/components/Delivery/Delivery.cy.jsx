// src/pages/Delivery.cy.jsx
import React from "react";
import { mount } from "cypress/react";
import Delivery from "./Delivery";

describe("Delivery component", () => {
  beforeEach(() => {
    mount(<Delivery />);
  });

  it("рендерить заголовок доставки", () => {
    cy.contains("ДОСТАВКА ДОДОМУ").should("exist");
  });

  it("показує інформацію про графік роботи", () => {
    cy.contains("Пн–Пт 11:00–21:00").should("exist");
    cy.contains("Сб–Нд 11:00–19:00").should("exist");
  });

  it("показує інформацію про вартість доставки", () => {
    cy.contains("Доставка — 120 грн.").should("exist");
    cy.contains("Безкоштовно").should("exist");
    cy.contains("від 500 грн").should("exist");
  });

  it("містить кнопку 'Замовити онлайн'", () => {
    cy.contains("Замовити онлайн")
      .should("exist")
      .and("have.attr", "href", "#payment-methods");
  });

  it("показує інформацію про час доставки та оплату", () => {
    cy.contains("Протягом однієї години").should("exist");
    cy.contains("Кур'єру після отримання замовлення").should("exist");
  });
});
