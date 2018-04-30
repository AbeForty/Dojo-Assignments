// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
// static content
app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// new code:
var session = require('express-session');
// original code:
// more new code:
app.use(session({secret: 'codingdojorocks'}));
// root route to render the index.ejs view
app.get('/', function(req, res) {
    var sess = req.session
    if (sess.count){
        sess.count += 1;
    }
    else{
        sess.count = 1;
    }
    
    res.render("index", {count: req.session.count});
});
app.post('/plus2', function(req, res) {
    var sess = req.session
    if (sess.count){
        sess.count += 2;
    }
    else{
        sess.count = 1;
    }
    
    res.redirect("/");
});
app.post('/reset', function(req, res) {
    var sess = req.session
    sess.count = 0;    
    res.redirect("/");
});
// post route for adding a user
// app.post('/users', function(req, res) {
//  console.log("POST DATA", req.body);
//  // This is where we would add the user to the database
//  // Then redirect to the root route
//  res.redirect('/');
// });
// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
