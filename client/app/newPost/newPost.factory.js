(function(){
  'use strict';

  angular.module('app.newPosts')
  .factory('newPostFactory', factory);

  factory.$inject = ['$http'];

  function factory ($http) {
    var posts = [];

    return {
      createPost: createPosts
    };

    function createPosts() {
      return $http.post('http://localhost:3000/api/v1/posts')
        .then(function (response) {
          posts = response.data;
          return posts;
        });
    }

  }

}());
