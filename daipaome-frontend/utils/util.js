var api = require('../config/api.js');

const BUPT = [{
  "addr": "图书馆",
  "la": 40.1595898230638,
  "lo": 116.291625758719
},
{
  "addr": "教学实验综合楼",
  "la": 40.1582445917743,
  "lo": 116.292227837401
},
{
  "addr": "学生活动中心",
  "la": 40.1590033710549,
  "lo": 116.290482931199
},
{
  "addr": "学生食堂",
  "la": 40.1589864468454,
  "lo": 116.28944378387
},
{
  "addr": "邮政快递",
  "la": 40.1589602931232,
  "lo": 116.290521744135
},
{
  "addr": "教师食堂",
  "la": 40.1593399287082,
  "lo": 116.2889218392
},
{
  "addr": "雁南雁北十字路口",
  "la": 40.158237048875,
  "lo": 116.289300554971
},
{
  "addr": "雁南S2",
  "la": 40.1577536082991,
  "lo": 116.288949578141
},
{
  "addr": "雁南S3",
  "la": 40.1573873891196,
  "lo": 116.289497113653
},
{
  "addr": "雁南S4",
  "la": 40.156786655674,
  "lo": 116.2897965467696
},
{
  "addr": "雁南S5",
  "la": 40.15636246139145,
  "lo": 116.29000187256372
},
{
  "addr": "雁南S6",
  "la": 40.15566973350801,
  "lo": 116.28970239378282
},
{
  "addr": "雁北超市",
  "la": 40.15890857255618,
  "lo": 116.28840131665697
},
{
  "addr": "雁北A区",
  "la": 40.15896087989733,
  "lo": 116.28892183920092
},
{
  "addr": "雁北B区",
  "la": 40.15919321421853,
  "lo": 116.28769151758854
},
{
  "addr": "雁北C区",
  "la": 40.15954082939142,
  "lo": 116.28809506743801
},
{
  "addr": "洗衣房",
  "la": 40.15964055303413,
  "lo": 116.28848860861694
},
{
  "addr": "雁北D1区",
  "la": 40.15924244554953,
  "lo": 116.28859982659606
},
{
  "addr": "雁北D2区",
  "la": 40.159736745314284,
  "lo": 116.28843276440568
},
{
  "addr": "雁北E区",
  "la": 40.15965536440226,
  "lo": 116.28755585226406
},
{
  "addr": "运动场",
  "la": 40.1582371996872,
  "lo": 116.28747110236372
},
{
  "addr": "快递站",
  "la": 40.157387147930926,
  "lo": 116.28405385353813
},
{
  "addr": "雁北与食堂路口",
  "la": 40.1593994667713,
  "lo": 116.28881027668024
},
{
  "addr": "东配楼",
  "la": 40.159903736812026,
  "lo": 116.29220670797133
},
{
  "addr": "小麦铺",
  "la": 40.15909809165948,
  "lo": 116.28996269286495
},
{
  "addr": "咖啡厅",
  "la": 40.15945157275593,
  "lo": 116.29199028507367
},
{
  "addr": "小南门",
  "la": 40.156894,
  "lo": 116.285095
}
]

const formatTime = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();

  return (
    [year, month, day].map(formatNumber).join("/") +
    " " +
    [hour, minute, second].map(formatNumber).join(":")
  );
};

const formatNumber = (n) => {
  n = n.toString();
  return n[1] ? n : "0" + n;
};

function request(url, data = {}, method = "GET") {
  return new Promise(function (resolve, reject) {
    wx.request({
      url: url,
      data: data,
      method: method,
      header: {
        "Content-Type": "application/json",
        "Authorization": wx.getStorageSync("token"),
      },
      success: function (res) {
        console.log(res)
        if (res.statusCode == 201) {
          resolve(res.data);
          console.log("加油")
        } else if (res.statusCode == 400) {
          //需要登录后才可以操作
          let code = null;
          return login()
            .then((res) => {
              code = res.code;
              return getUserInfo();
            })
            .then((userInfo) => {
              //登录远程服务器
              var nickname = userInfo.nickName
              var sex = userInfo.gender   
              var openid = app.globalData.openid
              console.log(nickname,sex,openid)
              request(
                
                api.AuthLoginByWeixin,
                { userInfo: userInfo },
                "POST"
              )
                .then((res) => {
                  if (res.err == 0) {
                    //存储用户信息
                    wx.setStorageSync("userInfo", res.data.userInfo);
                    wx.setStorageSync("token", res.data.token);

                    resolve(res);
                  } else {
                    reject(res);
                  }
                })
                .catch((err) => {
                  reject(err);
                });
            })
            .catch((err) => {
              reject(err);
            });
        } else {
          reject(res.errMsg);
          console.log("河北")
        }
      },
      fail: function (err) {
        reject(err);
        console.log("failed");
      },
    });
  });
}

function get(url, data = {}) {
  return request(url, data, "GET");
}

function post(url, data = {}) {
  return request(url, data, "POST");
}

//微信登录
function login() {
  return new Promise(function (resolve, reject) {
    wx.login({
      success: function (res) {
        if (res.code) {
          resolve(res.code);
        } else {
          reject(res);
        }
      },
      fail: function (err) {
        reject(err);
      },
    });
  });
}

module.exports = {
  formatTime,
  request,
  get,
  post,
  BUPT
};
