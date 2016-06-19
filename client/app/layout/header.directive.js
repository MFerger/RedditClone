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

    controller.$inject = ['$scope', '$window', 'headerFactory']

  function controller ($scope, $window, headerFactory) {

    $scope.vm = {};
    $scope.vm.session = $window.localStorage.getItem('name');
    $scope.vm.sort = '-votes';
    $scope.vm.searchValue = '';
    
    $scope.$watch(function(){
      return $window.localStorage.getItem('name');
    }, function(newValue){
      $scope.vm.session = newValue;
    }, true);


    $scope.vm.sortIt = function(sorted) {
      $scope.vm.sort = sorted;
    };

    $scope.$watch(function(){
      return $scope.vm.sort;
    }, function(newValue){
      headerFactory.sortSet(newValue);
    }, true);

    $scope.$watch(function(){
      return $scope.vm.searchValue;
    }, function(newValue){
      headerFactory.searchSet(newValue);
    }, true);

  }


}());
