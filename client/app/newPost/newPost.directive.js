(function() {
  'use strict';

  angular.module('app.newPost')
  .directive('newPost', newPostFunction)

  function newPostFunction(postsService) {
    return {
      scope: {},
      templateUrl: '/directives/modal/modal.html',
      controller: controller,
      controllerAs: 'vm'
  }

  function controller($scope, postsService) {
    //$scope.click = click //ng-click='click()'
      var vm = this;


    function onClick (newPost) {
      if (vm.newPost.title) {
        postsService.add(vm.newPost)
      }
      $vm.newPost = {};
      }
    }
  }

}());
