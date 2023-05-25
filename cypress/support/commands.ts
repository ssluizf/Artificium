Cypress.Commands.add("getByData", (selector: string) => {
  return cy.get(`[data-test=${selector}]`)
})
