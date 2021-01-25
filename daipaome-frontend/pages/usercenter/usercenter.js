// pages/set/set.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    setting: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    // 获取个人信息，使用自己设定的接口
    wx.request({
      url: 'http://'+app.globalData.backend_server+'/userInfo',
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
          that.setData({
            nickname: app.globalData.nickname,
            sex: app.globalData.sex,
            avatar: 'http://' + app.globalData.backend_server+data.avatar,
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
    var nickname = app.globalData.nickname
    var phone = app.globalData.phone
    var sex = app.globalData.sex
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
          url: 'http://'+app.globalData.backend_server+'/updAvatar',
          name : 'name',
          filePath: res.tempFilePaths[0],
          formData:{
            'usr':app.globalData.nickname,//用户昵称
            'openid':app.globalData.openid//用户openid/token 校验使用
          },
          success(respon) {
            console.log(respon)
            if(respon.statusCode == 201){
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