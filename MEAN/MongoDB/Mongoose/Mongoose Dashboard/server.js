var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fish_dashboard');
// Create a Schema for Users
var FishSchema = new mongoose.Schema({
    name: { type: String,  required: true},
    species: { type: String, required: true}
}, { timestamps: true })
// Store the Schema under the name 'User'
mongoose.model('Fish', FishSchema);
// Retrieve the Schema called 'User' and store it to the variable User
var Fish = mongoose.model('Fish');

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
    Fish.find({},function (err, fishes) {
        if (err) return console.error(err);
        console.log(fishes.length)
        res.render("index", { "fishes": fishes });
      }) 
});
app.post('/fishes', function (req, res) {
    // console.log("POST DATA \n\n", req.body);
    var fishInstance = new Fish()
    fishInstance.name = req.body.name
    fishInstance.species = req.body.species
    fishInstance.save(function (err) {
        if (err) {
            res.render('new', { errors: fishInstance.errors })
        }
        else {
            res.redirect('/');
        }

    })
});
app.get('/fishes/new', function (req, res) {
    res.render("new")
 });
 app.get('/fishes/edit/:id', function (req, res) {
    var id = req.params.id;
    Fish.findOne({_id: id},function (err, fish) {
        if (err) return console.error(err);
        res.render("edit", { "fish": fish });
      }) 
    // res.render("edit")
});
app.post('/fishes/destroy/:id', function (req, res) {
    var id = req.params.id;
    Fish.remove({_id: id}, function(err){
        if (err) return console.error(err);
        res.redirect('/')
    });
});
app.get('/fishes/:id', function (req, res) {
    // console.log("GET")
    var id = req.params.id;
    Fish.findOne({_id:id},function (err, fishes) {       
        if (err) return console.error(err);
        // console.log(fishes.length)
        res.render("fishes", { "fishes": fishes });
      }) 
});
app.post('/fishes/:id', function (req, res) {
    // console.log("POST")
    var id = req.params.id;
    // console.log("I'm here.")
    Fish.findOne({_id: id}, function(err, fish){
        // console.log(fish);
        // console.log("I'm here too.")
        Fish.update({name: fish.name}, {name: req.body.name},function (err) {
            // console.log("So am I.")
            // console.log(fish.species);
            if (err) return console.error(err);
            console.log("Successful")
            // res.redirect("/");
          }) 
        Fish.update({species: fish.species}, {species: req.body.species},function (err) {
            // console.log(fish.species);
            if (err) return console.error(err);
            console.log("Successful")
            res.redirect("/");
          }) 
       })
   
});


app.listen(8000, function () {
    console.log("listening on port 8000");
});
