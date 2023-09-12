import React from "react"
import { composeStories } from "@storybook/react"

import * as stories from "./AuthHeader.stories"

const { Default, LoginLinkVisible } = composeStories(stories)

describe("<AuthHeader />", () => {
  it("renders with default props", () => {
    cy.mount(<Default {...Default.args} />)

    cy.getByData("auth-header").should("not.have.text", "Log In")
  })
  it("renders with login link visible", () => {
    cy.mount(<LoginLinkVisible {...LoginLinkVisible.args} />)

    cy.getByData("auth-header").should("have.text", "Log In")
  })
})
