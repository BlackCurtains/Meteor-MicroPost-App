Router.configure({
  layoutTemplate:"layout"
});
Router.map(function(){
  //posts
  this.route('posts',{
    path: '/',
    template: 'posts'
  });
  // about
  this.route('about');
  //user posts
  this.route('userposts');
  this.route('profile');
})
