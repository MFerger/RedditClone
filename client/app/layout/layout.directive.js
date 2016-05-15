(function() {
  'use strict';

  angular.module('app')
    .directive('app', appFunction);

  function appFunction () {
    return {
      restrict: 'E',
      templateUrl: '/app/layout/layout.html',
      controller: function () {
        console.log("Blah blah");
      }
    }
  }
}());
