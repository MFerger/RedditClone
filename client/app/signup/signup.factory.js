(function(){
  'use strict';

  angular.module('app.newUser')
  .factory('newUser', factory);

  factory.$inject = ['$http'];

  function factory ($http) {
    var users = [];

    return {
      add: createUser,
    };

    function createUser(data) {
      return $http.post('http://localhost:3000/users/signup', data)
      .then(function (response) {
        users.push(response.data);
        return response.data;
      });
    }
  }

 }());
