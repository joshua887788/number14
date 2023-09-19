const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// View all posts
router.get('/', async (req, res) => {
    try {
        const posts = await Post.findAll();
        res.render('allPosts', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a post
router.post('/create', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            userId: req.session.user.id
        });
        res.redirect('/');
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
