function getTotalLikes(user) {
  return user.blogs.reduce((total, blog) => total + blog.likes, 0);
}

function getMostPopularBlog(user) {
  return user.blogs.reduce((mostPopular, blog) =>
    blog.likes > mostPopular.likes ? blog : mostPopular
  );
}

module.exports = {
  getTotalLikes,
  getMostPopularBlog
};