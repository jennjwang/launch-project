const Post = require('../models/post');

// display posts in activities page in descending order according to time added
const post_index = (req, res) => {
    Post.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('activities/activities', { posts: result, title: "Recent plans" })
        })
        .catch(err => {
            console.log(err);
        });
}

// display post details by id
const post_details = (req, res) => {
    const id = req.params.id;
    Post.findById(id)
        .then(result => {
            res.render('activities/show', { post: result, title: "Plan details" });
        })
        .catch(err => {
            console.log(err);
            res.render('404', { title: "Post not found" });
        })
}

// display create plan page
const post_create_get = (req, res) => {
    res.render('activities/post', { title: "Create a new plan" })
}

// create a post and store in db, after creating post redirect to activities
const post_create_post = (req, res) => {
    const post = new Post(req.body);
    post.save()
    .then(result => {
        res.redirect('/activities');
    })
    .catch(err => {
        console.log(err);
    })
}

// delete post by id, we haven't implement this function in our page yet-->upcoming features
const post_delete = (req, res) => {
    const id = req.params.id;
    Post.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect: '/activities'});
    })
    .catch(err=> {
        console.log(err);
    })
}

module.exports = {
    post_index,
    post_details,
    post_create_get,
    post_create_post,
    post_delete
}