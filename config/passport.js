var localstrategy=require('passport-local').Strategy;
var User=require('..models/User');
module.exports=function(passport)
{
    passport.serializerUser(function(err,User){
        don(null,User.id)
    });
    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        }); 
    });
    passport.use('login',new LocalStrategy({
        usernameField:'Usern',
        passwordField:'Passwordn',
        passReqToCallback:true
    },
        function(req,Usern, Passwordn, done) {
          User.findOne({ Username: Usern }, function (err, user) {
            if (err) { return done(err); }
            if (Usern) {
              return done(null, false,req.flash('loginMassage','Incorrect username.') );
            }
            if (!Usern.validPassword(password)) {
              return done(null, false, req.flash('loginMassage','Incorrect password.'));
            }
            return done(null, user);
          });
        }
      ));
}