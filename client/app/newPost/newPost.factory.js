
(function(){
  'use strict';

  angular.module('app.newPost')
  .factory('newPostFactory', factory);

  factory.$inject = ['$http', '$window'];

  function factory ($http, $window) {
    var users = [];

    return {
      add: addPost,
    };

    function addPost(data) {
      data.author = $window.localStorage.getItem('name')
      return $http.post('http://localhost:3000/api/v1/newpost', data)
      .then(function (response) {
        users.push(response.data);
        return response.data;
      });
    }
  }

 }());
