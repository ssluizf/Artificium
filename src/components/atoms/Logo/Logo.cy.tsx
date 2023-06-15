import React from "react"
import { composeStories } from "@storybook/react"

import * as stories from "./Logo.stories"

const { Default } = composeStories(stories)

describe("<Logo/>", () => {
  it("renders logo with default props", () => {
    cy.mount(<Default {...Default.args} />)
    cy.getByData("icon")
  })
})
