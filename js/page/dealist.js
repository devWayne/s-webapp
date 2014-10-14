var $ = require('zepto'),
	Mustache=require('mustache');

var share = require('share'),
	countdown = require('countdown');

var dealistTpl=require('dealistTpl');

function main() {
	console.log('load success');
	share.shareBtn();
	_countdown=new countdown();
	_countdown.start(new Date("2014-10-14 23:11:11"));
	$('.J-deal-content').append(Mustache.render(dealistTpl.dealContent));
	$('.J-next-deal-content').append(Mustache.render(dealistTpl.nextDealContent));
}


exports.init = function() {
	main();
}