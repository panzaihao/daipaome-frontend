const app = getApp()

Page({
  data: {
    nickname: ''
  },

  saveNickname: function (e) {
    wx.request({
      url: 'http://' + app.globalData.backend_server + '/changeNickname',
      method: 'POST',
      data: {
        openID: app.globalData.openid,
        nickname: e.detail.value.nickname
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res)
        app.globalData.nickName = e.detail.value.nickname
        wx.navigateBack({
          delta: 0,
        })
      }
    })
  }
})