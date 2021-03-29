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
    getIt: true,
    categoryList: [{
      name: "我要接单",
      src: "/images/take.png",
    }, {
      name: "我要发布",
      src: "/images/release.png",
    }, {
      name: "订单管理",
      src: "/images/manage.png",
    }, {
      name: "社区动态",
      src: "/images/chat.png",
    }],
    getInfo: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this
    console.log()
    wx.request({
      url: 'http://'+ app.globalData.backend_server +'/userInfo',
      method: 'GET',
      data: {
        openid: app.globalData.openid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        console.log(res)
        console.log(app.globalData)
        var data = res.data
        // 头像显示不了
        if(res.statusCode.toString()[0] === '2'){
          that.setData({
            nickname: app.globalData.nickName,
            sex: app.globalData.sex,
            avatar: app.globalData.user.uuid,
            phone: data.phone,
            getIt: false
          })
          console.log(that.data.getIt)
        }
      },
      fail(err){
        // 获取个人信息，后端调取失败时使用微信原生接口
        if (app.globalData.userInfo) {
          console.log(app.globalData.userInfo)
          var sex = app.globalData.userInfo.gender === 1 ? '男' : '女'
          that.setData({
            userInfo: app.globalData.userInfo,
            hasUserInfo: true,
            nickname: app.globalData.userInfo.nickName,
            avatar: app.globalData.userInfo.avatarUrl,
            getIt: false,
            sex: sex
          })
        } else if (that.data.canIUse){
          // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
          // 所以此处加入 callback 以防止这种情况
          app.userInfoReadyCallback = res => {
            console.log(res.userInfo)
            var sex = res.userInfo.gender === 1 ? '男' : '女'
            that.setData({
              userInfo: res.userInfo,
              hasUserInfo: true,
              nickname: res.userInfo.nickName,
              avatar: res.userInfo.avatarUrl,
              getIt: false,
              sex: sex
            })
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
      }
    })
  },
  onReady: function(){
    this.setData({
      getInfo: false,
    });
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
          // data:{
          //   openid: app.globalData.openid,
          //   avatar: res.tempFilePaths[0]
          // },
          formData:{
            'usr':app.globalData.nickname,//用户昵称
            'openid':app.globalData.openid//用户openid/token 校验使用
          },
          success(res2) {
            console.log(res2)
            if(res2.statusCode == 201){
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