module.exports = function counter() {
    return function(req, res, next) {
        global.requestNumer +=1;
        next();
    };
};