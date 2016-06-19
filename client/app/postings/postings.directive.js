(function() {
  'use strict';


  angular.module('app.postings')
  .directive('postings', postingFunction);

  function postingFunction() {
    return {
      scope: {},
      templateUrl: '/app/postings/postings.html',
      controller: controller,
      controllerAs: 'vm',
      link: function(item) {
        item.$on('showSingleComment', function(event, data) {
          item.showComment = data;
        })
      }
    }
  }

  function controller(postsService, $scope, headerFactory) {
    $scope.vm = {};
    activate();
    $scope.vm.changeVotes = changeVotes;
    $scope.vm.sortValue = '-votes';
    $scope.vm.searchValue = '';

    $scope.vm.showComment = false;

    $scope.vm.showComments = function(item) {
      item.showComment = !item.showComment;
    };

    $scope.vm.newComment = function(item) {
      item.newCommentVisible = !item.newCommentVisible;
    }
    $scope.vm.addComment = function (item, value, position) {
      console.log('addComment', item,value,position);
      postsService.comment(item, value.text);
    }

    function changeVotes(item, upordown) {
      postsService.change(item, upordown).then(function(result) {
        $scope.vm.serverData.posts = result;
      });
    }

    function activate() {
      postsService.list().then(function(data) {
        $scope.vm.serverData = data;
      })
    }

    $scope.$watch(function() {
      return headerFactory.sortGet();
    }, function(newValue) {
      $scope.vm.sortValue = newValue;
    }, true);

    $scope.$watch(function() {
      return headerFactory.searchGet();
    }, function(newValue) {
      $scope.vm.searchValue = newValue;
    }, true);



  }


}());
