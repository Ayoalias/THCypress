import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";

import HomePage from "../POM/HomePage";
import RegistrationPage from "../POM/RegistrationPage";
import LoginPage from "../POM/LoginPage";
import AccountPage from "../POM/AccountPage";
import ChangeEMailPage from "../POM/ChangeEMailPage";
import CollectionPage from "../POM/CollectionPage";
import UpdatePage from "../POM/UpdatePage";

const home = new HomePage();
const reg = new RegistrationPage();
const log = new LoginPage();
const acc = new AccountPage();
const cha = new ChangeEMailPage();
const col = new CollectionPage();
const upd = new UpdatePage();


Given('I navigated to TH landing page', () => {
    cy.visit(Cypress.env('url'))   
});

And('User Clicks Accept Terms Button', () => {
    home.UserClicksAcceptTermsButton().click()
});

And('TommyHilfiger Logo is displayed', () => {
    home.TommyHilfigerLogoIsDisplayed()
})
When('User Clicks on LoginRegister Tab', () =>{
    home.UserClicksOnLoginRegisterTab()
})
And('To Register Form is displayed', () => {
    reg.ToRegisterFormisdisplayed()
})
And('User clicks on registration tab', () =>{
    reg.RegistrationTab()
})
And('User Completes the E-Mail Field With a Valid E-Mail Address', () => {
    reg.EMailAddress()
})
And('User Completes the Password Field  With a Valid Password', () =>{
    reg.Password()
})
And('User Selects I confirm that I have read and accept the terms and conditions and privacy policy of the online shop Checkbox', () =>{
    reg.AcceptTerms()
})
And('User Clicks On SIGN UP FOR THE NEWSLETTER AND RECEIVE Checkbox', () =>{
    reg.Newsletter()
})
And('User Clicks On CREATE AN ACCOUNT Button', () =>{
    reg.AccountButton()
})
Then('My Account Success Page is displayed', () =>{
    acc.AccountSucceessPageDisplayed()
})
And('User Completes the Login E-Mail Field With a Valid E-Mail Address', () =>{
    log.LoginEMailAddress()
})
And('User Completes the Login Password Field  With a Valid Password', () =>{
    log.LoginPassword()
})
And('User Selects Remember me Checkbox', () =>{
    log.RememberMe();
})
And('User Clicks On TO REGISTER Button', () =>{
    log.AccountButton()
})
Then('Collection Landing Page is Displayed', () =>{
    col.CollectionsPageIsDisplayed()
})
And('User Completes the Password Field With an Incorrect Password', () =>{
    log.IncorrectLoginPassword()
})   
And('User Completes the EMail Field With an Incorrect EMail Address', () =>{ 
    log.IncorrectLoginEMailAddress()
})
And('User Completes the EMail Field With an InValid EMail Address', () =>{
    log.InvalidLoginEMailAddress()
})
And('User Completes the Password Field With an InValid Password', () =>{
    log.InvalidLongLoginPassword()
})
Then('Your username and password do not match Try again Error is displayed', () => {
    log.ErrorLoginMessage()
})
Then('Sorry this is not a valid email address Error is displayed', () => {
    log.ErrorEMailMessage()
})
Then('Your password must be between 5 and 20 characters long Error Messages', () => {
     log.ErrorInvalidLoginMessage()
})
And('User Clicks HII Tab', () =>{
     col.HIITab()
})
And('User Selects My Details Tab', () =>{ 
      col.AccountDetails()
})
And('And User Clicks Stop Button', () =>{
    upd.CloseButton()
})
Then('Update Your Details Page is Displayed', () =>{
      upd.UpdatePageIsDisplayed()
})
And('User Clicks on “TO UPDATE” Button', () =>{
     upd.ToUpdate()
})
Then('CHANGE EMAIL ADDRESS Form is Displayed', () =>{
      cha.ChangeEMailPage()
})
And('User Updates the NEW EMAIL ADDRESS Field With the New Email Address', () =>{
      cha.NewEMail()
})
And('User Completes the CONFIRM NEW EMAIL ADDRESS Field With the New Email Address', () =>{
      cha.ConfirmNewEMail()
})
And('User Completes the ENTER PASSWORD Field  With the Current Password', () =>{
      cha.EnterPassword()
})
And('User Clicks SAVE Button', () =>{
      cha.SaveButton()
})
Then('My Account Page Displays New Email Address', () =>{
     upd.UpdatePageIsDisplayed()
})


 











