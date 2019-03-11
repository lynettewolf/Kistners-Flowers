const fs = require('fs');
var footer = fs.readFileSync('./public/footer.html');
var header = fs.readFileSync('./public/header.html');
var head = fs.readFileSync('./public/secondary-head.html');

/** @function serve404
 * Helper function for serving a 404 error code 
 * @param {http.IncomingRequest} req - the request object 
 * @param {http.ServerResponse} res - the response object
 */
function serve404(req, res) {
  console.warn("404 Not Found", req.method, req.url);
  res.statusCode = 404;
  res.statusMessage = "404 Error";
  res.end(
      head +
      header +
      `
          <main>
              <h1>Upsy Daisy!</h1>
              <h2>We seem to have misplaced the page you are looking for</h2>
              <div id="daisy-container">
                  <img src="../public/images/upsyDaisy.png" alt="daisies">
              </div>
               
          </main>
      `
      + footer
  );
}

// export serve404 
module.exports = serve404;