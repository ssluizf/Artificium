import React from "react"
import { composeStories } from "@storybook/react"

import * as stories from "./Icon.stories"

const { Default, Large, Small } = composeStories(stories)

describe("<Icon />", () => {
  it("renders icon with default props", () => {
    cy.mount(<Default {...Default.args} />)
    cy.getByData("icon").should("have.class", "icon--medium")
  })
  it("renders with size large", () => {
    cy.mount(<Large {...Large.args} />)
    cy.getByData("icon").should("have.class", "icon--large")
  })
  it("renders with size small", () => {
    cy.mount(<Small {...Small.args} />)
    cy.getByData("icon").should("have.class", "icon--small")
  })
})
