var $ = require('zepto');

var share = require('share');



function main() {
	console.log('load success');
	share.shareBtn();
}


exports.init = function() {
	main();
}