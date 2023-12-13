///<reference types = "cypress"/>

//const { onPossiblyUnhandledRejection } = require("cypress/types/bluebird");

describe('TestSuites', function () {
    //const runs = 10;
  
  //for (let i = 1; i <= runs; i++) {
      //it(`Run ${i}: visit URL`, function () {
        it('Visit URL LogIn with Invalid credentials', function(){
        cy.visit("https://vibras.com/"); // visit URL 
        cy.title().should('eq','vibras'); // Verify Title 
        cy.get('#email').should('be.enabled').click().type('abc@gmail.com'); // Invalid credentials 
        cy.get('#password').should('be.enabled').click().type('123456789');
        cy.get('.MuiButton-root').should('be.enabled').should('be.visible').click() // Click on submit button
        cy.get('.Toastify__toast-body > :nth-child(2)').should('be.visible'); //Incorrect Message pop-up
       });
    

       it('Registration', function(){
        cy.visit("https://vibras.com/"); 
        cy.get('.MuiTypography-subtitle1 > a').click();
        cy.get('.MuiGrid-root > .MuiButtonBase-root').click() //Click on Register Button without filling the details
        cy.get('#firstName').should('be.enabled').should('be.visible').type('Hello');  //First Name 
        cy.get('#lastName').should('be.enabled').should('be.visible').type('World');   //Last Name
        cy.get('#businessName').should('be.enabled').should('be.visible').type('Web Testing'); // Bussines Name 
        cy.get('#email').should('be.enabled').should('be.visible').type('web@gmail.com').clear(); //Check for Clear the field
        cy.get('#email').should('be.enabled').should('be.visible').type('web@gmail.com'); //Email 
        cy.get('.MuiInputBase-root > #industry').click() //Industry Dropdown
        cy.get('[data-value="7881e278-20f3-4453-a7fc-c1e011342f86"]').click() //Selecting Value from drop down
        //cy.get('[data-value="4303862b-6fd7-4a13-a18f-447d6395f464"]').should('have.value', 'Wallpapering')
        cy.get('.MuiInputBase-root > #numberOfEmployees').click() //Number of Employee dropdown field 
        cy.get('[data-value="2-5"]').click() //Selecting Value from drop down
        cy.get('#phone').should('be.enabled').should('be.visible').type('web@gmail.com'); // Validating the phone number field only support the Number text not the alphabet or a string
        cy.get('#phone').should('be.enabled').should('be.visible').type('1234567890');
        cy.get('#password').click().type('987654321') //Validate Password field
        cy.get(':nth-child(6) > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click().click(); // Validating working of Eye Icon on password field
        cy.get('#confirmPassword').click().type('123456456') // Confirm password field Enter different password
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="VisibilityOffIcon"] > path').click(); // Validating Eye Icon on confirm password field
        cy.get('.MuiButtonBase-root > [data-testid="ArrowDropDownIcon"] > path').click()
        //cy.get('#\:re\:-option-1')
       
        //cy.get('.MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').click()
        cy.get('.MuiGrid-root > .MuiButtonBase-root').should('be.enabled').should('be.visible').click(); // Perform click action on register button
        
       });
      //const runs = 10;
  
      //for (let i = 1; i <= runs; i++) {
      //it(`Run ${i}: visit URL`, function () {

      it('Valid Credentials', function(){
        cy.visit("https://vibras.com/"); // visit URL 
        cy.get('#email').type('aakash@webspero.com'); // Valid credentials 
        cy.get('#password').type('987654321');
        cy.get('.MuiButton-root').click() 
        //cy.get(':nth-child(10) > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
        //cy.get(':nth-child(5) > .proposal-rejected-card > .css-k008qs > .pro_right_cont_cls_des > .css-0 > :nth-child(4) > .MuiBox-root > .send_prop').click()
        
        
       });

      it.only('Logout', function(){
        cy.visit("https://vibras.com/"); 
        cy.get('#email').type('aakash@webspero.com'); 
        cy.get('#password').type('987654321');
        cy.get('.MuiButton-root').click() 
        cy.get('.MuiTypography-subtitle1 > .MuiTypography-root').click()
        cy.get('.MuiList-root > [tabindex="0"]').click()
        // cy.get(':nth-child(3) > .css-fv3lde').should('be.visible').click() // Logout functionality
        
        
       });

      });

      


    
  


  

  
  
  