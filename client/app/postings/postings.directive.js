(function() {
  'use strict';


  angular.module('app.postings')
      .directive('postings', postingFunction);

function postingFunction () {
  console.log('it got to the posting function');
  return {
      scope: {},
      templateUrl: '/app/postings/postings.html',
      controller: controller,
      controllerAs: 'vm',
      link: function (item) {
        item.$on('showSingleComment', function (event, data) {
          item.showComment = data;
          // console.log(item.showComment, "SADFKJASLKDFJLKASJDFLKJ");
          // scope.$apply()
        })
      }
    }
  }

  function controller(postsService, $scope) {
    //$scope.click = click //ng-click='click()'
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
