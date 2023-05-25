import React from "react"
import Input from "./index"

describe("<Input />", () => {
  it("renders with label", () => {
    const inputSample = "Input Label"

    cy.mount(<Input label={inputSample} />)
    cy.getByData("input-label").should("have.text", inputSample)
  })
})
