cypress/integration/myTest.spec.js

describe('My Test', () => {
    it('should use a fixture', () => {
      // Load the contents of the 'example.json' fixture
      cy.fixture('example.json').then((data) => {
        // 'data' now contains the content of the 'example.json' fixture
        cy.log('Fixture Data:', data);
  
        // Use the fixture data in your test
        cy.visit(data.url);
        cy.get('#email').type(data.email);
        cy.get('#password').type(data.password);
        cy.get('.MuiButton-root').click(); 
  
        // Continue with your test... 

      });



    });
 });

//  it('Use if fixture',()=>{
//   cy.fixture('example.json').then(data) => {
//     cy.log('Fixture Data:', data);

//   }

//  })


  
