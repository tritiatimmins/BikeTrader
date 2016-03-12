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

    var showBikes = function() {
      return $http({
        method: 'GET',
        url: '/api/feed',
      })
      .then(function(resp) {
      console.log('getting posts', resp.data);
        return resp.data;
      });
    };

    return {

      postAd: postAd,
      showBikes: showBikes

    };
    
  }]);
