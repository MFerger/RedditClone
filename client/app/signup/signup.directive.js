// (function() {
//   'use strict';
//
//   angular.module('app.newUser')
//     .controller('signupController', function($scope, $http, $window, $location) {
//       $scope.createUser = function() {
//         $http.post('/api/v1/users/signup', $scope.user)
//           .then(function(response) {
//             $window.localStorage.setItem('token', response.data.token)
//             $location.path('/');
//
//           })
//       }
//     })
//
// }());
