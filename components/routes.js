//frontend routes
alert('connected to components/routes.js');
angular.module('appRoutes', [])

.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'sign-up.html',
            controller: 'signUpController'
        });

        // bike page that will use the BikeController
        // .when('/bikes', {
        //     templateUrl: 'views/bikes.html',
        //     controller: 'BikeController'
        // });

    $locationProvider.html5Mode(true);

}]);

    