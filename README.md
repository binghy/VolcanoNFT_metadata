# README

# NOTES

***Mirrored from [Volcano NFT](https://github.com/binghy/volcanoNFT) to create a Node Express app and store VolcanoNFT image metadata***

**Three options to store metadata (source: [freeCodeCamp](https://www.freecodecamp.org/news/how-to-make-an-nft/)):**  
- Store the information on-chain. In other words, extend your ERC-721 and store the metadata on the blockchain, which can be costly. (***TO DO***)  
- Use IPFS (***TO DO***)  
- Have your API return the JSON file. Use Node js for the API and ngrok npm package to share your local server by tunneling. ***DONE***

***Advertisement***: To retrieve the json file where the metadata are stored, ngrok must be runned (eventually on request).
The json file retrieved shows the following values (associated to VolcanoNFT):
{"name":"Volcano NFT metadata #1","description":"Sample metadata API","image":"https://volcano-nft.onrender.com/1.png"}
