import GoEasyIM from 'IM/goeasy-im-1.5.1.js'

App({
  onLaunch: function () {
    wx.im = GoEasyIM.getInstance({
      host: 'hangzhou.goeasy.io',
      appkey: 'BC-c62d16c61fac4b87948ff0f7b0e280d1'
    })
    wx.GoEasyIM = GoEasyIM

    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        // env: 'my-env-id',
        traceUser: true,
      })
    }
  },

  formatDate: function (time) {
    const date = new Date(time);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    return [month, day].map(this.formatNumber).join('-') + ' ' + [hour, minute].map(this.formatNumber).join(':');
  },

  formatNumber: function (n) {
    n = n.toString();
    return n[1] ? n : '0' + n;
  },

  globalData: {
    userInfo: null,
    openid: "",
    avatatUrl: '',
    nickName: '',
    user: {},
    imService: null,
    backend_server: '192.168.137.132:8000',
  },
});