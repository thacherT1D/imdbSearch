angular.module('imdbSearchApp')
  .controller('MainCtrl', function($scope, $http, $routeParams) {
    $scope.view = {};
    $http.get('http://www.omdbapi.com/?s=' + $routeParams.search).then(function(data){
      // console.log(data.data.Search);
      $scope.view.movieData = data.data.Search;
    });
  })
  .controller('DetailCtrl', function($scope, $http, $routeParams) {
    $scope.view = {};
    var imdbID = $routeParams.ID;
    $http.get('http://www.omdbapi.com/?i=' + imdbID + '&plot=short&r=json&tomatoes=true').then(function(data){
      console.log(data.data);
      $scope.view.movieData = data.data;
    });
  })
