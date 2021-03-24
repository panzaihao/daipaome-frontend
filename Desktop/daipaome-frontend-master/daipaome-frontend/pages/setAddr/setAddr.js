const app = getApp();

Page({
  data: {
    addressList: []
  },
  
  onLoad: function (options) {
    var that=this
    wx.request({
      url: 'http://' + app.globalData.backend_server + '/getAddrInfo',
      method: 'GET',
      data: {
        openid: app.globalData.openid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)
        var data = res.data
        if (res.statusCode == 201) {
          that.setData({
            addressList: data.addressList
          })
        } else {
          wx.showModal({
            title: '提示',
            content: res.errMsg
          })
        }
      }
    })
  },

  onShow: function () {
    this.onLoad();
  },

  addAddress: function () {
    wx.navigateTo({
      url: '../addAddr/addAddr',
    })
  },

  delAddress: function (e) {
    var that = this
    var index = e.target.id
    var delAddrInfo = this.data.addressList[index]
    console.log(index)
    wx.request({
      url: 'http://' + app.globalData.backend_server + '/delAddr',
      method: 'POST',
      data: {
        openid: app.globalData.openid,
        delAddrInfo: delAddrInfo,
        index: index
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)
      }
    })

    that.data.addressList.splice(e.target.id.substring(3), 1);
    // 更新data数据对象
    that.setData({
      addressList: that.data.addressList
    })
  }
})