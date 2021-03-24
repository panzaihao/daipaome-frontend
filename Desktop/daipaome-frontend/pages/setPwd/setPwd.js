// pages/setPwd/setPwd.js
const md5 = require('../../utils/md5');
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    IspasswordVaild: true,
    IspwdSome: true,            //判断两次输入的密码是否相同
    prePwd: '',
    inputPre: '',
    pwd:"",
    encryptPwd: '',
    comPwd: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://'+app.globalData.backend_server+'/getPrePwd',
      method: 'GET',
      data: {
        openid: app.globalData.openid
      },
      success(res) {
        console.log(res.data.password)
        that.setData({
          prePwd: res.data.password
        })
      },
      fail(err){

      }
    })
  },

  setpwd: function(e){
    var password = e.detail.value
    let encryptPwd = md5(password)
    console.log(encryptPwd)
    if(password.length > 6 && password.length < 20){
      this.setData({
        pwd: password,
        encryptPwd: encryptPwd,
        IspasswordVaild: true
      })
    }
    else{
      this.setData({
        IspasswordVaild: false
      })
    }
  },

  compwd: function(e){
    var compassword = e.detail.value;
    console.log(e)
    if(compassword === this.data.pwd && this.data.pwd != '' ){
      this.setData({
        IspwdSome: true
      })
    }
    else if(compassword !== this.data.pwd){
      this.setData({
        IspwdSome: false
      })
    }
    console.log(this.data.IspwdSome)
  },

  inputPrePwd: function(e){
    this.setData({
      inputPre: e.detail.value
    })
  },
  submit: function(e){
    var prePwd = this.data.prePwd
    if(this.data.IspwdSome && this.data.IspasswordVaild && ((prePwd === md5(this.data.inputPre)) || this.data.inputPre === '')){
      wx.request({
        url: 'http://'+app.globalData.backend_server+'/setPwd',
        method: 'POST',
        header: {
          "Content-Type": "application/json",
          "Authorization": wx.getStorageSync("token"),
        },
        data: {
          openid: app.globalData.openid,
          encryptPwd: this.data.encryptPwd,
        },
        success(res){
          wx.showToast({
            title: '修改成功！',
            icon: 'success',
            duration: 2000
          })
          wx.navigateBack({
            delta: 0,
          })
        },
        fail(err){
          console.log(err)
        }
      })
    } else if(!this.data.IspwdSome){
      wx.showModal({
        title: '提示',
        content: '请输入两个相同的密码',
        showCancel: false,
        success(res){
          console.log(res.confirm)
        }
      })
    } else if(!this.data.IspasswordVaild){
      wx.showModal({
        title: '提示',
        content: '请输入有效格式的密码',
        showCancel: false,
        success(res){
          console.log(res.confirm)
        }
      })
    } else if(prePwd !== md5(this.data.inputPre)){
      wx.showModal({
        title: '提示',
        content: '输入的原密码有误！',
        showCancel: false,
        success(res){
          console.log(res.confirm)
        }
      })
    }
  }
})