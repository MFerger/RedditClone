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
  function controller () {

  }

  }

}());
