///<reference types = "cypress"/>

describe('TestSuites ', function () {
    //const runs = 20;
  
  //for (let i = 1; i <= runs; i++) {
       //it(`Run ${i}: visit URL`, function () {
       it('Automation & Drips', () => {
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
              cy.get(':nth-child(11) > .MuiButtonBase-root').click() //Automation Section
              cy.wait(10000)
              cy.get('#faq-header-352183a9-08e0-485f-9e10-53ed76096745').click() //Leads
              cy.get('#faq-header-a50e2f43-18d2-4879-bd05-1c12c2813a26').click() //Estimate Requested
              cy.get('#faq-header-c94257b3-9a14-4ec1-9f68-c45b5c7843f1').click() //Recurring Job
              //cy.get('#faq-content-c94257b3-9a14-4ec1-9f68-c45b5c7843f1 > :nth-child(1) > .css-h5fkc8 > .MuiGrid-container > .MuiGrid-root > .MuiButtonBase-root').click()
              //cy.get('#name').type("Hello_Test")
              //cy.get('#isDefault').click()
              //cy.get(':nth-child(5) > .MuiBox-root > .MuiButton-contained').click()
              cy.get(':nth-child(9) > #faq-header-undefined').click()
              cy.get('.drip_seqs_list_toggle > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > #faq-content-undefined > .MuiAccordionDetails-root > .MuiBox-root > .MuiButtonBase-root').click()  //Click on Add step button
              cy.get('#name').type("Hello_step_1")
              cy.get('#sendOn').click().type("1") 
              cy.get('.MuiInputBase-root > #type').click() //Dropdown
              cy.get('[data-value="both"]').click() // Select Both Email and SMS
              cy.get(':nth-child(5) > .MuiFormControl-root > .MuiInputBase-root').type("This article is about software testing.") //SMS field
              cy.get('#subject').type("Demo Testing") //Email Subject
              cy.get('.ql-editor').type("This article is about software testing, which is the process of evaluating and verifying that a software product or application does what it is supposed to do. It explains different types of software tests such as acceptance testing, integration testing, unit testing etc., history of software testing, continuous testing and why it's important. ") //Email Body
              cy.get('.css-isbt42 > :nth-child(2) > .MuiButtonBase-root').click()
              cy.get('.user-label > .MuiButtonBase-root').should('be.visible').click() //Delete button
              cy.get('.MuiButton-outlined').should('be.visible').click() // Save Button
      
            });
          });
       });
        

    