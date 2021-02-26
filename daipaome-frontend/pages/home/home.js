// logs.js
const util = require('../../utils/util.js')
const app = getApp()
Page({
  data: {
    array: ['沙河校区', '西土城校区', '宏福校区'],
    index: 0,
    swiperList: [{
        id: '0',
        url: '/images/bupt1.jpg'
      },
      {
        id: '1',
        url: '/images/bupt2.jpg'
      },
      {
        id: '2',
        url: '/images/bupt3.jpg'
      },
      {
        id: '3',
        url: '/images/bupt4.jpg'
      },
    ],
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
    objectList: [{
      isExpress: '1',
      money: '2.00',
      description: '哈哈哈哈',
      time: '今天出发',
      orderID: '537',
      isUrgent: '1',
      submitDate: '2021-02-16 21:05:00'
    }, {
      isExpress: '2',
      money: '2.00',
      description: '哈哈哈哈',
      time: '今天出发',
      orderID: '538',
      isUrgent: '1',
      submitDate: '2021-02-16 21:15:00'
    },
    {
      isExpress: '3',
      money: '2.00',
      description: '哈哈哈哈',
      time: '今天出发',
      orderID: '539',
      isUrgent: '1',
      submitDate: '2021-02-15 21:05:00'
    }, {
      isExpress: '4',
      money: '2.00',
      description: '哈哈哈哈',
      time: '今天出发',
      orderID: '540',
      isUrgent: '1',
      submitDate: '2021-02-17 16:05:00'
    }, {
      isExpress: '5',
      money: '2.00',
      description: '哈哈哈哈',
      time: '17:00',
      orderID: '538',
      isUrgent: '0',
      submitDate: '2021-02-17 21:05:00'
    }]
  },

  onLoad: function () {
    console.log("欢迎使用代跑么小程序")
    var that = this
    wx.request({
      url: 'http://192.168.137.132:8000/getObjectInfo',
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

  // 下拉刷新页面
  onPullDownRefresh() {
    this.onLoad()
    wx.stopPullDownRefresh()
    wx.showToast({
      title: '刷新成功',
      icon: 'success',
      duration: 500
    })
  },

  // 页面滑动到底部
  bindDownLoad: function () {
    console.log("lower");
  },

  bindPickerChange: function (e) {
    console.log(e)
    this.setData({
      index: e.detail.value
    })
  },

  toDetail: function (e) {
    console.log(e)
     wx.navigateTo({
            url: '/pages/orderDetail/orderDetail',
            success(res) {
              res.eventChannel.emit('acceptDataFromOpenerPage', { orderID: e.currentTarget.dataset.id})
            }
          })
  },

  bindTap: function (e) {
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
  },

  navigateToOther: function (e) {
    console.log(e);
    var dir = e.target.id;
    switch (dir) {
      case "0":
        wx.navigateTo({
          url: '/pages/takeOrders/takeOrders',
        })
        break;
      case "1":
        wx.navigateTo({
          url: '/pages/releaseOrders/releaseOrders',
        })
        break;
      case "2":
        wx.switchTab({
          url: '/pages/manageOrder/manageOrder',
        })
        break;
    }
  }
})