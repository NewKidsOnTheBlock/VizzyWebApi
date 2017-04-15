// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');
var bodyParser = require('body-parser');
var app        = express();
var morgan     = require('morgan');

// configure app
app.use(morgan('dev')); // log requests to the console

// configure body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port     = process.env.PORT || 1729; // set our port

var mongoose   = require('mongoose');
mongoose.connect('mongodb://admin:saltywalrus@ds161580.mlab.com:61580/vizzy'); // connect to our database
var Post     = require('./app/models/post');

// ROUTES FOR OUR API
// =============================================================================

// create our router
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next();
});

// test route to make sure everything is working (accessed at GET http://localhost:1729/api)
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the Vizzy API!' });
});

// on routes that end in /posts
// ----------------------------------------------------
router.route('/posts')

    // create a post (accessed at POST http://localhost:1729/api/posts)
    .post(function(req, res) {

        var post = new Post();		// create a new instance of the Post model
        post.message = req.body.message;  // set the posts message
        post.posted = Date.now();   //set the posts Date
        post.vizzy = req.body.vizzy;


        post.save(function(err) {
            if (err)
                res.send(err);

            res.json({ message: 'Post created!' });
        });


    })

    // get all the posts (accessed at GET http://localhost:1729/api/posts)
    .get(function(req, res) {
        Post.find({$query: {}, $orderby: {posted: -1}}).limit(25).exec(function(err, posts) {
            if (err)
                res.send(err);

            res.json(posts);
        });
    });


// REGISTER OUR ROUTES -------------------------------
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('REST API Listening @ http://localhost:' + port+"/api");
