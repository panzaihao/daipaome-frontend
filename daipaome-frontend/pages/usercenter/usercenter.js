// // pages/set/set.js
// const app = getApp()

// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {
//     setting: 0,
//     userInfo: {},
//     hasUserInfo: false,
//     canIUse: wx.canIUse('button.open-type.getUserInfo'),
//     avatar: '',
//     nickname: '',
//     sex: '',
//     gender: null,
//     phone: '13707577090',
    
//   },

//   /**
//    * 生命周期函数--监听页面加载
//    */
//   onLoad: function (options) {
//     let that = this
//     // 获取个人信息，目前使用微信原生接口,后期使用自己设定的接口
//     if (app.globalData.userInfo) {
//       console.log(app.globalData.userInfo)
//       this.setData({
//         userInfo: app.globalData.userInfo,
//         hasUserInfo: true
//       })
//     } else if (this.data.canIUse){
//       // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
//       // 所以此处加入 callback 以防止这种情况
//       app.userInfoReadyCallback = res => {
//         console.log(res.userInfo)
//         this.setData({
//           userInfo: res.userInfo,
//           hasUserInfo: true,
//           nickname: res.userInfo.nickName,
//           gender: res.userInfo.gender,
//           avatar: res.userInfo.avatarUrl
//         })
//         if(this.data.gender == 1){
//           this.setData({
//             sex: '男'
//           })
//         } else{
//           this.setData({
//             sex: '女'
//           })
//         }
//       }
//     } else {
//       // 在没有 open-type=getUserInfo 版本的兼容处理
//       wx.getUserInfo({
//         success: res => {
//           app.globalData.userInfo = res.userInfo
//           this.setData({
//             userInfo: res.userInfo,
//             hasUserInfo: true
//           })
//         }
//       })
//     }
//     wx.request({
//       url: 'http://'+app.globalData.backend_server+'/userInfo',
//       method: 'GET',
//       data: {
//         openid: app.globalData.openid,
//       },
//       header: {
//         'content-type': 'application/json' // 默认值
//       },
//       success(res){
//         console.log(res)
//         var data = res.data
//         if(res.statusCode == 201){
//           that.setData({
//             nickname: app.globalData.nickname,
//             sex: app.globalData.sex,
//             avatar: 'http://'+app.globalData.backend_server+data.avatar,
//             phone: data.phone
//           })
//         } else {
//           wx.showModal({
//             title: '提示',
//             content: res.errMsg
//           })
//         }
//       }
//     })
//   },
//   // 基本信息修改
//   setting: function(e){
//     console.log(e)
//     var setting = 0;
//     var nickname = this.data.nickname
//     var phone = this.data.phone
//     var sex = this.data.sex
//     switch(e.currentTarget.id){
//       case "nickname" :
//         setting = 2
//         break;
//       case "sex" :
//         setting = 3
//         break;
//       case "phone" :
//         setting = 4
//         break;
//     }
//     var userData = {nickname,sex,phone}
//     wx.navigateTo({
//       url: '../set/set',
//       success: function(res){
//         res.eventChannel.emit('acceptDataFromOpenerPage', { setting: setting , data: userData})
//       }
//     })
//   },
//   //  头像更改
//   changeAvatar: function(){
//     var that = this
//     var avatar = ''
//     wx.chooseImage({
//       count: 1,
//       sourceType: ['album' , 'camera'],
//       success: function(res){
//         console.log(res.tempFilePaths[0])

//         wx.uploadFile({
//           url: 'http://'+app.globalData.backend_server+'/updAvatar',
//           name : 'name',
//           filePath: res.tempFilePaths[0],
//           // data:{
//           //   openid: app.globalData.openid,
//           //   avatar: res.tempFilePaths[0]
//           // },
//           formData:{
//             'usr':app.globalData.nickname,//用户昵称
//             'openid':app.globalData.openid//用户openid/token 校验使用
//           },
//           success(res2) {
//             console.log(res2)
//             if(res2.statusCode == 201){
//               wx.showToast({
//                 title: '上传成功',
//                 icon: 'success',
//                 duration: 2000
//               })
//               that.setData({
//                 avatar: res.tempFilePaths[0]
//               })
//             } else{
//               wx.showToast({
//                 title: '上传失败',
//                 duration: 2000
//               })
//             }
//           },
//           fail(err){
//             console.warn(err)
//               wx.showModal({
//                 title: "提示",
//                 content: '网络不佳，头像上传失败，再试一次吧~~',
//                 showCancel: 'true'
//               })
//           }
//         })
//       },
//       fail: function(){
//         wx.showToast({
//           title: '已取消上传',
//           icon: 'success',
//           duration: 2000
//         })
//       }
//     })
//   },
// })

const app = getApp()

Page({
  data: {
    avatarUrl: '',
    nickName: '',
    ordersNum: 0
  },

  onLoad: function(options) {
    this.setData({
      avatarUrl: app.globalData.avatarUrl,
      nickName: app.globalData.nickName
    })
    var that = this
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
        if(res.statusCode.toString()[0] === '2'){
          that.setData({
            nickname: app.globalData.nickname,
            sex: app.globalData.sex,
            avatar: 'http://'+app.globalData.backend_server+data.avatar,
            phone: data.phone,
            ordersNum: data.ordersNum
          })
        } else {
          wx.showToast({
            title: '服务器异常！',
            duration: 2000
          })
        }
      }
    })
  }
})