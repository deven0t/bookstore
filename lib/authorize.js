var Logger = require("../config/logger");

exports.authenticateRequest = function(req, res, next){
	var token = extract_token(req);
	Logger.info("token ", token);
	if(!token.error && token.value == 'abracadabra'){
		next();
	} else {
		res.sendStatus(401);
	}
};


var extract_token = function (req) {
  var token, error;
  if (req.headers && req.headers.authorization) {
    var parts = req.headers.authorization.split(' ');
    if (parts.length === 2 && parts[0] === 'Bearer') {
      token = parts[1];
    }
  }
  // token as parameter
  if (req.query && req.query.access_token) {
    if (token) {
      error = true;
    }
    token = req.query.access_token;
  }
  // token as body param
  if (req.body && req.body.access_token) {
    if (token) {
      error = true;
    }
    token = req.body.access_token;
  }
  // RFC6750 states the access_token MUST NOT be provided
  // in more than one place in a single request.
  if (error) {
    return {
      error: true,
      value: null
    };
  }
  return {
    error: false,
    value: token
  };
};
