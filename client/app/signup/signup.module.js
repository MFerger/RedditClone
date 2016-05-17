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

  function signupController(newUser) {
    var vm = this;
    vm.addUser = addUser;

    function addUser(user) {
      console.log("add user functionnnn", user);
      newUser.add(user)
      .then(function() {
        vm.user = {};
        // console.log(")))))",vm.user);
      });
    }
  }

}());
