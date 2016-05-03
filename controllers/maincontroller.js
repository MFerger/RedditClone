angular.module('form')
  .controller('MainController', function($scope, postService) {
  $scope.vm = {};
  $scope.newComments = {};
  $scope.newPostVisible = false;
  $scope.newPost = {};
  $scope.data = postService.posts;

  $scope.sort = function(sorted) {
    $scope.vm.sort = sorted;
  };

  $scope.up = function(post) {
    post.votes++
  };

  $scope.down = function(post) {
    post.votes--
  };

  $scope.newComment = function(post) {
    post.newCommentVisible = !post.newCommentVisible;
  };

  $scope.showComments = function(post) {
    post.showComment = !post.showComment;
  };

  $scope.addPost = function(post) {
    console.log("post",post);
      post.date = new Date();
      post.votes = 0;
      post.comments = [];
      post.showComment = false;
      post.newCommentVisible = false;
      $scope.data.push(post);
      $scope.vm.newPostVisible = false;
      $scope.newPost = {};
    };
$scope.addComment = function(post, comment) {
  if (comment.author && comment.text) {
    post.comments.push(comment);
    post.newCommentVisible = false;
    $scope.newComment = {};
  }
};
})
