import React from "react"
import { composeStories } from "@storybook/react"

import * as stories from "./Input.stories"

const { Label, Hint, Icon } = composeStories(stories)

describe("<Input />", () => {
  it("renders with label", () => {
    cy.mount(<Label {...Label.args} />)
    cy.getByData("input-label").should("have.text", "Input Label")
  })
  it("renders with hint", () => {
    cy.mount(<Hint {...Hint.args} />)
    cy.getByData("input-hint").should("have.text", "Input Hint")
  })
  it("renders with icon", () => {
    cy.mount(<Icon {...Icon.args} />)
    cy.getByData("input-icon")
  })
})
