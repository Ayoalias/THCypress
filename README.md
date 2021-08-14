**Cypress Cucumber Tests Execution**

This is the readme file for instructions for running the cypress tests

**A) Running Cypress Feature Tests Via Test Runner**

\1. Go to the Terminal in the Console 

\2. Initiate the command "npx cypress open"

\3. Cypress Console Opens 

\4. Select the required browser

\5. Click on the E2E.feature file to load and run the test

**B) Running Cypress Feature Tests Via Command Line**

**To Run in Headless Mode As I Configured in package.json file**

\1. Go to the Terminal in the Console 

\2. Initiate the command "npx cypress run scripts" 

\3. Press Enter to run the tests in headless mode 

**To Run in Headed Mode With a Specific Browser**

\1. Go to the Terminal in the Console 

\2. Initiate the commands as indicated below:

` `"chromeTest":   "npx cypress run  --headed --browser chrome",

` `"electronTest": "npx cypress run  --headed --browser electron",

` `"edgeTest":     "npx cypress run   --headed --browser edge",

` `"firefoxTest":  "npx cypress run  --headed --browser firefox",

\3. Press Enter to run the tests in headless mode

