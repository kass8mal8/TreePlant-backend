const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, CALLBACK_URI } = process.env
const User = require('../model/users-model')


passport.serializeUser((user, done)=> {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => { done(err, user) })
});

const user_ID = undefined

const googleStrategy = new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: CALLBACK_URI
  },
  (accessToken, refreshToken, profile, done) => {
    // check if user already exists in the database

    const checkUser = async() => {
        try {
          const currentUser = await User.findOne({googleID: profile.id})
          if (currentUser){
             // already exists
             console.log("User already exists")
             done(null, currentUser)
             user_ID = profile.id
          }
          else{
              // create new user
              const newUser = await User.create({
                username:profile.displayName,
                googleID:profile.id,
                photoURL:profile.photos[0].value
              })
            
              user_ID = newUser.id
              done(null, newUser)
          }
        } 

        catch (error) {
          console.log(error.message);
        }
    }

    checkUser()
  }
)

console.log(user_ID);

passport.use(googleStrategy);
module.exports = user_ID