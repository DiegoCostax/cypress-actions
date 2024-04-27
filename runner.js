const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjBhN2E4MWI3LWRkZTgtNGY3YS04ZTQxLTBkYWFmMWM2N2M4Yi0xNzE0MjI1NDU3MDEwIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMzNkMmEwODgtMGQ4OC00NzRjLTk4NTgtZTA0MDhmZjhhZTEzIiwidHlwZSI6InQifQ.bIl8iwlMRloPpDGH-ABQLVL5mDqGgTje0Ow0oyFMgiI'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
