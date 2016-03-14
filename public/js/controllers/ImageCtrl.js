angular.module('ImageCtrl', ['angular-filepicker'])

  // custom directive for filepicker widget.
  .directive('uploadImage', [function () {
    return {

      transclude: true,
      restrict: 'E',
      template: '<input type="filepicker">',
      replace: 'true',
      link: function(scope, element) {
        filepicker.constructWidget(element[0]);
      }

    };

  }]);
