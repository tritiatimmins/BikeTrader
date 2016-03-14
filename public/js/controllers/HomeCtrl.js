angular.module('HomeCtrl', [])
.controller('HomeController', ['$scope', 'PostAd', function($scope, PostAd) {
  
  // object where feed data from database is populated
  $scope.data = {};

  // calls function from postService
  $scope.getPosts = function() {
    PostAd.showBikes()
      .then(function(posts) {
        $scope.data.posts = posts;
        // console.log('posts', $scope.data);
      })
      .catch(function(error) {
        console.error(error);
      });
  };
  
  $scope.getPosts();

}]);