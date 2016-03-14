angular.module('ImageCtrl', ['angular-filepicker'])

  .directive('uploadImage', [function () {
    return {

      transclude: true,
      restrict: 'E',
      template: '<input type="filepicker">',
      replace: 'true',
      link: function(scope, element) {
        console.log('element', element[0]);
        filepicker.constructWidget(element[0]);
      }

    };

  }]);


//   var element = document.getElementById('constructed-widget')
// element.type="filepicker-dragdrop";
// element.setAttribute('data-fp-mimetype', 'image/*');
// element.onchange = function(e){
//   console.log(JSON.stringify(e.fpfile));
// };

// filepicker.constructWidget(element);