angular.module('PostCtrl', [])
<<<<<<< HEAD
.controller('PostController', ['$scope', 'Upload', '$timeout', function($scope, Upload, $timeout) {

  $scope.tagline = 'Bike Post Time!';

   $scope.uploadFiles = function(file, errFiles) {
        $scope.f = file;
        $scope.errFile = errFiles && errFiles[0];
        if (file) {
            file.upload = Upload.upload({
                //make this go to our server, on our server upload should be a route
                url: 'https://angular-file-upload-cors-srv.appspot.com/upload',
                data: {file: file}
            });

            file.upload.then(function (response) {
                $timeout(function () {
                    file.result = response.data;
                });
            }, function (response) {
                if (response.status > 0)
                    $scope.errorMsg = response.status + ': ' + response.data;
            }, function (evt) {
                file.progress = Math.min(100, parseInt(100.0 * 
                                         evt.loaded / evt.total));
            });
        }   
    }

}]);
=======
.controller('PostController', ['$scope', 'PostAd', function($scope, PostAd) {

  $scope.tagline = 'Bike Post Time!';

  // colors for dropdown
  $scope.colors = ['red', 'blue', 'green', 'yellow', 'black', 'white', 'gray', 'orange', 'purple'];

  // new post object
  var post = {};

  this.formSubmit = function() {

    // get the values from the post form and add them to the post object
    post.title = $scope.title;
    post.description = $scope.description;
    post.color = $scope.color;
    post.price = $scope.price;

    // double check
    console.log('post object', post);

    // clear the form
    $scope.title = '';
    $scope.description = '';
    $scope.color = '';
    $scope.price = '';

    PostAd.postAd(post);
  };



}]);
>>>>>>> e5ee0be5e57d0973d6e9a9fd88b4717dfed02605
