var path = require('path');
var express = require('express');
const { HOST } = require('./src/constants')
const metadata = require('./src/metadata');

var app = express();

const port = process.env.PORT || 3001;

app.get('/:token_id', function(req, res) {
    const tokenId = parseInt(req.params.token_id).toString()
    const nft = metadata[tokenId]
    const data = {
      'name': nft.name,
      'description': nft.description,
      'image': `${HOST}/${tokenId}.png`
    }
    res.send(data)
})

app.listen(port, () => console.log(`Listening on port ${port}...`));
