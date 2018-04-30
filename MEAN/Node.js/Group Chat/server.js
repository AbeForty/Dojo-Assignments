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
// var session = require('express-session');
// // original code:
// // more new code:
// app.use(session({secret: 'codingdojorocks'}));
// // root route to render the index.ejs view
var server = app.listen(8000, function() {
    console.log("listening on port 8000");
});

var io = require('socket.io').listen(server);
var chats = [];
io.sockets.on('connection', function (socket) {
    // all the server socket code goes in here
    socket.on("posting_data", function(data){
        // console.log( 'Someone clicked a button!  Name: '  + data.name);
        chats.push(data.user + " says: " + data.message);
        io.emit('server_response', {message: data.user + " says: " + data.message, user: data.user});
    })

    socket.on("join", function(data){
        // console.log( 'Someone clicked a button!  Name: '  + data.name);
        socket.broadcast.emit('join_response', {message: data.user + " has joined the chat.", chats: chats});
    })
})

app.get('/', function(req, res) {
    res.render("index");
});
// app.post('/process', function(req, res) {  
//     console.log("POST DATA \n\n", req.body);
//     req.session.name = req.body.name
//     req.session.location = req.body.location
//     req.session.language = req.body.language
//     req.session.comment = req.body.comment
//     res.redirect("/result");
// });
// app.get('/result', function(req, res) {
//     var sess = req.session
//     var context = {"name": req.session.name, "location": req.session.location, "language": req.session.language, "comment": req.session.comment}
//     res.render("results", context);
// });
// app.listen(8000, function() {
//  console.log("listening on port 8000");
// });
