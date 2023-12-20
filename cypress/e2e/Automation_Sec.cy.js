///<reference types = "cypress"/>

describe('TestSuites ', function () {
    //const runs = 20;
  
  //for (let i = 1; i <= runs; i++) {
       //it(`Run ${i}: visit URL`, function () {
        it('Sales Pipeline', function(){
          cy.visit("https://vibras.com/"); // visit URL 
          cy.get('#email').type('webt580@gmail.com'); // Valid credentials 
          cy.get('#password').type('987654321');
          cy.get('.MuiButton-root').click() 
          cy.get(':nth-child(11) > .MuiButtonBase-root').click() //Automation Section
          cy.wait(10000)
          // cy.get('#faq-header-352183a9-08e0-485f-9e10-53ed76096745').click()
          // cy.get('#faq-header-a50e2f43-18d2-4879-bd05-1c12c2813a26').click()
          // cy.get('#faq-header-c94257b3-9a14-4ec1-9f68-c45b5c7843f1').click()
          // cy.get('#faq-content-c94257b3-9a14-4ec1-9f68-c45b5c7843f1 > :nth-child(1) > .css-h5fkc8 > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click()
          // cy.get('.MuiButton-outlined').click()
          
          
       
        })

    })