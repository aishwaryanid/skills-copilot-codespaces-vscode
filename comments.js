// Create web server
// Run this file with node

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');
var url = require('url');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  var url_parts = url.parse(request.url, true);
  var query = url_parts.query;
  var file = query.file || 'index.html';
  fs.readFile(file, function(err, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(data);
  });
});

// Listen on port 8000, IP defaults to
