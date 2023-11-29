const aurl = ''//调用接口的地址
const appkey = ''; //秘钥


//

const cloud = require('wx-server-sdk')
const TcbRouter = require('tcb-router'); 
const rq = require('request');
cloud.init()

// 云函数入口函数
exports.main = async(event, context) => {
      const app = new TcbRouter({
            event
      });
      //根据isbn码获取图书详情信息
      app.router('bookinfo', async(ctx) => {
            ctx.body = new Promise(resolve => {
                  rq({
                        url: aurl + appkey + '&isbn=' + event.isbn,
                        method: "GET",
                        json: true,
                  }, function(body) {
                        resolve({
                              body: body
                        })
                  });
            });
      });
      return app.serve();
}