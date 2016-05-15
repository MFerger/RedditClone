(function() {
  'use strict';

  angular.module('app.newPost', [])
    .config(function submitNewPost($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('newPost', {
      url: '/newpost',
      templateUrl: '/app/newPost/newPost.directive.html',
      controller: newPostController,
      controllerAs: 'vm'
    });
});

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
