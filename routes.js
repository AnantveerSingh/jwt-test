const { Router } = require('express');
const auth = require('./auth');
const { requireAuth, checkUser } = require('./middleware');

const router = Router();
router.get('*', checkUser);
router.get('/secret', requireAuth, (req, res) => {
    res.end('secret')
});
router.get('/signup', auth.signup_get);
router.post('/signup', auth.signup_post);
router.get('/login', auth.login_get);
router.post('/login', auth.login_post);
router.get('/logout', auth.logout_get);

module.exports = router;