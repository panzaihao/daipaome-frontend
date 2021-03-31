const app = getApp()

Page({
  data: {
    sex: ['女', '男'],
    sexIndex: '',
    avatarUrl: '',
    nickName: ''
  },

  onShow: function (options) {
    var data = app.globalData
    this.setData({
      avatarUrl: data.avatarUrl,
      nickName: data.nickName,
      sexIndex: data.gender
    })
  },

  changeSex: function (e) {
    this.setData({
      sexIndex: e.detail.value
    })
    var sexIndex = this.data.sexIndex
    wx.request({
      url: 'http://' + app.globalData.backend_server + '/changeSex',
      method: 'POST',
      data: {
        openID: app.globalData.openid,
        gender: sexIndex
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res)
        app.globalData.gender = e.detail.value
      }
    })
  }
})