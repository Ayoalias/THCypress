/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

 const  mysql = require('mysql')
 
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = (on, config) => {
  on('file:preprocessor', cucumber()),
  on('task', {
    queryDb: query => {
      return queryTestDb(query, config)
    },
    })
    const xlsx = require('node-xlsx').default;
    const fs = require('fs'); //for file
    const path = require('path'); // for file path
    module.exports = (on, config) => {
      on ('task', {parseXlsx({filepath})
      {return new Promise((resolve, reject) =>
        { try
          {
            const jsonData = xlsx.parse(fs.readFileSync(filepath));
            resolve(jsonData);
          } catch (e)
          {
            reject(e);
          } });
        }}); }
        const readXlsx = require('./read.xlsx')
        module.exports = (on, config) => {
          on ('task', {
            'readXlsx': readXlsx.read
        })

      }   

      

   // require('cypress-mochawesome-reporter/plugin')(on);
}
