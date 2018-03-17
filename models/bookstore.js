var mongoose = require("mongoose");

var bookstoreSchema = new mongoose.Schema({
	name: String,
	isbn: String,
	book_title: String,
	genre: String,
	author: {
		name: String,
		location: String
	}
});

module.exports = mongoose.model('bookstore', bookstoreSchema);