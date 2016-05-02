angular.module('PostCtrl', [])
.controller('PostController', ['$scope', '$timeout', 'PostAd', function($scope, $timeout, PostAd) {

  $scope.tagline = 'Bike Post Time!';

  // colors for dropdown
  $scope.colors = ['red', 'blue', 'green', 'yellow', 'black', 'magenta', 'gold', 'rainbow', 'silver', 'white', 'gray', 'orange', 'purple'];

  // new post object
  // TODO: does this have to be a global property?
  post = {};

  this.formSubmit = function() {
    // get the values from the post form and add them to the post object
    post.title = $scope.title;
    post.description = $scope.description;
    post.color = $scope.color;
    post.price = $scope.price;
    post.email = $scope.email;
    post.picFile = $scope.picFile || 'https://media.giphy.com/media/YFxJ7u3FdCrdK/giphy.gif';
    post.dateCreated = Date.now();
    console.log('clicked');
    console.log('user', post);
    
    // clear the form
    $scope.title = '';
    $scope.description = '';
    $scope.color = '';
    $scope.price = '';
    $scope.email = '';
    PostAd.postAd(post);
  };

}]);

