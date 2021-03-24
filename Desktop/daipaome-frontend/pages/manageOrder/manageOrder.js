// pages/manageOrder/manageOrder.js
const app = getApp()
const staList = ['派单成功', '订单已接', '正在派送', '派送异常', '已取消', '待付款', '已完成']
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderInfo:null,
    order: null,
    tabs: [],
    status: '',
    nowOrder: null,
    historyOrder: null,
    cancelOrder: null,
    unpayOrder: null,
    takeList: []
  },
  onLoad(){
    var a = {id: 10212012005, name: '', phone: '', status: 110001,date: '2021-2-21'}
    //this.data.nowOrder.push(a)
    var order = null;
    var orderInfo = null;
    var nowOrder = [];
    var hisOrder = [];
    var cancelOrd = [];
    var unpayOrd = [];
    var take = null;
    var that = this;
    wx.request({
      url: 'http://' + app.globalData.backend_server + '/getOrder',
      method: 'GET',
      data:{
        openID: app.globalData.openid,
        page: "manage"
      },
      success(res){
        // 只要状态码第一个数是2，就可以了
        console.log(res)

        if((res.statusCode).toString()[0] === '2'){
          order = res.data.orderList;
          take = res.data.takeList;
         console.log(res.orderList)
          // 状态码分配与订单记录划分,API列表需要更新
          for(var i = 0; i < order.length; i++){
           console.log(order[i].status)
            switch(order[i].status){
              // 未接单
              case 110001:
                order[i].status = staList[0];
                nowOrder.push(order[i])
                break;
              // 已接单
              case 210001:
                order[i].status = staList[1];
                nowOrder.push(order[i])
                break;
              // 派送中
              case 310001:
                order[i].status = staList[2];
                nowOrder.push(order[i])
                break;
              // 派送异常
              case 410001:
                order[i].status = staList[3];
                nowOrder.push(order[i])
                break;
              // 已取消
              case 510001:
                order[i].status = staList[4];
                cancelOrd.push(order[i])
                break;
              // 待付款
              case 610001:
                order[i].status = staList[5];
                break;
              // 已完成
              case 610002:
                order[i].status = staList[6];
                hisOrder.push(order[i])
                break;
              default:
                wx.showToast({
                  title: 'error!',
                })
                break;
            }
          }
          that.setData({
            order: order,
            nowOrder: nowOrder,
            historyOrder:hisOrder,
            cancelOrder: cancelOrd,
            unpayOrder: unpayOrd
          })
        } else {
          wx.showToast({
            title: '服务器错误',
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
  onReady(){
    const title = ['我的订单', '我的接单']
    const tabs = title.map(item => ({title: item}))
    this.setData({tabs})
    console.log(this.data.tabs)
    console.log(this.data.order)
  },
  // 跳转页设置
  manageOrder: function(e){
    console.log(e)
  },

  // 订单详情，由于这里是已经接过或者已经发过的订单，这里的信息不做保密处理
  order: function(e){
    console.log(e)
    var index = e.currentTarget.id
    var orderID = this.data.order[index].orderID
    var originAddress = this.data.order[index].pickupAddress
    var endAddress = this.data.order[index].consigneeAddress
    wx.navigateTo({
      url: '../orders/orders',
      success(res) {
        res.eventChannel.emit('acceptDataFromOpenerPage', { orderID: orderID,originAddress:originAddress,endAddress:endAddress})
      }
    })
  }
})