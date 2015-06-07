'use strict';

// Imports
var angular = require('angular');
var HomeCtrl  = require('./controllers/homeCtrl');
var AboutCtrl  = require('./controllers/aboutCtrl');

// Tabs sub-module definition
var tabs = angular.module('app.tabs', []);
tabs.controller('HomeCtrl', [HomeCtrl]);
tabs.controller('AboutCtrl', [AboutCtrl]);

module.exports = tabs;