var data = {
      //云开发环境id
      env: 'cloud1-7gk3st9c62b3263c',
      //分享配置
      share_title: '西安电子科技大学二手书',
      share_img: '/images/poster.jpg', 
      share_poster:'',
      //客服联系方式
      kefu: {
            weixin: '',
            qq: '',
            gzh: '', 
            phone: ''
      },
      //默认启动页背景图，防止请求失败完全空白 
      bgurl: '/images/startBg.jpg',
      //校区
      campus: [{
                  name: '西电南校区',
                  id: 0
            },
            {
                  name: '西电北校区',
                  id: 1
            },
            {
                  name: '杭研院',
                  id: 2
            },
            {
                  name: '广研院',
                  id: 3
            },
      ],
      //书籍类型
      college: [{
                  name: '通用',
                  id: -1
            },
            {
                  name: '通信',
                  id: 0
            },
            {
                  name: '电子',
                  id: 1
            },
            {
                  name: '计算机',
                  id: 2
            },
            {
                  name: '机电',
                  id: 3
            },
            {
                  name: '数统',
                  id: 4
            },
            {
                  name: '物理',
                  id: 5
            },
            {
                  name: '光电',
                  id: 6
            },
            {
                  name: '经管',
                  id: 7
            },
            {
                  name: '人文',
                  id: 8
            },
            {
                  name: '外国语',
                  id: 9
            },
            {
                  name: '微电子',
                  id: 10
            },
            {
                  name: '生科',
                  id: 11
            },
            {
                  name: '材料',
                  id: 12
            },
            {
                  name: '空科',
                  id: 13
            },
            {
                  name: '网信',
                  id: 14
            },
            {
              name: '人智',
              id: 15
            },
            {
              name: '马克思',
              id: 16
            },
      ],
}

function formTime(creatTime) {
      let date = new Date(creatTime),
            Y = date.getFullYear(),
            M = date.getMonth() + 1,
            D = date.getDate(),
            H = date.getHours(),
            m = date.getMinutes(),
            s = date.getSeconds();
      if (M < 10) {
            M = '0' + M;
      }
      if (D < 10) {
            D = '0' + D;
      }
      if (H < 10) {
            H = '0' + H;
      }
      if (m < 10) {
            m = '0' + m;
      }
      if (s < 10) {
            s = '0' + s;
      }
      return Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + s;
}

function days() {
      let now = new Date();
      let year = now.getFullYear();
      let month = now.getMonth() + 1;
      let day = now.getDate();
      if (month < 10) {
            month = '0' + month;
      }
      if (day < 10) {
            day = '0' + day;
      }
      let date = year + "" + month + day;
      return date;
}
module.exports = {
      data: JSON.stringify(data),
      formTime: formTime,
      days: days
}