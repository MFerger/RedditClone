(function() {
  'use strict';

  angular.module('form')
  .directive('modal', modalFunction)

  function modalFunction(postsService) {
    return {
      restrict: 'E',
      templateUrl: '/directives/modal/modal.html',
      controller: controller
  }

  function controller($scope) {
    //$scope.click = click //ng-click='click()'
    $scope.modal = {};

    function onClick (newPost) {
      console.log('activate got here');
      console.log(newPost);
      if ($scope.newPost.title) {
        postsService.add($scope.newPost)
      }
      $scope.newPost = {};
      }
    }
  }

}());
