const { Router } = require('express')
const router = Router()
const passport = require('passport')

router.get('/google', passport.authenticate('google', {
    scope:['profile']
}))

module.exports = router