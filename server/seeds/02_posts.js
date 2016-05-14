
exports.seed = function(knex, Promise) {
  return Promise.join(
    // Deletes ALL existing entries
    knex('posts').del(),

    // Inserts seed entries
    knex('posts').insert({
      id: 1,
      user_id: 1,
      description: 'here is a cool description from user 1 to post 1',
      title: 'Aspen',
      img_url: 'http://www.gettyimages.ca/gi-resources/images/Homepage/Hero/UK/CMS_Creative_164657191_Kingfisher.jpg',
      author: 'Bud Anin',
      votes: 2, showComment: false, newCommentVisible: false, date: '20160417 10:34:09 AM'}),
    knex('posts').insert({
      id: 2,
      user_id: 2,
      description: 'here is a cool description from user 2 to post 2',
      title: 'Boulder',
      img_url: 'http://im.rediff.com/news/2016/mar/01smith1.jpg', author: 'Nick MacIntyre', votes: 3, showComment: false, newCommentVisible: false, date: '20160419 10:34:09 AM'}),
    knex('posts').insert({
      id: 3,
      user_id: 3,
      description: 'here is a cool description from user 3 to post 3',
      title: 'Tel Aviv',
      img_url: 'http://www.planwallpaper.com/static/images/beautiful-sunset-images-196063.jpg', author: 'Fichael Merger', votes: 4, showComment: false, newCommentVisible: false, date: '20160414 10:34:09 AM'}),
    knex('posts').insert({
      id: 4,
      user_id: 4,
      description: 'here is a cool description from user 4 to post 4',
      title: 'Belgium',
      img_url: 'http://www.tourist-destinations.net/wp-content/uploads/2013/05/Belgium-1.jpg', author: 'Ichaelmay ErgerFay', votes: 1, showComment: false, newCommentVisible: false, date: '20160415 10:34:09 AM'}),
    knex('posts').insert({
      id: 5,
      user_id: 5,
      description: 'here is a cool description from user 5 to post 5',
      title: 'Amsterdam',
      img_url: 'http://www.fluentin3months.com/wp-content/uploads/2011/05/amsterdam.jpg', author: 'Ferg', votes: 2, showComment: false, newCommentVisible: false, date: '20160412 10:34:09 AM'})
  );
};
