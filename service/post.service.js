angular.module('form').factory('postService', function() {

    var postService = {
      posts: [
        {
        id: 1,
        title: 'Aspen',
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
        title: 'Belgium',
        image: 'http://www.tourist-destinations.net/wp-content/uploads/2013/05/Belgium-1.jpg',
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
        title: 'Amsterdam',
        image: 'http://www.fluentin3months.com/wp-content/uploads/2011/05/amsterdam.jpg',
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
      },{
        id: 5,
        title: 'Caribbean',
        image: 'http://english.colorado.edu/wp-content/uploads/2014/05/Caribbean-Vacations.jpg',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula fermentum neque et congue. Vestibulum sed nulla dictum, accumsan nulla a, mattis tortor. Mauris purus risus, maximus ac risus quis, suscipit sagittis lectus. Nulla sit amet pulvinar lorem. Integer in sapien finibus, scelerisque lacus eget, malesuada diam.",
        author: "Bud Anin",
        date: new Date('April 24, 2016'),
        votes: 6,
        comments: [
            {
              author: "George",
              text: "I've been here, great place!"
            }
          ],
          showComment: false,
          newCommentVisible: false
      }
    ]}
    return postService;
})
