import React from "react"
import { composeStories } from "@storybook/react"

import * as stories from "./Button.stories"

const { Default, Secondary, Tertiary, Ghost, Glass, Large, Small } =
  composeStories(stories)

describe("<Button />", () => {
  it("renders with label and default props", () => {
    cy.mount(<Default {...Default.args} />)

    cy.getByData("button").should("have.text", "Button")
    cy.getByData("button").should("have.class", "btn--primary")
    cy.getByData("button").should("have.class", "btn--medium")
  })
  it("renders with variant secondary", () => {
    cy.mount(<Secondary {...Secondary.args} />)
    cy.getByData("button").should("have.class", "btn--secondary")
  })
  it("renders with variant tertiary", () => {
    cy.mount(<Tertiary {...Tertiary.args} />)
    cy.getByData("button").should("have.class", "btn--tertiary")
  })
  it("renders with variant ghost", () => {
    cy.mount(<Ghost {...Ghost.args} />)
    cy.getByData("button").should("have.class", "btn--ghost")
  })
  it("renders with variant glass", () => {
    cy.mount(<Glass {...Glass.args} />)
    cy.getByData("button").should("have.class", "btn--glass")
  })
  it("renders with size large", () => {
    cy.mount(<Large {...Large.args} />)
    cy.getByData("button").should("have.class", "btn--large")
  })
  it("renders with size small", () => {
    cy.mount(<Small {...Small.args} />)
    cy.getByData("button").should("have.class", "btn--small")
  })
})
