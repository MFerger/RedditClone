(function() {
  'use strict';

  angular.module('app.postings')
  .factory('postsService', factory);
  function factory($http) {
    var factory = this;
    listPosts();

    return {
      add: addPost,
      list: listPosts,
      change: changeVotes,
      getPosts: getPosts,
      comment: addComment
    }

    function getPosts() {
      return factory.posts;
    }

    function listPosts() {
      return $http.get('http://localhost:3000/api/v1/posts')
      .then(function(response) {
        factory.posts = response.data;
        return factory.posts;
      })
    }

    function addPost(newPost) {
      return $http.post('http://localhost:3000/api/v1/posts', {
        title: newPost.title,
        author: newPost.author,
        img_url: newPost.img_url,
        description: newPost.description
      })
      .then(function(response){
        factory.posts.push(response.data);
      })
    }

    function addComment(content, comment, userID) {
      console.log('content', comment);
      return $http.post('http://localhost:3000/api/v1/comments', {
         user_id: content.user_id,
         post_id: content.id,
         content: comment
       })
       .then(function(response){
         return response.data
       })
    }

    $scope.$watch(function(){
      return $window.localStorage.getItem('name');
    }, function(newValue){
      $scope.vm.session = newValue;
    }, true);


    function changeVotes (id, upOrDown){
      var stuff = {id: id}
      if (upOrDown === 'up') {
        stuff.upOrDown = 1
        return $http.post('http://localhost:3000/api/v1/votes', stuff)
        .then(function (data) {
          factory.posts = data.data.posts;
          return factory.posts;
        })
      }
      if (upOrDown === 'down') {
        stuff.upOrDown = -1
        return $http.post('http://localhost:3000/api/v1/votes', stuff)
        .then(function (data) {
          factory.posts = data.data.posts;
          return factory.posts;
        })
      }
    }
  }

}());
