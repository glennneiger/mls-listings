const mlsLinkToDb = require('./mlsScrape')
const Xvfb = require('xvfb')
const xvfb = new Xvfb()

xvfb.start((err, xvfbProcess) => {

mlsLinkToDb('http://v3.torontomls.net/Live/Pages/Public/Link.aspx?Key=5fd54a71dfd24404b9c7d7bf8d1d0bc9&App=TREB')
})
