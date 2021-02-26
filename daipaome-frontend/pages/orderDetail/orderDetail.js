const app = getApp()

Page({
  data: {
    orderInfo: {}
  },

  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    var that=this
     var id = 1
        eventChannel.on('acceptDataFromOpenerPage', function(data) {
          id = data.orderID
        })
    wx.request({
      url: 'http://192.168.137.132:8000/getOrderInfo',
      method: 'GET',
      data: {
        openID: app.globalData.openid,
        orderID: id
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)
        var data = res.data
        if (res.statusCode == 201) {
          data.mobile = data.mobile.substring(0, 3) + '****' + data.mobile.substring(7)
          that.setData({
            orderInfo: data
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

  bindTap: function (e) {
    console.log(e)
    var that = this
    wx.showModal({
      title: '接单',
      content: '您是否确定接单？',
      success(res) {
        if (res.confirm) {
          wx.request({
            url: 'http://192.168.137.132:8000/giveOrderInfo',
            method: 'POST',
            data: {
              openID: app.globalData.openid,
              orderID: e.currentTarget.dataset.id,
              status: 1 // 1表示已接单
            },
            header: {
              'content-type': 'application/json' // 默认值
            },
            success(res) {
              console.log(res)
              that.onLoad()
              wx.showToast({
                title: '接单成功',
                icon: 'success',
                duration: 2000
              })
            }
          })
          console.log("确定接单")
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})