(function() {
  'use strict';

  angular.module('app')
  .directive('headerNav', headerNavFunction);

  function headerNavFunction () {
    return {
      restrict: 'E',
      templateUrl: 'app/layout/header.html',
      controller: controller
    }
  }

    controller.$inject = ['$scope', '$window', '$rootScope']

  function controller ($scope, $window, $rootScope) {

    $scope.vm = {};
    $scope.vm.session = $window.localStorage.getItem('name');

    $scope.$watch(function(){
      return $window.localStorage.getItem('name');
    }, function(newValue){
      $scope.vm.session = newValue;
    }, true);

    $scope.vm.sort = function(sorted) {
      $rootScope.vm.sort = sorted;
      return $rootScope.vm.sort;
    };

  }


}());
