var app = angular.module('bikeTrader', [
  'ngRoute'
  // 'appRoutes'
]);

app.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/', {
      templateUrl: '../views/sign-up.html',
      controller: 'signUpController'
    });
}]);
alert('connected to app.js');