(function(){
  'use strict';

  angular.module('app.newUser')
  .factory('newUser', factory);

  factory.$inject = ['$http', '$state', '$window', '$rootScope'];

  function factory ($http, $state, $window, $rootScope) {

    return {
      add: createUser,
    };

    function createUser(data) {
      return $http.post('http://localhost:3000/users/signup', data)
      .then(function (response) {
        $rootScope.session = {};
        $rootScope.session.user = response.data;
        $window.localStorage.setItem('token', response.data.token)
        $window.localStorage.setItem('name', response.data.name)
        $state.go('app');
      });
    }
  }

 }());
