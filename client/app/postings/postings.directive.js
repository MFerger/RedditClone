(function() {
  'use strict';


  angular.module('app.postings')
      .directive('postings', postingFunction);

function postingFunction () {
  return {
      scope: {},
      templateUrl: '/app/postings/postings.directive.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  function controller(postsService, $scope) {
    //$scope.click = click //ng-click='click()'
    var vm = this;
    activate();
    vm.changeVotes = changeVotes;
    $scope.showComment = false;

    $scope.showComments = function () {
      $scope.showComment = !$scope.showComment;
    };

     function changeVotes (item, upordown) {
      postsService.change(item, upordown);
      }

    function activate () {
      postsService.list().then(function(data){
        $scope.serverData = data;
      })
    }
  }


}());
