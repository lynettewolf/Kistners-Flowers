
const fs = require('fs');
var footer = fs.readFileSync('./public/footer.html');
var header = fs.readFileSync('./public/header.html');
var head = fs.readFileSync('./public/secondary-head.html');

/** @function serveDelivery 
 * Serves a Delivery Policy page 
 * @param {http.IncomingMessage} req - the HTTP request object
 * @param {http.ServerResponse} res - the HTTP response object
 */
function serveDelivery(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.end(
      head +
      header +
         `
            <main>
                <h1>Deliveries</h1>
                <div class="middle-container">
                    <h2> We Mainly Deliver to... </h2>
                    <p><b>Manhattan</b> ($8 fee) and the surrounding areas such as
                        <b>Junction City, Fort Riley, Riley, Ogden,</b> and <b>Wamego</b> ($15 fee).
                        Delivery prices are charged per order per address.
                    </p>
                    <h2>The Following Facilities Have Been Pre-Approved for Delivery</h2>
                    <div id="facilities-list-container">
                        <div class="facilities-list">
                            <ul>
                                <li>Alterra Sterling House</li>
                                <li>Campanella Evans Mortuary</li>
                                <li>Colorado Plaza Apartments</li>
                                <li>Conroy Funeral Home</li>
                                <li>Garden Grove Apartments-Senior</li>
                                <li>Geary Community Hospital</li>
                                <li>Good Samaritan Ctr</li>
                                <li>Gran Villas Assisted Living</li>
                                <li>Grandview Suites</li>
                                <li>Irvin-Parkview Funeral Home</li>
                                <li>Manhattan Surgical Ctr</li>
                                <li>Manhattan Assisted Living</li>
                                <li>Mass-Hinitt Funeral Chapel</li>
                                <li>Meadowlark Hills Retirement</li>
                                
                            </ul>
                        </div>
                        <div id="facilities-list">
                            <ul>
                                <li>Mercy Regional Hospital</li>
                                <li>Penwell-Gabel Funeral Home</li>
                                <li>Stewart Funeral Home</li>
                                <li>St Joseph Senior Community</li>
                                <li>Strunk Retirement Home</li>
                                <li>Stoneybrook Retirement Co</li>
                                <li>Valley View Estates</li>
                                <li>Valley Vista Good Samaritan</li>
                                <li>Valley View Professional Care</li>
                                <li>The Villas at St Joseph</li>
                                <li>Wamego City Hospital</li>
                                <li>Women's Imaging Ctr</li>
                                <li>Yorgensen-Meloan-Londeen</li>
                            </ul>
                        </div>
                    </div>
                    <h2> But We Also Deliver... </h2>
                    <p> Outside our local delivery area ($8 phone and service fee), anywhere in
                        the U.S., and even locations outside the U.S.
                    </p>
                    <h2></h2>
                    <h2> However, Please Be Aware That ... </h2>
                    <div class="left-container" style="margin-top:2%;">
                        <ul>
                            <li> Orders that are to be delivered outside our local Manhattan area must be placed <b>before
                                2:00 p.m. in the recipient's time zone</b> to ensure same-day delivery. Orders received
                                after that time will be delivered the following day.
                            </li>
                            <li> We will do our best to accommodate deliveries at specific times of day, but we cannot
                                guarantee it.
                            </li>
                            <li> We are unable to make <b>deliveries on Sundays or on certain holidays*</b>. Deliveries 
                                    requested on such days will be delivered the following business day. </li>
                            <li> Delivery of orders to <b>rural route addresses or cemeteries</b> cannot be guaranteed.</li>
                            <li> <b>International orders</b> should be made by calling our shop directly. We are unable
                                    to accept international orders over the Internet.</li>
                            <li>To help assure on-time delivery during the busy holiday season, place your <b>order at least
                                1 day prior to the following major holidays</b>: Thanksgiving Day, Christmas Day, New Year's Day,
                                Valentine's Day, Easter, Administrative Professionals Week, Mother's Day, Memorial Day,
                                Father's Day, Independence Day and Labor Day.</li>
                        </ul>
                    </div>
                    <p>        
                    </p>
                    <p id="holiday-list">* Our shop will always be closed on the following holidays: Thanksgiving Day,
                        Christmas Day, New Year's Day, Easter, Mother's Day, Memorial Day, Father's Day, 
                        Independence Day, and Labor Day.
                    </p>
                </div>
            </main>
        `
          +footer
);
}

// export the serveIndex function 
module.exports = serveDelivery;