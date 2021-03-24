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
    latitude: null,
    longtitude: null,
    markers: [
      { 
        id: 1, 
        latitude: null,
        longitude: null,
        iconPath: '/images/location.png',
        callout: { content: '出发地址', display: 'ALWAYS', borderRadius: 10, borderWidth: 3, bgColor: '#4A90E2' } 
      }, { 
        id: 2, 
        latitude: null, 
        longitude: null, 
        iconPath: '/images/location.png',
        callout: { content: '配送地址', display: 'ALWAYS', borderRadius: 10, borderWidth: 3, bgColor: '#4A90E2' } 
      }
    ],
    showMap: false
  },
  onLoad: function(){
    qqmapsdk = new QQMapWX({
      key: 'W3EBZ-6ZYKP-ZYFDB-LOJST-OKW53-ZXFCZ'
    })
    const eventChannel = this.getOpenerEventChannel()
    var that = this
    var id = 1
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      id = data.orderID
    })
    this.setData({
      orderID: id
    })
  },
  // 在onLoad 函数执行后才开始执行
  onShow: function(){
    this.request()
  },
  request: function(){
    var that=this
    wx.request({
      url: 'http://' + app.globalData.backend_server + '/getOrderInfo',
      method: 'GET',
      data: { 
        orderID: that.data.orderID,
        page: "manage"
      },
      success(res) {
        console.log(res)
        if(res.statusCode.toString()[0] === '2'){
          var orderInfo = res.data
          const orderType = ['快递', '带饭', '超市', '外卖', '其他']
          that.setData({
            orderInfo: orderInfo,
            orderType: orderType[(orderInfo.isExpress) - 1],
            stepLength: orderInfo.steps.length
          })
          that.getLocalInfo()
          console.log(that.data.orderInfo)
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
    console.log(this.data.orderInfo)
    wx.request({
      url: 'http://' + app.globalData.backend_server + '/locationInfo',
      method: 'GET',
      data: {
        originAddress: that.data.orderInfo.pickupAddress,
        endAddress: that.data.orderInfo.consigneeAddress
      },
      success(res){
        console.log(res)
        var longitude = null
        var latitude = null
        if(res.statusCode.toString()[0] === '2'){
          // 改变坐标位置
          markers[0].latitude = res.originLatitude;
          markers[0].longitude = res.originLongtitude;
          markers[1].latitude = res.endLatitude
          markers[1].longitude = res.endLongtitude
          latitude = markers[0].latitude + markers[1].latitude
          longitude = markers[0].longitude + markers[1].longitude
          that.setData({
            markers: markers,
            latitude: latitude,
            longtitude: longitude,
          })
          console.log(that.data.markers)
          // 为了等到初始化地图经纬之后才开始渲染地图
          that.setData({
            showMap: true
          })
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
            success: function(response){
              console.log(response)
            }
          })
        } else {
          wx.showToast({
            title: '服务器异常',
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
  
  onReady: function (options) {
    
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
        url: 'http://' + app.globalData.backend_server + '/uploadSteps ',
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