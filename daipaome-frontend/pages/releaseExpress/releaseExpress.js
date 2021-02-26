const app = getApp();
Page({
  data: {
    time: '',
    addressIndex: [0, 0],
    addressArray: [
      ['常用地址', '临时地址'],
      []
    ],
    usualAddress: [],
    isUsualAddress: true,
    mobiles: [],
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

    var that = this
    wx.request({
      url: 'http://192.168.137.132:8000/getAddressList',
      method: 'GET',
      data: {
        openID: app.globalData.openid,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)
        var data = res.data.addressList
        if (res.statusCode == 201) {
          var addr = [
            ['常用地址', '临时地址'],
            []
          ];
          var mobiles = [];
          for (var i = 0; i < data.length; i++) {
            addr[1][i] = data[i].address;
            mobiles[i] = data[i].phone;
          }
          console.log(addr)
          that.setData({
            addressArray: addr,
            usualAddress: addr[1],
            mobiles: mobiles
          })
        } else {
          wx.showModel({
            title: '提示',
            content: res.errMsg
          })
        }
      }
    })
  },

  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
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
      if (data.addressIndex[0] == 0)
        data.addressArray[1] = this.data.usualAddress;
      else if (data.addressIndex[0] == 1)
        data.addressArray[1] = ['雁南园', '雁北园', '教工食堂', '学生食堂', '学生活动中心', '图书馆', '教学N楼', '教学S楼', '操场'];
      data.addressIndex[1] = 0;
    }
    this.setData(data)
    this.setData({
      isUsualAddress: data.addressIndex[0] == 0 ? true : false,
    })
  },

  bindChange: function (e) {
    console.log(e)
    this.setData({
      isUrgent: e.detail.value == 1 ? 1.5 : 1
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
            url: 'http://192.168.137.132:8000/uploadImages',
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
      url: 'http://192.168.137.132:8000/releaseOrders',
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