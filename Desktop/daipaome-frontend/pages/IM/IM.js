const app = getApp()
import IMService from '../../IM/imservice'

Page({
  data: {
    conversations: [],
    action: {
      conversation: null,
      show: false,
      toastMessage: '',
      showToast: false
    }
  },

  onShow() {
    let currentUser = app.globalData.user

    wx.showLoading({
      title: '加载中',
    })

    // 监听会话列表变化
    let self = this
    wx.im.on(wx.GoEasyIM.EVENT.CONVERSATIONS_UPDATED, (conversations) => {
      self.setConversations(conversations)
    })

    // 加载会话列表
    wx.im.latestConversations()
      .then(res => {
        let content = res.content;
        self.setConversations(content);
        wx.hideLoading();
      })
      .catch(e => {
        console.log(e);
        wx.hideLoading();
      });
  },

  onHide() {
    // 销毁conversation监听器
    wx.im.on(wx.GoEasyIM.EVENT.CONVERSATIONS_UPDATED, (conversations) => {});
  },

  setConversations(conversations) {
    conversations.conversations && conversations.conversations.map((item) => {
      // 格式化时间
      item.lastMessage.date = app.formatDate(item.lastMessage.timestamp)
    })
    console.log(conversations)
    this.setData({
      conversations: conversations.conversations
    })

    this.setUnreadAmount(conversations.unreadTotal)
  },

  setUnreadAmount(unreadTotal) {
    if (unreadTotal > 0) {
      wx.setTabBarBadge({
        index: 2,
        text: unreadTotal.toString()
      });
    } else {
      wx.hideTabBarRedDot({
        index: 0
      });
    }
  },

  navigateToChat(e) {
    let conversation = e.currentTarget.dataset.conversation;
    let path = conversation.type === wx.GoEasyIM.SCENE.PRIVATE ?
      '../chat/privateChat/privateChat?to=' + conversation.userId :
      '../chat/groupChat/groupChat?to=' + conversation.groupId;
    wx.navigateTo({
      url: path
    });
  },

  showAction(e) {
    let conversation = e.currentTarget.dataset.conversation;
    this.setData({
      ["action.conversation"]: conversation,
      ["action.show"]: true
    });
  },

  topConversation() {
    let conversation = this.data.action.conversation;
    let title = conversation.top ? '取消置顶失败' : '置顶失败';
    let promise;
    wx.showLoading({
      title: ""
    });
    if (conversation.type === wx.GoEasyIM.SCENE.PRIVATE) {
      promise = wx.im.topPrivateConversation(conversation.userId, !conversation.top)
    } else {
      promise = wx.im.topGroupConversation(conversation.groupId, !conversation.top)
    }
    this.afterDoAction(promise, title)
  },

  removeConversation() {
    wx.showLoading({
      title: "删除中"
    });
    let conversation = this.data.action.conversation;
    let promise;
    if (conversation.type === wx.GoEasyIM.SCENE.PRIVATE) {
      promise = wx.im.removePrivateConversation(conversation.userId);
    } else {
      promise = wx.im.removeGroupConversation(conversation.groupId);
    }
    this.afterDoAction(promise, '删除失败')
  },

  afterDoAction(promise, failedDescription) {
    promise.then(() => {
      wx.hideLoading()
    }).catch(() => {
      let self = this;
      wx.hideLoading();
      this.setData({
        ["action.showToast"]: true,
        ["action.toastMessage"]: failedDescription,
      });
      setTimeout(() => {
        self.setData({
          ["action.showToast"]: false
        });
      }, 2000);
    });
    this.setData({
      ["action.show"]: false
    })
  },

  // 关闭弹窗
  closeMask() {
    this.setData({
      ["action.show"]: false
    })
  },
})