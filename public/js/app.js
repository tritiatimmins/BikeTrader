angular.module('bikeTrader', ['ngRoute', 'angular-filepicker', 'postService', 'HomeCtrl', 'PostCtrl', 'SignUpCtrl', 'LogInCtrl', 'ImageCtrl'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider

    // front end routes
    
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    })

    .when('/post', {
      templateUrl: 'views/new-post.html',
      controller: 'PostController'
    })

    .when('/sign-up', {
      templateUrl: 'views/sign-up.html',
      controlller: 'SignUpController'
    })

    .when('/log-in', {
      templateUrl: 'views/login.html',
      controller: 'LogInController'
    })

    .when('*', {
      templateUrl: 'views/home.html',
      controller: 'HomeController'
    });

}]);