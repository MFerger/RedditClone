angular.module('form')
  .directive('posting', function($scope) {
  return {
    restrict: 'E',
    templateUrl: '/directives/postings/postings.html'
  }
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

  $scope.addComment = function(post, comment, index) {
    if (comment.author && comment.text) {
      post.comments.push(comment);
      post.newCommentVisible = false;
      $scope.newComment[index] = null;
    }
  };
  
})
