//此处填写在极速书籍那边申请的接口密钥
//https://www.jisuapi.com/api/isbn/
const appkey = 'xxxxxxxxxxxxx'; 

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
                        url: 'https://api.jisuapi.com/isbn/query?appkey=' + appkey + '&isbn=' + event.isbn,
                        method: "GET",
                        json: true,
                  }, function(error, response, body) {
                        resolve({
                              body: body
                        })
                  });
            });
      });
      return app.serve();
}