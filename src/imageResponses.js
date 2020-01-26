const fs = require('fs');
const sponge = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImg = (request, response) => {
    response.writeHead(200, { 'content-type': 'image/png' });
    response.write(sponge);
    response.end();
  };

module.exports.getImg = getImg;