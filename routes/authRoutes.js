const { Router } = require('express')
const router = Router()
const passport = require('passport')

router.get('/google', passport.authenticate('google', {
    scope:['profile']
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.send(req.user)
    const user_ID = req.user.id
})

module.exports = router
