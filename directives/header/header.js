angular.module('form')
  .directive('headerNav', function($scope) {
  return {
    restrict: 'E',
    templateUrl: '/directives/header/header.html'
  }
  $scope.vm = {};
  $scope.sort = function(sorted) {
    $scope.vm.sort = sorted;
  };

})
