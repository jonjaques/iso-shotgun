var $inject = ['$stateProvider', '$locationProvider']

function RouteConfig(stateProvider, locationProvider) {
  stateProvider
    .state('app', {
      url: '/',
      templateUrl: 'app.html',
      controller: 'AppController',
      controllerAs: 'app'
    })
    .state('app.home', {
      url: 'home',
      templateUrl: 'components/home/index.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })

  locationProvider.html5Mode(true);
};

RouteConfig.$inject = $inject;

module.exports = RouteConfig;