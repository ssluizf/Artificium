import React from "react"
import SocialLoginButton from "./index"

describe("<SocialLoginButton />", () => {
  const labelSample = "Continue with Sample"

  it("renders with label and google icon", () => {
    cy.mount(<SocialLoginButton label={labelSample} icon="google" />)
    cy.getByData("button").should("have.text", labelSample)
    cy.getByData("icon").should("have.class", "icon--medium")
  })

  it("renders with label and apple icon", () => {
    cy.mount(<SocialLoginButton label={labelSample} icon="apple" />)
    cy.getByData("button").should("have.text", labelSample)
    cy.getByData("icon").should("have.class", "icon--large")
  })
})
