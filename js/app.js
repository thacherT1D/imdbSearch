angular
.module('imdbSearchApp', [
    'ngRoute'
  ])

.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../views/main.html',
      controller: 'MainCtrl'
    })
    .when('/:ID', {
      templateUrl: '../views/detail.html',
      controller: 'DetailCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  });
