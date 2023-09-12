import React from "react"
import { composeStories } from "@storybook/react"

import * as stories from "./Register.stories"

const { Default } = composeStories(stories)

describe("<Register />", () => {
  it("renders with default props", () => {
    cy.mount(<Default {...Default.args} />)

    cy.getByData("register-content").should("be.visible")
  })
})
