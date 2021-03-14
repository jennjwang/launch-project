const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const postRouter = require('./routes/postRoute');
const cookieParser = require('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');
const Post = require('./models/post')

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended: false}))

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://newUser:abcd1234@cluster0.qujdv.mongodb.net/node-auth';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

// routes
app.get('*', checkUser);
app.get('/', (req, res) => res.render('home'));
app.get('/activities', requireAuth, async (req, res) => {
  const posts = await Post.find()
  res.render('activities/activities', { posts: posts })
});
app.use(authRoutes);
app.use('/activities', postRouter)


