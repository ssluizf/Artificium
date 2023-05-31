import React from "react"
import Button from "./index"

describe("<Button />", () => {
  const labelSample = "Button Label"

  it("renders with label and default props", () => {
    cy.mount(<Button label={labelSample} />)
    cy.getByData("button").should("have.text", labelSample)

    cy.getByData("button").should("have.class", "btn--primary")
    cy.getByData("button").should("have.class", "btn--medium")
  })
  it("renders with variant primary", () => {
    cy.mount(<Button label={labelSample} variant="primary" />)
    cy.getByData("button").should("have.class", "btn--primary")
  })
  it("renders with variant secondary", () => {
    cy.mount(<Button label={labelSample} variant="secondary" />)
    cy.getByData("button").should("have.class", "btn--secondary")
  })
  it("renders with variant tertiary", () => {
    cy.mount(<Button label={labelSample} variant="tertiary" />)
    cy.getByData("button").should("have.class", "btn--tertiary")
  })
  it("renders with variant ghost", () => {
    cy.mount(<Button label={labelSample} variant="ghost" />)
    cy.getByData("button").should("have.class", "btn--ghost")
  })
  it("renders with variant glass", () => {
    cy.mount(<Button label={labelSample} variant="glass" />)
    cy.getByData("button").should("have.class", "btn--glass")
  })
  it("renders with size large", () => {
    cy.mount(<Button label={labelSample} size="large" />)
    cy.getByData("button").should("have.class", "btn--large")
  })
  it("renders with size medium", () => {
    cy.mount(<Button label={labelSample} size="medium" />)
    cy.getByData("button").should("have.class", "btn--medium")
  })
  it("renders with size small", () => {
    cy.mount(<Button label={labelSample} size="small" />)
    cy.getByData("button").should("have.class", "btn--small")
  })
})
