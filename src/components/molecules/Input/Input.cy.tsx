import React from "react"
import Input from "./index"

describe("<Input />", () => {
  it("renders with defaultProps", () => {
    cy.mount(<Input />)
  })
  it("renders with label", () => {
    const labelSample = "Input Label"

    cy.mount(<Input label={labelSample} />)
    cy.getByData("input-label").should("have.text", labelSample)
  })
  it("renders with hint", () => {
    const hintSample = "Hint text"

    cy.mount(<Input hint={hintSample} />)
    cy.getByData("input-hint").should("have.text", hintSample)
  })
})
