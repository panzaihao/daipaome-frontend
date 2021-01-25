//set.js
//获取应用实例
const app = getApp()

Page({
  data: {
    avatar: '',
    setting: 0,
    IsphoneVaild: true
  },
  onLoad: function () {
    var setting = 0;
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', function(data) {
      console.log(data.setting)
      setting = data.setting
    })
    this.setData({
      setting: setting
    })
  },

  setNickname: function(e){
    console.log(e)
    app.globalData.nickname = e.detail.value
  },
  setSex: function(e){
    console.log(e)
    app.globalData.sex = e.detail.value == 1 ? '男' : '女'
  },
  setphone: function(e){
    console.log(e)
    // 确保输入的电话号码是11位的
    if(e.detail.value.length == 11){
      app.globalData.phone = e.detail.value
      this.setData({
        IsphoneVaild: true
      })
    }
    else{
      this.setData({
       IsphoneVaild: false
      })
    }
  },

  submit: function(e){
    switch(this.data.setting){
      case 2:
        if(app.globalData.nickname != ''){
          wx.showToast({
            title: '修改成功！',
            icon: 'success',
            duration: 2000
          })
          console.log(e)
          wx.navigateBack({
            delta: 0
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '请输入正确的昵称',
            showCancel: false,
            success(res){
              console.log(res.confirm)
            }
          })
        }
        break;
        case 3 :
          wx.showToast({
            title: '修改成功！',
            icon: 'success',
            duration: 2000
          })
          wx.navigateBack({
            delta: 0,
          })
        break;
        case 4:
          if(this.data.IsphoneVaild){
            wx.showToast({
              title: '修改成功！',
              icon: 'success',
              duration: 2000
            })
           wx.navigateBack({
              delta: 0,
            })
          } else {
            wx.showModal({
              title: '提示',
              content: '请输入正确的手机号码',
              showCancel: false,
              success(res){
                console.log(res.confirm)
              }
            })
          }
          break;
    }
  }
})
