//frontend routes
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'index.html',
            controller: 'MainController'
        })

        // bike page that will use the BikeController
        .when('/bikes', {
            templateUrl: 'views/bikes.html',
            controller: 'BikeController'
        });

    $locationProvider.html5Mode(true);

}]);

    