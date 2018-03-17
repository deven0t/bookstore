var status = require("../routes/status");
var seed = require("../routes/seedData");
var bookstore = require("../routes/bookstore");
var authorize = require("../lib/authorize");

exports.add_to_app = function(app){
	app.get("/", function(req, res){
        logger.info("Home");
        res.send("There is nothing");
    });

    app.get("/status", function(req, res){
        logger.info("called ");
        res.send("Running...");
    });

    app.get("/books", authorize.authenticateRequest, bookstore.findAll);
    app.get("/books/:id", bookstore.findById);
    app.get("/search/books",  bookstore.search);

    app.get("/seedData", seed.seedData);

    app.get("/requests", status.getStatus);
}