(function() {
  'use strict';

  angular.module('app.currentUser', [])
    .config(function loginUser($stateProvider, $urlRouterProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('loginUser', {
      url: '/login',
      templateUrl: '/app/login/login.html',
      controller: loginController,
      controllerAs: 'vm'
    });
});

function loginController(currentUserFactory) {
  var vm = this;
  vm.loginUser = loginUser;

  function loginUser(post) {
    console.log('it got here bitches');
    currentUserFactory.login(post)
    .then(function() {
      vm.post = {};
    });
  }
}

}());
