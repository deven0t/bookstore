var utils = require("../lib/utils");

exports.getStatus = function(req, res) {
    res.statusCode = 200;
    res.send(utils.beautify(true, global.requestNumer));
};