	/**
	秒杀列表页数据接口
	*/

	var initInfo = {
		beginTime: '2014-10-16 11:11:00',
		endTime: '2014-10-17 00:00:00',
		nextTime:'2014-10-18 00:00:00',
		initDeals: [{
			status: 1,
			initDealInfo: [{
				title: '食之密本期1',
				intro: '全国通用代金卷1张全国通用代金卷1张',
				price: 1,
				priceold: 111,
				imgurl: 'http://t2.s2.dpfile.com/pc/mc/df342031a58fd955a700f19c71bed82d(160c100)/thumb.jpg'
			}, {
				title: '食之密本期2',
				intro: '全国通用代金卷1张全国通用代金卷1张',
				price: 1,
				priceold: 111,
				imgurl: 'http://t2.s2.dpfile.com/pc/mc/df342031a58fd955a700f19c71bed82d(160c100)/thumb.jpg'
			}, {
				title: '食之密本期3',
				intro: '全国通用代金卷1张全国通用代金卷1张',
				price: 1,
				priceold: 111,
				imgurl: 'http://t2.s2.dpfile.com/pc/mc/df342031a58fd955a700f19c71bed82d(160c100)/thumb.jpg'
			}]
		}, {
			status: 2,
			initDealInfo: [{
				title: '食之密下期1',
				intro: '全国通用代金卷1张全国通用代金卷1张',
				price: 1,
				priceold: 111,
				imgurl: 'http://t2.s2.dpfile.com/pc/mc/df342031a58fd955a700f19c71bed82d(160c100)/thumb.jpg'
			}]
		}]
	};


	var realTimeInfo = {
		currentTime: '2014-10-16 15:00:00',
		realDeals: [{
			status: 1,
			realDealInfo: [{
				currentJoin: 5,
				maxJoin: 10
			}, {
				currentJoin: 10,
				maxJoin: 10
			}, {
				currentJoin: 5,
				maxJoin: 10

			}]
		}, {
			status: 2,
			realDealInfo: [{
				wannaJoin: 5000,
				maxJoin: 10
			}]
		}]
	};

	/**
	秒杀详情页数据接口
	*/

	exports.initInfo = initInfo;
	exports.realTimeInfo=realTimeInfo;
	//exports.realDealInfo = realDealInfo;