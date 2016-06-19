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
    .run(function ($rootScope, $state, $window, $location) {
      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
        if(toState.protected && !localStorage.getItem('token')) {
          event.preventDefault();
          $state.go('home')
        }
      });
    })
    .factory('authInterceptor', function ($location) {
      return {
        request: function (config) {
          if (localStorage.getItem('token')) {
              config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
              return config
            } else {
              return config;
            }
        }
      }
    })

  setupRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];
  function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider){
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('app', {
        url: "/",
        template: "<app></app>",
        resolve: {
          currentUser: function ($http, $location) {
            return $http.get('http://localhost:3000/users/me')
            .then(function (response) {
        console.log('CURRENT USER:', response.data)
        return response.data
      })
      .catch(function (error) {
        console.log('Error: ', error)
        localStorage.clear();
        $location.path('/');
        return null;
      })
  }
}
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
