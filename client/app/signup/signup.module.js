(function() {
  'use strict';

  angular.module('app.newUser', [])
  .config(function signupUsers($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('newUser', {
        url: '/signup',
        templateUrl: '/app/signup/signup.html',
        controller: signupController,
        controllerAs: 'vm'
      });
  });

  function signupController(signupService) {
    var vm = this;
    vm.addUser = addUser;

    function addUser(user) {
      signupService.add(user)
      .then(function() {
        vm.user = {};
      });
    }
  }

}());
