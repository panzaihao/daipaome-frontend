var api = require('../config/api.js');

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
};