class HomePage {
    UserClicksAcceptTermsButton() {
        return cy.get('[data-testid=close-button]')
    }  

    TommyHilfigerLogoIsDisplayed(){
        return cy.get('.logo').should('have.text', 'Tommy Hilfiger')
    }

    UserClicksOnLoginRegisterTab(){
        return cy.get('[data-testid=sign-in-button]').click({force: true})
          
    }
        

    
}
export default HomePage