const app = getApp();
Page({
  data: {
    orderInfo: {orderID: '2019211539', money: '6.66', time: '今天出发', isUrgent: '1', name: 'spider', mobile: '19966442173', pickupAddress: '北京邮电大学', consigneeAddress: '华中科技大学', description: '一台华为mate 40 pro', isExpress: '1'}
  },

  onLoad: function (options) {
    // wx.request({
    //   url: 'http://192.168.137.131:8000/getOrderInfo',
    //   method: 'GET',
    //   data: {
    //     openID: app.globalData.openid,
    //     orderID: options.orderID
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res)
    //     var data = res.data
    //     if (res.statusCode == 201) {
    //       this.setData({
    //         orderInfo: data.orderInfo
    //       })
    //     } else {
    //       wx.showModal({
    //         title: '提示',
    //         content: res.errMsg
    //       })
    //     }
    //   }
    // })
  }
})