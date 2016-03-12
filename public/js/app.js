<<<<<<< HEAD
angular.module('bikeTrader', ['ngRoute', 'HomeCtrl', 'PostCtrl', 'SignUpCtrl', 'LogInCtrl', 'ngFileUpload'])
=======
angular.module('bikeTrader', ['ngRoute', 'postService', 'HomeCtrl', 'PostCtrl', 'SignUpCtrl', 'LogInCtrl'])
>>>>>>> e5ee0be5e57d0973d6e9a9fd88b4717dfed02605
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

  // $locationProvider.html5Mode(true);

}]);