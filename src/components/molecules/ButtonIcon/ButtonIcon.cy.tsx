import React from "react"
import ButtonIcon from "./index"

describe("<ButtonIcon />", () => {
  const iconSample = "alertCircle"

  it("renders with icon and defaultProps", () => {
    cy.mount(<ButtonIcon icon={iconSample} />)

    cy.getByData("button-icon").should("have.class", "btn-icon")
    cy.getByData("button-icon").should("have.class", "btn--primary")
    cy.getByData("button-icon").should("have.class", "btn--medium")
  })
  it("renders with icon and variant primary", () => {
    cy.mount(<ButtonIcon icon={iconSample} variant="primary" />)
    cy.getByData("button-icon").should("have.class", "btn--primary")
  })
  it("renders with icon and variant secondary", () => {
    cy.mount(<ButtonIcon icon={iconSample} variant="secondary" />)
    cy.getByData("button-icon").should("have.class", "btn--secondary")
  })
  it("renders with icon and variant tertiary", () => {
    cy.mount(<ButtonIcon icon={iconSample} variant="tertiary" />)
    cy.getByData("button-icon").should("have.class", "btn--tertiary")
  })
  it("renders with icon and variant ghost", () => {
    cy.mount(<ButtonIcon icon={iconSample} variant="ghost" />)
    cy.getByData("button-icon").should("have.class", "btn--ghost")
  })
  it("renders with icon and variant glass", () => {
    cy.mount(<ButtonIcon icon={iconSample} variant="glass" />)
    cy.getByData("button-icon").should("have.class", "btn--glass")
  })
  it("renders with size large", () => {
    cy.mount(<ButtonIcon icon={iconSample} size="large" />)
    cy.getByData("button-icon").should("have.class", "btn--large")
  })
  it("renders with size medium", () => {
    cy.mount(<ButtonIcon icon={iconSample} size="medium" />)
    cy.getByData("button-icon").should("have.class", "btn--medium")
  })
  it("renders with size small", () => {
    cy.mount(<ButtonIcon icon={iconSample} size="small" />)
    cy.getByData("button-icon").should("have.class", "btn--small")
  })
})
