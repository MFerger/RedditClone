(function() {
  'use strict';


angular.module('form')
  .directive('posting', postingFunction)

function postingFunction () {
  return {
    restrict: 'E',
    templateUrl: '/directives/postings/postings.html',
    controller: controller
  }

  function controller(postsService, $scope) {
    //$scope.click = click //ng-click='click()'
    activate()

    function activate () {
      postsService.list().then(function(data){
        console.log(data);
        $scope.serverData = data;
      })
    }
  }

}


}());
