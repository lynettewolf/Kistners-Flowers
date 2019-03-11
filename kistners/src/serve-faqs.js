
const fs = require('fs');
var footer = fs.readFileSync('./public/footer.html');
var header = fs.readFileSync('./public/header.html');
var head = fs.readFileSync('./public/secondary-head.html');

/** @function serveFaqs 
 * Serves an FAQs page
 * @param {http.IncomingMessage} req - the HTTP request object
 * @param {http.ServerResponse} res - the HTTP response object 
 */
function serveFaqs(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.end(
      head +
          header +
         `
            <main>
            <h1> Frequently Asked Questions</h1>
            <div class="left-container left-title">
                <h2> Can I get my flowers delivered? </h2>
                <p> Absolutely! We mostly deliver to Manhattan, KS and the surrounding areas, but
                    will gladly deliver elsewhere if needed. You can find more information on our
                    delivery policies here: <a href="./deliveries.html"><strong>Deliveries</strong></a>
                </p>

                <h2> The company I want to deliver flowers to isn't on your approved facilities list.
                    Can I still get the flowers delivered?
                </h2>
                <p> We may be able to accommodate special requests. If you do not see the company
                    or community you are looking for, please give us a call at (785) 776-7044. 
                </p> 
                <h2> I tried placing an order, but it didn't go through. What do I do?</h2>
                <p> Oh no! We apologize for the inconvenience. Please make sure you’re using
                    the most recent version of your browser program. If not, you may need to
                    download an update from the software maker’s website. If the problem
                    persists, please call us at (785) 776-7044 and we are more than happy to
                    help you over the phone.
                </p>

                <h2> How can I pay?</h2>
                <p> We accept the following payment types: Visa, MasterCard, Discover,
                    American Express, House Account, or pay in store.
                </p>

                <h2> What if my chosen flowers aren't available?</h2>
                <p> Occasionally, substitutions may be necessary to create your bouquet due to the
                    availability of certain flowers in various parts of the country. Care is taken
                    to maintain the style, theme and color scheme of the arrangement, using flowers
                    of equal value. Additionally, the substitution of certain keepsake items may be
                    necessary due to increased demand, especially during major holidays. In 
                    single-flower arrangements, such as an all rose bouquet, or orchids, we will make
                    every attempt to match the flower type, but may substitute with another color.
            </div>
            </main>
         
        `
          +footer
);
}

// export the serveIndex function 
module.exports = serveFaqs;