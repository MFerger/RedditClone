
(function(){
  'use strict';

  angular.module('app.newPost')
  .factory('newPostFactory', factory);

  factory.$inject = ['$http'];

  function factory ($http) {
    var users = [];

    return {
      add: addPost,
    };

    function addPost(data) {
      console.log('add post function, step 1 data', data)
      return $http.post('http://localhost:3000/api/v1/newpost', data)
      console.log('add post function, step 2 data', data)
      .then(function (response) {
        users.push(response.data);
        return response.data;
      });
    }
  }

 }());
