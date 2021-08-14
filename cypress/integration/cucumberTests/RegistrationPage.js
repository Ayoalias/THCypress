
function RandomName(string) {
    var text = ""; 
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for (var i = 0; i < string; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }  
  function RandomNumber(int) {
    var text = "";
    var possible = "123456789";
    for (var i = 0; i < int; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
 }    
  
  const mail = "Tom." + RandomName(5)+RandomNumber(4)+"@testmail.com"  

class RegistrationPage{
    ToRegisterFormisdisplayed(){
    return cy.get('[data-testid=modal-heading]').should('have.text', "Aanmelden")
    }
    RegistrationTab(){
    return cy.get('[data-testid=register]').click()
    }
    EMailAddress(){
    return cy.get('#create-account-email').type(mail)
    }
    Password(){
    return cy.get('#create-account-password').type('Lolly0821')
    }
    AcceptTerms(){
    return cy.get('.agree-terms > [data-testid=checkbox-label]').click()
    }
    Newsletter(){
    return cy.get('.create-account-newsletter > [data-testid=checkbox-label]').click()
    }
    AccountButton(){
    return cy.get('[data-testid=Button-primary-new] > :nth-child(2) > span').click()
    }
}
       export default RegistrationPage


  

