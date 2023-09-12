import React from "react"
import { composeStories } from "@storybook/react"

import * as stories from "./Button.stories"
import { btnClasses, btnLoadingClasses } from "."

const { Default, Secondary, Tertiary, Ghost, Glass, Large, Small, Loading } =
  composeStories(stories)

describe("<Button />", () => {
  it("renders with default props", () => {
    cy.mount(<Default {...Default.args} />)

    cy.getByData("button").should("have.text", "Button")
    cy.getByData("button").should("have.class", btnClasses.primary)
    cy.getByData("button").should("have.class", btnClasses.medium)
  })
  it("renders with variant secondary", () => {
    cy.mount(<Secondary {...Secondary.args} />)
    cy.getByData("button").should("have.class", btnClasses.secondary)
  })
  it("renders with variant tertiary", () => {
    cy.mount(<Tertiary {...Tertiary.args} />)
    cy.getByData("button").should("have.class", btnClasses.tertiary)
  })
  it("renders with variant ghost", () => {
    cy.mount(<Ghost {...Ghost.args} />)
    cy.getByData("button").should("have.class", btnClasses.ghost)
  })
  it("renders with variant glass", () => {
    cy.mount(<Glass {...Glass.args} />)
    cy.getByData("button").should("have.class", btnClasses.glass)
  })
  it("renders with size large", () => {
    cy.mount(<Large {...Large.args} />)
    cy.getByData("button").should("have.class", btnClasses.large)
  })
  it("renders with size small", () => {
    cy.mount(<Small {...Small.args} />)
    cy.getByData("button").should("have.class", btnClasses.small)
  })
  it("renders with loading icon", () => {
    cy.mount(<Loading {...Loading.args} />)
    
    cy.getByData("button-label").should("not.be.visible")
    cy.getByData("button-loading").should("have.class", btnLoadingClasses.primary)
    cy.getByData("button-loading").should("have.class", btnLoadingClasses.medium)
  })
})
