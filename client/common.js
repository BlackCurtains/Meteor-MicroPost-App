
Meteor.subscribe("posts");
Meteor.subscribe("ProfileImages");
Meteor.subscribe("UserImages");




Meteor.startup(function () {
   AccountsEntry.config({
     homeRoute: '/',
     dashboardRoute: '/',
     passwordSignupFields: 'USERNAME_AND_EMAIL',
     signInAfterRegistration: true,
     emailVerificationPendingRoute: '/sign-in'
   });
   Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL',
   });
 });

Template.registerHelper("getProfileImg", function(id){
  console.log(id);
  var imgUrl = UserImages.findOne({userId: id}).image;
  console.log(imgUrl);
  return imgUrl;

 });
