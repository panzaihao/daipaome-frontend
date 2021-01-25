//set.js
//获取应用实例
const app = getApp()

Page({
  data: {
    avatar: '',
    userInfo: {},
    setting: 0,
    nickname: '',
    phone: '',
    sex: [{name: "女" , value: 0, checked: false} , {name: "男" , value: 1, checked: false}],
    index: null,
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
      this.setData({
        nickname: e.detail.value.trim()
      })
      console.log(this.data.nickname)
  },
  setSex: function(e){
    console.log(e)
    this.setData({
      index:e.detail.value
    })
  },
  setphone: function(e){
    console.log(e)
    // 确保输入的电话号码是11位的
    if(e.detail.value.length == 11){
      this.setData({
        phone: e.detail.value,
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
        if(this.data.nickname != ''){
          wx.showToast({
            title: '修改成功！',
            icon: 'success',
            duration: 2000
          })
          console.log(e)
          this.setData({
            nickname: '',
          })
          /*wx.request({
            url: 'url',
          })*/
          wx.navigateBack()
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
          setTimeout(2000,wx.navigateBack({
            delta: 0,
          }))
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
