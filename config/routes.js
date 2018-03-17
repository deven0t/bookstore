var status = require("../routes/status");
var seed = require("../routes/seedData");

exports.add_to_app = function(app){
	app.get("/", function(req, res){
        logger.info("Home");
        res.send("There is nothing");
    });

    app.get("/status", function(req, res){
        logger.info("called ");
        res.send("Running...");
    });

    app.get("/seedData", seed.seedData);

    app.get("/requests", status.getStatus);
}