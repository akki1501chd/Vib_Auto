///<reference types = "cypress"/>

describe('TestSuites ', function () {
  //const runs = 20;

  //for (let i = 1; i <= runs; i++) {
  //it(`Run ${i}: visit URL`, function () {
  it('Single Day Appointments', function () {
    cy.visit("https://vibras.com/"); // visit URL 
    cy.get('#email').type('webt580@gmail.com'); // Valid credentials 
    cy.get('#password').type('987654321');
    cy.get('.MuiButton-root').click()
    //cy.wait(10000);
    cy.get('.MuiDrawer-root > .MuiPaper-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root').should('be.visible').click() //Navigate Appointments section


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
    cy.get('[value="25203da8-1aa4-411c-a3e2-bc35a45f891d"]').click() //Selecting attribute from the drop down
    cy.get(':nth-child(1) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click() //Callender Icon
    //cy.get('.MuiPickersArrowSwitcher-root > .MuiIconButton-edgeStart').click()
    cy.get('[data-timestamp="1713983400000"]').click() //Select Date
    cy.get(':nth-child(2) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()  //Date Icon
    cy.get('[aria-label="Select meridiem"] > [tabindex="-1"]').click() //Select Time
    cy.get('.MuiInputBase-root > #assignedTo').click()
    cy.get('[data-value="db72b95c-a13a-48d4-8736-5b2d994d9aae"]').click()
    //cy.get(':nth-child(2) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click() //Select Attribute from the drop down
    cy.get('.css-k3gutg > :nth-child(1)').click() // Time Duration(15 min)
    cy.get('.MuiAutocomplete-popupIndicator').click() //Contact Drop down
    cy.get('#contact-option-3').click() // Select Contact from the drop down
    cy.get('#appointmentDetails').click().type('Hey! I am on my duty') //Appointment Details
    cy.get('#sendEmail > .MuiTypography-root').click() //Communication Button (Send Email)
    cy.get('#sendSms > .MuiTypography-root').click() //  Communication Button (Send SMS)
    cy.get('.d-flex-3 > .MuiButton-contained').should('be.visible').should('be.enabled').click() //Submit Button

  })




  // describe('My Test', () => {
  it.only('Multiple Day,s Appointments', () => {

    // Load the contents of the 'example.json' fixture
    cy.fixture('example.json').then((data) => {
      // 'data' now contains the content of the 'example.json' fixture
      cy.log('Fixture Data:', data);

      // Use the fixture data in your test

      // cy.visit(data.url);
      // cy.get('#email').type(data.email);
      // cy.get('#password').type(data.password);
      // cy.get('.MuiButton-root').click(); 

      cy.visit("https://vibras.com/"); // visit URL 
      cy.get('#email').type('webt580@gmail.com'); // Valid credentials 
      cy.get('#password').type('987654321');
      cy.get('.MuiButton-root').click()

      // Continue with your test... 
      cy.get('.MuiDrawer-root > .MuiPaper-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root').click()
      cy.get('#composition-button').click()
      cy.get('[value="25203da8-1aa4-411c-a3e2-bc35a45f891d"]').click() //Selecting attribute from the drop down
      cy.get(':nth-child(2) > .MuiBox-root > .MuiFormControlLabel-root > .MuiTypography-root').click()
      cy.get(':nth-child(1) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click() //Callender Icon

      //cy.get('.MuiPickersArrowSwitcher-root > .MuiIconButton-edgeStart').click()
      cy.get('[data-timestamp="1714156200000"]').click()
      //cy.get('[data-timestamp="1714156200000"]', { timeout: 10000 }).should('exist');//.click() //Start Date Select 
      cy.get(':nth-child(2) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
      cy.get('[data-timestamp="1714415400000"]').first().click()  // Select End Date 
      cy.get(':nth-child(3) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click() //Time Icon
      cy.get('[aria-label="2 hours"]').click() //Select Start Time
      cy.get(':nth-child(4) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
      cy.wait(5000);
      cy.get('[aria-label="20 minutes"]').click()//({ multiple: true }); //Select End Time
      //cy.get('.css-k3gutg > :nth-child(1)').click() // Time Duration(15 min)
      cy.get('.MuiDialogActions-root > .MuiButtonBase-root').click()
      cy.get('.MuiInputBase-root > #assignedTo').click()
      cy.get('[data-value="db72b95c-a13a-48d4-8736-5b2d994d9aae"]').click()
      cy.get('.MuiAutocomplete-endAdornment').click()
      cy.get('#contact-option-2').click()
      cy.get('#appointmentDetails').click().type('This is your Automation...')
      cy.get('.MuiAutocomplete-popupIndicator').click() //Contact Drop down
      cy.get('.d-flex-3 > .MuiButton-contained').click()

      //   cy.get('#contact-option-6').click()
      //   cy.get('.MuiInputBase-root > #assignedTo').click()
      //   cy.get('[data-value="40cdb141-7348-455b-96b1-f77327515c79"]').click()
      //   cy.get('#appointmentDetails').click().type('Hey! I am on my duty') //Appointment Details
      //   cy.get('#sendEmail > .MuiTypography-root').click() //Communication Button (Send Email)
      //   cy.get('#sendSms > .MuiTypography-root').click() //  Communication Button (Send SMS)
      //   cy.get('.d-flex-3 > .MuiButton-contained').click() //Submit Button

    });
  });
});



it('Request Appointments', function () {
  cy.visit("https://vibras.com/");
  cy.get('#email').type('aakash@webspero.com');
  cy.get('#password').type('987654321');
  cy.get('.MuiButton-root').click()
  //cy.wait(10000);
  cy.get('.MuiDrawer-root > .MuiPaper-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root').click()
  cy.wait(10000);
  cy.get(':nth-child(1) > .appt-req-btn').click() //New Request 
  cy.get('.MuiGrid-grid-md-3 > .MuiButtonBase-root').should('be.visible').should('be.enabled').click()
  cy.window();
  cy.go('back');
  cy.get('.MuiInputBase-root > #colorCode').click() //Color Code Drop Down
  cy.get('[data-value="#74CB70"]').click()
  cy.get(':nth-child(4) > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click() //Calander
  //cy.get('[aria-rowindex="6"] > .MuiButtonBase-root').click()
  cy.get('.view-details').should('have.text', 'Appointment Details'); //Validate Text
  cy.get('.d-flex-3 > .MuiButton-contained').click()



})






it('Edit  Appointments', function () {
  cy.visit("https://vibras.com/");
  cy.get('#email').type('webt580@gmail.com');
  cy.get('#password').type('987654321');
  cy.get('.MuiButton-root').click()
  cy.wait(10000);
  cy.get('.MuiDrawer-root > .MuiPaper-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root').click()
  cy.get(':nth-child(5) > .fc-day-thu > .fc-daygrid-day-frame > .fc-daygrid-day-events > :nth-child(1) > .fc-event > .calender-event').click() //Click on any of appointment
  //cy.get('.view-details > .MuiGrid-container > .MuiGrid-grid-md-2 > .MuiBox-root > :nth-child(1)').click() //Edit Icon

})






//})