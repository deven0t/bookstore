var bunyan = require('bunyan');

var logger = bunyan.createLogger({
    name: 'portfolio',
    level: 'debug',
    stream: process.stdout
});

module.exports = logger;