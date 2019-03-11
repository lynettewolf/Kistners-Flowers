const fs = require('fs');

/** @function serveStylesheet
 * Serves the specified css file as an HTTP response.
 * @param {string} filename - the file to serve 
 * @param {http.IncomingMessage} req - the HTTP request object
 * @param {http.ServerResponse} res - the HTTP response object
 */ 
function serveStylesheet(filename, req, res) {
  fs.readFile('./public/css/' + filename, function(err, data) {
    if(err) {
      console.error(err);
      res.statusCode = 500;
      res.statusMessage = "Server Error";
      res.end();
      return;
    }
    res.setHeader("Content-Type", "text/css");
    res.end(data);
  });
}

// Export the serveStylesheet function 
module.exports = serveStylesheet;