(function() {
  'use strict';

  var dependencies = [
    'ui.router',
    'app.postings',
    'app.newPost',
    'app.newUser'
    // 'app.submit'
  ];

  angular.module('app', dependencies)
    .config(setupRoutes);

  setupRoutes.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function setupRoutes($stateProvider, $urlRouterProvider, $locationProvider){
    console.log('HEY APP>MODULE!');
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/");

    $stateProvider
      .state('app', {
        url: "/",
        template: "<app></app>"
      });
  }
}());
