import React from "react"
import { composeStories } from "@storybook/react"

import * as stories from "./User.stories"
import { variantClasses } from "."

const { Default } = composeStories(stories)

describe("<User />", () => {
  it("renders with default props", () => {
    cy.mount(<Default {...Default.args} />)

    cy.getByData("user-name").should("have.text", "Intellisys")
    cy.getByData("user-description").should("have.text", "12 members")
    cy.getByData("user-description").should("have.class", variantClasses.default)
  })
})
