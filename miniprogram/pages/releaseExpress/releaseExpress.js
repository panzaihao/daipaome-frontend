const app = getApp();
Page({
  data: {
    time: '',
    pickupIndex: '',
    pickupAddr: ['快递站', '邮政快递'],
    addressIndex: ['', ''],
    addressArray: [
      ['图书馆', '雁南', '雁北', '教学实验综合楼', '学生活动中心', '运动场', '东配楼', '咖啡厅'],
      []
    ],
    isUsualAddress: true,
    imgList: [],
    isUrgent: 1,
    temp: 0,
  },

  onLoad: function (options) {
    // 获取当前时间
    var now = new Date()
    var hour = now.getHours()
    if (hour <= 9) hour = '0' + hour
    var minute = now.getMinutes()
    if (minute <= 9) minute = '0' + minute
    var time = hour + ':' + minute
    this.setData({
      time: time
    })

    // var that = this
    // wx.request({
    //   url: 'http://192.168.137.132:8000/getAddressList',
    //   method: 'GET',
    //   data: {
    //     openID: app.globalData.openid,
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success(res) {
    //     console.log(res)
    //     var data = res.data.addressList
    //     if (res.statusCode == 201) {
    //       var addr = [
    //         ['常用地址', '临时地址'],
    //         []
    //       ];
    //       var mobiles = [];
    //       for (var i = 0; i < data.length; i++) {
    //         addr[1][i] = data[i].address;
    //         mobiles[i] = data[i].phone;
    //       }
    //       console.log(addr)
    //       that.setData({
    //         addressArray: addr,
    //         usualAddress: addr[1],
    //         mobiles: mobiles
    //       })
    //     } else {
    //       wx.showModel({
    //         title: '提示',
    //         content: res.errMsg
    //       })
    //     }
    //   }
    // })
  },

  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  BindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      pickupIndex: e.detail.value
    })
  },

  bindAddressChange: function (e) {
    console.log(e)
    this.setData({
      addressIndex: e.detail.value
    })
  },

  bindAddressColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      addressIndex: this.data.addressIndex,
      addressArray: this.data.addressArray
    };
    data.addressIndex[e.detail.column] = e.detail.value;
    if (e.detail.column == 0) {
      if (data.addressIndex[0] == 1)
        data.addressArray[1] = ['S2', 'S3', 'S4', 'S5', 'S6'];
      else if (data.addressIndex[0] == 2)
        data.addressArray[1] = ['A区', 'B区', 'C区', 'D1区', 'D2区', 'E区'];
      else 
        data.addressArray[1] = [''];
      // data.addressIndex[1] = 0;
    }
    this.setData(data)
    this.setData({
      isUsualAddress: data.addressIndex[0] == 0 ? true : false,
    })
  },

  bindChange: function (e) {
    console.log(e)
    this.setData({
      isUrgent: e.detail.value == 1 ? 2 : 1
    })
  },

  ChooseImage() {
    wx.chooseImage({
      count: 3, //默认9
      sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'],
      success: (res) => {
        console.log(res.tempFilePaths)
        if (this.data.imgList.length != 0) {
          this.setData({
            imgList: this.data.imgList.concat(res.tempFilePaths)
          })
        } else {
          this.setData({
            imgList: res.tempFilePaths
          })
        }
        for (var i = this.data.temp; i < res.tempFilePaths.length; i++) {
          wx.uploadFile({
            filePath: res.tempFilePaths[i],
            name: 'file',
            url: 'http://' + app.globalData.backend_server + '/uploadImages',
            formData: {
              openID: app.globalData.openid
            },
            success(res) {
              console.log(res)
            }
          })
        }
        this.setData({
          temp: res.tempFilePaths.length
        })
      }
    });
  },

  ViewImage(e) {
    wx.previewImage({
      urls: this.data.imgList,
      current: e.currentTarget.dataset.url
    });
  },

  DelImg(e) {
    this.data.imgList.splice(e.currentTarget.dataset.index, 1);
    this.setData({
      imgList: this.data.imgList
    })
  },

  saveInfo: function (e) {
    console.log(e)
    var expressInfo = {
      openID: app.globalData.openid,
      isExpress: 1,
      description: e.detail.value.message,
      isFragile: e.detail.value.isFragile,
      pickupAddress: e.detail.value.pickup_address,
      consigneeAddress: e.detail.value.consignee_address,
      time: e.detail.value.time,
      isUrgent: e.detail.value.isUrgent,
      money: e.detail.value.money,
      name: e.detail.value.realName,
      mobile: e.detail.value.mobile,
      fileList: this.data.imgList
    }
    console.log(expressInfo.fileList)

    wx.request({
      url: 'http://' + app.globalData.backend_server + '/releaseOrders',
      method: 'POST',
      data: {
        expressInfo: expressInfo
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res)
      }
    })
    wx.showToast({
      title: '发布成功',
      icon: 'success',
      duration: 2000,
      success: function () {
        setTimeout(function () {
          wx.reLaunch({
            url: '/pages/home/home',
          })
        }, 1000);
      }
    })
  }
})