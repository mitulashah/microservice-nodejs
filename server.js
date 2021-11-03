require('app-module-path').addPath(__dirname + '/app');

// include modules
var express = require('express');
var routes = require('routes');
var dotenv = require('dotenv').config();

var app = express();

// set up routes
routes(app, express);