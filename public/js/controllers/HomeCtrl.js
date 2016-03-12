angular.module('HomeCtrl', [])
.controller('HomeController', ['$scope', 'PostAd', function($scope, PostAd) {

  $scope.tagline = 'Bike Feed Goes Here!';
  // $scope.posts = PostAd.showBikes()
  $scope.data = {};
  $scope.getPosts = function() {
    PostAd.showBikes()
      .then(function(posts) {
        $scope.data.posts = posts;
        console.log('posts', $scope.data);
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  
  $scope.getPosts();

}]);