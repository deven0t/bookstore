var faker = require('faker');
var Bookstore = require('../models/bookstore');
var utils = require("../lib/utils");
var logger = require("../config/logger");

var record = {
	name: faker.lorem.word(),
	isbn : faker.random.word(),
	book_title : faker.name.findName(),
	genre : faker.helpers.randomize(),
	author: {
		name : faker.name.findName(),
		location : faker.address.country()
	}
}

exports.seedData = function(req, res){
	var i = 0;
	logger.info("Seeding Data");
	Bookstore.remove({}, function(err){
		if(err){
			logger.error("Error while deleting records");
			res.statusCode = 500;
			res.send(utils.beautify(false));
		} else {
			while(i < 100){
			Bookstore(record).save(function(err){
				if(err){
					logger.error("Error while saving record");
				}
			});
			i++;
			}
			res.statusCode = 200;
	    	res.send(utils.beautify(true));
		}
	});
	
};