(function() {
  'use strict';
  console.log('it got to the signup module');

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
    console.log('wooo got to the signup Controller!!!%#$*(%$#@*(%*#$@(%$@#*(%$#@*%(#*$)))))');
    var vm = this;
    vm.addUser = addUser;

    function addUser(user) {
      // console.log("add user functionnnn", user);
      newUser.add(user)
      .then(function() {
        vm.user = {};
        // console.log(")))))",vm.user);
      });
    }
  }

}());
