const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20')
const keys = require('./keys')

const googleStrategy = new GoogleStrategy({
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret,
    callbackURL:'/auth/google/redirect'
})

passport.use(googleStrategy, () => {
    //callback funcion
})