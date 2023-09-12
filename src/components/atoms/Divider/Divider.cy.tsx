import React from "react"
import { composeStories } from "@storybook/react"

import * as stories from "./Divider.stories"

const { Default } = composeStories(stories)

describe("<Divider />", () => {
  it("renders with default props", () => {
    cy.mount(<Default {...Default.args} />)

    cy.getByData("divider").should("have.text", "or continue with")
  })
})
