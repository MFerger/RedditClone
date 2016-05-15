(function() {
  'use strict';

  angular.module('form')
  .directive('headerNav', headerNavFunction);

  function headerNavFunction () {
    return {
      restrict: 'E',
      templateUrl: '/directives/header/header.html',
      controller: controller
    }
  function controller () {

  }

  }

}());
