var Bookstore = require("../models/bookstore");
var Logger = require("../config/logger");


exports.findAll = function(req, res){
	Logger.info("Get All the books");
	Bookstore.find({}, function(err, result){
		if(err){
			Logger.error("Error while fetching records");
			res.send(500);
		} else {
			res.statusCode = 200;
			res.send(result);
		}
	});
};

exports.findById = function(req, res){
	Logger.info("Get book by Id: ", req.param('id'));
	Bookstore.findOne({_id: req.param('id')}, function(err, result){
		if(err){
			Logger.info("Can not find the record1");
			res.send(400);
		} else {
			res.statusCode = 200;
			res.send(result);
		}
	});
};

exports.search = function(req, res){
	var searchQuery = decodeSearchQuery(req);
	Logger.info("Book Serach hit");
	if(!searchQuery){
		res.sendStatus(400);
	} else {
		Bookstore.find(searchQuery, function(err, result){
			if(err){
				Logger.info("Can not find the record");
				res.sendStatus(404);
			} else {
				res.statusCode = 200;
				res.send(result);
			}
		});
	}
};

var decodeSearchQuery = function(req){
	if(req.query){
		if(req.query.authorname){
			return {authorname: req.query.authorname  };
		} else if(req.query.isbn){
			return {isbn: req.query.isbn};
		} else if(req.query.booktitle){
			return {book_title: req.booktitle};
		} else if(req.query.genre){
			return {genre: req.query.genre};
		}
	} 
	return null;
};