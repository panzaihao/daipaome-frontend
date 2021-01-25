const app = getApp()
const urlPath = "http://"+app.globalData.backend_server+"/login/users";

module.exports = {
  //UserAdd: urlPath + "user/add", //保存用户信息
  AuthLogin: urlPath , //微信登录
  //AuthUserInfo: urlPath + "user/userInfo", //微信登录
};
