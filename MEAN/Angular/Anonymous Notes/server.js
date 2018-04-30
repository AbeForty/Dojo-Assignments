// Retrieve the Schema called 'User' and store it to the variable User
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/authors');
// Create a Schema for Users
// var QuoteSchema = new mongoose.Schema({
//     quote: { type: String, required: true, minlength:3}, 
//     votes: { type: Number, required:true, default: 0}
// }, { timestamps: true });
// Store the Schema under the name 'User'
// mongoose.model('Quotes', QuoteSchema);
var AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength:3},
    quotes:[{quote: { type: String, required: true, minlength:3}, 
        votes: { type: Number, required:true, default: 0}}]    
}, { timestamps: true })
// Store the Schema under the name 'User'
mongoose.model('Authors', AuthorSchema);
// Retrieve the Schema called 'User' and store it to the variable User
var Author = mongoose.model('Authors');
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
app.use(express.static( __dirname + '/AuthorsApps/dist' ));
// Retrieve all Tasks
// Retrieve a Task by ID
// Create a Task
// Update a Task by ID
// Delete a Task by ID

app.get('/api/authors', function (req, res) {
    Author.find({},function (err, authors) {
        if(err){
             // respond with JSON
            res.json({error: err});
         }
         else {
             // respond with JSON
            res.json({data: authors});
         }
    });
});
app.post('/api/author', function (req, res) {
    console.log("Body: " + req.body);
    // console.log("POST DATA \n\n", req.body);
    // var golds = req.params.golds;
    // var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
    var authorInstance = new Author();
    authorInstance.name = req.body.name;
    authorInstance.save(function (err, savedAuthor) {
        if (err) {
            console.log(err);
            res.json({Author: "Error", error: err})
        }
        else {
            console.log(savedAuthor);
            res.json({Author: "Success", data: savedAuthor})
        }

    })
});
app.post('/api/quote/:id', function (req,res){
    console.log(req.body);
    console.log(req.body.quote);
    // var quoteInstance = {quote:req.body.quote}
    var quote = req.body.quote
    // quoteInstance.save(function (err) {
    //     if (err) return console.error(err);
    console.log("Id: " + req.params.id)
        Author.findOne({ _id: req.params.id }, function (err, author) {
            if (err) return console.error(err);
            author.quotes.push({quote: quote});
            author.save(function (err) {
                if (err) {
                    console.log(author.errors)
                    Author.find({}, function (err, authors) {
                        if (err) return console.error(err);
                        res.json({err})
                    });
                }
                else {
                    res.json({author})
                }
            });

        });    

    });
// });
app.get('/api/author/:id', function (req, res) {
    Author.findOne({_id: req.params.id},function (err, authors) {
        console.log(req.params.id);
        if(err){
             // respond with JSON
            console.log(err);
            res.json({error: err});
         }
         else {
             // respond with JSON
            console.log(authors);
            res.json({data: authors});
         }
    });
});

app.post('/api/authors/:author_id/quotes/:quote_id', (req,res)=>{
    Author.findOne({_id: req.params.author_id}, (err, foundAuthor)=>{
        if (err) {
            res.json(err);
        } else {
            var myQuote = foundAuthor.quotes.id(req.params.quote_id);
            console.log(myQuote);
            if(req.body.vote == 'up'){
                myQuote.votes++;
            }else{
                myQuote.votes--;
            }
            foundAuthor.save((err)=>{
               if(err){
                   res.json(err);
               } else{
                   res.json(foundAuthor);
               }
            });
        }
    });
});
app.delete('/api/authors/:author_id/:quote_id', (req,res)=>{ 
    Author.findOne({_id: req.params.author_id}, (err, foundAuthor)=>{
        if (err) {
            res.json(err);
        } else {
        foundAuthor.quotes.id(req.params.quote_id).remove();
        // Equivalent to `parent.child = null`
        // parent.child.remove();
        foundAuthor.save(function (err) {
            if (err) return handleError(err);
            res.json(foundAuthor);
        });
    }
    //     console.log(foundAuthor.quotes);
    
    //         // var myQuote = foundAuthor.quotes;
    //         console.log(foundAuthor.quotes);
    //         foundAuthor.quotes.remove({_id:req.params.quote_id}, (err,confirmation)=>{
    //             if(err){
    //                 console.log(err);
    //             }else{
    //                 console.log("Hi")
    //                 res.json({success: 'hhehehehehehe'})
    //             }
    //         });
    //     }
    });
});
app.put('/api/author/:id', function (req, res) {
    console.log("We are here")
    console.log(req.params.id)
    console.log(req.body)
    Author.findByIdAndUpdate(req.params.id,req.body, {runValidators:true}, (err,confirmation)=>{
        if(err){
            console.log(err);
            res.json({error: err})
        }else{
            console.log("Hi")
            res.json({success: 'hhehehehehehe'})
        }
    })
});
app.delete('/api/author/:id', function (req, res) {
    Author.remove({_id:req.params.id}, (err,confirmation)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Hi")
            res.json({success: 'hhehehehehehe'})
        }
    })
});
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./AuthorsApps/dist/index.html"))
});  
app.listen(8000, function () {
    console.log("listening on port 8000");
});
