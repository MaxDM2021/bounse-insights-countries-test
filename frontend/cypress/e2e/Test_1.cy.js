import cy from "cypress";

describe("Log in", function() {
    it("Sing in", function() {
        cy.visit("https://keen-cascaron-8399a0.netlify.app")
        cy.get('input[type="text"]').type('ireland')
        cy.get('button[type="submit"]').click()

        cy.contains('ireland').click()
        cy.location('pathname').should('eq', '/countries/ireland')
        cy.go('back')
        
    })
})
