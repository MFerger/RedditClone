(function() {
  'use strict';

  angular.module('app.newPost', [])
    .run(stateChange)
    .config(function submitNewPost($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('newPost', {
      url: '/newpost',
      templateUrl: '/app/newPost/newPost.html',
      controller: newPostController,
      controllerAs: 'vm',
      requiresLogIn: true
    });
});

function stateChange($rootScope, $state, $window) {
    $rootScope.$on('$stateChangeStart', function (event, next, current) {
      if (next.requiresLogIn && !localStorage.getItem('token')) {
        event.preventDefault();
        $state.go('app');
      }
    });
  }

function newPostController(newPostFactory) {
  var vm = this;
  vm.submitNewPost = submitNewPost;

  function submitNewPost(post) {
    newPostFactory.add(post)
    .then(function() {
      vm.post = {};
    });
  }
}

}());
