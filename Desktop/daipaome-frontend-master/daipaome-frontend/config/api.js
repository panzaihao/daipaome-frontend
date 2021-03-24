const app = getApp()
const urlPath = "http://"+app.globalData.backend_server+"/login/users"

module.exports = {
  AuthLogin: urlPath , // 微信登录
};
