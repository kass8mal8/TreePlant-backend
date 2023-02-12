const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
// const keys = require('./keys')

const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/redirect"
  },() => {
    // callback function
  }
));