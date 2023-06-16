import React from "react"
import { composeStories } from "@storybook/react"

import * as stories from "./ButtonIcon.stories"

const { Default, Secondary, Tertiary, Ghost, Glass, Large, Small } =
  composeStories(stories)

describe("<ButtonIcon />", () => {
  it("renders with default props", () => {
    cy.mount(<Default {...Default.args} />)

    cy.getByData("button-icon").should("have.class", "btn-icon")
    cy.getByData("button-icon").should("have.class", "btn--primary")
    cy.getByData("button-icon").should("have.class", "btn--medium")
  })
  it("renders variant secondary", () => {
    cy.mount(<Secondary {...Secondary.args} />)
    cy.getByData("button-icon").should("have.class", "btn--secondary")
  })
  it("renders variant tertiary", () => {
    cy.mount(<Tertiary {...Tertiary.args} />)
    cy.getByData("button-icon").should("have.class", "btn--tertiary")
  })
  it("renders variant ghost", () => {
    cy.mount(<Ghost {...Ghost.args} />)
    cy.getByData("button-icon").should("have.class", "btn--ghost")
  })
  it("renders variant glass", () => {
    cy.mount(<Glass {...Glass.args} />)
    cy.getByData("button-icon").should("have.class", "btn--glass")
  })
  it("renders with size large", () => {
    cy.mount(<Large {...Large.args} />)
    cy.getByData("button-icon").should("have.class", "btn--large")
  })
  it("renders with size small", () => {
    cy.mount(<Small {...Small.args} />)
    cy.getByData("button-icon").should("have.class", "btn--small")
  })
})
