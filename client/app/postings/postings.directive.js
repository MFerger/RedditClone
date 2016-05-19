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

  function controller(postsService, $scope, $rootScope) {
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
    
    vm.sort = $rootScope.vm.sort;
    console.log($rootScope.vm.sort('hello'));
    console.log(vm.sort);


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
