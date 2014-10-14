var $ = require('zepto'),
	Mustache = require('mustache');

var dealTpl = require('dealTpl');

function main() {

	$('body').append(Mustache.render(dealTpl.dealTemplate));
}


exports.init = function() {
	main();
}