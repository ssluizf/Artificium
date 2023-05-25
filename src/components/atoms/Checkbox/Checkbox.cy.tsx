import React from "react"
import Checkbox from "./index"

describe("<Checkbox />", () => {
  it("renders with label", () => {
    const labelSample = "Checkbox Label"

    cy.mount(<Checkbox label={labelSample} />)
    cy.getByData("checkbox-label").should("have.text", labelSample)
  })
})
