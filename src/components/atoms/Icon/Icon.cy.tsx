import React from "react"
import { composeStories } from "@storybook/react"

import * as stories from "./Icon.stories"
import { iconClasses } from "."

const { Default, Large, Small } = composeStories(stories)

describe("<Icon />", () => {
  it("renders with default props", () => {
    cy.mount(<Default {...Default.args} />)
    cy.getByData("icon").should("have.class", iconClasses.medium)
  })
  it("renders with size large", () => {
    cy.mount(<Large {...Large.args} />)
    cy.getByData("icon").should("have.class", iconClasses.large)
  })
  it("renders with size small", () => {
    cy.mount(<Small {...Small.args} />)
    cy.getByData("icon").should("have.class", iconClasses.small)
  })
})
