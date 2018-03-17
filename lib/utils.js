exports.beautify = function(status, object) {
    return {
        success: status,
        data: object
    };
};