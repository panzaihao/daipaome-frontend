// authorize.js
// 获取应用实例
const app = getApp();

var api = require("../../config/api.js");
var util = require("../../utils/util.js");

Page({
  data: {
    // 判断小程序的API，回调，参数，组件等是否在当前版本可用
    canIUse: wx.canIUse("button.open-type.getUserInfo"),
    openid: '',
  },

  onLoad: function () {
    this.onGetOpenid()
  },

  bindGetUserInfo: function (e) {
    console.log(e)
    if (e.detail.userInfo) {
      // 允许授权
      app.globalData.userInfo = e.detail.userInfo;
      app.globalData.avatarUrl = e.detail.userInfo.avatarUrl
      app.globalData.nickName = e.detail.userInfo.nickName
      app.globalData.gender = e.detail.userInfo.gender

      //插入登录的用户的相关信息到数据库
      let that = this;
      that.insertUserInfo(e);
    }
  },

  // 获取用户openid
  onGetOpenid: function () {
    // 调用云函数
    wx.cloud.callFunction({
      name: 'login',
      data: {},
      success: res => {
        console.log('[云函数] [login] user openid: ', res.result.openid)
        app.globalData.openid = res.result.openid
        // 查看是否授权
        wx.request({
          url: 'http://' + app.globalData.backend_server + '/checkAuthorized',
          data: {
            openID: res.result.openid
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success(res) {
            console.log(res)
            if (res.data.isAuthorized == 1) {
              app.globalData.avatarUrl = res.data.avatarUrl
              app.globalData.nickName = res.data.nickname
              app.globalData.gender = ( res.data.sex == true ? 1 : 0)
              wx.switchTab({
                url: '/pages/home/home',
              })
            }
          }
        })
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  },

  // 保存用户信息
  insertUserInfo: function (res) {
    var rawData = JSON.parse(res.detail.rawData)
    console.log(rawData)
    var that = this
    console.log("保存用户信息")
    var openid = ''
    var nickname = rawData.nickName
    var sex = rawData.gender
    var avatarUrl = rawData.avatarUrl

    var data = {
      openID: app.globalData.openid,
      nickname,
      sex,
      avatarUrl // add
    };

    util.request(api.AuthLogin, data, "POST").then(function (res) {
      console.log(res)
      if (res.flag == 1) {
        console.log("小程序登录用户信息成功！");
        app.globalData.nickname = res.nickname
        app.globalData.sex = (res.sex == 1 ? '男' : '女')
        // 授权成功后，跳转进入小程序首页
        wx.switchTab({
          url: "../home/home",
        });
      }
    });
  },
});