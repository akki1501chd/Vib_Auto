///<reference types = "cypress"/>

describe('TestSuites ', function () {
    //const runs = 20;
  
  //for (let i = 1; i <= runs; i++) {
       //it(`Run ${i}: visit URL`, function () {
        it('Single Day Appointments', function(){
          cy.visit("https://vibras.com/"); // visit URL 
          cy.get('#email').type('aakash@webspero.com'); // Valid credentials 
          cy.get('#password').type('987654321');
          cy.get('.MuiButton-root').click() 
          //cy.wait(10000);
          cy.get(':nth-child(3) > .MuiButtonBase-root').should('be.visible').click() //Navigate Appointments section
          
        
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
        cy.wait(10000);
        cy.get('.top_calendar_right-app > .MuiButton-sizeLarge').click() //Reload button
        cy.get(':nth-child(2) > #faq-header-1 > .MuiAccordionSummary-expandIconWrapper > .MuiButtonBase-root').click().click() //Filter + icon
        cy.get(':nth-child(3) > #faq-header-1 > .MuiAccordionSummary-expandIconWrapper > .MuiButtonBase-root').click().click() //
        cy.get('.fc-next-button > .fc-icon').click() //Increment calender icon 
        //cy.go('back');
        cy.get('.fc-prev-button > .fc-icon').click() //Decrement calender icon
        cy.get('#composition-button').should('be.visible').should('be.enabled').click() //Create Appointment button
        cy.get('[value="e957e195-da63-4112-890a-26b086477ad1"]').click() //Selecting attribute from the drop down
        cy.get(':nth-child(1) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click() //Callender Icon
        cy.get('[aria-rowindex="6"] > .MuiButtonBase-root').click() //Select Date
        cy.get(':nth-child(2) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click() //Select Date Icon
        cy.get('[aria-label="2 hours"]').click() //Select Time
        cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click() //Ok
        cy.get('.MuiInputBase-root > #assignedTo').click() //Sales Drop down
        cy.get('[data-value="1dc96152-4f00-481f-9006-9febe15163f5"]').click() //Select Attribute from the drop down
        cy.get('.css-k3gutg > :nth-child(1)').click() // Time Duration(15 min)
        cy.get('.MuiAutocomplete-popupIndicator').click() //Contact Drop down
        cy.get('#contact-option-6').click() // Select Contact from the drop down
        cy.get('#appointmentDetails').click().type('Hey! I am on my duty') //Appointment Details
        cy.get('#sendEmail > .MuiTypography-root').click() //Communication Button (Send Email)
        cy.get('#sendSms > .MuiTypography-root').click() //  Communication Button (Send SMS)
        cy.get('.d-flex-3 > .MuiButton-contained').should('be.visible').should('be.enabled').click() //Submit Button

    })

    it('Multiple Day,s Appointments', function(){
      cy.visit("https://vibras.com/"); // visit URL 
      cy.get('#email').type('aakash@webspero.com'); // Valid credentials 
      cy.get('#password').type('987654321');
      cy.get('.MuiButton-root').click() 
      //cy.wait(10000);
      cy.get(':nth-child(3) > .MuiButtonBase-root').should('be.visible').click() //Navigate Appointments section
      cy.wait(10000);
      cy.get('#composition-button').click() //Create Appointment button
      cy.get('[value="b7b24805-a0f3-4781-91e4-9e7de0e1bac4"]').click()//Selecting attribute from the drop down
      cy.get(':nth-child(2) > .MuiBox-root > .MuiFormControlLabel-root > .MuiTypography-root').click() //Radio button (Multiple day's Appointments)
      cy.get(':nth-child(1) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click() //Callender Icon
      cy.get('[data-timestamp="1703788200000"]').click() //Select Start Date
      cy.get(':nth-child(2) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
      cy.get('[data-timestamp="1703874600000"]').click()//Select End date
      cy.get(':nth-child(3) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click() //Time Icon
      cy.get('[aria-label="2 hours"]').click() //Select Start Time
      cy.get(':nth-child(4) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
      cy.get('[aria-label="2 hours"]').click() //Select End Time
      
    })

    it('Request Appointments', function(){
      cy.visit("https://vibras.com/");  
      cy.get('#email').type('aakash@webspero.com'); 
      cy.get('#password').type('987654321');
      cy.get('.MuiButton-root').click() 
      //cy.wait(10000);
      cy.get(':nth-child(3) > .MuiButtonBase-root').click()
      cy.wait(10000);
      cy.get('.appt-req-btn > .MuiButtonBase-root').click() //New Request 
      cy.get('.MuiGrid-grid-md-3 > .MuiButtonBase-root').should('be.visible').should('be.enabled').click()
      cy.window();
      cy.go('back');
      cy.get('.MuiInputBase-root > #colorCode').click() //Color Code Drop Down
      cy.get('[data-value="#74CB70"]').click()
      cy.get(':nth-child(4) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click() //Calander
      cy.get('[aria-rowindex="6"] > .MuiButtonBase-root').click()
      cy.get('.view-details').should('have.text', 'Appointment Details'); //Validate Text
      cy.get('.d-flex-3 > .MuiButton-contained').click()
     
    
    })
      
    
})