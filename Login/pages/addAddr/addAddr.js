var addressList = null;

Page({
  data: {
    sexIndex: 0,
    sexArray: ['男', '女', '未知'],
    addressIndex: [0, 0],
    addressArray: [
      ['雁南园', '雁北园'],
      ['s1', 's2', 's3', 's4']
    ]
  },

  bindSexChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      sexIndex: e.detail.value
    })
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
      data.addressIndex[1] = 0;
    }
    this.setData(data);
  },

  saveAddress: function (e) {
    var consignee = e.detail.value.consignee;
    var sex = e.detail.value.sex;
    var mobile = e.detail.value.mobile;
    var address_garden = e.detail.value.address_garden;
    var address_building = e.detail.value.address_building;
    var dormitory = e.detail.value.dormitory;

    console.log(consignee + '，' + sex + '，' + address_garden + address_building + dormitory);

    var arr = wx.getStorageSync('addressList') || [];
    addressList = {
      consignee: consignee,
      mobile: mobile,
      address: address_garden + ' ' + address_building + ' ' + dormitory
    }
    arr.push(addressList);
    wx.setStorageSync('addressList', arr);
    wx.navigateBack({

    })
  }
})