///<reference types = "cypress"/>

describe('Test Suites', function(){
    it('Invoice', function() {
        cy.visit("https://vibras.com/contractor/login"); // visit URL   
        cy.get('#email').type("webt580@gmail.com")
        cy.get('#password').type("987654321")
        cy.get('.MuiButton-root').click()
        //cy.wait(10000)
        cy.get(':nth-child(15) > .MuiButtonBase-root').click()
        cy.get(':nth-child(1) > :nth-child(1) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > #filter').click()
        cy.get('[data-value="open"]').click()
        cy.get(':nth-child(1) > :nth-child(1) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > #filter').click()
        cy.get('[data-value="partially_paid"]').click()
        cy.get('.css-13ot31q > .MuiInputBase-root > .MuiInputBase-input').should('be.enabled').type("135982").click().clear()
        cy.get('.MuiInputBase-root > #actions').click()
        cy.get('[data-value="create"]').click() //Create new Invoice
        cy.get(':nth-child(8) > .MuiGrid-root > .MuiBox-root > .MuiButton-contained').should('be.enabled').click() //click on Next button without entering the details
        cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('#contact-option-3').click()
        cy.get(':nth-child(8) > .MuiGrid-root > .MuiBox-root > .MuiButton-contained').click() 


    })
 
    

}) 