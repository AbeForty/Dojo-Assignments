var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_dojo');
// Create a Schema for Users
var QuoteSchema = new mongoose.Schema({
    quote: { type: String,  required: true},
    name: { type: String, required: true}
}, { timestamps: true })
// Store the Schema under the name 'User'
mongoose.model('Quote', QuoteSchema);
// Retrieve the Schema called 'User' and store it to the variable User
var Quote = mongoose.model('Quote');

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
// original code:
// more new code:
// root route to render the index.ejs view
app.get('/', function (req, res) {
    res.render("index");
});
app.post('/quotes', function (req, res) {
    // console.log("POST DATA \n\n", req.body);
    var quoteInstance = new Quote()
    quoteInstance.name = req.body.name
    quoteInstance.quote = req.body.quote
    quoteInstance.save(function (err) {
        if (err) {
            res.render('index', { errors: quoteInstance.errors })
        }
        else {
            res.redirect('/quotes');
        }

    })
});
app.get('/quotes', function (req, res) {
    Quote.find({},function (err, quotes) {
        if (err) return console.error(err);
        console.log(quotes.length)
        res.render("quotes", { "quotes": quotes });
      })
    // Quote.findOne({name: "Marty McFly"}, 'Quote', function (err, quote) {
    //     if (err) return handleError(err);
    //     // Prints "Space Ghost is a talk show host".
    //     console.log('%s said %s.', quote.quote, quote.name);
    //   });
    // for (quote in Quote.find({}, function (err, Quote) {
    //     console.log("No quotes found.")
    // })) {
        // quotesArr.push(quote);
        // console.log(quote);
        // console.log(Quote.find({name: "Marty McFly"}, function(err, users) {
            // Retrieve an array of users
            // This code will run when the DB is done attempting to retrieve all matching records to {}
        //    }));
        // console.log(Quote.find({name: "Marty McFly"},Quote));
    // }
    // console.log("Quotes: " + quotesArr.length);
    // var context = { "quotes": quotesArr };

});
app.listen(8000, function () {
    console.log("listening on port 8000");
});
