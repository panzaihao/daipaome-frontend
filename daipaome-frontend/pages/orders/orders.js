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
    startLatitude: null,
    startLongtitude: null,
    endLatitude: 40.1573537832472,
    endLongtitude: 116.28892183920092
  },

  onLoad: function (options) {
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
    var that=this
    wx.request({
      url: 'http://192.168.137.132:8000/getOrderInfo',
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      data: { 
        orderID: id,
        page: "manage"
      },
      success(res) {
        console.log(res)
        if(res.statusCode === 201){
          var orderInfo = res.data
          
          const orderType = ['快递', '带饭', '超市', '外卖', '其他']
          that.setData({
            status:orderInfo.status,
            orderInfo: orderInfo,
            orderType: orderType[(orderInfo.isExpress) - 1],
            //stepLength: orderInfo.steps.length
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
    wx.request({
      url: 'http://192.168.132:8000/localcationInfo',
      method: 'GET',
      data: {
        originAddress: that.data.orderInfo.pickupAddress,
        endAddress: that.data.orderInfo.consignee
      },
      successs(res){
        console.log(res)
        if(res.statusCode.toString()[0] === '2'){
          that.setData({
            
          })
        }
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
          //var steps = that.data.steps
          //var step = {text: '您已经于' + that.data.orderInfo.consignee + '确认查收', desc: res.finishTime}
          //steps.push(step)
          //that.setData({
          //  steps: steps
          //})
          console.log('大家元宵节快乐！')
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
    //var steps = this.data.steps
    if(this.data.stepLength !== steps.length){
      wx.request({
        url: 'http://192.168.132:8000/uploadSteps ',
        method: 'POST',
        data:{
          orderID: that.data.orderID,
          //steps: steps
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