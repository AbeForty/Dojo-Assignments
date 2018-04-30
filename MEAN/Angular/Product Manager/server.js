// Retrieve the Schema called 'User' and store it to the variable User

// Retrieve the Schema called 'User' and store it to the variable User
// require express
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/products');
var ProductSchema = new mongoose.Schema({
    title: { type: String, required: true, minlength: 4},
    price: { type: Number, required: true},
    imageurl:{type: String, default: "http://cdn.onlinewebfonts.com/svg/img_94880.png"}
}, { timestamps: true })
// Store the Schema under the name 'User'
mongoose.model('Products', ProductSchema);
// Retrieve the Schema called 'User' and store it to the variable User
var Product = mongoose.model('Products');
var express = require("express");
// path module -- try to figure out where and why we use this
var path = require("path");
// create the express app
var app = express();
var bodyParser = require('body-parser');

// use it!
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/ProductManager/dist' ));
// Retrieve all Tasks
// Retrieve a Task by ID
// Create a Task
// Update a Task by ID
// Delete a Task by ID
app.get('/api/products', function (req, res) {
    Product.find({},function (err, products) {
        if(err){
             // respond with JSON
            res.json({error: err});
         }
         else {
             // respond with JSON
            res.json({data: products});
         }
    });
});
app.post('/api/product', function (req, res) {
    console.log("Body: " + req.body);
    // console.log("POST DATA \n\n", req.body);
    // var golds = req.params.golds;
    // var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
    var productInstance = new Product();
    productInstance.title = req.body.name;
    productInstance.price = Number(req.body.price)
    productInstance.imageurl = req.body.imageurl
    productInstance.save(function (err, savedproduct) {
        if (err) {
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data: savedproduct})
        }

    })
});
app.get('/api/product/:id', function (req, res) {
    Product.findOne({_id: req.params.id},function (err, products) {
        if(err){
             // respond with JSON
            res.json({error: err});
         }
         else {
             // respond with JSON
            res.json({data: products});
         }
    });
});
app.put('/api/product/:id', function (req, res) {
    Product.findByIdAndUpdate(req.params.id,req.body, (err,confirmation)=>{
        if(err){
            res.json({error: err})
        }else{
            res.json({success: 'hhehehehehehe'})
        }
    })
});
app.delete('/api/product/:id', function (req, res) {
    Product.remove({_id:req.params.id}, (err,confirmation)=>{
        if(err){
        }else{
            res.json({success: 'hhehehehehehe'})
        }
    })
});
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./ProductManager/dist/index.html"))
});  

app.listen(8000, function () {
    console.log("listening on port 8000");
});
