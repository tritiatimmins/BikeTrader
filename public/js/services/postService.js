 // Service to send posts to database
 angular.module('postService', [])
  .service('PostAd', ['$http', function($http) {

    var postAd = function(post) {
      console.log('success@!!@!@!@', post);
      
      return $http({
        method: 'POST',
        url: '/api/post',
        data: post
      });
    };

    return {

      postAd: postAd

    };
    
  }]);
