var faker = require('faker');
var Bookstore = require('../models/bookstore');
var utils = require("../lib/utils");
var logger = require("../config/logger");

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
				var record_dummy = {
						name: faker.lorem.word(),
						isbn : faker.random.word(),
						book_title : faker.name.findName(),
						genre : faker.helpers.randomize(),
						cover_url: faker.image.imageUrl(),
						is_cover_available: faker.random.boolean(),
						authorname: faker.name.findName()
						};
				if(!record_dummy.is_cover_available){
					record_dummy.cover_url = "";
				}
			Bookstore(record_dummy).save(function(err){
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