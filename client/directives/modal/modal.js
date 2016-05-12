(function() {
  'use strict';

  angular.module('form')
  .directive('modal', modalFunction)

  function modalFunction() {
    return {
      restrict: 'E',
      templateUrl: '/directives/modal/modal.html'
  }
}

}());
