// application imports
var express = require('express');
var request = require('request');
var app = express();

// read configuration from the environment variables
var port = process.env.INTERNAL_APP_PORT;
var authorizationUrl = process.env.URL_AUTHORIZATION;
var apiBaseUrl = process.env.URL_API_BASE;

// POST requests to '/api/token' should be forwarded to the configured authorization server
app.post('/api/token', function (req, res) {
  var apiRequest = request.post({uri: authorizationUrl, json: req.body});
  req.pipe(apiRequest).pipe(res);
});

// All other requests to the '/api/*' route should be forwarded to the configured API middleware
app.get('/api/:controller/:action', function (req, res) {
  var apiRequest = request.get(apiBaseUrl + '/' + req.params.controller + '/' + req.params.action);
  req.pipe(apiRequest).pipe(res);
});
app.post('/api/:controller/:action', function (req, res) {
  var apiRequest = request.post({uri: apiBaseUrl + '/' + req.params.controller + '/' + req.params.action, json: req.body});
  req.pipe(apiRequest).pipe(res);
});
app.get('/api/:resource', function (req, res) {
  var apiRequest = request.get(apiBaseUrl + '/' + req.params.resource);
  req.pipe(apiRequest).pipe(res);
});
app.post('/api/:resource', function (req, res) {
  var apiRequest = request.post({uri: apiBaseUrl + '/' + req.params.resource, json: req.body});
  req.pipe(apiRequest).pipe(res);
});

// requests to the root path should serve static files from the dist folder
// this serves our Angular 2 app, which is just a bunch of static files.
app.use('/', express.static('app'));

// start the server!
var server = app.listen(port, function () {
  console.log('--------------------');
  console.log('Your app server is running at ' + server.address().address + ':' + server.address().port);
  console.log('Configured authorization endpoint for this app is: ' + authorizationUrl);
  console.log('Configured API middleware endpoint for this app is: ' + apiBaseUrl);
  console.log('--------------------')
});
