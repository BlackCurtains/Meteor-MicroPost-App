
Template.profile.events({
  "submit .edit-profile": function(event){
    var file = $('#profileImage').get(0).files[0];
    if(file){
      fsFile = new FS.File(file);
      ProfileImages.insert(fsFile, function(err, res){
        if(err) throw new Meteor.Error(err);
        var imageUrl = '/cfs/files/ProfileImages/'+res._id;
        console.log(imageUrl);
        UserImages.insert({
          userId: Meteor.userId(),
          username: Meteor.user().username,
          image: imageUrl
        });
        console.log(UserImages.find().fetch());
        Router.go('/');
      })
    }
    return false;
  }
});
