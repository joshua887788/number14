const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

// Registration
router.post('/register', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await User.create({
            username: req.body.username,
            password: hashedPassword
        });
        req.session.user = newUser; // setting up a session for the user
        res.redirect('/dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ where: { username: req.body.username } });
        if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
            res.status(401).json({ message: 'Incorrect username or password' });
            return;
        }
        req.session.user = user; // setting up a session for the user
        res.redirect('/dashboard');
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/register', (req, res) => {
    res.render('register');
});

module.exports = router;
