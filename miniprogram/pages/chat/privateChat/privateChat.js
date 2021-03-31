const app = getApp()

Page({
  data: {
    content: '',
    friend: null,
    currentUser: null,
    messages: [],
    // false展示输入框，true显示录音按钮
    recordVisible: false,
    // 历史消息加载完成标识
    allHistoryLoaded: false,
    // 更多按钮
    more: {
      show: false
    },
    imService: null
  },

  onPullDownRefresh() {
    this.loadMoreHistoryMessage()
  },

  onLoad: function (options) {
    let friend = null
    let friendId = options.to
    console.log(friendId)
    var that = this
    wx.request({
      url: 'http://49.232.162.117:8000/getInfoByOpenID',
      method: 'GET',
      data: {
        openID: friendId
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res)
        
        var data = res.data
        console.log(data,friendId)
        if (res.statusCode == 201) {
          friend = {
            uuid: friendId,
            name: data.nickName,
            avatar: data.avatar
          }
          that.setData({
            friend:friend
          })
        }
      }
    })

    let imService = app.globalData.imService
    let currentUser = imService.currentUser
    
    // let friend = {
    //   uuid: 'onmlJ4wuwZZmTaeIdvTHwhQN8GAA',
    //   name: '阳妈',
    //   avatar: 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKjrq8whz1ibibkwXmjxIaRGRLq10HJ7dpl9bHeeUjdLbtrycIAiatnlpTrpaKsKnUZicByedLaqTvEGA/132'
    // }
    
    this.setData({
      friend: friend,
      imService: imService,
      currentUser: currentUser,
    })

    // 获取消息
    let messages = this.data.imService.getPrivateMessages(friendId)
    // 消息间隔5分钟显示时间
    console.log(messages)
    this.renderMessages(messages)
    this.scrollToBottom()
    // 收到的消息设置为已读
    if (this.data.messages.length !== 0) {
      this.markPrivateMessageAsRead(friendId);
    }

    // 传入监听器，收到一条私聊消息总是滚动到页面底部
    this.data.imService.onNewPrivateMessageReceive = (friendId, message) => {
      if (friendId === this.data.friend.uuid) {
        this.renderMessages(this.data.messages);
        this.scrollToBottom();
        this.markPrivateMessageAsRead(friendId);
      }
    }
  },

  onUnload() {
    // 退出聊天页面之前，清空页面传入的监听器
    if (this.data.imService) {
      this.data.imService.onNewPrivateMessageReceive = (friendId, message) => {};
    }
  },

  onRecordStop(res) {
    // 发送语音
    let audioMessage = wx.im.createAudioMessage({
      to: {
        id: this.data.friend.uuid,
        type: wx.GoEasyIM.SCENE.PRIVATE,
        data: {
          name: this.data.friend.name,
          avatar: this.data.friend.avatar
        }
      },
      file: res.detail,
      onProgress: function (progress) {
        console.log(progress)
      }
    });
    this.sendMessage(audioMessage);
  },

  sendTextMessage() {
    if (this.data.content.trim() !== '') {
      console.log(this.data.friend)
      let textMessage = wx.im.createTextMessage({
        text: this.data.content,
        
        to: {
          id: this.data.friend.uuid,
          type: wx.GoEasyIM.SCENE.PRIVATE,
          data: {
            name: this.data.friend.name,
            avatar: this.data.friend.avatar
          }
        }
      });
      this.sendMessage(textMessage);
      wx.hideKeyboard() // 收起键盘
    }
    this.setData({
      content: ""
    });
  },

  sendImage() {
    let self = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        self.setData({
          ["more.show"]: false
        })
        let imageMessage = wx.im.createImageMessage({
          to: {
            id: self.data.friend.uuid,
            type: wx.GoEasyIM.SCENE.PRIVATE,
            data: {
              name: self.data.friend.name,
              avatar: self.data.friend.avatar
            }
          },
          file: res,
          onProgress: function (progress) {
            console.log(progress)
          }
        });
        self.sendMessage(imageMessage);
      }
    });
  },

  sendVideo() {
    let self = this;
    wx.chooseVideo({
      sourceType: ['album', 'camera'],
      maxDuration: 60,
      camera: 'back',
      success(res) {
        let videoMessage = wx.im.createVideoMessage({
          to: {
            id: self.data.friend.uuid,
            type: wx.GoEasyIM.SCENE.PRIVATE,
            data: {
              name: self.data.friend.name,
              avatar: self.data.friend.avatar
            }
          },
          file: res,
          onProgress: function (progress) {
            console.log(progress)
          }
        });
        self.sendMessage(videoMessage);
      }
    })
  },

  sendMessage(message) {
    let self = this
    this.data.messages.push(message)
    this.renderMessages(this.data.messages)
    this.scrollToBottom()

    let promise = wx.im.sendMessage(message)
    promise.then((res) => {
        console.log('发送消息成功')
        self.renderMessages(self.data.messages)
      })
      .catch(e => {
        console.log('发送失败', e)
      })
  },

  // 历史消息
  loadMoreHistoryMessage() {
    let friendId = this.data.friend.uuid
    let lastMessageTimeStamp = Date.now()
    let lastMessage = this.data.messages[0]

    if (lastMessage) {
      lastMessageTimeStamp = lastMessage.timestamp;
    }

    let currentLength = this.data.messages.length
    let promise = app.globalData.imService.loadPrivateHistoryMessage(friendId, lastMessageTimeStamp)

    promise.then(messages => {
      if (messages.length === currentLength) {
        this.setData({
          allHistoryLoaded: true
        })
      }
      this.renderMessages(this.data.messages)
      wx.stopPullDownRefresh()
    }).catch(e => {
      console.log(e)
      wx.stopPullDownRefresh()
    })
  },

  renderMessages(messages) {
    messages.forEach((message, index) => {
      if (index === 0) {
        message.showTime = app.formatDate(message.timestamp);
      } else {
        if (message.timestamp - messages[index - 1].timestamp > 5 * 60 * 1000) {
          message.showTime = app.formatDate(message.timestamp);
        }
      }

      // if (message.type === 'text') {
      //   message.node = text
      // }
    })

    this.setData({
      messages: messages
    })
  },

  markPrivateMessageAsRead(friendId) {
    wx.im.markPrivateMessageAsRead(friendId)
      .then(() => {
        console.log('标记为已读成功')
      })
      .catch(e => {
        console.log('标记为已读失败', e)
      })
  },

  setContent(e) {
    // 监听输入的消息
    let content = e.detail.value;
    this.setData({
      content: content
    });
  },

  switchAudioKeyboard() {
    // 语音录制按钮和键盘输入的切换
    this.setData({
      recordVisible: !this.data.recordVisible
    });
    if (this.data.more.show) {
      this.setData({
        ["more.show"]: false,
      });
    }
    if (this.data.recordVisible) {
      // 录音授权
      wx.authorize({
        scope: 'scope.record',
        success() {}
      });
    }
  },

  playVideo(e) {
    // 播放视频
    this.selectComponent("#videoPlayer").play({
      url: e.currentTarget.dataset.url,
      duration: e.currentTarget.dataset.duration
    })
  },

  previewImage(event) {
    // 预览图片
    let imagesUrl = [event.currentTarget.dataset.src];
    wx.previewImage({
      urls: imagesUrl // 需要预览的图片http链接列表
    })
  },

  messageInputFocusin() {
    this.setData({
      ["more.show"]: false
    });
  },

  showMore() {
    this.setData({
      ["more.show"]: true,
    });
    // 关闭手机键盘
    wx.hideKeyboard();
  },

  // 滑动到最底部
  scrollToBottom() {
    wx.pageScrollTo({
      scrollTop: 200000,
      duration: 10
    })
  }
})