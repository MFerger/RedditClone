var app = angular.module('form', ['ngAnimate']);

app.controller('MainController', function($scope){
  $scope.vm = {};
  $scope.data = [
    {
      id: 1,
      title:  'spen',
      image: 'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
      author: "Bud Anin",
      date: new Date(),
      votes: 3,
      comments: []
    },
    {
      id: 2,
      title:  'Boulder',
      image: 'http://im.rediff.com/news/2016/mar/01smith1.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
      author: "Nick MacIntyre",
      date: new Date(),
      votes: 2,
      comments: []
    },
    {
      id: 3,
      title:  'Tel Aviv',
      image: 'http://www.planwallpaper.com/static/images/beautiful-sunset-images-196063.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
      author: "Coutrney and Mike",
      date: new Date(),
      votes: 4,
      comments: []
    },
    {
      id: 4,
      title:  'spen',
      image: 'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
      author: "Bud Anin",
      date: new Date(),
      votes: 2,
      comments: []
    },
    {
      id: 5,
      title:  'spen',
      image: 'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
      author: "Bud Anin",
      date: new Date(),
      votes: 6,
      comments: []
    }
  ];
  $scope.sort = function (sorted){
    $scope.vm.sort = sorted;
  };

  $scope.up = function(post) {
    post.votes++
  };
  $scope.down = function(post) {
    post.votes--
  };
});
