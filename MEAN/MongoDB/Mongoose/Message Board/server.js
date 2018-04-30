var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/message_board');
// Create a Schema for Users
var CommentSchema = new mongoose.Schema({
    name: { type: String,  required: true},
    comment: { type: String, required: true},
}, { timestamps: true })

// Store the Schema under the name 'User'
mongoose.model('Comment', CommentSchema);
var MessageSchema = new mongoose.Schema({
    name: {type: String, required: true},
    message: {type: String, required: true},
    comments: {type: Array, required: true},
}, { timestamps: true })
mongoose.model('Message', MessageSchema);

// Retrieve the Schema called 'User' and store it to the variable User
var Message = mongoose.model('Message');
var Comment = mongoose.model('Comment');

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
// app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
// new code:
// original code:
// more new code:
// root route to render the index.ejs view
app.get('/', function (req, res) {
    Message.find({},function (err, messages) {
        if (err) return console.error(err);
        res.render("index", { "messages": messages });
    });
});
app.post('/messages', function (req, res) {
    // console.log("POST DATA \n\n", req.body);
    var messageInstance = new Message()
    messageInstance.name = req.body.name
    messageInstance.message = req.body.message
    messageInstance.save(function (err) {
        if (err) {
            console.log(messageInstance.errors)
            Message.find({},function (err, messages) {
                if (err) return console.error(err);
                res.render('index', { errors: messageInstance.errors, 'messages': messages})
            });        }
        else {
            res.redirect('/');
        }

    })
});
app.post('/comments', function (req, res) {
    // var id = req.params.id;    
    var commentInstance = new Comment()
    commentInstance.name = req.body.name
    commentInstance.comment = req.body.comment

    commentInstance.save(function (err) {
        if (err) {
            Message.find({},function (err, messages) {
                if (err) return console.error(err);
                res.render('index', { errors: commentInstance.errors, 'messages': messages})
            });
        }
        else {
            Message.findOne({_id:req.body.message_id},function (err, message) {       
                if (err) return console.error(err);
                message.comments.push(commentInstance);
                message.save(function(err){
                    if (err) {
                        console.log(message.errors)
                        Message.find({},function (err, messages) {
                            if (err) return console.error(err);
                            res.render('index', { errors: message.errors, 'messages': messages})
                        });
                    }
                    else {
                        res.redirect('/');
                    }
                })
               
            })
       
        }

    })
});
app.listen(8000, function () {
    console.log("listening on port 8000");
});
