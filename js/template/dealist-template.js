var dealistTpl={
	'dealContent':'{{#initDealInfo}}<li class="clearfix">\
					<a href="">\
						<img src="{{imgurl}}" alt="">\
						<div class="miaosha-deal-text">\
							<p class="miaosha-deal-title">{{title}}</p>\
							<p class="miaosha-deal-intro">{{intro}}</p>\
							<div class="miaosha-deal-price">\
								<span class="oneprize nowprize">￥{{price}}</span>\
								<span class="twoprize del">￥{{priceold}}</span>\
							</div>\
						</div>\
					</a>\
				</li>{{/initDealInfo}}'

}

module.exports=dealistTpl;