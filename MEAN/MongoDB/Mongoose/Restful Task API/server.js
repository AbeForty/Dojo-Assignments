var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_tasks');
// Create a Schema for Users
var TasksSchema = new mongoose.Schema({
    title: {type:String, required: true},
    description: {type:String, required: true},
    completed: {type: Boolean, default: false},
}, { timestamps: true })

// Store the Schema under the name 'User'
mongoose.model('Task', TasksSchema);

// Retrieve the Schema called 'User' and store it to the variable User
var Task = mongoose.model('Task');

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
app.use(express.static( __dirname + '/HelloAngular/dist' ));
// Retrieve all Tasks
// Retrieve a Task by ID
// Create a Task
// Update a Task by ID
// Delete a Task by ID
app.get('/tasks', function (req, res) {
    Task.find({},function (err, tasks) {
        if(err){
             // respond with JSON
            res.json({error: err})
         }
         else {
             // respond with JSON
            res.json({data: tasks})
         }
    });
});
app.get('/task/:id', function (req, res) {
    var id = req.params.id
    Task.findOne({_id:id},function (err, task) {
        if(err){
             // respond with JSON
            res.json({message: "Error", error: err})
         }
         else {
             // respond with JSON
            res.json({message: "Success", data: task})
         }
    });
});
app.post('/task', function (req, res) {
    console.log("POST DATA \n\n", req.body);
    var taskInstance = new Task()
    taskInstance.title = req.body.title
    taskInstance.description = req.body.description
    taskInstance.save(function (err) {
        if (err) {
            res.json({message: "Error", error: err})
        }
        else {
            res.json({message: "Success", data: taskInstance})
        }

    })
});
app.put('/task/:id', function (req, res) {
    console.log("POST DATA \n\n", req.body);
    Task.findByIdAndUpdate(req.params.id,req.body, (err,confirmation)=>{
        if(err){
            console.log(err);
        }else{
            res.json({success: 'hhehehehehehe'})
        }
    })
});
app.delete('/remove', function (req, res) {
    var id = req.body.id;    
    Task.remove({_id: id}, function(err){
        if (err) return console.error(err);
        res.json({message: "Success", data: task})
    });
});
app.listen(8000, function () {
    console.log("listening on port 8000");
});
