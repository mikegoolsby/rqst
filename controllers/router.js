const {Router} = require('express');
// require models
const User = require('../models/user')
const router = Router();

// Index
router.get('/', (req, res) => {
    res.render('signup')
})

module.exports = router