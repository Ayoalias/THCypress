class LoginPage {
    
       ToRegisterFormisdisplayed(){
        return cy.get('[data-testid=modal-heading]').should('have.text', "Aanmelden")
       }
   
       LoginTab(){
        return cy.get('[data-testid=register]').click()
       }
   
        LoginEMailAddress(){
        return cy.get('#signin-email').type('iifunria@yahoo.com')
       }
        LoginPassword(){
        return cy.get('#signin-password').type('Lolly0821')
       }
       IncorrectLoginEMailAddress(){
        return cy.get('#signin-email').type('jeddy.doe@gmail.com')
       }
       IncorrectLoginPassword(){
        return cy.get('#signin-password').type('TipsyLolly0821')
        }
        InvalidLoginEMailAddress(){
        return cy.get('#signin-email').type('jeddy.doe.gmail.com')
        }
        InvalidLoginPassword(){
        return cy.get('#signin-password').type('1tr')
        }
        InvalidLongLoginPassword(){
        return cy.get('#signin-password').type('1trTipsyLollywwwwwwww0821bbddd')
        }
        RememberMe(){
        return cy.get('[data-testid=checkbox-label]').click()
         }
        AccountButton(){
        return cy.get('[data-testid=Button-primary-new] > :nth-child(2) > span').click()
        }
        ErrorPasswordMessage(){
        return cy.get('[data-testid=checkbox-label]').should('have.text', 'Your password must be between 5 and 20 characters long')
        }
        ErrorEMailMessage(){
        return cy.get('#signin-email-helper-text').should('have.text', 'Sorry, dit is geen geldig e-mailadres')
        }
        ErrorLoginMessage(){
        // return cy.get('.error-text').should('have.contains', 'Your username and password do not match')
         return cy.get('.error-text').should('have.text', 'Je gebruikersnaam en wachtwoord matchen niet. Probeer het nog eens.')
        }
        ErrorInvalidLoginMessage(){
          return cy.get('.error-text').should('have.text', 'Your username and password do not match')
         //return cy.get('.error-text').should('have.text', 'Je gebruikersnaam en wachtwoord matchen niet. Probeer het nog eens.')        
        }


}
export default LoginPage