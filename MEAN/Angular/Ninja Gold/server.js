// Retrieve the Schema called 'User' and store it to the variable User
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ninja_gold');
// Create a Schema for Users
var GoldSchema = new mongoose.Schema({
    golds: { type: Number, required: true, default:0},
    description: {type: String, required: true}
}, { timestamps: true })
// Store the Schema under the name 'User'
mongoose.model('Golds', GoldSchema);
// Retrieve the Schema called 'User' and store it to the variable User
var Gold = mongoose.model('Golds');
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
app.use(express.static( __dirname + '/NinjaGold/dist' ));
// Retrieve all Tasks
// Retrieve a Task by ID
// Create a Task
// Update a Task by ID
// Delete a Task by ID
app.get('/golds', function (req, res) {
    console.log("In /golds get")
    Gold.find({},function (err, golds) {
        if(err){
             // respond with JSON
            res.json({error: err})
         }
         else {
             // respond with JSON
             console.log(golds)
            res.json({data: golds})
         }
    });
});
app.post('/gold', function (req, res) {
    console.log("Body: " + req.body.gold)
    // console.log("POST DATA \n\n", req.body);
    // var golds = req.params.golds;
    // var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
    var goldInstance = new Gold();
    goldInstance.golds = req.body.gold;
    goldInstance.description = req.body.description;
    goldInstance.save(function (err, savedGold) {
        if (err) {
            res.json({message: "Error", error: err})
        }
        else {
            // console.log(savedGold)
            // res.json({message: "Success", data: goldInstance})
        }

    })
});
app.listen(8000, function () {
    console.log("listening on port 8000");
});
