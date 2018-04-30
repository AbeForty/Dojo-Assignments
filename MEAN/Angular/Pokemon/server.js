// Retrieve the Schema called 'User' and store it to the variable User
var mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/login-reg-test');
var UserSchema = new mongoose.Schema({
    email: { type: String, required: true},
    password: {type: String},
}, { timestamps: true })
// Store the Schema under the name 'User'
mongoose.model('Users', UserSchema);
// Retrieve the Schema called 'User' and store it to the variable User
var User = mongoose.model('Users');
// require express
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
// use it!
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/PokemonApp/dist' ));
// Retrieve all Tasks
// Retrieve a Task by ID
// Create a Task
// Update a Task by ID
// Delete a Task by ID
// app.get('/api/products', function (req, res) {
//     Product.find({},function (err, products) {
//         if(err){
//              // respond with JSON
//             res.json({error: err});
//          }
//          else {
//              // respond with JSON
//             res.json({data: products});
//          }
//     });
// });
// app.get('/api/product/:id', function (req, res) {
//     Product.findOne({_id: req.params.id},function (err, products) {
//         console.log(req.params.id);
//         if(err){
//              // respond with JSON
//             console.log(err);
//             res.json({error: err});
//          }
//          else {
//              // respond with JSON
//             console.log(products);
//             res.json({data: products});
//          }
//     });
// });

app.post('/api/user', function (req, res) {
    console.log("Body: " + req.body);
    // console.log("POST DATA \n\n", req.body);
    // var golds = req.params.golds;
    // var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
    bcrypt.hash(req.body.password, 10)
    .then(hashed_password => {
        var userInstance = new User();
        userInstance.email = req.body.email;
        userInstance.password = hashed_password;
        userInstance.save(function (err, savedUser) {
            if (err) {
                console.log(err);
                res.json({User: "Error", error: err})
            }
            else {
                console.log(savedProduct);
                res.json({User: "Success", data: savedProduct})
            }
    
        })
    })
    .catch(error => {
    });

});
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./PokemonApp/dist/index.html"))
});  
app.listen(8000, function () {
    console.log("listening on port 8000");
});
