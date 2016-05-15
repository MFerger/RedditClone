(function() {
  'use strict';


  angular.module('app.postings')
      .directive('postings', postingFunction);

function postingFunction () {
  console.log('it got to the posting function');
  return {
      scope: {},
      templateUrl: '/app/postings/postings.html',
      controller: controller,
      controllerAs: 'vm'
    }
  }

  function controller(postsService) {
    //$scope.click = click //ng-click='click()'
    console.log('it got to the posts controllerAs');
    var vm = this;
    activate();
    vm.changeVotes = changeVotes;
    vm.showComment = false;

    vm.showComments = function () {
      vm.showComment = !vm.showComment;
    };

     function changeVotes (item, upordown) {
      postsService.change(item, upordown);
      }

    function activate () {
      console.log('it got to the activate function');
      postsService.list().then(function(data){
        vm.serverData = data;
      })
    }
  }


}());
