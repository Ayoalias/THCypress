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
  
 const email1 = "Tom." + RandomName(5)+RandomNumber(4)+"@testmail.com"

class ChangeEMailPage{
    
    ChangeEMailPageIsDisplayed(){
    return  cy.get('.details-email__title').should('have.text', 'Wijzig e-mailadres')
    }
    NewEMail(){
    cy.wait(5000)
    return cy.get('.formField #email1').type(email1)
    }
    ConfirmNewEMail(){
    return cy.get('#email1Confirm').type(email1)
    }
    EnterPassword(){
    return cy.get('#logonPassword').type('Lolly0821')
    }
    SaveButton(){
    return cy.get('[data-testid=details-email-save-button]').click() 
    }
    AccountSucceessPageDisplayed(){
    return  cy.get('.my-account__title').should('have.text', 'Mijn account')
    } 
    NewEMailIsDisplayed(){
    return cy.get('#emailAddress').should('have.text', '')
    } 
    
    }
export default ChangeEMailPage