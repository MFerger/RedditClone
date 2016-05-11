angular.module('form')
  .directive('modal', function($scope) {
  return {
    restrict: 'E',
    templateUrl: '/directives/modal/modal.html'
  }

  $scope.vm = {};
  $scope.newPostVisible = false;
  $scope.newPost = {};
  $scope.data = postService.posts;

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

})
