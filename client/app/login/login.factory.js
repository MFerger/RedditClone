(function(){
  'use strict';

  angular.module('app.currentUser')
  .factory('currentUserFactory', factory);

  factory.$inject = ['$http', '$window', '$location'];

  function factory ($http, $window, $location) {

    return {
      login: loginUser,
    };

    function loginUser(data) {
      console.log('it got to the log in user function in the factory', data);
      return $http.post('http://localhost:3000/users/login', data)
      .then(function (response) {
        $window.localStorage.setItem('token', response.data.token);
        $window.localStorage.setItem('name', response.data.name)
          $location.path('/');
      })
    }
  }

 }());
