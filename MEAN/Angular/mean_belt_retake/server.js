// Retrieve the Schema called 'User' and store it to the variable User
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean-belt-retake');
// Create a Schema for Users
// var QuoteSchema = new mongoose.Schema({
//     quote: { type: String, required: true, minlength:3}, 
//     votes: { type: Number, required:true, default: 0}
// }, { timestamps: true });
// Store the Schema under the name 'User'
// mongoose.model('Quotes', QuoteSchema);
var petSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'pet must contain a name'], minlength:[3, 'Name must be at least three characters.'] },
    type: {type: String, required: [true, 'pet must contain a type'],  minlength:[3,'Type must be at least three characters.']},
    description: {type: String, required:[true, 'pet must contain a description'],  minlength:[3, 'Description must be at least three characters.']},
    skills: [{skill: { type: String, default: ""}}],  
    likes: {type: Number, default: 0},
}, { timestamps: true })
// Store the Schema under the name 'User'
mongoose.model('pets', petSchema);
// Retrieve the Schema called 'User' and store it to the variable User
var Pet = mongoose.model('pets');
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
app.use(express.static( __dirname + '/mean-belt-retake/dist' ));
// Retrieve all Tasks
// Retrieve a Task by ID
// Create a Task
// Update a Task by ID
// Delete a Task by ID

app.get('/api/pets', function (req, res) {
    Pet.find({},function (err, pets) {
        if(err){
             // respond with JSON
            res.json({error: err});
         }
         else {
             // respond with JSON
            res.json({data: pets});
         }
    });
});
app.get('/api/pet/name/:name', function (req, res) {
    console.log("hello darkness my old friend")
    Pet.findOne({name: req.params.name},function (err, pets) {
        if(err){
             // respond with JSON
            console.log(err);
            res.json({error: err});
         }
         else {
             // respond with JSON
            console.log(pets);
            res.json({data: pets});
         }
    });
});

app.get('/api/pet/:id', function (req, res) {
    Pet.findOne({_id: req.params.id},function (err, pets) {
        console.log(req.params.id);
        if(err){
             // respond with JSON
            console.log(err);
            res.json({error: err});
         }
         else {
             // respond with JSON
            console.log(pets);
            res.json({data: pets});
         }
    });
});

app.post('/api/pet', function (req, res) {
    console.log("Body: " + req.body);
    // console.log("POST DATA \n\n", req.body);
    // var golds = req.params.golds;
    // var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
    var petInstance = new Pet();
    petInstance.name = req.body.name;
    petInstance.type = req.body.type;
    petInstance.description = req.body.description;
    petInstance.skills.push(req.body.skills[0]);
    petInstance.skills.push(req.body.skills[1]);
    petInstance.skills.push(req.body.skills[2]);
    petInstance.save(function (err, savedpet) {
        if (err) {
            console.log(err);
            res.json({pet: "Error", error: err})
        }
        else {
            console.log(savedpet);
            res.json({pet: "Success", data: savedpet})
        }

    })
});
app.put('/api/pets/like/:pet_id', (req,res)=>{
    Pet.findOne({_id: req.params.pet_id}, (err, foundPet)=>{
        if (err) {
            res.json(err);
        } else {         
            foundPet.likes++;
            foundPet.save((err)=>{
               if(err){
                   res.json(err);
               } else{
                   res.json(foundPet);
               }
            });
        }
    });
});
// app.post('/api/quote/:id', function (req,res){
//     console.log(req.body);
//     console.log(req.body.quote);
//     // var quoteInstance = {quote:req.body.quote}
//     var quote = req.body.quote
//     // quoteInstance.save(function (err) {
//     //     if (err) return console.error(err);
//     console.log("Id: " + req.params.id)
//         Author.findOne({ _id: req.params.id }, function (err, author) {
//             if (err) return console.error(err);
//             author.quotes.push({quote: quote});
//             author.save(function (err) {
//                 if (err) {
//                     console.log(author.errors)
//                     Author.find({}, function (err, authors) {
//                         if (err) return console.error(err);
//                         res.json({err})
//                     });
//                 }
//                 else {
//                     res.json({author})
//                 }
//             });

//         });    

//     });
// // });

// app.post('/api/authors/:author_id/quotes/:quote_id', (req,res)=>{
//     Author.findOne({_id: req.params.author_id}, (err, foundAuthor)=>{
//         if (err) {
//             res.json(err);
//         } else {
//             var myQuote = foundAuthor.quotes.id(req.params.quote_id);
//             console.log(myQuote);
//             if(req.body.vote == 'up'){
//                 myQuote.votes++;
//             }else{
//                 myQuote.votes--;
//             }
//             foundAuthor.save((err)=>{
//                if(err){
//                    res.json(err);
//                } else{
//                    res.json(foundAuthor);
//                }
//             });
//         }
//     });
// });
// app.delete('/api/authors/:author_id/:quote_id', (req,res)=>{ 
//     Author.findOne({_id: req.params.author_id}, (err, foundAuthor)=>{
//         if (err) {
//             res.json(err);
//         } else {
//         foundAuthor.quotes.id(req.params.quote_id).remove();
//         // Equivalent to `parent.child = null`
//         // parent.child.remove();
//         foundAuthor.save(function (err) {
//             if (err) return handleError(err);
//             res.json(foundAuthor);
//         });
//     }
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
//     });
// });
app.put('/api/pet/:id', function (req, res) {
    console.log("We are here")
    console.log(req.params.id)
    console.log(req.body)
    Pet.findByIdAndUpdate(req.params.id,req.body, {runValidators:true}, (err,confirmation)=>{
        if(err){
            console.log(err);
            res.json({error: err})
        }else{
            console.log("Hi")
            res.json({success: 'hhehehehehehe'})
        }
    })
});
app.delete('/api/pet/:id', function (req, res) {
    Pet.remove({_id:req.params.id}, (err,confirmation)=>{
        if(err){
            console.log(err);
        }else{
            console.log("Hi")
            res.json({success: 'hhehehehehehe'})
        }
    })
});
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./mean-belt-retake/dist/index.html"))
});  
app.listen(8000, function () {
    console.log("listening on port 8000");
});
