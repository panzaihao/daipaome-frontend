const app = getApp()
const data = require('../../utils/util')
const BUPT = data.BUPT

Page({
  data: {
    orderInfo: {}
  },

  onLoad: function (options) {
    // const eventChannel = this.getOpenerEventChannel()
    console.log(options)
    var that = this
    var id = options.orderID
    // eventChannel.on('acceptDataFromOpenerPage', function (data) {
    //   id = data.orderID
    // })
    console.log(id)
    wx.request({
      url: 'http://' + app.globalData.backend_server + '/getOrderInfo',
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

  // 路线规划
  routePlan: function (e) {
    let start = BUPT.findIndex(item => item.addr == this.data.orderInfo.pickupAddress)
    console.log(this.data.orderInfo)
    let end = BUPT.findIndex(item => item.addr == this.data.orderInfo.consigneeAddress)
    console.log(start)
    let plugin = requirePlugin('routePlan');
    let key = 'I3TBZ-3SAKP-HNWDR-VW42R-7PWMV-KSBIS'; // 使用在腾讯位置服务申请的key
    let startPoint = JSON.stringify({ // 起点
      'name': BUPT[start].addr,
      'latitude': BUPT[start].la,
      'longitude': BUPT[start].lo
    });
    let referer = 'DPM'; // 调用插件的app的名称
    let endPoint = JSON.stringify({ // 终点
      'name': BUPT[end].addr,
      'latitude': BUPT[end].la,
      'longitude': BUPT[end].lo
    });
    wx.navigateTo({
      url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + '&startPoint=' + startPoint + '&endPoint=' + endPoint
    });
  },

  bindTap: function (e) {
    console.log(e)
    var that = this
    let orderID = e.currentTarget.dataset.id
    wx.showModal({
      title: '接单',
      content: '您是否确定接单？',
      success(res) {
        if (res.confirm) {
          wx.request({
            url: 'http://' + app.globalData.backend_server + '/giveOrderInfo',
            method: 'POST',
            data: {
              openID: app.globalData.openid,
              orderID: orderID,
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
              that.sendTextMessage(orderID)
            }
          })
          console.log("确定接单")
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },

  // 接单成功后向派单人发送提醒消息
  sendTextMessage: function (orderID) {
    let that = this
    wx.request({
      url: 'http://' + app.globalData.backend_server + '/getInfoByOrderID',
      method: 'GET',
      data: {
        openID: app.globalData.openid,
        orderID: orderID
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res)
        var data = res.data
        if (res.statusCode == 201) {
          let id = data.openID,
            avatar = data.avatar,
            name = data.nickName;
          // 创建文本消息
          let textMessage = wx.im.createTextMessage({
            text: '您的订单' + orderID + '由我进行派送~',
            to: {
              id: id,
              type: wx.GoEasyIM.SCENE.PRIVATE,
              data: {
                name: name,
                avatar: avatar
              }
            }
          });
          that.sendMessage(textMessage);
        }
      }
    })
  },

  sendMessage(message) {
    let promise = wx.im.sendMessage(message)
    promise.then((res) => {
        console.log('发送消息成功')
      })
      .catch(e => {
        console.log('发送失败', e)
      })
  }
})