import React from "react"
import { composeStories } from "@storybook/react"

import * as stories from "./SocialLoginButton.stories"

const { Google, Apple } = composeStories(stories)

describe("<SocialLoginButton />", () => {
  it("renders with label and google icon", () => {
    cy.mount(<Google {...Google.args} />)
    cy.getByData("button").should("have.text", "Google Account")
    cy.getByData("icon").should("have.class", "icon--medium")
  })

  it("renders with label and apple icon", () => {
    cy.mount(<Apple {...Apple.args} />)
    cy.getByData("button").should("have.text", "Apple Account")
    cy.getByData("icon").should("have.class", "icon--large")
  })
})
