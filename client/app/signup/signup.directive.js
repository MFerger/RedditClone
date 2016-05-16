(function() {
  'use strict';
  console.log('it got to the signup directive');

  angular.module('app.newUser')
    .controller('signupController', function($scope, $http, $window, $location) {
      $scope.createUser = function() {
        console.log('it got to the signup controller directive!!!!!@#!@#$!@#!@#!@#!@#!@#!@#!@#');
        $http.post('/api/v1/users/signup', $scope.user)
          .then(function(response) {
            $window.localStorage.setItem('token', response.data.token)
            $location.path('/');

          })
      }

    })

}());
