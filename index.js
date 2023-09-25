var { Robots, matches } = require('./Robots');

module.exports.robotsParser = function (url, contents) {
	return new Robots(url, contents);
};
module.exports.matches = matches;