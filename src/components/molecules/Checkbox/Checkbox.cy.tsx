import React from "react"
import { composeStories } from "@storybook/react"

import * as stories from "./Checkbox.stories"

const { Default } = composeStories(stories)

describe("<Checkbox />", () => {
  it("renders with label", () => {
    cy.mount(<Default {...Default.args} />)
    cy.getByData("checkbox-label").should("have.text", "Checkbox Label")
  })
})
