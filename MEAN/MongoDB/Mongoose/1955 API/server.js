var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/1955_API');
// Create a Schema for Users
var PeopleSchema = new mongoose.Schema({
    name: { type: String,  required: true},
}, { timestamps: true })

// Store the Schema under the name 'User'
mongoose.model('Person', PeopleSchema);

// Retrieve the Schema called 'User' and store it to the variable User
var Person = mongoose.model('Person');

// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// static content
// app.use(express.static(path.join(__dirname, "./static")));
// setting up ejs and our views folder
// new code:
// original code:
// more new code:
// root route to render the index.ejs view
app.get('/', function (req, res) {
    Person.find({},function (err, people) {
        if(err){
            console.log("Returned error", err);
             // respond with JSON
            res.json({message: "Error", error: err})
         }
         else {
             // respond with JSON
            res.json({message: "Success", data: people})
         }
    });
});
app.get('/new/:name', function (req, res) {
    // console.log("POST DATA \n\n", req.body);
    var name = req.params.name;
    var personInstance = new Person()
    personInstance.name = name
    personInstance.save(function (err) {
        if (err) {
            res.json({message: "Error", error: err})
        }
        else {
            res.redirect('/');
        }

    })
});
app.get('/remove/:name', function (req, res) {
    // var id = req.params.id;    
    var name = req.params.name;
    Person.remove({name: name}, function(err){
        if (err) return console.error(err);
        res.redirect('/')
    });
});
app.listen(8000, function () {
    console.log("listening on port 8000");
});
