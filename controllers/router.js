const {Router, request} = require('express');
// require models
const User = require('../models/user')
const router = Router();
const bcrypt = require("bcryptjs");

// Data
const Request = require('../models/request')

////// Auth Middleware //////
const auth = (req, res, next) => {
    if (req.session.login) {
      next();
    } else {
      res.status(400).render("fail");
    }
};

// Signup
router.get('/', (req, res) => {
    res.render('signup')
})

// Create new user POST request
router.post("/", async (req, res) => {
    try {
        // console.log(req.body)
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
    res.redirect('/rqst-go');
});

// Login POST request
router.post('/login', async (req, res) => {
    // Find user
    const user = await User.find({ username: req.body.username });
    // Check if user was found
    console.log(user)
    console.log(req.body)
    if (user.length > 0) {
        // Compare password
        const check = await bcrypt.compare(req.body.password, user[0].password);
        if (check) {
            // Save info in session, user is logged in & username
            req.session.login = true
            req.session.username = user[0].username;
            req.session.password = user[0].password;
            req.session.isManager = user[0].isManager;
            res.redirect('/rqst-go/main');
        } else {
            // Redirect back to login page if failed
            res.render('fail');
        }
    } else {
        // Redirect to login page if failed
        res.render('fail')
    }
});

router.get('/main', auth, async (req, res) => {
    Request.find({}, (err, request) => {
        res.render('index', {request})
    })
})


// New
router.get('/new', auth, async (req, res) => {
    const userRequests = await Request.find({username: req.session.username})
    res.render('new', {request: userRequests, username: req.session.username, data: Request})
});

// Create
router.post('/main', auth, (req, res) => {
    const newRequest = {
        username: req.session.username,
        name: req.body.name,
        date: req.body.date,
        bucket: req.body.bucket,
        note: req.body.note,
        pending: true
    }
    console.log(newRequest)

    Request.create(newRequest, (error, req) => {
        if (error) {
            console.log(`Error: ${error}`);
        } else {
            res.redirect('/rqst-go/main')   
        }
    })
})

// Pending
router.get('/pending', auth, async (req, res) => {
    const userRequests = await Request.find({username: req.session.username})
    res.render('pending', {request: userRequests, username: req.session.username, data: Request})
})

// Edit
router.get('/:id/edit', auth, async (req, res) => {
    try {
        const gettingRequest = await Request.findById(req.params.id)
        res.render('edit', {gettingRequest})
    }
    catch(error) {
        console.log(error)
    }
})

// Update
router.put('/:id/edit', auth, async (req, res) => {
    try {
        req.body.username = req.session.username
        await Request.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/rqst-go/pending')
    }
    catch(error) {
        console.log(error)
    }
})

// Delete
router.delete('/:id', (req, res) => {
    Request.findByIdAndRemove(req.params.id, (error, data) => {
        res.redirect('/rqst-go/pending')
    })
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

module.exports = auth;
module.exports = router;