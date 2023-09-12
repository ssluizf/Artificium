import React from "react"
import { composeStories } from "@storybook/react"

import * as stories from "./Avatar.stories"

const { Default } = composeStories(stories)

describe("<Avatar />", () => {
  it("renders with default props", () => {
    cy.mount(<Default {...Default.args} />)

    cy.getByData("avatar").should("have.attr", "src")
    cy.getByData("avatar").should("have.attr", "alt", "Avatar")
    cy.getByData("avatar").should("have.class", "h-12 w-12 rounded-[20px]")
  })
})
