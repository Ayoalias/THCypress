class AccountPage{
    
    AccountSucceessPageDisplayed(){
     return  cy.get('.my-account__title').should('have.text', 'Mijn account')
   }
    ChangeDetails(){
     return cy.get('.overview__item-description').click()
    }
    
    }
export default AccountPage