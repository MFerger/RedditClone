var app = angular.module('form', ['ngAnimate', 'ngMessages']);

app.directive('timeless', function() {

  var Timeless;
  Timeless = {
    times: {
      year: 31557600000, month: 2629800000, week: 604800000,
      day: 86400000, hour: 3600000, minute: 60000, second: 1000
    },
    labels: {
      past: ['ago'],
      future: ['in'],
      year: ['year', 'years'],
      month: ['month', 'months'],
      week: ['week', 'weeks'],
      day: ['day', 'days'],
      hour: ['hour', 'hours'],
      minute: ['minute', 'minutes'],
      second: ['second', 'seconds'],
      prefix: '',
      suffix: '',
      updateInterval: 1000,
      timeType: {
        auto: 0,
        month: 1,
        week: 2,
        day: 3,
        hour: 4,
        minute: 5,
        second: 6
      }
    },
    epoch: function () {
      return Date.now();
    },
    difference: function (time) {
      return this.epoch() - time;
    },
    estimate: function (date) {
      var diff = this.difference(date)
      , ago
      , future
      , time
      , result = [];

      for (time in this.times) {
        if (diff >= this.times[time]) {
          ago = Math.floor(diff / this.times[time]);
          if (ago > 1) {
            time = Timeless.labels[time][1];
          }
          result.push(
            Timeless.labels.prefix
            + ' '
            + ago
            + ' '
            + time
            + ' '
            + Timeless.labels.past
            + ' '
            + Timeless.labels.suffix
          );
        }
        else if (diff < 0 && diff <= this.times[time]) {
          future = Math.abs(Math.floor(diff / this.times[time]));
          if (future > 1) {
            time = Timeless.labels[time][1];
            result.push(
              Timeless.labels.prefix
              + ' '
              + Timeless.labels.future
              + ' '
              + future
              + ' '
              + time
              + ' '
              + Timeless.labels.suffix
            );
          }
        }
      }
      return result;
    },
    isValid: function(timeItem) {
      return Object.keys(timeItem);
    }

  };

  return {
    transclude: true,
    restrict: 'E',
    replace: true,
    template: '<span ng-transclude></span>',
    scope: {
      time: '=',
      options: '=',
      type: '='
    },
    link: function(scope, element, attrs) {
      angular.extend(Timeless.labels, scope.options);
      var estimateTime = Timeless.estimate(scope.time)
      , setTimeType;

      if (typeof estimateTime[Timeless.labels.timeType[scope.type]] == 'undefined') {
        setTimeType = Timeless.labels.timeType.auto;
      }
      else {
        setTimeType = Timeless.labels.timeType[scope.type];
      }
      setTimeout(function() {
        return element.text(estimateTime[setTimeType]);
      }, 1);
      setInterval(function () {
        scope.$apply(function () {
          var estimateTime = Timeless.estimate(scope.time);
          return element.text(estimateTime[setTimeType]);
        });
      }, Timeless.labels.updateInterval);
    }
  };
});
app.controller('MainController', function($scope) {
  $scope.vm = {};
  $scope.newComments = {};
  $scope.newPostVisible = false;
  $scope.newPost = {};
  $scope.data = [{
    id: 1,
    title: 'spen',
    image: 'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
    author: "Bud Anin",
    date: new Date(),
    votes: 3,
    comments: [
        {
          author: "Mike",
          text: "I've been here, great place!"
        },
        {
          author: "Bill",
          text: "I've been here, great place!"
        }
      ],
      showComment: false,
      newCommentVisible: false
  }, {
    id: 2,
    title: 'Boulder',
    image: 'http://im.rediff.com/news/2016/mar/01smith1.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
    author: "Nick MacIntyre",
    date: new Date('April 28, 2016'),
    votes: 2,
    comments: [
        {
          author: "Ted",
          text: "I've been here, great place!"
        }
      ],
      showComment: false,
      newCommentVisible: false
  }, {
    id: 3,
    title: 'Tel Aviv',
    image: 'http://www.planwallpaper.com/static/images/beautiful-sunset-images-196063.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
    author: "Coutrney and Mike",
    date: new Date('April 27, 2016'),
    votes: 4,
    comments: [
        {
          author: "Chuck",
          text: "I've been here, great place!"
        }
      ],
      showComment: false,
      newCommentVisible: false
  }, {
    id: 4,
    title: 'spen',
    image: 'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
    author: "Bud Anin",
    date: new Date('April 26, 2016'),
    votes: 2,
    comments: [
        {
          author: "Bill",
          text: "I've been here, great place!"
        }
      ],
      showComment: false,
      newCommentVisible: false
  }, {
    id: 5,
    title: 'spen',
    image: 'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
    author: "Bud Anin",
    date: new Date('April 25, 2016'),
    votes: 6,
    comments: [
        {
          author: "George",
          text: "I've been here, great place!"
        }
      ],
      showComment: false,
      newCommentVisible: false
  }];
  $scope.sort = function(sorted) {
    $scope.vm.sort = sorted;
  };

  $scope.up = function(post) {
    post.votes++
  };
  $scope.down = function(post) {
    post.votes--
  };
  $scope.newComment = function(post) {
    post.newCommentVisible = !post.newCommentVisible;
  };
  $scope.showComments = function(post) {
    post.showComment = !post.showComment;
  };

  $scope.addPost = function(post) {
    console.log("post",post);
      post.date = new Date();
      post.votes = 0;
      post.comments = [];
      post.showComment = false;
      post.newCommentVisible = false;
      $scope.data.push(post);
      $scope.vm.newPostVisible = false;
      $scope.newPost = {};
    };
$scope.addComment = function(post, comment) {
  if (comment.author && comment.text) {
    post.comments.push(comment);
    post.newCommentVisible = false;
    $scope.newComment = {};
  }
};
})
