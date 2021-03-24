/*
 * @Author: jack.lu
 * @Date: 2020-4-21 10:10:20
 * @Last Modified by: jack.lu
 * @Last Modified time: 2020-4-21 15:01:41
 */

import GoEasyIM from './goeasy-im-1.5.1';
import restApi from './restapi';

function Friend(uuid, name, avatar) {
    this.uuid = uuid;
    this.name = name;
    this.avatar = avatar;
}

function Group(uuid, name, avatar) {
    this.uuid = uuid;
    this.name = name;
    this.avatar = avatar;
}

function CurrentUser(uuid, name, avatar) {
    this.uuid = uuid;
    this.name = name;
    this.avatar = avatar;
}

function IMService(im) {
    this.im = im;
    //当前“我”
    this.currentUser = null;

    //私聊消息记录，map格式，每个好友对应一个数组
    this.privateMessages = {};

    //群聊消息记录，map格式，每个群对应一个数组
    this.groupMessages = {};

    /*
     * 监听器们
     *
     * 可以在页面里，根据需求，重写以下监听器，
     * 便于当各种事件触发时，页面能够执行对应的响应
     *
     */
    //收到一条私聊消息
    this.onNewPrivateMessageReceive = function (friendId, message) {};
    //收到一条群聊消息
    this.onNewGroupMessageReceive = function (groupId, message) {};
}

//获取群成员
IMService.prototype.getGroupMembers = function (groupId) {
    let members = restApi.findGroupMembers(groupId);
    let membersMap = {};
    members.map(item => {
        membersMap[item.uuid] = item
    });
    return membersMap;
};

IMService.prototype.findGroupById = function (groupId) {
    let group = restApi.findGroupById(groupId);
    return new Group(group.uuid, group.name, group.avatar);
};

IMService.prototype.getGroupMessages = function (groupId) {
    if (!this.groupMessages[groupId]) {
        this.groupMessages[groupId] = [];
    }
    return this.groupMessages[groupId]
};

IMService.prototype.findFriendById = function (userId) {
    let user = restApi.findUserById(userId);
    return new Friend(user.uuid, user.name, user.avatar);
};

IMService.prototype.getPrivateMessages = function (friendId) {
    if (!this.privateMessages[friendId]) {
        this.privateMessages[friendId] = [];
    }
    return this.privateMessages[friendId]
};

//连接GoEasy
IMService.prototype.connectIM = function (currentUser) {
    this.currentUser = currentUser;
    //初始化IM相关的监听器
    this.initialIMListeners();
    this.im.connect({
        id: this.currentUser.uuid,
        data: {
            avatar: this.currentUser.avatar,
            name: this.currentUser.name
        }
    }).then(() => {
        console.log('connect成功')
    }).catch(error => {
        console.log('connect失败,请确保网络正常，appkey和host正确，code:' + error.code + " content:" + error.content);
    });
    this.subscribeGroupMessage();
};

IMService.prototype.subscribeGroupMessage = function () {
    let groups = restApi.findGroups(this.currentUser);
    let groupIds = groups.map(item => item.uuid);
    this.im.subscribeGroup(groupIds)
        .then(() => {
            console.log('订阅群消息成功')
        })
        .catch(error => {
            console.log('订阅群消息失败')
            console.log(error)
        })
}

//IM监听
IMService.prototype.initialIMListeners = function () {
    this.im.on(GoEasyIM.EVENT.CONNECTED, () => {
        console.log('连接成功.')
    });

    this.im.on(GoEasyIM.EVENT.DISCONNECTED, () => {
        console.log('连接断开.')
    });

    this.im.on(GoEasyIM.EVENT.CONNECTING, (times) => {
        console.log('连接中', times);
    });

    //监听私聊消息
    this.im.on(GoEasyIM.EVENT.PRIVATE_MESSAGE_RECEIVED, (message) => {
        //更新私聊消息记录
        let friendId;
        if (this.currentUser.uuid == message.senderId) {
            friendId = message.receiverId;
        } else {
            friendId = message.senderId;
        }
        let friendMessages = this.getPrivateMessages(friendId);
        friendMessages.push(message);
        //如果页面传入了相应的listener，执行listener
        this.onNewPrivateMessageReceive(friendId, message);
    });

    //监听群聊消息
    this.im.on(GoEasyIM.EVENT.GROUP_MESSAGE_RECEIVED, (message) => {
        let groupId = message.groupId;

        //更新群聊消息记录
        let groupMessages = this.getGroupMessages(groupId);
        groupMessages.push(message);

        //如果页面传入了相应的listener，执行listener
        this.onNewGroupMessageReceive(groupId, message);
    })
};

//加载单聊历史消息
IMService.prototype.loadPrivateHistoryMessage = function (friendId, timeStamp) {
    return new Promise((resolve, reject) => {
        this.im.history({
            friendId: friendId,
            lastTimestamp: timeStamp,
            limit: 5
        }).then(result => {
            let history = result.content;
            let friendMessages = this.getPrivateMessages(friendId);
            for (let i = history.length - 1; i >=0; i--) {
                friendMessages.unshift(history[i])
            }
            resolve(friendMessages)
        }).catch(error => {
            if (error.code == 401) {
                console.log("您尚未开通历史消息，请登录GoEasy，查看应用详情里自助启用.");
            }
            reject(error)
        });
    })
};

//群聊历史消息
IMService.prototype.loadGroupHistoryMessage = function (groupId, timeStamp) {
    return new Promise((resolve, reject) => {
        this.im.history({
            groupId: groupId,
            lastTimestamp: timeStamp
        }).then(result => {
            let history = result.content;
            let chatMessage = this.getGroupMessages(groupId);
            for (let i = history.length - 1; i >= 0; i--) {
                chatMessage.unshift(history[i]);
            }
            resolve(chatMessage)
        }).catch(error => {
            if (error.code == 401) {
                console.log("您尚未开通历史消息，请登录GoEasy，查看应用详情里自助启用.");
            }
            reject(error)
        });
    })
};

export default IMService;