///<reference types = "cypress"/>

describe('TestSuites ', function () {
    //const runs = 10;
  
  //for (let i = 1; i <= runs; i++) {
       //it(`Run ${i}: visit URL`, function () {
        it('Create New Proposal', function(){
          cy.visit("https://vibras.com/"); // visit URL 
          cy.get('#email').type('aakash@webspero.com'); // Valid credentials 
          cy.get('#password').type('987654321');
          cy.get('.MuiButton-root').click() 
          cy.get(':nth-child(12) > .MuiButtonBase-root').click() // Navigate to proposals section
        
          // Get the current performance object
          cy.window().then((win) => {
          const performance = win.performance;
        // Get the timing of the page reload
          const navigationStart = performance.timing.navigationStart;
          const loadEventEnd = performance.timing.loadEventEnd;
        // Calculate the page reload time in milliseconds
          const pageReloadTime = loadEventEnd - navigationStart;
        // Log the page reload time
          cy.log(`Page reload time: ${pageReloadTime} ms`);
        });

          cy.title().should('eq','vibras'); // Verifying the title of the page
          cy.wait(10000);
          cy.get('.MuiInputBase-input').should('be.visible').should('be.enabled').type('Proposal').clear().type('Tower'); // Validating the Search bar
          cy.reload(); // refresh the page
          cy.get('.MuiIconButton-colorInherit').click().click()
        
          cy.wait(10000);
          cy.get('.pro-src-hndle > .MuiButtonBase-root').should('be.visible').should('be.enabled').click() // Validate and Click on "Create Proposals" button
          cy.get('#name').type('123456').clear().type('Auto Testing') // Proposal Name field 
          cy.get('#contact').click() // Select Client
          cy.get('#contact-option-4').click()// Drop down
          cy.get('.css-69i1ev > .MuiBox-root > .MuiButton-contained').click() //Submit button
});
        it('Edit Proposals Title Form page', function(){
          cy.visit("https://vibras.com/");  
          cy.get('#email').type('aakash@webspero.com'); 
          cy.get('#password').type('987654321');
          cy.get('.MuiButton-root').click() 
          cy.get(':nth-child(10) > .MuiButtonBase-root').click()
          cy.wait(10000);
          cy.get(':nth-child(12) > .MuiButtonBase-root').click() //Click on proposal
          cy.wait(10000);
          cy.get('.pro_right_cont_cls_des > :nth-child(2) > .proposal-value').click()
          cy.wait(20000);
          cy.get('.css-gg4vpm > .MuiTypography-root').should('have.text', 'Auto Testing'); // Confirm the proposal name
          cy.get('[data-rbd-draggable-id="c3f951f9-d7d5-4b43-8ed4-a0dfc0941e35"] > .css-35o7ay').click()
          
          // //cy.reload();
          cy.get('#name').clear().type('Auto_Test');
          // // cy.reload();
          // // //cy.go('back');
          // // //cy.go('forward');
          // // cy.wait(10000);
          cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').should('be.visible').should('be.enabled').click() // Validate the date field
          cy.get('[aria-rowindex="6"] > .MuiButtonBase-root').click() // Select date from calender

          cy.get('#note').click().type('Hey! I am Automation'); //Validating Notes Section
          cy.get('.sbmt_btn_contin > .MuiButtonBase-root').click() //Submit button
          cy.get(':nth-child(3) > .client-user-details > .MuiGrid-root > .remove_notes_fetech > .MuiButtonBase-root > img').should('be.visible').click() //Delete Notes
          

        // Perform drag-and-drop action
          //const filePath = '/home/ws19-dev-team/Downloads';
          //cy.get('.uplo_fie > .sc-aXZVg > .MuiBox-root > .css-nx528h').click()//.attachFile(filePath, { subjectType: 'drag-n-drop' });
          //cy.get(':nth-child(2) > .MuiBox-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').should('be.enabled').click() // Validating the radioa button

          //const filePath = 'file:///home/ws19-dev-team/Downloads/tower.jpeg';
          //cy.get('.uplo_fie > .sc-aXZVg > .MuiBox-root > .css-nx528h').then((dropZone) => {
          //   // Read the file content to create a Blob
          //   cy.fixture(filePath).then((fileContent) => {
          //     const blob = Cypress.Blob.base64StringToBlob(fileContent, 'text/plain');
      
          //  cy.get('[aria-label="Aakash Kumar"]')   // Create a File object
          //     const file = new File([blob], 'file.txt', { type: 'text/plain' });
      
          //     // Perform the drag-and-drop action
          //     cy.wrap(dropZone).trigger('dragenter', { dataTransfer: { files: [file] } });
          //     cy.wrap(dropZone).trigger('drop', { dataTransfer: { files: [file] } });
          //   });

          // cy.get('.uplo_fie > .sc-aXZVg > .MuiBox-root > .css-nx528h').selectFile('file:///home/ws19-dev-team/Downloads/tower.jpeg', {
          //    action: 'drag-drop'
            })
          

          // cy.get('form > .sc-aXZVg > .MuiBox-root > .MuiButtonBase-root').attachFile('example.json');


          // });

        it('Edit Proposals Introduction Form page', function(){
          cy.visit("https://vibras.com/");  
          cy.get('#email').type('aakash@webspero.com'); 
          cy.get('#password').type('987654321');
          cy.get('.MuiButton-root').click();
          cy.wait(10000);
          cy.get(':nth-child(10) > .MuiButtonBase-root').click();
          // cy.wait(10000);
          cy.get(':nth-child(12) > .MuiButtonBase-root').click();
          cy.wait(10000);
          cy.get('.proposal-card > .css-k008qs > .pro_right_cont_cls_des > :nth-child(2)').click()
          cy.get('[data-rbd-draggable-id="19601be0-86bc-4a35-be58-27614f5c360c"] > .css-35o7ay').click() //Click on Introduction form
          
          // cy.title().should('eq','vibras'); // Verify the title
          cy.get('.tile_ed_ppossl > .MuiButtonBase-root > img').should('be.visible').click() //.type('Intro...')
          // cy.wait(10000);
          cy.get('.ql-editor > p').type('Test automation refers to the practice of using software tools and scripts to automate the execution of tests in software development and quality assurance processes. It involves creating scripts or test cases that can be run automatically, rather than requiring manual effort. Test automation aims to increase the efficiency and effectiveness of testing by reducing human errors, saving time, and improving test coverage. While all testing, including regression testing, can be done manually, there are often greater benefits to doing much of it automatically. Automation testing can be run at any time of the day; it is faster and cheaper than manual testing; since Quality Engineers are able to deliver more tests than QAs, the former category is sometimes a career route for the latter and their ambition. Engineers, in particular, believe that tests “should” be automated, even when the business reality is much messier.')//.clear();
          cy.get('.MuiGrid-root > .MuiBox-root > .MuiButton-contained').should('be.visible').should('be.enabled').click(); // Open pdf page
          cy.get('#customized-dialog-title > .MuiButtonBase-root').click()
           
})
        it('Edit Proposals Quote Details Form page', function(){
          cy.visit("https://lasvibras.io/");  
          cy.get('#email').type('aakash@webspero.com'); 
          cy.get('#password').type('987654321');
          cy.get('.MuiButton-root').click();
          cy.wait(10000);
          cy.get(':nth-child(10) > .MuiButtonBase-root').click();
          // cy.wait(10000);
          cy.get(':nth-child(1) > .proposal-card').click();
          cy.get('[data-rbd-draggable-id="f129c40f-7fdc-4484-b191-e88e8a37d8be"] > .css-35o7ay').click(); // Quote Details
          cy.get('#sectionTitle').should('be.visible').should('be.enabled').click().clear().type('Furniture'); //Section title
          cy.get('.add_nw_itm_frm > :nth-child(1)').click() // Click on Add item button
          cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click() //Arrow drop down
          //cy.get('#\:r38\:-option-0').click()
          //cy.get('.MuiAutocomplete-endAdornment > .MuiButtonBase-root').click(); //Arrow drop down
          //cy.get('#\:r38\:-option-2').click();
          const num1 = 5;
          const num2 = 7;

          // Calculate the expected result
          const expectedResult = num1cy.get('[aria-label="Aakash Kumar"]') * num2;
          cy.get('#quantity').type(num1); //.should('be.visible').should('be.enabled').type('5');
          cy.get('#price').type(num2);  //.should('be.visible').should('be.enabled').type('50');
        })

        it('Edit Proposals Terms and Conditions Form page', function(){
          cy.visit("https://vibras.com/");  
          cy.get('#email').type('aakash@webspero.com'); 
          cy.get('#password').type('987654321');
          
          cy.get('.MuiButton-root').click();
          cy.wait(10000);
          cy.get(':nth-child(12) > .MuiButtonBase-root').click();
          // // cy.wait(10000);
          cy.get('.pro_right_cont_cls_des > :nth-child(2) > .proposal-value').click();
          cy.get('[data-rbd-draggable-id="236e1aee-6d5e-410c-9d65-2f0e592f0e19"] > .css-35o7ay').click() //Terms and Conditions
          cy.wait(10000);
          cy.get('.ql-editor > p') .click().type('The term of this Agreement will commence upon the Effective Date and will continue for each product or service specified in the Order for the subscription period(s) specified in the Order unless earlier terminated as set forth below, after which it will automatically renew for subsequent periods equal to the subscription period(s) in the Order unless either party gives the other party not less than thirty (30) days prior written notice of its intent not to renew, in which case the Agreement will terminate at the end of its then current term. Test IO reserves the right to increase subscription pricing by up to five percent of the previous subscription period pricing for the Services. Test IO does not send reminders about renewals or termination rights.');
          
          cy.get('.ql-editor > p').click().type('{selectall}'); // Select all text
          cy.get('.ql-bold').click();
          cy.get('.ql-italic').click();
          cy.get('.ql-underline').click()
          cy.get('.ql-strike').click()
          cy.get('.ql-color.ql-picker > .ql-picker-label')
          cy.get('.MuiGrid-root > .MuiBox-root > .MuiButton-contained').should('be.visible').should('be.enabled').click()//view page button
          cy.get('#customized-dialog-title > .MuiButtonBase-root').click() //Navigate back from pdf
        })

        it('Edit Proposals Warranty Form page', function(){
          cy.visit("https://vibras.com/"); 
          cy.get('#email').type('aakash@webspero.com'); 
          cy.get('#password').type('987654321');
          
          cy.get('.MuiButton-root').click();

          cy.wait(10000);
          cy.get(':nth-child(12) > .MuiButtonBase-root').click();
          cy.wait(10000);
          cy.get('.pro_right_cont_cls_des > :nth-child(2) > .proposal-value').click() //click on proposal
          cy.get('[data-rbd-draggable-id="d27b7f8a-eee3-4832-beb2-58bde000a8c8"] > .css-35o7ay').click();
         
          cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click() 
          cy.get('[aria-rowindex="6"] > .MuiButtonBase-root').should('be.visible').should('be.enabled').click()
          cy.get('.ql-editor > p').click().type('In law, a warranty is an expressed or implied promise or assurance of some kind. The terms meaning varies across legal subjects.[1] In property law, it refers to a covenant by the grantor of a deed.[2] In insurance law, it refers to a promise by the purchaser of an insurance about the thing or person to be insured.[3]In contract law, a warranty is a contractual assurance given, typically, by a seller to a buyer,[4] for example confirming that the seller is the owner of the property being sold.[5] A warranty is a term of a contract, but not usually a condition of the contract or an innominate term, meaning that it is a term "not going to the root of the contract",[6] and therefore only entitles the innocent party to damages if it is breached,[6] i.e. if the warranty is not true or the defaulting party does not perform the contract in accordance with the terms of the warranty. A warranty is not a guarantee: it is a mere promise. It may be enforced if it is breached by an award for the legal remedy of damages.');
        })

        

      
      it.only('Edit Proposals Add_page Form', function(){
         
          cy.visit("https://vibras.com/");  
          cy.get('#email').type('aakash@webspero.com'); 
          cy.get('#password').type('987654321');
          cy.get('.MuiButton-root').click();

          cy.wait(10000);
          cy.get(':nth-child(12) > .MuiButtonBase-root').click();
          cy.wait(10000);
          cy.get(':nth-child(1) > .proposal-card').click();
          cy.wait(10000);
          cy.get('form > .sc-aXZVg > .MuiBox-root > .MuiButtonBase-root').attachFile('example.json');


          
          cy.get('.css-12rhcm').should('be.visible').should('be.enabled').click() //Add page button
          cy.wait(10000);
          cy.get('.css-12rhcm').click()
          cy.get('[data-rbd-draggable-id="b470fc82-ac1b-4742-a36c-d65ca1354074"] > .css-35o7ay').click()
         
          
        })

      })


      