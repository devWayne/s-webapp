var dealTpl = {
	'phonBind': '<div class="remind-pop">\
				    <h3>请输入手机号码</h3>\
				    <p>提醒短信会在开抢前10分钟发出</p>\
				    <p><input type="tel" maxlength="13" class="J-mobileno-remind-input"></p>\
				    <div class="buttons">\
				        <a href="javascript:void(0);" class="J-cancel-remind-btn">取消</a>\
				        <a href="javascript:void(0);" class="J-submit-remind-btn">发送</a>\
				    </div>\
				</div>',
	'storageTips': '<div class="storage-tips">\
					    <i class="alert"></i>\
					    <p>该商品已被抢光，如10分钟后有人未付款，您将有购买机会。</p>\
					    <a href="#" class="close"></a>\
					</div>',
	'dealTemplate': '<title>1元秒杀-大南国</title>\
			        <div class="deal-img">\
			            <img src="http://t3.s1.dpfile.com/pc/mc/f9654c0cec0008b56654e9ea9ecc6d73(640x1024)/thumb.jpg"/>\
			        </div>\
			        <div class="deal-text">\
			            <div class="deal-title-box">\
			                <span class="deal-title">大南国</span>\
			                <span class="deal-title-border"></span>\
			            </div>\
			            <div class="deal-text-box">\
			                <p class="deal-intro">仅售8888元，价值9000元大南国，节假日通用！</p>\
			                <div class="deal-price-box">\
			                    <span class="deal-price">\
			                    ￥<span>8888</span>\
			                    </span>\
			                    <span class="deal-old-price">&#165;9000</span>\
			                    <a href="javascript:void(0)" class="deal-buy J-deal-buy-btn deal-buy-z">加载中</a>\
			                </div>\
			            </div>\
			        </div>\
			        <div class="deal-accordion J-deal-accordion title-collapse">\
			            <div class="dealgroup-detail-info">\
			                <div class="detail-title">团购详情</div>\
			                <div class="detail-content"><div class="detail-tit"></div>\
			                <table width="100%" cellpadding="0" cellspacing="0" class="detail-table">\
			                    <thead>\
			                        <tr>\
			                            <th width="50%">名称</th>\
			                            <th width="25%">数量</th>\
			                            <th width="25%">单价</th>\
			                        </tr>\
			                    </thead>\
			                    <tbody>\
			                        <tr>\
			                            <td>1</td>\
			                            <td class="tc">1份</td>\
			                            <td class="tc">9000元</td>\
			                        </tr>\
			                    </tbody>\
			                </table>\
			            </div>\
			            <div class="dealgroup-buy-info">\
			                <div class="detail-title">购买须知</div>\
			                <div class="detail-content">\
			                    <div class="purchase-notes">\
			                        <dl>\
			                            <dt>有效期</dt>\
			                            <dd>\
			                            <p class="listitem">2014-09-20到2014-09-28</p>\
			                            </dd>\
			                        </dl>\
			                        <dl>\
			                            <dt>预约信息</dt>\
			                            <dd>\
			                            <p class="listitem">无需预约，如遇消费高峰时段您可能需要排队</p>\
			                            </dd>\
			                        </dl>\
			                        <dl>\
			                            <dt>规则提醒</dt>\
			                            <dd>\
			                            <p class="listitem">不再与店内其他优惠同享</p>\
			                            </dd>\
			                        </dl>\
			                        <dl>\
			                            <dt>温馨提示</dt>\
			                            <dd>\
			                            <p class="listitem">如需团购券发票，请您在消费时向商户咨询</p>\
			                            <p class="listitem">在您选择“支付宝”支付方式时,部分银行卡可能有支付限额,若遇到此类情况,您可先充值到点评团账户即能轻松支付</p>\
			                            </dd>\
			                        </dl>\
			                    </div>\
			                </div>\
			            </div>\
			        </div>'

}
module.exports = dealTpl;