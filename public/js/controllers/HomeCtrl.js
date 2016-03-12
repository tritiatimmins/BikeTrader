angular.module('HomeCtrl', [])
.controller('HomeController', ['$scope', 'PostAd', function($scope, PostAd) {

  $scope.tagline = 'Bike Feed Goes Here!';

  //call the function from the factory here
  PostAd.showBikes();

}]);