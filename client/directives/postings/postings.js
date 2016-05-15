(function() {
  'use strict';


angular.module('form')
  .directive('posting', postingFunction)

function postingFunction () {
  return {
    restrict: 'E',
    templateUrl: '/directives/postings/postings.html',
    controller: controller,
    controllerAs: 'vm'
  }
//

class PostService{
  constructor(AppConstants, $http){
    this.posts = null;
    this.currentUserPosts = null;
    this._$http = $http;
    this._API = AppConstants.API;
  }
  fetchPosts(){
    return this._$http.get(`${this._API}/posts`)
    .then(response =>{
      this.posts = response.data.posts;
    })
  }
  fetchCurrentUserPosts(id){
    this.currentUserPosts = this.posts.filter(x =>(
      x.user_id === id
    ));

  }
  changeVotes(id, upOrDown){
    const postVote = {id, upOrDown};
    return (
      this._$http.post(`${this._API}/posts/votes`, postVote)
      .then(res =>{
        this.posts.map(x =>(
          x.post_id == res.data.post_id
          //awesome duplication method replacing old key value with new
            ? Object.assign(x, {votes: res.data.votes})
            : x
        ))
      })
    )
  }
}
export default ['AppConstants', '$http', PostService]
//   function controller(postsService, $scope) {
//     //$scope.click = click //ng-click='click()'
//     var vm = this;
//     activate();
//     vm.changeVotes = changeVotes;
//     $scope.showComment = false;
//
//     $scope.showComments = function () {
//       $scope.showComment = !$scope.showComment;
//     };
//
//      function changeVotes (item, upordown) {
//       console.log('woo change vote in the controller');
//       console.log(item);
//       console.log(upordown);
//       postsService.change(item, upordown);
//       }
//
//     function activate () {
//       postsService.list().then(function(data){
//         $scope.serverData = data;
//       })
//     }
//   }
//
// }


}());
