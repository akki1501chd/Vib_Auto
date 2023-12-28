///<reference types = "cypress"/>

describe('TestSuites ', function () {
    //const runs = 10;
  
  //for (let i = 1; i <= runs; i++) {
       //it(`Run ${i}: visit URL`, function () {
       it('Task', function(){
          cy.visit("https://vibras.com/"); // visit URL 
          cy.get('#email').type('webt580@gmail.com'); // Valid credentials 
          cy.get('#password').type('987654321');
          cy.get('.MuiButton-root').click() 
          cy.get(':nth-child(6) > .MuiButtonBase-root').click() //Naviagte on Task Section
          //cy.wait(10000)
          cy.get('.css-13ot31q > .MuiInputBase-root > .MuiInputBase-input').click()//.should('be.visible').should('be.enabled').click().type('Demo 4').clear().type('Demo Test 4').clear()//Search Bar 
        
          cy.get('#orderBy').click() //Filter
          cy.get('[data-value="ASC"]').click() //Asscending
          cy.get('#orderBy').click() 
          cy.get('[data-value="DESC"]').click() //Descending
          cy.get('#orderBy').click()    
          cy.get('[data-value="Complete"]').click() //Completed
          
          //cy.get('.add-task-cs > .MuiBox-root > .MuiButtonBase-root').click() //Create Task

          
          
          
       
        })

    })