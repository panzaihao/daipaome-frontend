var addressList = null;
const app = getApp();

Page({
  data: {
    isValidMobile: false,
    addressIndex: [0, 0],
    addressArray: [
      ['雁南园', '雁北园', '图书馆', '教学S楼', '教学N楼'],
      ['s1', 's2', 's3', 's4']
    ]
  },

  setMobile: function (e) {
    console.log(e)
    if (e.detail.value.length == 11) {
      this.setData({
        isValidMobile: true
      })
    }
  },

  bindAddressChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
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
        data.addressArray[1] = ['s1', 's2', 's3', 's4'];
      else if (data.addressIndex[0] == 1)
        data.addressArray[1] = ['n1', 'n2', 'n3', 'n4'];
      else if (data.addressIndex[0] == 2)
        data.addressArray[1] = ['自习室', '2楼', '3楼', '4楼', '5楼'];
      else if (data.addressIndex[0] == 3)
        data.addressArray[1] = ['1楼', '2楼', '3楼', '4楼', '5楼'];
      else if (data.addressIndex[0] == 4)
        data.addressArray[1] = ['1楼', '2楼', '3楼', '4楼', '5楼'];
      data.addressIndex[1] = 0;
    }
    this.setData(data);
  },

  saveAddress: function (e) {
    var consignee = e.detail.value.consignee;
    var mobile = e.detail.value.mobile;
    var address_first = e.detail.value.address_first;
    var address_second = e.detail.value.address_second;
    var detailed_address = e.detail.value.detailed_address;

    console.log(consignee + '，' + mobile + '，' + address_first + address_second + detailed_address);

    var isValidMobile = this.data.isValidMobile;
    if (!isValidMobile) {
      wx.showModal({
        title: '提示',
        content: '请输入正确格式的手机号码',
        showCancel: false,
        success(res) {
          console.log(res.confirm)
        }
      })
    } else {
      var addr = {
        consignee_name: consignee,
        phone: mobile,
        address: address_first + ' ' + address_second + ' ' + detailed_address,
        openID: app.globalData.openid
      }
      
      wx.request({
        url: 'http://192.168.137.132:8000/addAddr',
        method: 'POST',
        data: addr,
        header: {
          'content-type': 'application/json' // 默认值
        },
        success(res) {
          console.log(res)
        }
      });

      wx.navigateBack({
        
      })
    }
  }
})