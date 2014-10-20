var $ = require('zepto'),
	Mustache = require('mustache');

var share = require('share'),
	countdown = require('countdown');

var dealistTpl = require('dealistTpl');

var jsonData = require("jsonData");

var _countdown = new countdown();


var jsonInitInfo = jsonData.initInfo;
var beginTime=jsonInitInfo.beginTime,
	isOpen;
	
function main() {
	console.log('load success');
	share.shareBtn();
	//_countdown.start(new Date("2014-10-15 23:11:11"));
	initInfo();
}


exports.init = function() {
	main();
}


function initInfo() {
	/*$.ajax({
		url: '',
		type: 'POST',
		success: function(json) {
			
		}
	})
	*/
	var jsonInitInfo = jsonData.initInfo;
	$('.J-deal-content').append(Mustache.render(dealistTpl.dealContent, jsonInitInfo.initDeals[0]));
	$('.J-next-deal-content').append(Mustache.render(dealistTpl.dealContent, jsonInitInfo.initDeals[1]));
	
	realTimeInfo();

}

function realTimeInfo() {
	/*$.ajax({

	})*/
	var jsonRealInfo = jsonData.realTimeInfo;
	isOpen=new Date(jsonRealInfo.currentTime).getTime()>new Date(beginTime).getTime();
	var realDealInfo=jsonRealInfo.realDeals[0].realDealInfo;
	$('.J-deal-content').children().each(function(idx,elem){
		if(isOpen){
			if(realDealInfo[idx].maxJoin&&realDealInfo[idx].maxJoin-realDealInfo[idx].currentJoin>0){
				$(elem).find('.miaosha-deal-price').append('<span class="wantbuy"><button class="soldout" href="#">开抢</button></span>');
			}
			else{
				$(elem).find('.miaosha-deal-price').append('<span class="wantbuy">已抢光</span>');
			}
		}
	});
	_countdown.stop();
	_countdown.count(new Date(jsonRealInfo.currentTime),new Date(beginTime));
	setTimeout(realTimeInfo, 1000 * 60);
}