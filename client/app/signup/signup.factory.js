(function(){
  'use strict';
  console.log('it got to the signup factory');

  angular.module('app.newUser')
  .factory('newUser', factory);

  factory.$inject = ['$http'];

  function factory ($http) {

    var users = [];

    return {
      add: createUser,
    };

    function createUser(data) {
      // console.log('create user data', data);
      return $http.post('http://localhost:3000/users/signup', data)
      .then(function (response) {
        // console.log(response.data);
        users.push(response.data);
        return response.data;
      });
    }
  }

 }());
