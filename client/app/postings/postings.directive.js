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
      controllerAs: 'vm',
      link: function (vm) {
        vm.$on('showSingleComment', function (event, data) {
          vm.showComment = data;
          console.log(vm.showComment, "SADFKJASLKDFJLKASJDFLKJ");
          // scope.$apply()
        })
      }
    }
  }

  function controller(postsService, $scope) {
    //$scope.click = click //ng-click='click()'
    var vm = this;
    activate();
    vm.changeVotes = changeVotes;

    $scope.$watch('vm.showComment', function (data) {
      console.log('watch is working', data);
        $scope.$broadcast('showSingleComment', data)
      });

    vm.showComment = false;

    vm.showComments = function (item) {
      console.log('the show comments function was fired', item);
      console.log('show comments function', vm.showComment);
      item.showComment = !item.showComment;
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
