angular
  .module('imdbSearchApp', [
      'ngRoute'
    ])

  .config(function($routeProvider) {
    $routeProvider
      .when('/:search', {
        templateUrl: '../views/main.html',
        controller: 'MainCtrl'
      })
      .when('/movie/:ID', {
        templateUrl: '../views/detail.html',
        controller: 'DetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    });
