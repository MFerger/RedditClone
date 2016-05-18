(function() {
  'use strict';

  var dependencies = [
    'ui.router',
    'app.postings',
    'app.newPost',
    'app.newUser',
    'app.currentUser'
  ];

  angular.module('app', dependencies)
    .config(setupRoutes)
    .factory('authInterceptor', tokenChecker)

  setupRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];
  function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('app', {
        url: "/",
        template: "<app></app>",
      })
      $httpProvider.interceptors.push('authInterceptor')
  }

    function tokenChecker ($location) {
        return {
          request: function (request) {
            var token = localStorage.getItem('token');
            if(token) {
              request.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
            }
            return request;
          },
          responseError: function (response) {
            if(response.status === 403) {
              localStorage.removeItem('token');
              $state.go('app');
            }
            return response;
          }
        }

    }

}());
