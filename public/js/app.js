angular.module('bikeTrader', ['ngRoute', 'HomeCtrl', 'PostCtrl'])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    // nerds page that will use the NerdController
    
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })

    .when('/post', {
      templateUrl: 'views/new-post.html',
      controller: 'PostController'
    })

    .when('*', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    });

  // $locationProvider.html5Mode(true);

}]);