module.exports = {
    "1": {
        "name": "Volcano NFT metadata #1",
        "description": "Sample metadata API",
        "image": "https://volcano-nft.onrender.com/"
    },
//  Continue adding metadata for other nfts    
//    "2": {
//        "name": "...",
//        "description": "...",
//        "image": "..."
//    },
}


// OpenSea metadata standard (source: https://docs.opensea.io/docs/metadata-standards)
// image: This is the URL to the image of the item.
//        Can be just about any type of image (including SVGs, which will be cached into PNGs by OpenSea),
//        and can be IPFS URLs or paths. We recommend using a 350 x 350 image.
// image_data: Raw SVG image data, if you want to generate images on the fly (not recommended).
//             Only use this if you're not including the image parameter.
// external_url: This is the URL that will appear below the asset's image on OpenSea and will allow users
//               to leave OpenSea and view the item on your site.
// description: A human readable description of the item. Markdown is supported.
// name: Name of the item.
// attributes: These are the attributes for the item, which will show up on the OpenSea page for the item. (see below)
// background_color: Background color of the item on OpenSea. Must be a six-character hexadecimal without a pre-pended #.
// animation_url: A URL to a multi-media attachment for the item.
//                The file extensions GLTF, GLB, WEBM, MP4, M4V, OGV, and OGG are supported,
//                along with the audio-only extensions MP3, WAV, and OGA.
//                Animation_url also supports HTML pages, allowing you to build rich experiences and interactive NFTs
//                using JavaScript canvas, WebGL, and more. Scripts and relative paths within the HTML page are now supported.
//                However, access to browser extensions is not supported.
// youtube_url: A URL to a YouTube video.

// Example: Pirate #8812 (source: https://opensea.io/assets/ethereum/0x31fe9d95dde43cf9893b76160f63521a9e3d26b0/8812)
// Click on "Details": - Contract address: https://etherscan.io/address/0x31fe9d95dde43cf9893b76160f63521a9e3d26b0
//                     - Token ID: https://ipfs.io/ipfs/QmZZhG7pptn4WmAWykzAVWAmkGB7prH9RPz4NK6TAbLCBM/8812
// Clicking on "Token ID" it gives:
// {
//    "description":"Take to the seas with your pirate crew! Explore the world and gather XP, loot, and untold riches in a race
//                   to become the world's greatest pirate captain! https://piratenation.game",
//    "image":"ipfs://QmYEXDp4kfH5Efs3GZR7AyymBMrxSSduJp19CfFQNgNo9D/8812.svg",
//    "name":"Pirate #8812",
//    "external_url":"https://piratenation.game/?pirateId=8812",
//    "attributes":[
//                  {"trait_type":"Character Type","value":"Human Male"},
//                  {"trait_type":"Background","value":"Open Sea"},
//                  {"trait_type":"Coat","value":"Green"},
//                  {"trait_type":"Skin","value":"Medium Brown"},
//                  {"trait_type":"Facial Hair","value":"Rainbow Beard"},
//                  {"trait_type":"Eyes","value":"Heavy"},
//                  {"trait_type":"Eye Covering","value":"Right Patch"},
//                  {"trait_type":"Dice Roll 1","value":"6"},
//                  {"trait_type":"Dice Roll 2","value":"5"},
//                  {"trait_type":"Elemental Affinity","value":"Earth"},
//                  {"trait_type":"Star Sign","value":"Aries"}
//                 ],
//    "image_hash":"f8a41fa75a888795ef1faf4608f8d0b4"
// }