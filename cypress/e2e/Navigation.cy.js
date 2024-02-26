///<reference types = "cypress"/>

describe('TestSuites ', function () {
    //const runs = 10;
  
  //for (let i = 1; i <= runs; i++) {
       //it(`Run ${i}: visit URL`, function () {
    //    before(function(){
    //     cy.fixture('example').then(function(data){
    //         this.data=data;
    //     })

    //    })
    //    const lp=new LoginPage()

    //    it('Login', function(){
    //     cy.visit(this.data.url)
    //    })

    it('Navigations', function(){
        cy.visit("https://vibras.com/"); // visit URL 
        cy.get('#email').type('webt580@gmail.com'); // Valid credentials 
        cy.get('#password').type('987654321');
        cy.get('.MuiButton-root').click() 
        cy.get('.MuiList-root > :nth-child(2) > .MuiButtonBase-root').click()
        cy.get('.MuiDrawer-root > .MuiPaper-root > .MuiList-root > :nth-child(3) > .MuiButtonBase-root').click()
        cy.get('.MuiList-root > :nth-child(4) > .MuiButtonBase-root').click()
        cy.get(':nth-child(5) > .MuiButtonBase-root').click()
        cy.get(':nth-child(6) > .MuiButtonBase-root').click()
        cy.get(':nth-child(7) > .MuiButtonBase-root > .MuiListItemText-root').click()
        cy.get(':nth-child(8) > .MuiButtonBase-root').click()
        cy.go('forward')
        cy.go('back')
        cy.get(':nth-child(9) > .MuiButtonBase-root').click()
        cy.get(':nth-child(10) > .MuiButtonBase-root').click()  
        cy.get(':nth-child(11) > .MuiButtonBase-root').click()  
        cy.get(':nth-child(12) > .MuiButtonBase-root').click()
        //cy.get('.bottom-setting > .MuiButtonBase-root').click()
        




         

          
          
          
       
        })
    })

    