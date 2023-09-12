import React from "react"
import { composeStories } from "@storybook/react"

import * as stories from "./Modal.stories"

const { Default } = composeStories(stories)

describe("<Modal />", () => {
  it("renders with default props", () => {
    cy.mount(<Default {...Default.args} />)

    cy.getByData("modal-content").should("be.visible")
  })
})
