// pages/wechat/wechat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    // const _locationChangeFn = function(res) {
      wx.startLocationUpdateBackground({
        success(res) {
          console.log('开启后台定位', res)
          wx.onLocationChange(function(res) {
            console.log('location change', res)
          })
        },
        fail(res) {
          console.log('开启后台定位失败', res)
        }
      })
    //   console.log('location change', res)
    //  }
    //  wx.onLocationChange(_locationChangeFn)
    //  wx.offLocationChange(_locationChangeFn)
    // wx.chooseLocation({
    //   success(res) {
    //     console.log(res)
    //     wx.request({ // ②百度地图API，将微信获得的经纬度传给百度，获得城市等信息
    //       url: `https://api.map.baidu.com/geocoder/v2/?ak=Mi32gDpFIvU6o0agVh73injRlKecGA0c&location${res.latitude},${res.longitude}&output=json&coordtype=wgs84ll`,
    //       data: {},
    //       header: {
    //         'Content-Type': 'application/json'
    //       },
    //       success: function (res) {
    //         console.log(res.data);
    //       },
    //       fail: function () {
    //         // fail
    //       },
    //       complete: function () {
    //         // complete
    //       }
    //     })
    //   }
    // })
  },

  bindTap: function(e) {
    wx.openSetting({
      success (res) {
        console.log(res.authSetting)
        // res.authSetting = {
        //   "scope.userInfo": true,
        //   "scope.userLocation": true
        // }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  // getUserLocation() {
  //   wx.getSetting({
  //     success(res) {
  //       console.log(res)
  //       if (res.authSetting['scope.userLocationBackground']) {
  //         wx.startLocationUpdateBackground({
  //           success: (res) => {
  //             console.log('startLocationUpdate-res', res)
  //           },
  //           fail: (err) => {
  //             console.log('startLocationUpdate-err', err)
  //           }
  //         })
  //       } else {
  //         if (res.authSetting['scope.userLocation'] == false) {
  //           console.log('打开设置页面去授权')
  //         } else {
  //           wx.startLocationUpdateBackground({
  //             success: (res) => {
  //               console.log('startLocationUpdate-res', res)
  //             },
  //             fail: (err) => {
  //               console.log('startLocationUpdate-err', err)
  //             }
  //           })
  //         }
  //       }
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
 
    // this.getUserLocation();
    // const _locationChangeFn = res => {
    //   console.log('location change', res.latitude, res.longitude)
    // }
    // wx.onLocationChange(_locationChangeFn);
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})