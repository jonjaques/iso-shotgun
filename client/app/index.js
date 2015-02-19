var angular = require('angular');
require('angular-animate');
require('angular-ui-router');
require('angularfire');
require('./templates');

angular.module('app', ['ngAnimate', 'firebase', 'ui.router', 'templates'])
  .config(require('./routes'))
  .controller('AppController', require('./controller'))
  .controller('HomeController', require('./components/home/controller'))