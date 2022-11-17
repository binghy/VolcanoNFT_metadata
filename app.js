var path = require('path');
var express = require('express');
const ngrok = require('ngrok');
const { HOST } = require('./src/constants')
const NGROK_TOKEN = "2HfTotdvCQWcwlBvs6ScL2bH6nT_5W9UNA6Q3MZYDB7FTjarj";
const metadata = require('./src/metadata');

const PORT = 3000;

var app = express();

app.get('/api/nfts/:token_id', function(req, res) {
    const tokenId = parseInt(req.params.token_id).toString()
    const nft = metadata[tokenId]
    const data = {
      'name': nft.name,
      'description': nft.description,
      'image': `${HOST}/${tokenId}.png`
    }
    res.send(data)
})

app.listen(PORT, function(err) {
  if (err) console.log(`Error in server setup: ${err}`);
  console.log(`Listening on port ${PORT}...`);

  // Start tunneling local host by using ngrok services
  // inspect tunneled traffic by opening http://localhost:4040 for a very detailed web interface
  (async function() {
    const url = await ngrok.connect({
      proto: 'http',                    // http|tcp|tls, defaults to http
      addr: PORT,                       // port or network address, defaults to 80
//      auth: 'user:pwd',                 // http basic authentication for tunnel
//      subdomain: 'alex',                // reserved tunnel name https://alex.ngrok.io
      authtoken: NGROK_TOKEN,           // authtoken from ngrok.com
      region: 'eu',                     // one of ngrok regions (us, eu, au, ap, sa, jp, in), defaults to us
    });
    console.log(`Node.js local server is publicly-accessible at ${url}`);
//    await ngrok.disconnect();           // stops all
//    await ngrok.kill();                 // kills ngrok process
  })();
});
