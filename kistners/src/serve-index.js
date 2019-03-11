const fs = require('fs');
var cardData = JSON.parse(fs.readFileSync('./data/recipes.json'));
var footer = fs.readFileSync('./public/footer.html');
var header = fs.readFileSync('./public/header.html');
var head = fs.readFileSync('./public/main-head.html');

/** @function generateCardHTML 
 * Generates a HTML string array representing the cards 
 * @returns {string[]} Array of HTML strings
 */
function generateCardHTML(){
  return cardData.map(function(data) {
    return `
      <a class="card" href="./public/images/${data.images[0]}">
        <img src="../public/images/${data.images[0]}" alt="thumbnail">
        <span>${data.name}</span>
        <span>$${data.price}</span>
      </a>
    `;
  });
}

/** @function serveIndex 
 * Serves an index page 
 */
function serveIndex(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.end(
    head + header+ 
          `
          <main id="thumbnails">
            ${generateCardHTML().join(" ")} 
          </main>
    `
      + footer
  );
}

// export the serveIndex function 
module.exports = serveIndex;