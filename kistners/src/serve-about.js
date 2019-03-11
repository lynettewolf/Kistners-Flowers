
const fs = require('fs');
var footer = fs.readFileSync('./public/footer.html');
var header = fs.readFileSync('./public/header.html');
var head = fs.readFileSync('./public/secondary-head.html');

/** @function serveAbout 
 * Serves an About Us page 
 * @param {http.IncomingMessage} req - the HTTP request object
 * @param {http.ServerResponse} res - the HTTP response object
 */
function serveAbout(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.end(
      head +
      header +
         `
         <main>
             <h1>About Us</h1>
             <div class="middle-container">
                 <p><b>Kistner's Flowers has been serving Manhattan and surrounding area's for over 70 years.</b>
                        Kistner's Flowers was started in 1946 By Ray and Marie Kistner who had a love for flowers
                        and bedding plants and were looking for a way to provide a quality product to the
                        Manhattan area.  In 1974 the business was sold to the Orr-Lee family who slowy changed
                        from cut flowers and bedding plants to fresh flowers and interior plantscaping. In 2006
                        Matt and Bronwyn Douglas, who are both Kansas State graduates, purchased the company from
                        the Orr-Lee's after having worked at Kistner's for a number of years. In 2018 Matt and
                        Bronwyn were both awarded the prestigious title of AIFD and CFD. Though Kistner's has gone
                        through different owners, the company still prides itself on providing quality fresh flowers
                        and designing, installing, and maintaining interior plantscapes.
                 </p>
             </div>
             <div class="middle-container">
                <img id="about-us-image" src="../public/images/us.jpg">
                <h2>Matt and Bronwyn Douglas AIFD-CFD - Owners</h2>
                <p>In January 2006 Matt and Bronwyn purchased Kistner's Flowers, a business that has been
                    serving Manhattan and surrounding areas since 1946. Both Matt and Bronwyn are K-State
                    graduates. Matt got his degree in Greenhouse management with a Business minor and Bronwyn
                    received a dual degree in Psychology and Fine Arts. They met and married while working at
                    a local tree nursery to put themselves through school. After graduation they both worked
                    for the former owners of Kistner's, the Orr-Lee family, for three years. The call of
                    adventure took them  back to Bronwyn's roots, Alaska, where they worked at
                    a private lodge 90 miles down a dirt road in the heart of Denali National
                    Park. In their off seasons they travelled to Costa Rica for backpacking, Juneau, Alaska
                    for sailboating and Bozeman, Montana to experience the beauty of the
                    Prairie meeting the mountains. After adventuring for three years,
                    they received a call that Kistner's was for sale. After much discussion, they
                    packed up and headed back to Manhattan for their next adventure. January 2019 marks their
                    13th anniversary owning and operating Kistner's Flowers.
                </p>
             </div>
             <div class="about-container" id="about-container-1">
                <img class="img-right" src="../public/images/betsyBean.jpg">
                <h2>Betsy Bean</h2>
                <p>Because of her studies in fine art and philosophy of aesthetics, Betsy's designs fully showcase
                    the unique beauty of the variety of fresh flowers Kistner's carries. Using color and texture,
                    the same flower can exhibit completely different style determined by its surroundings.
                    Betsy's favorite flower is Ranunculus (Little Frog). Outside of work, Betsy creates fine art
                    with the help of her mentor, continues her research with her growing collection of books, and
                    participates in local music through choir and musical theater. Heralding from Montana, Betsy
                    earned her degree at Montana State University and Universite Paul-Valery in Montpellier, France.
                    Throughout her childhood and into her adult years, she has been fortunate to be able to travel
                    all over the world. As a nature lover and explorer, she is also interested in space travel.
                    Please stop by to put her talents to the test and for conversation!
                </p>
             </div>
             <div class="about-container" id="about-container-2">
                <img class="img-left" src="../public/images/sarahReeves.jpg">
                <h2>Sarah Reeves</h2>
                <p>Sarah began working for Kistner's Flowers in 2015 while also owning and operating her photography
                    business, Beautiful Isolations.  Her passion for photography and her love for beautiful wedding 
                    details have played a big role in transitioning into the flower world as the two play such a big
                    part for brides on their wedding day. Sarah and her husband, Jake, along with their beautiful baby
                    girl Penny and two dogs Digby and Charlie currently live in Gardner, Kansas. They manage their
                    photography business together and you can find their work at www.beautifulisolations.com. Sarah,
                    having worked at Kistner's Flowers for several years has a wide range of favorite flowers depending
                    on the season: peonies, garden roses, ranunculus, and the many types of protea to name a few. She
                    also has a slight obsession with seeded eucalyptus! Sarah's current role at Kistner's Flowers is
                    to manage the social media and other personal relations, while balancing her time with a new baby
                    and photography.
                </p>
             </div>
         </main>
        `
          +footer
);
}

// export the serveIndex function 
module.exports = serveAbout;