const fs = require('fs');
const serve404 = require('./serve-404');

/** @function serveImage 
 * Serves the specified image as an HTTP response.
 * @param {string} filename - the file to serve 
 * @param {http.IncomingMessage} req - the HTTP request object
 * @param {http.ServerResponse} res - the HTTP response object
 */ 
function serveImage(filename, req, res) {
  fs.readFile("./"+ filename, function(err, data) {
    if(err) return serve404(req, res);
   
    res.setHeader("Content-Type", "image/jpeg");
    res.end(data);
  });
}

// Export the serveImage function
module.exports = serveImage;