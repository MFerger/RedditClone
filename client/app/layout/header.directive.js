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

    controller.$inject = ['$scope', '$window']

  function controller ($scope, $window) {
    // var vm = this;
    // vm.session = $rootScope.session;
    $scope.vm = {};
    $scope.vm.session = $window.localStorage.getItem('name');

    $scope.$watch(function(){
      return $window.localStorage.getItem('name');
    }, function(newValue){
      $scope.vm.session = newValue;
    }, true);

  }


}());
