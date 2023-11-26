var app = getApp();
var db = wx.cloud.database();

Page({
      /**
       * 页面的初始数据
       */
      data: {
            list: [{
                  title: '该程序是做什么的？',
                  id: 0,
                  des: ['本程序主要是方便西安电子科技大学的朋友发布自己不要了的二手书的。'
                        
                  ],
                  check: true,
            }, {
                  title: '该程序收费吗？',
                  id: 1,
                  des: ['本程序是完全的公益项目，永久承诺不收取任何中介费，您可以随心所欲的发布自己的书籍和购买'],
                  check: false,
            }, {
                  title: '为什么要留下联系方式？',
                  id: 2,
                  des: ['本程序交易完全由交易双方沟通。', '除非程序出现问题导致交易故障，平台不参与任何交易'],
                  check: false,
            }, {
                  title: '本程序的通知形式？',
                  id: 3,
                  des: ['对于买家下单时，我们会发送短信给卖家，通知他尽快发货','您可以在订单详情页面通过买（卖）家留下的联系方式第一时间联系，这样更能提高效率'],
                  check: false,
            }, ]
      },
      onReady() {},

      show(e) {
            var that = this;
            let ite = e.currentTarget.dataset.show;
            let list = that.data.list;
            if (!ite.check) {
                  list[ite.id].check = true;
            } else {
                  list[ite.id].check = false;
            }
            that.setData({
                  list: list
            })
      },
      //跳转页面
      go(e) {
            wx.navigateTo({
                  url: e.currentTarget.dataset.go
            })
      },
      onLoad() {

      },

})