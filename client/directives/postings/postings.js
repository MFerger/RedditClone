(function() {
  'use strict';


angular.module('form')
  .directive('posting', postingFunction)

function postingFunction () {
  return {
    restrict: 'E',
    templateUrl: '/directives/postings/postings.html',
    controller: controller,
    controllerAs: 'vm'
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
      console.log('woo change vote in the controller');
      console.log(item);
      console.log(upordown);
      postsService.change(item, upordown);
      }



    
    function activate () {
      postsService.list().then(function(data){
        console.log(data);
        $scope.serverData = data;
      })
    }
  }

}


}());
