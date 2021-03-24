const app = getApp();
Page({
  data: {
    array: ['全部', '快递', '带饭', '超市', '外卖', '其他'],
    index: 0,
    objectList: []
  },

  onLoad: function (options) {
    var that=this
    console.log("这是接单页面")
    wx.request({
      url: 'http://' + app.globalData.backend_server + '/getObjectInfo',
      method: 'GET',
      data: {
        openID: app.globalData.openid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)
        var data = res.data
        if (res.statusCode == 201) {
          that.setData({
            objectList: data.objectList
          })
          // 按发布时间排序
          var property = "submitDate"
          var arr = that.data.objectList
          var sortRule = false
          that.setData({
            objectList: arr.sort(that.compare(property, sortRule))
          })
          // 计算发布时间差值
          var objectList = that.data.objectList
          for (var i = 0; i < objectList.length; i++) {
            objectList[i].submitDate = that.releTime(objectList[i].submitDate);
            console.log(objectList[i].submitDate)
          }
          that.setData({
            objectList
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

  releTime: function (time) {
    var start = Date.parse(time)
    var date = new Date(start)
    console.log(date)

    var Y = date.getFullYear()
    var M = date.getMonth() + 1
    var D = date.getDate()
    var H = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()

    if (M < 10) {
      M = '0' + M;
    }
    if (D < 10) {
      D = '0' + D;
    }
    if (H < 10) {
      H = '0' + H;
    }
    if (m < 10) {
      m = '0' + m;
    }
    if (s < 10) {
      s = '0' + s;
    }

    var now = new Date().getTime()
    var diff = (now - start) / 1000
    var diffDays = parseInt(diff / 86400)
    var diffHours = parseInt(diff / 3600)
    var diffMinutes = parseInt(diff / 60)
    var diffSeconds = parseInt(diff)

    if (diffDays > 0 && diffDays < 3) {
      return (diffDays + '天前');
    } else if (diffDays <= 0 && diffHours > 0) {
      return (diffHours + '小时前');
    } else if (diffHours <= 0 && diffMinutes > 0) {
      return (diffMinutes + '分钟前');
    } else if (diffSeconds < 60) {
      if (diffSeconds <= 0) {
        return ('刚刚');
      } else {
        return (diffSeconds + '秒前');
      }
    } else if (diffDays >= 3 && diffDays < 30) {
      return (M + '-' + D + ' ' + H + ':' + m);
    } else if (diffDays >= 30) {
      return (Y + '-' + M + '-' + D + ' ' + H + ':' + m);
    }
  },

  compare: function (property, flag) {
    return function (a, b) {
      var value1 = Date.parse(a[property]);
      var value2 = Date.parse(b[property]);
      if (flag) {
        return value1 - value2;
      } else {
        return value2 - value1;
      }
    }
  },

  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  // 跳转到订单详情页
  toDetail: function (e) {
    console.log(e)
      wx.navigateTo({
            url: '/pages/orderDetail/orderDetail',
            success(res) {
              res.eventChannel.emit('acceptDataFromOpenerPage', { orderID: e.currentTarget.dataset.id})
            }
          })
    },

  // 接单按钮
  bindTap: function (e) {
    console.log(e)
    var that = this
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
  },

  // 下拉刷新页面
  onPullDownRefresh() {
    this.onLoad()
    wx.stopPullDownRefresh()
    wx.showToast({
      title: '刷新成功',
      icon: 'success',
      duration: 1000
    })
  },

  // 页面滑动到底部
  bindDownLoad: function () {
    console.log("lower");
  },
})