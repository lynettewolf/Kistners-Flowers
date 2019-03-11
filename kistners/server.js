/* server.js */
"use strict";

/* require statements */
var http = require('http');
var fs = require('fs');
var serveImage = require('./src/serve-image');
var serveStylesheet = require('./src/serve-stylesheet');
var serveIndex = require('./src/serve-index');
var serve404 = require('./src/serve-404');
var serveFaqs = require('./src/serve-faqs');
var serveAbout = require('./src/serve-about');
var servePrivacy = require('./src/serve-privacy');
var serveDelivery = require('./src/serve-delivery');


/* global variables */
var port = 3000;

/* Create a new HTTP server */
var server = http.createServer(function(req, res) {
  switch(req.url) {
    case '/':
    case '/index.html':
      serveIndex(req, res);
      break;
    case '/gallery.css':
      serveStylesheet('gallery.css', req, res);
      break;
    case '/main.css':
      serveStylesheet('main.css', req, res);
      break;
    case '/sub-page.css':
      serveStylesheet('sub-page.css', req, res);
      break;
    case '/faqs.html':
      serveFaqs(req, res);    
      break;
    case '/about.html':
      serveAbout(req, res);    
      break;
    case '/privacy.html':
      servePrivacy(req, res);    
      break;
    case '/error.html':
      serve404(req, res); 
      break;
    case '/deliveries.html':
      serveDelivery(req, res);    
      break;
    default:
      serveImage(req.url, req, res);
  }
});

/* Listen for incoming HTTP requests */
server.listen(port, function() {
  console.log("Listening on port " + port);
});

