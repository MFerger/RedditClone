(function() {
  'use strict';

  angular.module('form')
    .factory('postsService', factory);
    // Factories return services

    // factory.$inject = ['$http'];

    function factory($http) {
        var posts = [];

    // $scope.$watch(function () {
    //   return $scope.data = posts;
    // });

      var factory = this;

      listPosts();
      return {
        add: addPost,
        list: listPosts,
        change: changeVotes
      }
      //
      function listPosts() {
        return $http.get('http://localhost:3000/api/v1/posts')
        .then(function(response) {
          factory.posts = response.data;
          return factory.posts;
        })
      }

      function addPost(newPost) {
        console.log(newPost);
        console.log("Adding post!");
        return $http.post('http://localhost:3000/api/v1/posts', {
          title: newPost.title,
          author: newPost.author,
          img_url: newPost.img_url,
          description: newPost.description
        })
        .then(function(response){
          posts.push(response.data);
          // vm.posts.push(response.data);
        })
      }

      function changeVotes (id, upOrDown){
        console.log('yay changevotes function in the factory!!!');
        console.log('id', id);
        console.log('upOrDown', upOrDown);
        var stuff = {id: id}
        if (upOrDown === 'up') {
          stuff.upOrDown = 1
          return $http.post('http://localhost:3000/api/v1/votes', stuff)
            .then(function (data) {
              console.log(data);
            })
        }
        if (upOrDown === 'down') {
          stuff.upOrDown = -1
          return $http.post('http://localhost:3000/api/v1/votes', stuff)
          .then(function (data) {
            console.log(data);
          })
        }
      }

    }

}());
