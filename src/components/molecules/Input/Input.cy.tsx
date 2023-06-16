import React from "react"
import { composeStories } from "@storybook/react"

import * as stories from "./Input.stories"

const { Label, Hint, Icon, Error, Warning, Success, Password } =
  composeStories(stories)

describe("<Input />", () => {
  it("renders with label", () => {
    cy.mount(<Label {...Label.args} />)
    cy.getByData("input-label").should("have.text", "Input Label")
    cy.getByData("input-container").should("have.class", "input--default")
  })
  it("renders with hint", () => {
    cy.mount(<Hint {...Hint.args} />)
    cy.getByData("input-hint").should("have.text", "Input Hint")
  })
  it("renders with icon", () => {
    cy.mount(<Icon {...Icon.args} />)
    cy.getByData("input-icon")
  })
  it("renders with variant error", () => {
    cy.mount(<Error {...Error.args} />)
    cy.getByData("input-container").should("have.class", "input--error")
  })
  it("renders with variant warning", () => {
    cy.mount(<Warning {...Warning.args} />)
    cy.getByData("input-container").should("have.class", "input--warning")
  })
  it("renders with variant success", () => {
    cy.mount(<Success {...Success.args} />)
    cy.getByData("input-container").should("have.class", "input--success")
  })
  it("should switch type 'password', when eye button is clicked", () => {
    cy.mount(<Password {...Password.args} />)

    cy.getByData("input-eye-button")
    cy.getByData("input").should("have.attr", "type", "password")

    cy.getByData("input").focus()
    cy.getByData("input-eye-button").should("be.visible")
    cy.getByData("input-eye-button").click()
    cy.getByData("input").should("have.attr", "type", "text")

    cy.getByData("input").focus()
    cy.getByData("input-eye-button").should("be.visible")
    cy.getByData("input-eye-button").click()
    cy.getByData("input").should("have.attr", "type", "password")
  })
})
