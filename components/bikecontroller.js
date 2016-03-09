angular.module('BikeCtrl', []).controller('BikeController', function($scope) {

  $scope.tagline = 'Nothing beats a new bike!';
  alert($scope.tagline);
});