///<reference types = "cypress"/>

describe('TestSuites ', function () {
  //const runs = 10;

  //for (let i = 1; i <= runs; i++) {
  //it(`Run ${i}: visit URL`, function () {
  it.only('Task Section', () => {
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
      cy.get(':nth-child(6) > .MuiButtonBase-root').click() //Naviagte on Task Section
      //cy.wait(10000)
      cy.get('.css-13ot31q > .MuiInputBase-root > .MuiInputBase-input').click().should('be.visible').should('be.enabled').click().type('Demo 4').clear().type('Demo Test 4').clear()//Search Bar 
      cy.get('#orderBy').click() //Filter
      cy.get('[data-value="ASC"]').click() //Asscending
      cy.get('#orderBy').click()
      cy.get('[data-value="DESC"]').click() //Descending
      cy.get('#orderBy').click()
      cy.get('[data-value="Complete"]').click() //Completed
    });
  });

  it('Create Task ', () => {
    cy.fixture('example.json').then((data) => {
      cy.log('Fixture Data:', data);
      // Use the fixture data in your test
      cy.visit(data.url);
      cy.get('#email').type(data.email);
      cy.get('#password').type(data.password);
      cy.get('.MuiButton-root').click();
      cy.get(':nth-child(6) > .MuiButtonBase-root').click() //Navigate to Task Section
      cy.wait(10000);
      cy.get('.MuiGrid-grid-md-1 > .MuiBox-root > .MuiButtonBase-root').should('be.visible').should('be.enabled').click()
      cy.get('#title').type(' Auto Testing')
      cy.get('#description').type('Description for automation testing')
      cy.get(':nth-child(1) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
      cy.get('[data-timestamp="1716921000000"]').click({ force: true });// Select Due Date
      cy.get(':nth-child(2) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
      cy.get('[data-timestamp="1716402600000"]').click({ force: true }  )//.click()
      // cy.get('.MuiPickersDay-today').click({ force: true });
      // cy.get('.MuiPickersDay-today')
    


    });

  });
});











