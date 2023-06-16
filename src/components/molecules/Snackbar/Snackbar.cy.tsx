import React from "react"
import { composeStories } from "@storybook/react"

import { variantClasses, variantIcons } from "./"
import * as stories from "./Snackbar.stories"

const { Tip, Warning, Error, Success } = composeStories(stories)

describe("<Snackbar />", () => {
  it("renders variant tip", () => {
    cy.mount(<Tip {...Tip.args} />)

    cy.getByData("snackbar").should("have.class", variantClasses.tip)
    cy.getByData("snackbar-icon").should("have.attr", "name", variantIcons.tip)
  })
  it("renders variant warning", () => {
    cy.mount(<Warning {...Warning.args} />)

    cy.getByData("snackbar").should("have.class", variantClasses.warning)
    cy.getByData("snackbar-icon").should(
      "have.attr",
      "name",
      variantIcons.warning
    )
  })
  it("renders variant error", () => {
    cy.mount(<Error {...Error.args} />)

    cy.getByData("snackbar").should("have.class", variantClasses.error)
    cy.getByData("snackbar-icon").should(
      "have.attr",
      "name",
      variantIcons.error
    )
  })
  it("renders variant success", () => {
    cy.mount(<Success {...Success.args} />)

    cy.getByData("snackbar").should("have.class", variantClasses.success)
    cy.getByData("snackbar-icon").should(
      "have.attr",
      "name",
      variantIcons.success
    )
  })
  it("render hidden", () => {
    cy.mount(<Tip {...Tip.args} open={false} />)

    cy.getByData("snackbar").should("not.be.visible")
  })
  it("should close after auto hide duration", () => {
    const onCloseSpy = cy.spy().as("onCloseSpy")
    const timeout = 3000

    cy.mount(
      <Tip {...Tip.args} onClose={onCloseSpy} autoHideDuration={timeout} />
    )

    cy.wait(timeout)

    cy.get("@onCloseSpy").should("have.been.calledOnceWith")
  })
})
