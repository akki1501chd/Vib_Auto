///<reference types = "cypress"/>

describe('TestSuites ', function () {
    //const runs = 10;

  //for (let i = 1; i <= runs; i++) {
  //it(`Run ${i}: visit URL`, function () {
    it('Create New Proposal', function () {
      cy.visit("https://vibras.com/contractor/login"); // visit URL 
      cy.get('#email').type('mitchel@yopmail.com'); // Valid credentials 
      cy.get('#password').type('987654321');
      cy.get('.MuiButton-root').click()
      cy.get(':nth-child(11) > .MuiButtonBase-root').click() // Navigate to proposals section
  
      // Get the current performance object
      cy.window().then((win) => {
        const performance = win.performance;
        // Get the timing of tWhe page reload
        const navigationStart = performance.timing.navigationStart;
        const loadEventEnd = performance.timing.loadEventEnd;
        // Calculate the page reload time in milliseconds
        const pageReloadTime = loadEventEnd - navigationStart;
        // Log the page reload time('nthcy.wairefers to the practice of using software tools and scripts to automate the execution of tests in software development and quality assurance processes. It involves creating scripts or test cases that can be run automatically, rather than requiring manual effort. Test automation aims to increase the efficiency and effectiveness of testing by reducing human errors, saving time, and improving test coverage. While all testing, including regression testing, can be done manually, there are often greater benefits to doing much of it automatically. Automation testing can be run at any time of the day; it is faster and cheaper than manual testing; since Quality Engineers are able to deliver more tests than QAs, the former category is sometimes a career route for the latter and their ambition. Engineers, in particular, believe that tests “should” be automated, even when the business reality is much messier.')//.clear();
        cy.log(`Page reload time: ${pageReloadTime} ms`);
      });
  
      cy.title().should('eq', 'vibras'); // Verifying the title of the page
      cy.wait(10000);
      cy.get('.MuiInputBase-input').should('be.visible').should('be.enabled').type('Proposal').clear().type('Tower'); // Validating the Search bar
      cy.reload(); // refresh the page('nthcy.wairefers to the practice of using software tools and scripts to automate the execution of tests in software development and quality assurance processes. It involves creating scripts or test cases that can be run automatically, rather than requiring manual effort. Test automation aims to increase the efficiency and effectiveness of testing by reducing human errors, saving time, and improving test coverage. While all testing, including regression testing, can be done manually, there are often greater benefits to doing much of it automatically. Automation testing can be run at any time of the day; it is faster and cheaper than manual testing; since Quality Engineers are able to deliver more tests than QAs, the former category is sometimes a career route for the latter and their ambition. Engineers, in particular, believe that tests “should” be automated, even when the business reality is much messier.')//.clear();
      cy.get('.MuiIconButton-colorInherit').click().click()
  
      cy.wait(10000);
      cy.get('.pro-src-hndle > .MuiButtonBase-root').should('be.visible').should('be.enabled').click() // Validate and Click on "Create Proposals" button
      cy.get('#name').type('123456').clear().type('Auto Testing') // Proposal Name field 
      cy.get('#contact').click() // Select Client
      cy.get('#contact-option-4').click()// Drop down
      cy.get('.css-69i1ev > .MuiBox-root > .MuiButton-contained').click() //Submit button
    });


    it('Edit Proposals Title Form page', function () {
      cy.visit("https://vibras.com/contractor/login");
      cy.get('#email').type('mitchel@yopmail.com'); 
      cy.get('#password').type('987654321');
      cy.get('.MuiButton-root').click()
      cy.wait(10000);
      cy.get(':nth-child(11) > .MuiButtonBase-root').click()
      // cy.get(':nth-child(10) > .MuiButtonBase-root').click()
      cy.wait(10000);
      cy.get(':nth-child(1) > .proposal-card > .css-k008qs').click() //Click on the proposal
      //cy.get('[data-rbd-draggable-id="5f6cb201-0b60-4c48-8b2a-a526558a5b22"] > .css-35o7ay').click() //Open Title form
      cy.get('#note').click().type('This is your Automation')
      cy.get('.sbmt_btn_contin > .MuiButtonBase-root').should('be.visible').should('be.enabled').click()
      cy.get('.remove_notes_fetech > .MuiButtonBase-root').click() //Delete Note
      cy.get('#name').clear().type('Auto Testing')
    })
  
  
    it('Edit Proposals Introduction Form page', function () {
      cy.visit("https://vibras.com/contractor/login");
      cy.get('#email').type('mitchel@yopmail.com');
      cy.get('#password').type('987654321');
      cy.get('.MuiButton-root').click();
      cy.wait(10000); 
      cy.get(':nth-child(11) > .MuiButtonBase-root').click() //Navigate to Proposal Section
      // cy.wait(10000);cy.Wget(':nthcy.wai///<reference types = "cypress"/);
      cy.wait(10000); 
      cy.get(':nth-child(1) > .proposal-card > .css-k008qs').click()
     
      // cy.wait(10000);
      // //cy.get(':nth-child(1) > .proposal-card > .css-k008qs > .pro_right_cont_cls_des').click()
      cy.wait(10000);
      cy.get('[data-rbd-draggable-id="32255692-6972-4584-b499-862d4cb76b47"] > .css-1cemmpj').click() //Click on Introduction form
  
      // cy.title().should('eq','vibras'); // Verify the title
      //cy.get('.tile_ed_ppossl > .MuiButtonBase-root > img').should('be.visible').click() //.type('Intro...')
      // cy.wait(10000);
      cy.get('.ql-editor').clear().type('Test automationc to the practice of using software tools and scripts to automate the execution of tests in software development and quality assurance processes. It involves creating scripts or test cases that can be run automatically, rather than requiring manual effort. Test automation aims to increase the efficiency and effectiveness of testing by reducing human errors, saving time, and improving test coverage. While all testing, including regression testing, can be done manually, there are often greater benefits to doing much of it automatically. Automation testing can be run at any time of the day; it is faster and cheaper than manual testing; since Quality Engineers are able to deliver more tests than QAs, the former category is sometimes a career route for the latter and their ambition. Engineers, in particular, believe that tests “should” be automated, even when the business reality is much messier.')//.clear();
      cy.get('.MuiGrid-container > .MuiButtonBase-root').should('be.visible').click() //Click on Evaluate with AI
      cy.wait(10000)
      cy.get('.css-un59wn > :nth-child(2) > .MuiButtonBase-root').click() //click on Use this
      
    })


    it('Edit Proposals Quote Details Form page', function () {
      cy.visit("https://vibras.com/contractor/login");
      cy.get('#email').type('mitchel@yopmail.com');
      cy.get('#password').type('987654321');
      cy.get('.MuiButton-root').click();
      cy.wait(10000);
      cy.get(':nth-child(11) > .MuiButtonBase-root').click() //Navigate to Proposal Section
      // cy.wait(10000);
      
      cy.wait(10000);
      cy.get(':nth-child(1) > .proposal-card > .css-k008qs').click()
      cy.get('[data-rbd-draggable-id="dc62d103-66bb-452d-9ee3-f567f20e9e5c"] > .css-1cemmpj').click() //Quote Details
       //Click on Add item button
      
     

      cy.get('#sectionTitle').click().clear().type('Demo_Test');
      cy.get('.MuiAutocomplete-popupIndicator').click() //Add Iteam
      
      // cy.get(':nth-child(3) > .line_total_bt > .css-gg4vpm > .MuiButtonBase-root').click()
      // cy.get('.MuiAutocomplete-endAdornment > .MuiButtonBase-root').first().click()
      // cy.get('#\:r3l\:-option-3').click()
     
      const num1 = 5
      const num2 = 7;
  
      // Calculate the expected result
      const expectedResult = num1 * num2;
      
      cy.get('#quantity').type(num1); //.should('be.visible').should('be.enabled').type('5');
      cy.get('#price').type(num2);  //.should('be.visible').should('be.enabled').type('50');
    })
  
    it('Edit Proposals Terms and Conditions Form page', function () {
      cy.visit("https://vibras.com/contractor/login");
      cy.get('#email').type('mitchel@yopmail.com');
      cy.get('#password').type('987654321');
  
  
      cy.get('.MuiButton-root').click();
      cy.wait(10000);
      cy.get(':nth-child(11) > .MuiButtonBase-root').click()  
      // // cy.wait(10000);
      cy.get(':nth-child(1) > .proposal-card > .css-k008qs > .pro_right_cont_cls_des').click()
      cy.wait(10000);
      cy.get('[data-rbd-draggable-id="9b5a28e7-f7de-400a-8a16-75bd83b69dfc"] > .css-1cemmpj').click() //Terms and Conditions
      cy.wait(10000);
      cy.get('.ql-editor > p').click().clear().type('The term of this Agreement will commence upon the Effective Date and will continue for each product or service specified in the Order for the subscription period(s) specified in the Order unless earlier terminated as set forth below, after which it will automatically renew for subsequent periods equal to the subscription period(s) in the Order unless either party gives the other party not less than thirty (30) days prior written notice of its intent not to renew, in which case the Agreement will terminate at the end of its then current term. Test IO reserves the right to increase subscription pricing by up to five percent of the previous subscription period pricing for the Services. Test IO does not send reminders about renewals or termination rights.');
  
      cy.get('.ql-editor > p').click().type('{selectall}'); // Select all text
      cy.get('.ql-bold').click();
      cy.get('.ql-italic').click();
      cy.get('.ql-underline').click()
      cy.get('.ql-strike').click()
      cy.get('.ql-color.ql-picker > .ql-picker-label')
      cy.get('.MuiGrid-root > .MuiBox-root > .MuiButton-contained').should('be.visible').should('be.enabled').click()//view page button
      cy.get('#customized-dialog-title > .MuiButtonBase-root').click() //Navigate back from pdf
      cy.reload();

    })
  
    it('Edit Proposals Warranty Form page', function () {
      cy.visit("https://vibras.com/contractor/login");
      cy.get('#email').type('mitchel@yopmail.com')
      cy.get('#password').type('987654321');
  
      cy.get('.MuiButton-root').click();
  
      cy.wait(10000);
      cy.get(':nth-child(11) > .MuiButtonBase-root').click()  
      cy.wait(10000);
      cy.get(':nth-child(1) > .proposal-card > .css-k008qs > .pro_right_cont_cls_des').click() //click on proposal
      cy.wait(10000);
      cy.get('[data-rbd-draggable-id="27c9c359-8127-4153-b1b6-603cb515668e"] > .css-1cemmpj') .click();
      //cy.get(':nthcy.wai///<reference types = "cypress"/)
      //cy.get('.MuiInputAdornme('nthcy.wairefer('nthcy.wairefers to the practice of using software tools and scripts to automate the execution of tests in software development and quality assurance processes. It involves creating scripts or test cases that can be run automatically, rather than requiring manual effort. Test automation aims to increase the efficiency and effectiveness of testing by reducing human errors, saving time, and improving test coverage. While all testing, including regression testing, can be done manually, there are often greater benefits to doing much of it automatically. Automation testing can be run at any time of the day; it is faster and cheaper than manual testing; since Quality Engineers are able to deliver more tests than QAs, the former category is sometimes a career route for the latter and their ambition. Engineers, in particular, believe that tests “should” be automated, even when the business reality is much messier.')//.clear();s to the practice of using software tools and scripts to automate the execution of tests in software development and quality assurance processes. It involves creating scripts or test cases that can be run automatically, rather than requiring manual effort. Test automation aims to increase the efficiency and effectiveness of testing by reducing human errors, saving time, and improving test coverage. While all testing, including regression testing, can be done manually, there are often greater benefits to doing much of it automatically. Automation testing can be run at any time of the day; it is faster and cheaper than manual testing; since Quality Engineers are able to deliver more tests than QAs, the former category is sometimes a career route for the latter and their ambition. Engineers, in particular, believe that tests “should” be automated, even when the business reality is much messier.')//.clear();nt-root > .MuiButtonBase-root').click()
      //cy.get('[aria-rowindex="6"] > .MuiButtonBase-root').should('be.visible').should('be.enabled').click()
      cy.get('.ql-editor > p').click().clear().type('In law, a warranty is an expressed or implied promise or assurance of some kind. The terms meaning varies across legal subjects.[1] In property law, it refers to a covenant by the grantor of a deed.[2] In insurance law, it refers to a promise by the purchaser of an insurance about the thing or person to be insured.[3]In contract law, a warranty is a contractual assurance given, typically, by a seller to a buyer,[4] for example confirming that the seller is the owner of the property being sold.[5] A warranty is a term of a contract, but not usually a condition of the contract or an innominate term, meaning that it is a term "not going to the root of the contract",[6] and therefore only entitles the innocent party to damages if it is breached,[6] i.e. if the warranty is not true or the defaulting party does not perform the contract in accordance with the terms of the warranty. A warranty is not a guarantee: it is a mere promise. It may be enforced if it is breached by an award for the legal remedy of damages.');
    })
  
  
  
  
    it('Edit Proposals Add_page Form', function () {
  
      cy.visit("https://vibras.com/contractor/login");
      cy.get('#email').type('mitchel@yopmail.com');
      cy.get('#password').type('987654321');
      cy.get('.MuiButton-root').click();
  
      cy.wait(10000);
      cy.get(':nth-child(11) > .MuiButtonBase-root').click() 
      cy.wait(10000);
      cy.get(':nth-child(1) > .proposal-card > .css-k008qs > .pro_right_cont_cls_des').click()
      cy.wait(10000);
      cy.get('.css-1kc38vj').click() // Add page
      cy.get('[data-rbd-draggable-id="1b228009-bfd7-44bf-b206-e479c08f3f40"] > .css-1cemmpj').click( )
      cy.get(':nth-child(3) > .MuiBox-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  
    })
  
})











