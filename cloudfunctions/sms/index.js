// 云函数入口文件
const cloud = require('wx-server-sdk')
const QcloudSms = require("qcloudsms_js")
// 替换成云短信 AppID 以及 AppKey
const appid =111111111
const appkey = "xxxxxxxxxxxxx"
const templateId = 11111111 // 申请模板 ID
const smsSign = "Levit"// 申请的签名

//

cloud.init()
const db = cloud.database()
// 云函数入口函数
exports.main = async (event, context) => new Promise((resolve, reject) => {
      var qcloudsms = QcloudSms(appid, appkey);
      var ssender = qcloudsms.SmsSingleSender();
      var params = [event.title];
      // 获取发送短信的手机号码
      var mobile = event.mobile
      // 获取手机号国家/地区码
      var nationcode = 86
      ssender.sendWithParam(nationcode, mobile, templateId, params, smsSign, "", "", (err, res, resData) => {
            if (err) {
                  console.log("err: ", err);
                  reject({ err })
            } else {
                  resolve({ res: res.req, resData })
            }
      }
      );

})
