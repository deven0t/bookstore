var mongoose = require("mongoose");

var bookstoreSchema = new mongoose.Schema({
	name: String,
	isbn: String,
	book_title: String,
	genre: String,
	cover_url: String,
	is_cover_available: Boolean,
	authorname: String
});

module.exports = mongoose.model('bookstore', bookstoreSchema);
