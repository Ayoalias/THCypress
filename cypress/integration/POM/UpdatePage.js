class UpdatePage{
    
    UpdatePageIsDisplayed(){
     return  cy.get('.my-account__subtitle').should('have.text', 'update your details')
   }
    ToUpdate(){
     return cy.get('.Button.Button__secondary--inverse details__email-update').click()
    }
    CloseButton(){
      return cy.get('.cvClose').click() 
    }
    
    }
export default UpdatePage