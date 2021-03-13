const express = require('express');
const Post = require('./../models/post')
const router = express.Router();
const { requireAuth } = require('./middleware/authMiddleware');

router.get('/post', (req, res) => {
    res.render('activities/post')
})

router.get('/:id', async (req, res, next) => {

} )

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        time: req.body.time,
        description: req.body.description
    })
    try {
        post = await post.save();
        res.redirect(`/activities/${post.id}`)
    } catch (e) {
        res.render('activities/post', {post: post})
    }
    
})


module.exports = router;