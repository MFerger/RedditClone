(function() {
  'use strict';


  angular.module('app.postings')
      .directive('postings', postingFunction);

function postingFunction () {
  return {
      scope: {},
      templateUrl: '/app/postings/postings.html',
      controller: controller,
      controllerAs: 'vm',
      link: function (item) {
        item.$on('showSingleComment', function (event, data) {
          item.showComment = data;
        })
      }
    }
  }

  function controller(postsService, $scope) {
    var vm = this;
    activate();
    vm.changeVotes = changeVotes;

    $scope.$watch('vm.showComment', function (data) {
        $scope.$broadcast('showSingleComment', data)
      });

    vm.showComment = false;

    vm.showComments = function (item) {
      item.showComment = !item.showComment;
    };

    vm.newComment = function (item) {
      item.newCommentVisible = !item.newCommentVisible;
    }

     function changeVotes (item, upordown) {
      postsService.change(item, upordown);
      }

    function activate () {
      postsService.list().then(function(data){
        vm.serverData = data;
      })
    }
  }


}());
