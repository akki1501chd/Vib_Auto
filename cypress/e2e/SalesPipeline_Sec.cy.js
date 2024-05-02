///<reference types = "cypress"/>

describe('TestSuites ', function () {
  //const runs = 20;

  //for (let i = 1; i <= runs; i++) {
  //it(`Run ${i}: visit URL`, function () {
  it('Sales Pipeline', function () {
    cy.visit("https://vibras.com/contractor/login"); // visit URL 
    cy.get('#email').type('webt580@gmail.com'); // Valid credentials 
    cy.get('#password').type('987654321');
    cy.get('.MuiButton-root').click()
    cy.get(':nth-child(2) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click() //Navigate to Sales Pipeline section
    //cy.get(':nth-child(2) > .MuiButtonBase-root').should('be.visible').should('be.enabled').eq(0).click();//({ multiple: true });
    cy.title().should('eq', 'vibras')
    //cy.get('.portal-logo').should('be.visible') //Logo Validation
    cy.wait(10000);
    cy.get('.css-1ph3js4').click() //Navigate to List
    //cy.get('.page-container').should('be.visible')
    cy.get('.css-zq4gof').click() //Navigate Back to Board
    cy.get('.btn_gp_sale_gp > :nth-child(1)').should('be.visible').should('be.enabled').click() //Click on New Lead
    cy.get('.MuiAutocomplete-popupIndicator').click() //Select Contact Drop Down
    cy.get('#contact-option-6').click()
    cy.get('#dealName').type('Vib_Deal')
    //cy.get('#dripJob > .MuiTypography-root').click()
    cy.get('.MuiInputBase-root > #stage').click() //Drop down stages
    cy.get('[data-value="0f219a18-1f6b-4f24-8046-20614a078216"]').click()
    cy.get('.d-flex-3 > .MuiButton-contained').should('be.visible').should('be.enabled').click() //Submit Button
    //cy.get('#composition-button').should('be.visible').should('be.enabled').click() //Click on Appointment
    //cy.get('#composition-menu').should('be.visible') 
    // cy.get('.btn_gp_sale_gp > :nth-child(3)').should('be.visible').should('be.enabled').click() //Proposals Button
    // cy.go('back');
    // cy.get(':nth-child(1) > .scroll-board > .droppable > .css-79elbk').drag(':nth-child(2) > .scroll-board > .droppable')



  })

})