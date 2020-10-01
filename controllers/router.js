const {Router} = require('express');
// require models
const User = require('../models/user')
const router = Router();
const bcrypt = require("bcryptjs");

// Data
const Request = require('../models/request')

////// Auth Middleware //////

// Signup
router.get('/', (req, res) => {
    res.render('signup')
})

// Create new user POST request
router.post("/", async (req, res) => {
    try {
        console.log(req.body)
        const user = {
            username: req.body.username,
            password: req.body.password,
            isManager: req.body.gridRadios === "manager" ? true : false
        }
        console.log(user)
        // encrypting password
        user.password = await bcrypt.hash(req.body.password, 10);
        console.log(req.body.password)
        // Save new user to DB
        const newUser = await User.create(user);
        // Redirect back to login page
        res.redirect('/rqst-go/login')
    } catch (error) {
        console.log(error)
    }
});

// Login page
router.get('/login', (req, res) => {
    res.render('login')
});

// Login failed page
router.get('/fail', (req, res) => {
    res.render('fail')
})

//LOGOUT
router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

// Login POST request
router.post('/login', async (req, res) => {
    // Find user
    const user = await User.find({ username: req.body.username });
    // Check if user was found
    if (user.length > 0) {
        // Compare password
        const check = await bcrypt.compare(req.body.password, user[0].password);
        if (check) {
            // Save info in session, user is logged in & username
            req.session.login = true
            req.session.username = user[0].username;
            req.session.password = user[0].password;
            req.session.isManager = user[0].isManager;
            res.redirect('/login');
        } else {
            // Redirect back to login page if failed
            res.render('fail');
        }
    } else {
        // Redirect to login page if failed
        res.render('fail')
    }
});

// Index
router.get('/main', (req, res) => {
    res.render('index')
});

// New
router.get('/new' , (req, res) => {
    res.render('new')
});

// Create
router.post('/', (req, res) => {
    Request.create(req.body, (err, request) => {
        res.redirect('/')
    })
    Request.create(req.body, (error, request) => {
        res.redirect('/main')
    })
})

// Pending
router.get('/pending', (req, res) => {
    res.render('pending')
})
// router.get('/pending/:id/approve', (req, res) => {
//     Request.findById(req.params.id, (err, request) => {
//         request.pending = false;
//         Request.findByIdAndUpdate(req.params.id, request, () => {
//             res.redirect('/pending')
//         })
//     })
// })

router.get('/approve', (req, res) => {
    res.render('approve')
})


module.exports = router