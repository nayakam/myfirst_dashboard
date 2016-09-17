var os = require('os');

/**
 * Job: freemem
 *
 * Expected configuration:
 *
 * { }
 */


var data = [];
var MAX_LENGTH = 100;

module.exports = function(config, dependencies, job_callback) {

    // add the correct information to the data array
    var length = data.push(os.freemem());
    if (length > MAX_LENGTH) {
        data.shift();
    }

    job_callback(null, {
        data: data,
        total: os.totalmem()
    });
};
