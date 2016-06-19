(function() {
  'use strict';
  angular.module('app')
  .factory('headerFactory', factory);

  factory.$inject = ['$http', '$state', '$window', '$rootScope'];

  function factory ($http, $state, $window, $rootScope) {
    var _sortValue = '-votes';
    var _searchValue = '';

    return {
      sortSet: sortSet,
      searchSet: searchSet,
      sortGet: sortGet,
      searchGet: searchGet,
    };

    function sortSet(value) {
      _sortValue = value;
    }
    function searchSet(value) {
      _searchValue = value;
    }
    function sortGet() {
      return _sortValue.slice();
    }
    function searchGet() {
      return _searchValue.slice();
    }
  }
}());
