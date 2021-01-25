// pages/set/set.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    setting: 0,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    avatar: '',
    nickname: '',
    sex: '',
    gender: null,
    phone: '13707577090',
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取个人信息，目前使用微信原生接口,后期使用自己设定的接口
    if (app.globalData.userInfo) {
      console.log(res.userInfo)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log(res.userInfo)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          nickname: res.userInfo.nickName,
          gender: res.userInfo.gender,
          avatar: res.userInfo.avatarUrl
        })
        if(this.data.gender == 1){
          this.setData({
            sex: '男'
          })
        } else{
          this.setData({
            sex: '女'
          })
        }
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    wx.request({
      url: 'http://192.168.137.131:8000/userInfo',
      method: 'GET',
      data: {
        openid: app.globalData.openid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res)
        var data = res.data
        if(res.statusCode == 201){
          this.setData({
            nickname: data.nickname,
            gender: data.sex,
            avatar: data.avatar,
            phone: data.phone
          })
        } else {
          wx.shoeModel({
            title: '提示',
            content: res.errMsg
          })
        }
      }
    })
  },
  // 基本信息修改
  setting: function(e){
    console.log(e)
    var setting = 0;
    var nickname = this.data.nickname
    var phone = this.data.phone
    var sex = this.data.sex
    switch(e.currentTarget.id){
      case "nickname" :
        setting = 2
        break;
      case "sex" :
        setting = 3
        break;
      case "phone" :
        setting = 4
        break;
    }
    var userData = {nickname,sex,phone}
    wx.navigateTo({
      url: '../set/set',
      success: function(res){
        res.eventChannel.emit('acceptDataFromOpenerPage', { setting: setting , data: userData})
      }
    })
  },
  //  头像更改
  changeAvatar: function(){
    var that = this
    var avatar = ''
    wx.chooseImage({
      count: 1,
      sourceType: ['album' , 'camera'],
      success: function(res){
        console.log(res.tempFilePaths[0])
        wx.uploadFile({
          url: 'http://192.168.137.131:8000/updAvatar',
          filePath: res.tempFilePaths[0],
          data:{
            openid: app.globalData.openid,
            avatar: res.tempFilePaths[0]
          },
          success(res) {
            console.log(res.data)
            if(res.statusCode == 201){
              wx.showToast({
                title: '上传成功',
                icon: 'success',
                duration: 2000
              })
              that.setData({
                avatar: res.tempFilePaths[0]
              })
            } else{
              wx.showToast({
                title: '上传失败',
                duration: 2000
              })
            }
          },
          fail(err){
            console.warn(err)
              wx.showModal({
                title: "提示",
                content: '网络不佳，头像上传失败，再试一次吧~~',
                showCancel: 'true'
              })
          }
        })
      },
      fail: function(){
        wx.showToast({
          title: '已取消上传',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
})