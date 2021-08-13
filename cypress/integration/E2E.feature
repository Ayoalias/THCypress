Feature:  Registration and Login Functionality
I want to be able to reset my account password 

Scenario: Validate User is able to Create a New Account With Valid Data
Given I navigated to TH landing page
And User Clicks Accept Terms Button
And TommyHilfiger Logo is displayed
When User Clicks on LoginRegister Tab
And To Register Form is displayed
And User clicks on registration tab
And User Completes the E-Mail Field With a Valid E-Mail Address
And User Completes the Password Field  With a Valid Password
And User Selects I confirm that I have read and accept the terms and conditions and privacy policy of the online shop Checkbox
And User Clicks On SIGN UP FOR THE NEWSLETTER AND RECEIVE Checkbox
And User Clicks On CREATE AN ACCOUNT Button
# Then My Account Success Page is displayed

Scenario: Validate Registered User Can Login With Valid Credentials
Given I navigated to TH landing page
And User Clicks Accept Terms Button
And TommyHilfiger Logo is displayed
When User Clicks on LoginRegister Tab
And To Register Form is displayed
And User Completes the Login E-Mail Field With a Valid E-Mail Address
And User Completes the Login Password Field  With a Valid Password
And User Selects Remember me Checkbox
And User Clicks On TO REGISTER Button
Then Collection Landing Page is Displayed

Scenario: Validate “Your username and password do not match Try again Error Message is Displayed When Invalid Details is Used for Login
Given I navigated to TH landing page
And User Clicks Accept Terms Button
And TommyHilfiger Logo is displayed
When User Clicks on LoginRegister Tab
And To Register Form is displayed
And User Completes the Login E-Mail Field With a Valid E-Mail Address
And User Completes the Password Field With an Incorrect Password
And User Selects Remember me Checkbox
And User Clicks On TO REGISTER Button
Then Your username and password do not match Try again Error is displayed

Scenario: Validate Your username and password do not match Try again Error Message is Displayed When Invalid Details is Used for Login
Given I navigated to TH landing page
And User Clicks Accept Terms Button
And TommyHilfiger Logo is displayed
When User Clicks on LoginRegister Tab
And To Register Form is displayed
And User Completes the EMail Field With an Incorrect EMail Address
And User Completes the Login Password Field  With a Valid Password
And User Selects Remember me Checkbox
And User Clicks On TO REGISTER Button
Then Your username and password do not match Try again Error is displayed


Scenario: Validate Sorry, this is not a valid email address Error Message  is Displayed When Invalid E-Mail Address is Used for Login
Given I navigated to TH landing page
And User Clicks Accept Terms Button
And TommyHilfiger Logo is displayed
When User Clicks on LoginRegister Tab
And To Register Form is displayed
And User Completes the EMail Field With an InValid EMail Address
And User Clicks On TO REGISTER Button
Then Sorry this is not a valid email address Error is displayed

Scenario: Validate Your password must be between 5 and 20 characters long Error Messages is Displayed When Invalid Detail is Used for Registration
Given I navigated to TH landing page
And User Clicks Accept Terms Button
And TommyHilfiger Logo is displayed
When User Clicks on LoginRegister Tab
And To Register Form is displayed
And User Completes the Login E-Mail Field With a Valid E-Mail Address
And User Completes the Password Field With an InValid Password
And User Clicks On TO REGISTER Button
Then Your password must be between 5 and 20 characters long Error Messages is displayed


Scenario: Validate Registered User Can Update Address Details
Given I navigated to TH landing page
And User Clicks Accept Terms Button
And TommyHilfiger Logo is displayed
When User Clicks on LoginRegister Tab
And To Register Form is displayed
And User Completes the Login E-Mail Field With a Valid E-Mail Address
And User Completes the Login Password Field  With a Valid Password
And User Selects Remember me Checkbox
And User Clicks On TO REGISTER Button
Then Collection Landing Page is Displayed
And User Clicks HII Tab
And User Selects My Details Tab
And User Clicks Stop Button 
Then Update Your Details Page is Displayed
And User Clicks on “TO UPDATE” Button
Then CHANGE EMAIL ADDRESS Form is Displayed
And User Updates the NEW EMAIL ADDRESS Field With the New Email Address
And User Completes the CONFIRM NEW EMAIL ADDRESS Field With the New Email Address
And User Completes the ENTER PASSWORD Field  With the Current Password
And User Clicks SAVE Button
Then My Account Page Displays New Email Address 
  