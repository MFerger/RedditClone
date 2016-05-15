(function() {
  'use strict';

  angular.module('form')
    .directive('app', appFunction);

  function appFunction () {
    return {
      restrict: 'E',
      templateUrl: '/app/layout/layout.directive.html',
      controller: function () {
        console.log("Blah blah");
      }
    }
  }
}());
