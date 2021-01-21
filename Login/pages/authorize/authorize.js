// authorize.js
// 获取应用实例
const app = getApp();

var api = require("../../config/api.js");
var util = require("../../utils/util.js");

Page({
  data: {
    //判断小程序的API，回调，参数，组件等是否在当前版本可用
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    openid: ''
  },

  onLoad: function () {
      this.onGetOpenid()
      
  },

  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      this.onGetOpenid()
      app.globalData.userInfo = e.detail.userInfo;
      console.log(e.detail.userInfo)
      //插入登录的用户的相关信息到数据库
      let that = this;
      that.insertUserInfo(e);
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: "警告",
        content: "您点击了拒绝授权，将无法进入小程序，请授权登录！",
        showCancel: false,
        confirmText: "返回授权",
        success: function (res) {
          if (res.confirm) {
            console.log("用户点击了“返回授权”");
          }
        },
      });
    }
  },

  //保存用户信息
  insertUserInfo: function (res) {
    console.log(res)
    
    var rawData=JSON.parse(res.detail.rawData)
    console.log(res.detail.rawData)
    console.log(rawData)
    var that=this
    console.log("保存用户信息");
    var openid = ''
    var nickname = rawData.nickName
    var sex = rawData.gender

    var data = {
      openID: app.globalData.openid,
      nickname ,
      sex,
    };
    util.request(api.AuthLogin, data, "POST").then(function (res) {
      console.log(res)
      if (res.flag == 1) {
        console.log("小程序登录用户信息成功！");

        //授权成功后，跳转进入小程序首页
        wx.switchTab({
          url: "../home/home",
        });
      } else {
        that.insertUserInfo(data);
      }
    });
  },

  //获取用户openid
  onGetOpenid: function() {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },
});
