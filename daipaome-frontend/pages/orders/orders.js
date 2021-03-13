const app = getApp()
var QQMapWX = require('../../pages/orders/qqmap-wx-jssdk');
var qqmapsdk
Page({
  data: {
    orderID: '',
    steps: [
      {
        text: '您已经于图书馆确认查收',
        desc: '2021-2-19 17:30',
      },
      {
        text: '您的订单现在正在派送',
        desc: '2021-2-19 17:15',
      },
      {
        text: '您的订单已接，接单人：张三，联系方式：13707577090',
        desc: '2021-2-19 17:10',
      },
      {
        text: '派单成功！',
        desc: '2021-2-19 17:00',
      }
    ],
    orderInfo: {},
    orderType: '',
    stepLength: 0,
    latitude: 40.1573537832472,
    longtitude: 116.28892183920092,
    markers: [
      { 
        id: 1, 
        latitude: 40.157387147930926,
        longitude: 116.28405385353813,
        iconPath: '/images/location.png',
        callout: { content: '出发地址', display: 'ALWAYS', borderRadius: 10, borderWidth: 3, bgColor: '#4A90E2' } 
      }, { 
        id: 2, 
        latitude: 40.15899172313033, 
        longitude: 116.29383140708387, 
        iconPath: '/images/location.png',
        callout: { content: '配送地址', display: 'ALWAYS', borderRadius: 10, borderWidth: 3, bgColor: '#4A90E2' } 
      }
    ]
  },

  onReady: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    var that = this
    var id = 1
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      id = data.orderID
    })
    this.setData({
      orderID: id
    })
    this.request()
  },
  request: function(){
    var that=this
    wx.request({
      url: 'http://192.168.137.132:8000/getOrderInfo',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: { 
        orderID: that.data.orderID,
        page: "manage"
      },
      success(res) {
        console.log(res)
        if(res.statusCode.toString()[0] === '2'){
          var orderInfo = res.orderInfo
          const orderType = ['快递', '带饭', '超市', '外卖', '其他']
          that.setData({
            orderInfo: orderInfo,
            orderType: orderType[(orderIndo.isExpress) - 1],
            stepLength: orderInfo.steps.length
          })
        } else {
          wx.showToast({
            title: '服务器异常',
            duration: 2000
          })
        }
      },
      fail(err) {
        console.log(err)
        wx.showToast({
          title: '网络异常',
          duration: 2000
        })
      }
    })
   
  },
  getLocalInfo: function(){
    var that = this
    var markers = this.data.markers
    wx.request({
      url: 'http://localhost:8000/localcationInfo',
      method: 'GET',
      data: {
        originAddress: that.data.orderInfo.pickupAddress,
        endAddress: that.data.orderInfo.consignee
      },
      successs(res){
        console.log(res)
        if(res.statusCode.toString()[0] === '2'){
          // 改变坐标位置
          markers[0].latitude = res.originLatitude;
          markers[0].longitude = res.originLongtitude;
          markers[1].latitude = res.endLatitude
          markers[1].longitude = res.endLongtitude
          that.setData({
            markers: markers,
            latitude: (res.originLatitude + res.endLatitude) / 2 ,
            longtitude: (res.originLongtitude + res.endLongtitude) / 2 ,
          })
        }
      },
      fail(err){
        wx.showToast({
          title: '网络异常',
        })
      }
    })
  },
  onLoad: function(){
    qqmapsdk = new QQMapWX({
      key: 'W3EBZ-6ZYKP-ZYFDB-LOJST-OKW53-ZXFCZ'
    })
    this.getLocalInfo()
  },
  // 在onLoad 函数执行后才开始执行
  onShow: function(){
    var that = this
    qqmapsdk.direction({
      mode: 'walking',
      form: {
        latitude: that.data.startLatitude,
        longitude: that.data.startLongtitude
      },
      to: {
        latitude: that.data.endLatitude,
        longitude: that.data.endLongtitude
      },
      success: function(res){
        console.log(res)
      }
    })
  },
  receipt: function(e){
    console.log(e)
    var that = this
    wx.request({
      url: 'http://' + app.globalData.backend_server + '/checkFinish',
      method: 'POST',
      data:{
        orderID: that.data.orderID,
        openID: app.globalData.openid
      },
      success(res){
        console.log(res)
        if(res.statusCode.toString()[0] === '2'){
          var steps = that.data.steps
          var step = {text: '您已经于' + that.data.orderInfo.consignee + '确认查收', desc: res.finishTime}
          steps.push(step)
          that.setData({
            steps: steps
          })
          console.log('大家元宵节快乐！')
          wx.navigateBack({
            delta: 0,
          })
        } else {
          console.log('继续加油！')
        }     
      },
      fail(err){
        wx.showToast({
          title: '服务器异常！',
        })
      }
    })
  },
  // 页面卸载前自动调用
  onUnload: function(){
    // 检测状态是否有改变，如果没有，不care
    var that = this
    var steps = this.data.steps
    if(this.data.stepLength !== steps.length){
      wx.request({
        url: 'http://localhost:8000/uploadSteps ',
        method: 'POST',
        data:{
          orderID: that.data.orderID,
          steps: steps
        },
        success(res){
          console.log(res)
        }
      })
    }
  },
  getLocaltion: function(e){
    console.log(e)
  }
})