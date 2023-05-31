import React from "react"
import Icon from "./index"

describe("<Icon />", () => {
  const nameSample = "alertCircle"

  it("renders icon with default props", () => {
    cy.mount(<Icon name={nameSample} />)
    cy.getByData("icon").should("have.class", "icon--medium")
  })
  it("renders with size large", () => {
    cy.mount(<Icon name={nameSample} size="large" />)
    cy.getByData("icon").should("have.class", "icon--large")
  })
  it("renders with size medium", () => {
    cy.mount(<Icon name={nameSample} size="medium" />)
    cy.getByData("icon").should("have.class", "icon--medium")
  })
  it("renders with size small", () => {
    cy.mount(<Icon name={nameSample} size="small" />)
    cy.getByData("icon").should("have.class", "icon--small")
  })
})
