! function (e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.GoEasyIM = t() : e.GoEasyIM = t()
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function n(o) {
      if (t[o]) return t[o].exports;
      var r = t[o] = {
        i: o,
        l: !1,
        exports: {}
      };
      return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }
    return n.m = e, n.c = t, n.d = function (e, t, o) {
      n.o(e, t) || Object.defineProperty(e, t, {
        configurable: !1,
        enumerable: !0,
        get: o
      })
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e["default"]
      } : function () {
        return e
      };
      return n.d(t, "a", t), t
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 120)
  }([function (e, t, n) {
    "use strict";
    t.__esModule = !0, t["default"] = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }
  }, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var o, r = n(127),
      i = (o = r) && o.__esModule ? o : {
        "default": o
      };
    t["default"] = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), (0, i["default"])(e, o.key, o)
        }
      }
      return function (t, n, o) {
        return n && e(t.prototype, n), o && e(t, o), t
      }
    }()
  }, function (e, t, n) {
    e.exports = {
      "default": n(152),
      __esModule: !0
    }
  }, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var o, r = n(20),
      i = (o = r) && o.__esModule ? o : {
        "default": o
      };
    t["default"] = function (e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" !== (void 0 === t ? "undefined" : (0, i["default"])(t)) && "function" != typeof t ? e : t
    }
  }, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var o = s(n(154)),
      r = s(n(16)),
      i = s(n(20));

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    t["default"] = function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, i["default"])(t)));
      e.prototype = (0, r["default"])(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (o["default"] ? (0, o["default"])(e, t) : e.__proto__ = t)
    }
  }, function (e, t, n) {
    e.exports = {
      "default": n(160),
      __esModule: !0
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.noop = t.GoEasyDomainNumber = t.env = t.goEasyArray = t.UUID = t.calibrator = undefined;
    var o = n(85),
      r = n(147),
      i = n(151),
      s = n(93),
      a = n(94);
    t.calibrator = o.calibrator, t.UUID = r.UUID, t.goEasyArray = i.goEasyArray, t.env = s.env, t.GoEasyDomainNumber = a.GoEasyDomainNumber, t.noop = function () {}
  }, function (e, t) {
    var n = e.exports = {
      version: "2.6.12"
    };
    "number" == typeof __e && (__e = n)
  }, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var o = i(n(2)),
      r = i(n(183));

    function i(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    t["default"] = function s(e, t, n) {
      null === e && (e = Function.prototype);
      var i = (0, r["default"])(e, t);
      if (i === undefined) {
        var a = (0, o["default"])(e);
        return null === a ? undefined : s(a, t, n)
      }
      if ("value" in i) return i.value;
      var u = i.get;
      return u === undefined ? undefined : u.call(n)
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t["default"] = {
      "default": "default",
      text: "text",
      image: "image",
      video: "video",
      audio: "audio",
      emoji: "emoji",
      file: "file"
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t["default"] = {
      WRITE: "WRITE",
      READ: "READ",
      NONE: "NONE"
    }
  }, function (e, t) {
    var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
    "number" == typeof __g && (__g = n)
  }, function (e, t, n) {
    var o = n(61)("wks"),
      r = n(45),
      i = n(11).Symbol,
      s = "function" == typeof i;
    (e.exports = function (e) {
      return o[e] || (o[e] = s && i[e] || (s ? i : r)("Symbol." + e))
    }).store = o
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = a(n(0)),
      r = a(n(1)),
      i = n(6),
      s = a(n(10));

    function a(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var u = function () {
      function e(t) {
        var n = this;
        (0, o["default"])(this, e), this.uuid = null, this.name = "", this.params = null, this.success = null, this.fail = null, this.permission = s["default"].NONE, this.singleTimeout = 0, this.totalTimeout = 0, this.startTime = 0, this.complete = !1, this.retried = 0, this.uuid = i.UUID.get(), this.name = t.name, this.params = t.params, this.permission = t.permission, this.totalTimeout = t.totalTimeout, this.singleTimeout = t.singleTimeout, this.success = function (e) {
          n.complete || (n.complete = !0, t.success(e))
        }, this.fail = function (e) {
          n.complete || (n.complete = !0, t.fail(e))
        }
      }
      return (0, r["default"])(e, [{
        key: "start",
        value: function () {
          this.startTime = Date.now()
        }
      }, {
        key: "isTimeout",
        value: function () {
          return this.startTime + this.totalTimeout < Date.now()
        }
      }]), e
    }();
    t["default"] = u
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.EmitType = {
      authorize: "authorize",
      manualDisconnect: "manualDisconnect",
      subscribe: "subscribe",
      unsubscribe: "unsubscribe",
      publish: "publish",
      ack: "ack",
      historyMessages: "historyMessages",
      hereNow: "hereNow",
      hereNowByUserIds: "hereNowByUserIds",
      imLastConversations: "imLastConversations",
      markPrivateMessageAsRead: "markPrivateMessageAsRead",
      markGroupMessageAsRead: "markGroupMessageAsRead",
      imGroupOnlineCount: "imGroupOnlineCount",
      imHereNow: "imHereNow",
      imGroupHereNow: "imGroupHereNow",
      publishIM: "publishIM",
      imHistory: "imHistory",
      subscribeUserPresence: "subscribeUserPresence",
      unsubscribeUserPresence: "unsubscribeUserPresence",
      subscribeGroupPresence: "subscribeGroupPresence",
      unsubscribeGroupPresence: "unsubscribeGroupPresence",
      removeConversation: "removeConversation",
      topConversation: "topConversation",
      imData: "imData",
      subscribeGroups: "subscribeGroups",
      unsubscribeGroup: "unsubscribeGroup"
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.str = t.noop = t.GoEasyDomainNumber = t.env = t.goEasyArray = t.UUID = t.calibrator = undefined;
    var o = n(181),
      r = n(6);
    t.calibrator = r.calibrator, t.UUID = r.UUID, t.goEasyArray = r.goEasyArray, t.env = r.env, t.GoEasyDomainNumber = r.GoEasyDomainNumber, t.noop = r.noop, t.str = o.str
  }, function (e, t, n) {
    e.exports = {
      "default": n(122),
      __esModule: !0
    }
  }, function (e, t, n) {
    var o = n(11),
      r = n(7),
      i = n(33),
      s = n(27),
      a = n(28),
      u = function (e, t, n) {
        var c, l, f, d = e & u.F,
          p = e & u.G,
          h = e & u.S,
          y = e & u.P,
          v = e & u.B,
          m = e & u.W,
          g = p ? r : r[t] || (r[t] = {}),
          b = g.prototype,
          _ = p ? o : h ? o[t] : (o[t] || {}).prototype;
        for (c in p && (n = t), n)(l = !d && _ && _[c] !== undefined) && a(g, c) || (f = l ? _[c] : n[c], g[c] = p && "function" != typeof _[c] ? n[c] : v && l ? i(f, o) : m && _[c] == f ? function (e) {
          var t = function (t, n, o) {
            if (this instanceof e) {
              switch (arguments.length) {
                case 0:
                  return new e;
                case 1:
                  return new e(t);
                case 2:
                  return new e(t, n)
              }
              return new e(t, n, o)
            }
            return e.apply(this, arguments)
          };
          return t.prototype = e.prototype, t
        }(f) : y && "function" == typeof f ? i(Function.call, f) : f, y && ((g.virtual || (g.virtual = {}))[c] = f, e & u.R && b && !b[c] && s(b, c, f)))
      };
    u.F = 1, u.G = 2, u.S = 4, u.P = 8, u.B = 16, u.W = 32, u.U = 64, u.R = 128, e.exports = u
  }, function (e, t, n) {
    var o = n(23);
    e.exports = function (e) {
      if (!o(e)) throw TypeError(e + " is not an object!");
      return e
    }
  }, function (e, t, n) {
    e.exports = !n(30)(function () {
      return 7 != Object.defineProperty({}, "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, function (e, t, n) {
    "use strict";
    t.__esModule = !0;
    var o = s(n(131)),
      r = s(n(138)),
      i = "function" == typeof r["default"] && "symbol" == typeof o["default"] ? function (e) {
        return typeof e
      } : function (e) {
        return e && "function" == typeof r["default"] && e.constructor === r["default"] && e !== r["default"].prototype ? "symbol" : typeof e
      };

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    t["default"] = "function" == typeof r["default"] && "symbol" === i(o["default"]) ? function (e) {
      return void 0 === e ? "undefined" : i(e)
    } : function (e) {
      return e && "function" == typeof r["default"] && e.constructor === r["default"] && e !== r["default"].prototype ? "symbol" : void 0 === e ? "undefined" : i(e)
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.SocketTimeout = {
      connect: 1500,
      reconnectionDelayMax: 3e3,
      commonQuerySingle: 2500,
      commonQueryTotal: 12e3,
      commonRequestSingle: 1700,
      commonRequestTotal: 12e3,
      commonInfiniteSingle: 1700,
      commonInfiniteTotal: 864e5
    }
  }, function (e, t, n) {
    var o = n(18),
      r = n(79),
      i = n(56),
      s = Object.defineProperty;
    t.f = n(19) ? Object.defineProperty : function (e, t, n) {
      if (o(e), t = i(t, !0), o(n), r) try {
        return s(e, t, n)
      } catch (a) {}
      if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
      return "value" in n && (e[t] = n.value), e
    }
  }, function (e, t) {
    e.exports = function (e) {
      return "object" == typeof e ? null !== e : "function" == typeof e
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ImEventType = t.eventCenter = undefined;
    var o = n(130),
      r = n(84);
    t.eventCenter = o.eventCenter, t.ImEventType = r.ImEventType
  }, function (e, t, n) {
    e.exports = {
      "default": n(175),
      __esModule: !0
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Conversion = t.ConversationType = t.Conversations = undefined;
    var o = n(100),
      r = n(69),
      i = n(176);
    t.Conversations = i.Conversations, t.ConversationType = r.ConversationType, t.Conversion = o.Conversion
  }, function (e, t, n) {
    var o = n(22),
      r = n(44);
    e.exports = n(19) ? function (e, t, n) {
      return o.f(e, t, r(1, n))
    } : function (e, t, n) {
      return e[t] = n, e
    }
  }, function (e, t) {
    var n = {}.hasOwnProperty;
    e.exports = function (e, t) {
      return n.call(e, t)
    }
  }, function (e, t, n) {
    var o = n(81),
      r = n(58);
    e.exports = function (e) {
      return o(r(e))
    }
  }, function (e, t) {
    e.exports = function (e) {
      try {
        return !!e()
      } catch (t) {
        return !0
      }
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.SocketTimeout = t.IMTimeout = undefined;
    var o = n(21);
    t.IMTimeout = {};
    t.SocketTimeout = o.SocketTimeout
  }, function (e, t, n) {
    "use strict";
    var o = n(212),
      r = n(213),
      i = n(215),
      s = n(216);
    "undefined" != typeof navigator && /Android/i.test(navigator.userAgent), "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent);
    t.protocol = 3;
    var a = t.packets = {
        open: 0,
        close: 1,
        ping: 2,
        pong: 3,
        message: 4,
        upgrade: 5,
        noop: 6
      },
      u = o(a),
      c = {
        type: "error",
        data: "parser error"
      },
      l = n(217);
    t.encodePacket = function (e, t, n, o) {
      "function" == typeof t && (o = t, t = !1), "function" == typeof n && (o = n, n = null);
      e.data === undefined ? undefined : e.data.buffer || e.data;
      var r = a[e.type];
      return undefined !== e.data && (r += n ? s.encode(String(e.data), {
        strict: !1
      }) : String(e.data)), o("" + r)
    }, t.decodePacket = function (e, t, n) {
      if (e === undefined) return c;
      if ("string" == typeof e) {
        if (n && !1 === (e = function (e) {
            try {
              e = s.decode(e, {
                strict: !1
              })
            } catch (t) {
              return !1
            }
            return e
          }(e))) return c;
        var o = e.charAt(0);
        return Number(o) == o && u[o] ? e.length > 1 ? {
          type: u[o],
          data: e.substring(1)
        } : {
          type: u[o]
        } : c
      }
      o = new Uint8Array(e)[0];
      var r = sliceBuffer(e, 1);
      return l && "blob" === t && (r = new l([r])), {
        type: u[o],
        data: r
      }
    }, t.encodePayload = function (e, n, o) {
      "function" == typeof n && (o = n, n = null);
      var s = r(e);
      if (!e.length) return o("0:");
      ! function (e, t, n) {
        for (var o = new Array(e.length), r = i(e.length, n), s = function (e, n, r) {
            t(n, function (t, n) {
              o[e] = n, r(t, o)
            })
          }, a = 0; a < e.length; a++) s(a, e[a], r)
      }(e, function (e, o) {
        t.encodePacket(e, !!s && n, !0, function (e) {
          o(null, function (e) {
            return e.length + ":" + e
          }(e))
        })
      }, function (e, t) {
        return o(t.join(""))
      })
    }, t.decodePayload = function (e, n, o) {
      var r;
      if ("function" == typeof n && (o = n, n = null), "" === e) return o(c, 0, 1);
      for (var i, s, a = "", u = 0, l = e.length; u < l; u++) {
        var f = e.charAt(u);
        if (":" === f) {
          if ("" === a || a != (i = Number(a))) return o(c, 0, 1);
          if (a != (s = e.substr(u + 1, i)).length) return o(c, 0, 1);
          if (s.length) {
            if (r = t.decodePacket(s, n, !0), c.type === r.type && c.data === r.data) return o(c, 0, 1);
            if (!1 === o(r, u + i, l)) return
          }
          u += i, a = ""
        } else a += f
      }
      return "" !== a ? o(c, 0, 1) : void 0
    }
  }, function (e, t, n) {
    var o = n(43);
    e.exports = function (e, t, n) {
      if (o(e), t === undefined) return e;
      switch (n) {
        case 1:
          return function (n) {
            return e.call(t, n)
          };
        case 2:
          return function (n, o) {
            return e.call(t, n, o)
          };
        case 3:
          return function (n, o, r) {
            return e.call(t, n, o, r)
          }
      }
      return function () {
        return e.apply(t, arguments)
      }
    }
  }, function (e, t, n) {
    var o = n(80),
      r = n(62);
    e.exports = Object.keys || function (e) {
      return o(e, r)
    }
  }, function (e, t) {
    var n = {}.toString;
    e.exports = function (e) {
      return n.call(e).slice(8, -1)
    }
  }, function (e, t) {
    e.exports = !0
  }, function (e, t) {
    e.exports = {}
  }, function (e, t, n) {
    var o = n(58);
    e.exports = function (e) {
      return Object(o(e))
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = M(n(5)),
      r = M(n(25)),
      i = M(n(0)),
      s = M(n(1)),
      a = n(26),
      u = n(15),
      c = n(24),
      l = n(182),
      f = M(n(9)),
      d = n(21),
      p = M(n(196)),
      h = M(n(230)),
      y = M(n(231)),
      v = M(n(247)),
      m = M(n(117)),
      g = M(n(248)),
      b = M(n(249)),
      _ = M(n(250)),
      C = M(n(251)),
      k = M(n(252)),
      w = M(n(253)),
      E = M(n(254)),
      T = M(n(255)),
      O = M(n(256)),
      S = M(n(41));

    function M(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var P = function () {
      function e(t) {
        (0, i["default"])(this, e), this._appKey = undefined, this._host = undefined, this._supportOldBrowser = !1, this._allowNotification = !1, this._forceTLS = !0, this._event = c.eventCenter, this._goEasyUploader = null, this._connection = null, this._goEasySocket = null, this._dataCache = null, this._messageSender = null, this._history = null, this._conversations = null, this._iMReceiver = null, this._groupMessageReceive = null, this._groupPresenceSubscriber = null, this._groupOnlineCount = null, this._groupHereNow = null, this._privateMessageReceive = null, this._userPresenceSubscriber = null, this._userHereNow = null, this._appKey = t.appkey, this._host = t.host, this._supportOldBrowser = t.supportOldBrowser, this._allowNotification = t.allowNotification, this._forceTLS = t.forceTLS
      }
      return (0, s["default"])(e, [{
        key: "on",
        value: function (e, t) {
          this._event.on(e, t)
        }
      }, {
        key: "initialBeforeConnect",
        value: function (t) {
          var n = this.setUriAndOpts();
          e.userId = t.id, e.userData = t.data, this._goEasySocket = new p["default"]({
            appkey: this._appKey,
            host: this._host,
            userId: t.id,
            userData: (0, r["default"])(t.data),
            otp: t.otp,
            artifactVersion: "1.2.2",
            imVersion: e.version,
            type: "im",
            opts: n.opts,
            uri: n.uri,
            allowNotification: this._allowNotification
          }), this._dataCache = new O["default"](this, t), this._connection = new h["default"](this), this._messageSender = new y["default"](this), this._history = new v["default"](this), this._goEasyUploader = new m["default"](this), this._userHereNow = new w["default"](this), this._groupHereNow = new E["default"](this), this._groupOnlineCount = new _["default"](this)
        }
      }, {
        key: "initialAfterConnect",
        value: function () {
          this._iMReceiver = new T["default"](this), this._conversations = new a.Conversations(this), this._groupPresenceSubscriber = new C["default"](this), this._groupMessageReceive = new g["default"](this), this._userPresenceSubscriber = new k["default"](this), this._privateMessageReceive = new b["default"](this)
        }
      }, {
        key: "connect",
        value: function (e) {
          if (this.getStatus() !== S["default"].DISCONNECTED) return o["default"].reject({
            code: 408,
            content: "IM is connected, don't try again until im.disconnect() is called. "
          });
          if (!u.calibrator.isObject(e)) return o["default"].reject({
            code: 400,
            content: "TypeError: user require an object."
          });
          if (u.calibrator.isEmpty(e.id) || !u.calibrator.isStringOrNumber(e.id)) return o["default"].reject({
            code: 400,
            content: "TypeError: id require number or string."
          });
          if (u.calibrator.isNumber(e.id) && (e.id = e.id.toString()), e.data = u.calibrator.isDef(e.data) ? e.data : {}, (u.calibrator.isObject(e.data) ? (0, r["default"])(e.data).length : e.data.length) > 300) return o["default"].reject({
            code: 400,
            content: "user.data-length limit 300 byte."
          });
          this.initialBeforeConnect(e);
          var t = this._connection.connect(e);
          return this.initialAfterConnect(), t
        }
      }, {
        key: "disconnect",
        value: function () {
          return this._connection.disconnect()
        }
      }, {
        key: "getStatus",
        value: function () {
          return this._goEasySocket ? this._goEasySocket.getStatus() : S["default"].DISCONNECTED
        }
      }, {
        key: "createTextMessage",
        value: function (e) {
          return l.messageCreator.create(f["default"].text, e)
        }
      }, {
        key: "createImageMessage",
        value: function (e) {
          return l.messageCreator.create(f["default"].image, e)
        }
      }, {
        key: "createFileMessage",
        value: function (e) {
          return l.messageCreator.create(f["default"].file, e)
        }
      }, {
        key: "createAudioMessage",
        value: function (e) {
          return l.messageCreator.create(f["default"].audio, e)
        }
      }, {
        key: "createVideoMessage",
        value: function (e) {
          return l.messageCreator.create(f["default"].video, e)
        }
      }, {
        key: "createCustomMessage",
        value: function (e) {
          return l.messageCreator.create(e.type, e)
        }
      }, {
        key: "latestConversations",
        value: function () {
          return this._conversations ? this._conversations.latestConversations() : o["default"].reject({
            code: 500,
            content: "Please connect GoEasyIM first."
          })
        }
      }, {
        key: "groupMarkAsRead",
        value: function (e, t) {
          return this._conversations.groupMarkAsRead(e, t)
        }
      }, {
        key: "privateMarkAsRead",
        value: function (e, t) {
          return this._conversations.privateMarkAsRead(e, t)
        }
      }, {
        key: "removePrivateConversation",
        value: function (e) {
          return this._conversations.removeConversation(e, a.ConversationType.PRIVATE)
        }
      }, {
        key: "removeGroupConversation",
        value: function (e) {
          return this._conversations.removeConversation(e, a.ConversationType.GROUP)
        }
      }, {
        key: "topPrivateConversation",
        value: function (e, t) {
          return this._conversations.topConversation(e, t, a.ConversationType.PRIVATE)
        }
      }, {
        key: "topGroupConversation",
        value: function (e, t) {
          return this._conversations.topConversation(e, t, a.ConversationType.GROUP)
        }
      }, {
        key: "history",
        value: function (e) {
          return this._history.history(e)
        }
      }, {
        key: "upload",
        value: function (e, t, n) {
          return this._goEasyUploader.upload(e, t, n)
        }
      }, {
        key: "sendSystemMessage",
        value: function (e, t) {
          return this._messageSender.send(e, t, a.ConversationType.SYSTEM)
        }
      }, {
        key: "sendMessage",
        value: function (e) {
          return this._messageSender.sendMessage(e)
        }
      }, {
        key: "sendPrivateMessage",
        value: function (e, t) {
          return this._messageSender.send(e, t, a.ConversationType.PRIVATE)
        }
      }, {
        key: "subscribeUserPresence",
        value: function (e) {
          return this._userPresenceSubscriber.presence(e)
        }
      }, {
        key: "unsubscribeUserPresence",
        value: function (e) {
          return this._userPresenceSubscriber.unPresence(e)
        }
      }, {
        key: "hereNow",
        value: function (e) {
          return this._userHereNow.hereNow(e, a.ConversationType.PRIVATE)
        }
      }, {
        key: "sendGroupMessage",
        value: function (e, t) {
          return this._messageSender.send(e, t, a.ConversationType.GROUP)
        }
      }, {
        key: "subscribeGroup",
        value: function (e) {
          return this._groupMessageReceive.subscribe(e)
        }
      }, {
        key: "unsubscribeGroup",
        value: function (e) {
          return this._groupMessageReceive.unsubscribe(e)
        }
      }, {
        key: "subscribeGroupPresence",
        value: function (e) {
          return this._groupPresenceSubscriber.presence(e)
        }
      }, {
        key: "unsubscribeGroupPresence",
        value: function (e) {
          return this._groupPresenceSubscriber.unPresence(e)
        }
      }, {
        key: "groupHereNow",
        value: function (e) {
          return this._groupHereNow.hereNow(e)
        }
      }, {
        key: "groupOnlineCount",
        value: function (e) {
          return this._groupOnlineCount.get(e)
        }
      }, {
        key: "setUriAndOpts",
        value: function () {
          var e = void 0,
            t = void 0,
            n = "://" + u.GoEasyDomainNumber.refreshNumber() + this._host;
          if (u.env.isBrowserClient()) {
            e = !1 === this._forceTLS ? "http" + n + ":80" : "https" + n + ":443";
            t = {
              transports: !0 === this._supportOldBrowser ? ["polling", "websocket"] : ["websocket"],
              timeout: d.SocketTimeout.connect
            }
          } else e = "https://wx-" + this._host + ":443", t = {
            transports: ["websocket"],
            reconnectionDelayMax: d.SocketTimeout.reconnectionDelayMax
          };
          return {
            uri: e,
            opts: t
          }
        }
      }]), e
    }();
    P.version = null, P.userId = undefined, P.userData = null, t["default"] = P
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = l(n(16)),
      r = l(n(0)),
      i = l(n(1)),
      s = l(n(39)),
      a = n(6),
      u = (l(n(9)), l(n(49))),
      c = n(26);

    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var f = function () {
      function e(t) {
        (0, r["default"])(this, e), this.type = "", this.to = {
          type: null,
          id: null,
          data: null
        }, this.timestamp = Date.now(), this.senderId = null, this.payload = null, this.messageId = a.UUID.get(), this.status = u["default"]["new"], this.validate(t), this.setSenderId(), this.setType(t), this.setNotification(t), this.setPayload(t), this.setTo(t), this.setData()
      }
      return (0, i["default"])(e, [{
        key: "validate",
        value: function (e) {
          if (!a.calibrator.isObject(e)) throw Error("it is an empty message.")
        }
      }, {
        key: "setType",
        value: function (e) {
          throw Error("Abstract method")
        }
      }, {
        key: "setNotification",
        value: function (e) {
          if (e.notification) {
            if (!a.calibrator.isObject(e.notification)) throw Error("notification require an object.");
            if (a.calibrator.isEmpty(e.notification.title)) throw Error("notification's title is empty.");
            if (a.calibrator.isEmpty(e.notification.body)) throw Error("notification's body is empty.");
            if (e.notification.title.length > 32) throw Error("notification's title over max length 32");
            if (e.notification.body.length > 50) throw Error("notification's body over max length 50");
            this.notification = e.notification
          }
        }
      }, {
        key: "setPayload",
        value: function (e) {
          this.payload = (0, o["default"])(null)
        }
      }, {
        key: "setSenderId",
        value: function () {
          if (!s["default"].userId) throw Error("please call connect() first.");
          this.senderId = s["default"].userId
        }
      }, {
        key: "setTo",
        value: function (e) {
          this.to = e.to
        }
      }, {
        key: "setData",
        value: function () {
          this.to && this.to.type == c.ConversationType.GROUP && (this.senderData = s["default"].userData)
        }
      }]), e
    }();
    t["default"] = f
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t["default"] = {
      DISCONNECTED: "disconnected",
      DISCONNECTING: "disconnecting",
      CONNECTING: "connecting",
      CONNECTED: "connected",
      RECONNECTING: "reconnecting",
      RECONNECTED: "reconnected",
      EXPIRED_RECONNECTED: "reconnected",
      CONNECT_FAILED: "connect_failed"
    }
  }, function (e, t, n) {
    function o(e) {
      if (e) return function (e) {
        for (var t in o.prototype) e[t] = o.prototype[t];
        return e
      }(e)
    }
    e.exports = o, o.prototype.on = o.prototype.addEventListener = function (e, t) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
    }, o.prototype.once = function (e, t) {
      function n() {
        this.off(e, n), t.apply(this, arguments)
      }
      return n.fn = t, this.on(e, n), this
    }, o.prototype.off = o.prototype.removeListener = o.prototype.removeAllListeners = o.prototype.removeEventListener = function (e, t) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
      var n, o = this._callbacks["$" + e];
      if (!o) return this;
      if (1 == arguments.length) return delete this._callbacks["$" + e], this;
      for (var r = 0; r < o.length; r++)
        if ((n = o[r]) === t || n.fn === t) {
          o.splice(r, 1);
          break
        } return this
    }, o.prototype.emit = function (e) {
      this._callbacks = this._callbacks || {};
      var t = [].slice.call(arguments, 1),
        n = this._callbacks["$" + e];
      if (n)
        for (var o = 0, r = (n = n.slice(0)).length; o < r; ++o) n[o].apply(this, t);
      return this
    }, o.prototype.listeners = function (e) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
    }, o.prototype.hasListeners = function (e) {
      return !!this.listeners(e).length
    }
  }, function (e, t) {
    e.exports = function (e) {
      if ("function" != typeof e) throw TypeError(e + " is not a function!");
      return e
    }
  }, function (e, t) {
    e.exports = function (e, t) {
      return {
        enumerable: !(1 & e),
        configurable: !(2 & e),
        writable: !(4 & e),
        value: t
      }
    }
  }, function (e, t) {
    var n = 0,
      o = Math.random();
    e.exports = function (e) {
      return "Symbol(".concat(e === undefined ? "" : e, ")_", (++n + o).toString(36))
    }
  }, function (e, t, n) {
    var o = n(22).f,
      r = n(28),
      i = n(12)("toStringTag");
    e.exports = function (e, t, n) {
      e && !r(e = n ? e : e.prototype, i) && o(e, i, {
        configurable: !0,
        value: t
      })
    }
  }, function (e, t) {
    t.f = {}.propertyIsEnumerable
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = c(n(16)),
      r = c(n(0)),
      i = c(n(1)),
      s = n(6),
      a = n(26),
      u = c(n(49));

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var l = function () {
      function e() {
        (0, r["default"])(this, e)
      }
      return (0, i["default"])(e, null, [{
        key: "assemble",
        value: function (e) {
          if (!s.calibrator.isDef(e)) return null;
          try {
            var t = (0, o["default"])(null);
            return t.type = e.mt, t.timestamp = e.ts, t.senderId = e.s, t.payload = JSON.parse(e.p), t.messageId = e.i, t.status = u["default"].success, e.t == a.ConversationType.GROUP ? (t.groupId = e.r, t.senderData = e.d && JSON.parse(e.d)) : t.receiverId = e.r, t
          } catch (n) {
            throw Error(n)
          }
        }
      }]), e
    }();
    t["default"] = l
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t["default"] = {
      "new": "new",
      sending: "sending",
      success: "success",
      fail: "fail"
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(2)),
      r = f(n(0)),
      i = f(n(1)),
      s = f(n(3)),
      a = f(n(8)),
      u = f(n(4)),
      c = f(n(70)),
      l = n(15);

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var d = function (e) {
      function t(e) {
        return (0, r["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e))
      }
      return (0, u["default"])(t, e), (0, i["default"])(t, [{
        key: "validate",
        value: function (e) {
          if ((0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e), !l.calibrator.isDef(e.file)) throw Error("file is empty.")
        }
      }, {
        key: "setPayload",
        value: function (e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e)
        }
      }]), t
    }(c["default"]);
    t["default"] = d
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = l(n(2)),
      r = l(n(0)),
      i = l(n(1)),
      s = l(n(3)),
      a = l(n(8)),
      u = l(n(4)),
      c = n(15);

    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var f = function (e) {
      function t(e) {
        return (0, r["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e))
      }
      return (0, u["default"])(t, e), (0, i["default"])(t, [{
        key: "validate",
        value: function (e) {
          if ((0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e), !c.calibrator.isDef(e.file)) throw Error("file is empty.")
        }
      }, {
        key: "setPayload",
        value: function (e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e)
        }
      }]), t
    }(l(n(70))["default"]);
    t["default"] = f
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = c(n(2)),
      r = c(n(0)),
      i = c(n(1)),
      s = c(n(3)),
      a = c(n(8)),
      u = c(n(4));

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var l = function (e) {
      function t(e) {
        return (0, r["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e))
      }
      return (0, u["default"])(t, e), (0, i["default"])(t, [{
        key: "validate",
        value: function (e) {
          if ((0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e), !(e.file instanceof File)) throw Error("wrong file type.");
          if (0 == e.file.size) throw Error("File size is 0.");
          if (e.file.size > 31457280) throw Error("message-length limit 30mib")
        }
      }, {
        key: "setPayload",
        value: function (e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e), this.payload.contentType = e.file.type, this.payload.name = e.file.name, this.payload.size = e.file.size;
          var n = (window.URL || window.webkitURL).createObjectURL(e.file);
          this.payload.url = n
        }
      }]), t
    }(c(n(70))["default"]);
    t["default"] = l
  }, function (e, t, n) {
    (function (o) {
      function r() {
        var e;
        try {
          e = t.storage.debug
        } catch (n) {}
        return !e && void 0 !== o && "env" in o && (e = o.env.DEBUG), e
      }(t = e.exports = n(200)).log = function () {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
      }, t.formatArgs = function (e) {
        var n = this.useColors;
        if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
        var o = "color: " + this.color;
        e.splice(1, 0, o, "color: inherit");
        var r = 0,
          i = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
          "%%" !== e && "%c" === e && (i = ++r)
        }), e.splice(i, 0, o)
      }, t.save = function (e) {
        try {
          null == e ? t.storage.removeItem("debug") : t.storage.debug = e
        } catch (n) {}
      }, t.load = r, t.useColors = function () {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
      }, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : function () {
        try {
          return window.localStorage
        } catch (e) {}
      }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function (e) {
        try {
          return JSON.stringify(e)
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message
        }
      }, t.enable(r())
    }).call(t, n(71))
  }, function (e, t) {
    t.encode = function (e) {
      var t = "";
      for (var n in e) e.hasOwnProperty(n) && (t.length && (t += "&"), t += encodeURIComponent(n) + "=" + encodeURIComponent(e[n]));
      return t
    }, t.decode = function (e) {
      for (var t = {}, n = e.split("&"), o = 0, r = n.length; o < r; o++) {
        var i = n[o].split("=");
        t[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
      }
      return t
    }
  }, function (e, t, n) {
    var o = n(23),
      r = n(11).document,
      i = o(r) && o(r.createElement);
    e.exports = function (e) {
      return i ? r.createElement(e) : {}
    }
  }, function (e, t, n) {
    var o = n(23);
    e.exports = function (e, t) {
      if (!o(e)) return e;
      var n, r;
      if (t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
      if ("function" == typeof (n = e.valueOf) && !o(r = n.call(e))) return r;
      if (!t && "function" == typeof (n = e.toString) && !o(r = n.call(e))) return r;
      throw TypeError("Can't convert object to primitive value")
    }
  }, function (e, t, n) {
    var o = n(18),
      r = n(124),
      i = n(62),
      s = n(60)("IE_PROTO"),
      a = function () {},
      u = function () {
        var e, t = n(55)("iframe"),
          o = i.length;
        for (t.style.display = "none", n(83).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), u = e.F; o--;) delete u.prototype[i[o]];
        return u()
      };
    e.exports = Object.create || function (e, t) {
      var n;
      return null !== e ? (a.prototype = o(e), n = new a, a.prototype = null, n[s] = e) : n = u(), t === undefined ? n : r(n, t)
    }
  }, function (e, t) {
    e.exports = function (e) {
      if (e == undefined) throw TypeError("Can't call method on  " + e);
      return e
    }
  }, function (e, t) {
    var n = Math.ceil,
      o = Math.floor;
    e.exports = function (e) {
      return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e)
    }
  }, function (e, t, n) {
    var o = n(61)("keys"),
      r = n(45);
    e.exports = function (e) {
      return o[e] || (o[e] = r(e))
    }
  }, function (e, t, n) {
    var o = n(7),
      r = n(11),
      i = r["__core-js_shared__"] || (r["__core-js_shared__"] = {});
    (e.exports = function (e, t) {
      return i[e] || (i[e] = t !== undefined ? t : {})
    })("versions", []).push({
      version: o.version,
      mode: n(36) ? "pure" : "global",
      copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
    })
  }, function (e, t) {
    e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
  }, function (e, t, n) {
    t.f = n(12)
  }, function (e, t, n) {
    var o = n(11),
      r = n(7),
      i = n(36),
      s = n(63),
      a = n(22).f;
    e.exports = function (e) {
      var t = r.Symbol || (r.Symbol = i ? {} : o.Symbol || {});
      "_" == e.charAt(0) || e in t || a(t, e, {
        value: s.f(e)
      })
    }
  }, function (e, t) {
    t.f = Object.getOwnPropertySymbols
  }, function (e, t, n) {
    var o = n(47),
      r = n(44),
      i = n(29),
      s = n(56),
      a = n(28),
      u = n(79),
      c = Object.getOwnPropertyDescriptor;
    t.f = n(19) ? c : function (e, t) {
      if (e = i(e), t = s(t, !0), u) try {
        return c(e, t)
      } catch (n) {}
      if (a(e, t)) return r(!o.f.call(e, t), e[t])
    }
  }, function (e, t, n) {
    var o = n(17),
      r = n(7),
      i = n(30);
    e.exports = function (e, t) {
      var n = (r.Object || {})[e] || Object[e],
        s = {};
      s[e] = t(n), o(o.S + o.F * i(function () {
        n(1)
      }), "Object", s)
    }
  }, function (e, t, n) {
    "use strict";
    var o = n(43);
    e.exports.f = function (e) {
      return new function (e) {
        var t, n;
        this.promise = new e(function (e, o) {
          if (t !== undefined || n !== undefined) throw TypeError("Bad Promise constructor");
          t = e, n = o
        }), this.resolve = o(t), this.reject = o(n)
      }(e)
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.ConversationType = {
      GROUP: "group",
      PRIVATE: "private"
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(2)),
      r = f(n(0)),
      i = f(n(1)),
      s = f(n(3)),
      a = f(n(8)),
      u = f(n(4)),
      c = f(n(40)),
      l = f(n(9));

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var d = function (e) {
      function t(e) {
        (0, r["default"])(this, t);
        var n = (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e));
        return n.file = null, n.onProgress = null, n.setFile(e.file), n.setOnProgress(e.onProgress), n
      }
      return (0, u["default"])(t, e), (0, i["default"])(t, [{
        key: "validate",
        value: function (e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e)
        }
      }, {
        key: "setPayload",
        value: function (e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e), this.payload.size = "", this.payload.contentType = "", this.payload.name = "", this.payload.url = ""
        }
      }, {
        key: "setType",
        value: function (e) {
          this.type = l["default"].file
        }
      }, {
        key: "setFile",
        value: function (e) {
          this.file = e
        }
      }, {
        key: "setOnProgress",
        value: function (e) {
          this.onProgress = e
        }
      }]), t
    }(c["default"]);
    t["default"] = d
  }, function (e, t) {
    var n, o, r = e.exports = {};

    function i() {
      throw new Error("setTimeout has not been defined")
    }

    function s() {
      throw new Error("clearTimeout has not been defined")
    }

    function a(e) {
      if (n === setTimeout) return setTimeout(e, 0);
      if ((n === i || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0);
      try {
        return n(e, 0)
      } catch (t) {
        try {
          return n.call(null, e, 0)
        } catch (t) {
          return n.call(this, e, 0)
        }
      }
    }! function () {
      try {
        n = "function" == typeof setTimeout ? setTimeout : i
      } catch (e) {
        n = i
      }
      try {
        o = "function" == typeof clearTimeout ? clearTimeout : s
      } catch (e) {
        o = s
      }
    }();
    var u, c = [],
      l = !1,
      f = -1;

    function d() {
      l && u && (l = !1, u.length ? c = u.concat(c) : f = -1, c.length && p())
    }

    function p() {
      if (!l) {
        var e = a(d);
        l = !0;
        for (var t = c.length; t;) {
          for (u = c, c = []; ++f < t;) u && u[f].run();
          f = -1, t = c.length
        }
        u = null, l = !1,
          function (e) {
            if (o === clearTimeout) return clearTimeout(e);
            if ((o === s || !o) && clearTimeout) return o = clearTimeout, clearTimeout(e);
            try {
              o(e)
            } catch (t) {
              try {
                return o.call(null, e)
              } catch (t) {
                return o.call(this, e)
              }
            }
          }(e)
      }
    }

    function h(e, t) {
      this.fun = e, this.array = t
    }

    function y() {}
    r.nextTick = function (e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
      c.push(new h(e, t)), 1 !== c.length || l || a(p)
    }, h.prototype.run = function () {
      this.fun.apply(null, this.array)
    }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = y, r.addListener = y, r.once = y, r.off = y, r.removeListener = y, r.removeAllListeners = y, r.emit = y, r.prependListener = y, r.prependOnceListener = y, r.listeners = function (e) {
      return []
    }, r.binding = function (e) {
      throw new Error("process.binding is not supported")
    }, r.cwd = function () {
      return "/"
    }, r.chdir = function (e) {
      throw new Error("process.chdir is not supported")
    }, r.umask = function () {
      return 0
    }
  }, function (e, t, n) {
    "use strict";
    var o, r = n(25),
      i = (o = r) && o.__esModule ? o : {
        "default": o
      };
    n(202)("socket.io-parser");
    var s = n(42),
      a = n(105);

    function u() {}
    t.protocol = 4, t.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], t.CONNECT = 0, t.DISCONNECT = 1, t.EVENT = 2, t.ACK = 3, t.ERROR = 4, t.BINARY_EVENT = 5, t.BINARY_ACK = 6, t.Encoder = u, t.Decoder = l;
    var c = t.ERROR + '"encode error"';

    function l() {
      this.reconstructor = null
    }

    function f(e) {
      this.reconPack = e, this.buffers = []
    }

    function d(e) {
      return {
        type: t.ERROR,
        data: "parser error: " + e
      }
    }
    u.prototype.encode = function (e, n) {
      n([function (e) {
        var n = "" + e.type;
        t.BINARY_EVENT !== e.type && t.BINARY_ACK !== e.type || (n += e.attachments + "-");
        e.nsp && "/" !== e.nsp && (n += e.nsp + ",");
        null != e.id && (n += e.id);
        if (null != e.data) {
          var o = function (e) {
            try {
              return (0, i["default"])(e)
            } catch (t) {
              return !1
            }
          }(e.data);
          if (!1 === o) return c;
          n += o
        }
        return n
      }(e)])
    }, s(l.prototype), l.prototype.add = function (e) {
      var n;
      if ("string" != typeof e) throw new Error("Unknown type: " + e);
      n = function (e) {
        var n = 0,
          o = {
            type: Number(e.charAt(0))
          };
        if (null == t.types[o.type]) return d("unknown packet type " + o.type);
        if (t.BINARY_EVENT === o.type || t.BINARY_ACK === o.type) {
          for (var r = "";
            "-" !== e.charAt(++n) && (r += e.charAt(n), n != e.length););
          if (r != Number(r) || "-" !== e.charAt(n)) throw new Error("Illegal attachments");
          o.attachments = Number(r)
        }
        if ("/" === e.charAt(n + 1))
          for (o.nsp = ""; ++n;) {
            var i = e.charAt(n);
            if ("," === i) break;
            if (o.nsp += i, n === e.length) break
          } else o.nsp = "/";
        var s = e.charAt(n + 1);
        if ("" !== s && Number(s) == s) {
          for (o.id = ""; ++n;) {
            var i = e.charAt(n);
            if (null == i || Number(i) != i) {
              --n;
              break
            }
            if (o.id += e.charAt(n), n === e.length) break
          }
          o.id = Number(o.id)
        }
        if (e.charAt(++n)) {
          var u = function (e) {
              try {
                return JSON.parse(e)
              } catch (t) {
                return !1
              }
            }(e.substr(n)),
            c = !1 !== u && (o.type === t.ERROR || a(u));
          if (!c) return d("invalid payload");
          o.data = u
        }
        return o
      }(e), this.emit("decoded", n)
    }, l.prototype.destroy = function () {
      this.reconstructor && this.reconstructor.finishedReconstruction()
    }, f.prototype.takeBinaryData = function (e) {
      if (this.buffers.push(e), this.buffers.length === this.reconPack.attachments) {
        var t = binary.reconstructPacket(this.reconPack, this.buffers);
        return this.finishedReconstruction(), t
      }
      return null
    }, f.prototype.finishedReconstruction = function () {
      this.reconPack = null, this.buffers = []
    }
  }, function (e, t, n) {
    e.exports = {
      "default": n(207),
      __esModule: !0
    }
  }, function (e, t, n) {
    "use strict";
    var o = n(32),
      r = n(42);

    function i(e) {
      this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.forceNode = e.forceNode, this.isReactNative = e.isReactNative, this.extraHeaders = e.extraHeaders, this.localAddress = e.localAddress
    }
    e.exports = i, r(i.prototype), i.prototype.onError = function (e, t) {
      var n = new Error(e);
      return n.type = "TransportError", n.description = t, this.emit("error", n), this
    }, i.prototype.open = function () {
      return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
    }, i.prototype.close = function () {
      return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
    }, i.prototype.send = function (e) {
      if ("open" !== this.readyState) throw new Error("Transport not open");
      this.write(e)
    }, i.prototype.onOpen = function () {
      this.readyState = "open", this.writable = !0, this.emit("open")
    }, i.prototype.onData = function (e) {
      var t = o.decodePacket(e, this.socket.binaryType);
      this.onPacket(t)
    }, i.prototype.onPacket = function (e) {
      this.emit("packet", e)
    }, i.prototype.onClose = function () {
      this.readyState = "closed", this.emit("close")
    }
  }, function (e, t) {
    e.exports = function (e, t) {
      var n = function () {};
      n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
    }
  }, function (e, t, n) {
    (function (o) {
      function r() {
        var e;
        try {
          e = t.storage.debug
        } catch (n) {}
        return !e && void 0 !== o && "env" in o && (e = o.env.DEBUG), e
      }(t = e.exports = n(218)).log = function () {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
      }, t.formatArgs = function (e) {
        var n = this.useColors;
        if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
        var o = "color: " + this.color;
        e.splice(1, 0, o, "color: inherit");
        var r = 0,
          i = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
          "%%" !== e && "%c" === e && (i = ++r)
        }), e.splice(i, 0, o)
      }, t.save = function (e) {
        try {
          null == e ? t.storage.removeItem("debug") : t.storage.debug = e
        } catch (n) {}
      }, t.load = r, t.useColors = function () {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
      }, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : function () {
        try {
          return window.localStorage
        } catch (e) {}
      }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function (e) {
        try {
          return JSON.stringify(e)
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message
        }
      }, t.enable(r())
    }).call(t, n(71))
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = i(n(0)),
      r = i(n(1));

    function i(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var s = function () {
      function e() {
        (0, o["default"])(this, e)
      }
      return (0, r["default"])(e, [{
        key: "upload",
        value: function (e) {
          throw Error("Not implementation yet.")
        }
      }]), e
    }();
    t["default"] = s
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t["default"] = {
      message: "message",
      imMessage: "imMessage",
      userPresence: "userPresence",
      groupPresence: "groupPresence"
    }
  }, function (e, t, n) {
    e.exports = !n(19) && !n(30)(function () {
      return 7 != Object.defineProperty(n(55)("div"), "a", {
        get: function () {
          return 7
        }
      }).a
    })
  }, function (e, t, n) {
    var o = n(28),
      r = n(29),
      i = n(125)(!1),
      s = n(60)("IE_PROTO");
    e.exports = function (e, t) {
      var n, a = r(e),
        u = 0,
        c = [];
      for (n in a) n != s && o(a, n) && c.push(n);
      for (; t.length > u;) o(a, n = t[u++]) && (~i(c, n) || c.push(n));
      return c
    }
  }, function (e, t, n) {
    var o = n(35);
    e.exports = Object("z").propertyIsEnumerable(0) ? Object : function (e) {
      return "String" == o(e) ? e.split("") : Object(e)
    }
  }, function (e, t, n) {
    var o = n(59),
      r = Math.min;
    e.exports = function (e) {
      return e > 0 ? r(o(e), 9007199254740991) : 0
    }
  }, function (e, t, n) {
    var o = n(11).document;
    e.exports = o && o.documentElement
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.ImEventType = undefined;
    var o, r = n(16);
    var i = (0, ((o = r) && o.__esModule ? o : {
      "default": o
    })["default"])(null);
    i.PRIVATE_MESSAGE_RECEIVED = "PRIVATE_MESSAGE_RECEIVED", i.GROUP_MESSAGE_RECEIVED = "GROUP_MESSAGE_RECEIVED", i.SYSTEM_MESSAGE_RECEIVED = "SYSTEM_MESSAGE_RECEIVED", i.CONVERSATIONS_UPDATED = "CONVERSATIONS_UPDATED", i.CONNECTED = "CONNECTED", i.CONNECTING = "CONNECTING", i.DISCONNECTED = "DISCONNECTED", i.USER_PRESENCE = "USER_PRESENCE", i.GROUP_PRESENCE = "GROUP_PRESENCE", t.ImEventType = i
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.calibrator = undefined;
    var o = s(n(20)),
      r = s(n(0)),
      i = s(n(1));

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var a = new(function () {
      function e() {
        (0, r["default"])(this, e)
      }
      return (0, i["default"])(e, [{
        key: "isUndef",
        value: function (e) {
          return e === undefined || null === e
        }
      }, {
        key: "isTrue",
        value: function (e) {
          return !0 === e
        }
      }, {
        key: "isFalse",
        value: function (e) {
          return !1 === e
        }
      }, {
        key: "isPrimitive",
        value: function (e) {
          return "string" == typeof e || "number" == typeof e || "symbol" === (void 0 === e ? "undefined" : (0, o["default"])(e)) || "boolean" == typeof e
        }
      }, {
        key: "isDef",
        value: function (e) {
          return e !== undefined && null !== e
        }
      }, {
        key: "isObject",
        value: function (e) {
          return null !== e && "object" === (void 0 === e ? "undefined" : (0, o["default"])(e))
        }
      }, {
        key: "isPlainObject",
        value: function (e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }
      }, {
        key: "isRegExp",
        value: function (e) {
          return "[object RegExp]" === Object.prototype.toString.call(e)
        }
      }, {
        key: "isValidArrayIndex",
        value: function (e) {
          var t = parseFloat(String(e));
          return t >= 0 && Math.floor(t) === t && isFinite(e)
        }
      }, {
        key: "isStringOrNumber",
        value: function (e) {
          return "string" == typeof e || "number" == typeof e
        }
      }, {
        key: "isString",
        value: function (e) {
          return "string" == typeof e
        }
      }, {
        key: "isNumber",
        value: function (e) {
          return "number" == typeof e
        }
      }, {
        key: "isArray",
        value: function (e) {
          return "[object Array]" == Object.prototype.toString.call(e)
        }
      }, {
        key: "isEmpty",
        value: function (e) {
          return this.isArray(e) ? 0 == e.length : this.isObject(e) ? !this.isDef(e) : !this.isNumber(e) && (this.isString(e) ? "" == e.trim() : !this.isDef(e))
        }
      }, {
        key: "isNative",
        value: function (e) {
          return "function" == typeof e && /native code/.test(e.toString())
        }
      }, {
        key: "isFunction",
        value: function (e) {
          return "function" == typeof e
        }
      }]), e
    }());
    t.calibrator = a
  }, function (e, t, n) {
    "use strict";
    var o = n(133)(!0);
    n(87)(String, "String", function (e) {
      this._t = String(e), this._i = 0
    }, function () {
      var e, t = this._t,
        n = this._i;
      return n >= t.length ? {
        value: undefined,
        done: !0
      } : (e = o(t, n), this._i += e.length, {
        value: e,
        done: !1
      })
    })
  }, function (e, t, n) {
    "use strict";
    var o = n(36),
      r = n(17),
      i = n(88),
      s = n(27),
      a = n(37),
      u = n(134),
      c = n(46),
      l = n(89),
      f = n(12)("iterator"),
      d = !([].keys && "next" in [].keys()),
      p = function () {
        return this
      };
    e.exports = function (e, t, n, h, y, v, m) {
      u(n, t, h);
      var g, b, _, C = function (e) {
          if (!d && e in T) return T[e];
          switch (e) {
            case "keys":
            case "values":
              return function () {
                return new n(this, e)
              }
          }
          return function () {
            return new n(this, e)
          }
        },
        k = t + " Iterator",
        w = "values" == y,
        E = !1,
        T = e.prototype,
        O = T[f] || T["@@iterator"] || y && T[y],
        S = O || C(y),
        M = y ? w ? C("entries") : S : undefined,
        P = "Array" == t && T.entries || O;
      if (P && (_ = l(P.call(new e))) !== Object.prototype && _.next && (c(_, k, !0), o || "function" == typeof _[f] || s(_, f, p)), w && O && "values" !== O.name && (E = !0, S = function () {
          return O.call(this)
        }), o && !m || !d && !E && T[f] || s(T, f, S), a[t] = S, a[k] = p, y)
        if (g = {
            values: w ? S : C("values"),
            keys: v ? S : C("keys"),
            entries: M
          }, m)
          for (b in g) b in T || i(T, b, g[b]);
        else r(r.P + r.F * (d || E), t, g);
      return g
    }
  }, function (e, t, n) {
    e.exports = n(27)
  }, function (e, t, n) {
    var o = n(28),
      r = n(38),
      i = n(60)("IE_PROTO"),
      s = Object.prototype;
    e.exports = Object.getPrototypeOf || function (e) {
      return e = r(e), o(e, i) ? e[i] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
    }
  }, function (e, t, n) {
    n(135);
    for (var o = n(11), r = n(27), i = n(37), s = n(12)("toStringTag"), a = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), u = 0; u < a.length; u++) {
      var c = a[u],
        l = o[c],
        f = l && l.prototype;
      f && !f[s] && r(f, s, c), i[c] = i.Array
    }
  }, function (e, t, n) {
    var o = n(80),
      r = n(62).concat("length", "prototype");
    t.f = Object.getOwnPropertyNames || function (e) {
      return o(e, r)
    }
  }, function (e, t) {}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.env = undefined;
    var o = s(n(20)),
      r = s(n(0)),
      i = s(n(1));

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var a = new(function () {
      function e() {
        (0, r["default"])(this, e)
      }
      return (0, i["default"])(e, [{
        key: "isWx",
        value: function () {
          return !("undefined" == typeof wx || !wx.getLocation) && ("undefined" != typeof GameGlobal || ("function" != typeof WebSocket || "function" != typeof XMLHttpRequest))
        }
      }, {
        key: "isUni",
        value: function () {
          return !("object" !== ("undefined" == typeof uni ? "undefined" : (0, o["default"])(uni)) || !uni.getSystemInfo)
        }
      }, {
        key: "isSupportHtmlPlus",
        value: function () {
          return !!("object" === ("undefined" == typeof plus ? "undefined" : (0, o["default"])(plus)) && plus.navigator && plus.navigator.getUserAgent() && plus.navigator.getUserAgent().indexOf("Html5Plus") > -1)
        }
      }, {
        key: "isTT",
        value: function () {
          return !("object" !== ("undefined" == typeof tt ? "undefined" : (0, o["default"])(tt)) || !tt.getSystemInfo)
        }
      }, {
        key: "isBrowserClient",
        value: function () {
          return this.isUni() ? "function" == typeof WebSocket && "function" == typeof XMLHttpRequest && "object" == ("undefined" == typeof localStorage ? "undefined" : (0, o["default"])(localStorage)) : !(this.isReactNative() || this.isWx() || this.isTT())
        }
      }, {
        key: "isReactNative",
        value: function () {
          return "undefined" != typeof navigator && "ReactNative" == navigator.product
        }
      }]), e
    }());
    t.env = a
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.GoEasyDomainNumber = undefined;
    var o = u(n(0)),
      r = u(n(1)),
      i = n(93),
      s = n(158),
      a = u(n(159));

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var c = function () {
      function e() {
        (0, o["default"])(this, e)
      }
      return (0, r["default"])(e, null, [{
        key: "refreshNumber",
        value: function () {
          var e = Math.floor(Math.random() * (a["default"].maxNumber - 1) + 1);
          return i.env.isBrowserClient() && (e = parseInt(s.storage.getData("goEasyNode")) || e), e > 0 && e < a["default"].maxNumber ? e += 1 : e == a["default"].maxNumber && (e = 1), i.env.isBrowserClient() && s.storage.setData("goEasyNode", e), e
        }
      }]), e
    }();
    t.GoEasyDomainNumber = c
  }, function (e, t, n) {
    var o = n(35),
      r = n(12)("toStringTag"),
      i = "Arguments" == o(function () {
        return arguments
      }());
    e.exports = function (e) {
      var t, n, s;
      return e === undefined ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
        try {
          return e[t]
        } catch (n) {}
      }(t = Object(e), r)) ? n : i ? o(t) : "Object" == (s = o(t)) && "function" == typeof t.callee ? "Arguments" : s
    }
  }, function (e, t, n) {
    var o = n(18),
      r = n(43),
      i = n(12)("species");
    e.exports = function (e, t) {
      var n, s = o(e).constructor;
      return s === undefined || (n = o(s)[i]) == undefined ? t : r(n)
    }
  }, function (e, t, n) {
    var o, r, i, s = n(33),
      a = n(167),
      u = n(83),
      c = n(55),
      l = n(11),
      f = l.process,
      d = l.setImmediate,
      p = l.clearImmediate,
      h = l.MessageChannel,
      y = l.Dispatch,
      v = 0,
      m = {},
      g = function () {
        var e = +this;
        if (m.hasOwnProperty(e)) {
          var t = m[e];
          delete m[e], t()
        }
      },
      b = function (e) {
        g.call(e.data)
      };
    d && p || (d = function (e) {
      for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
      return m[++v] = function () {
        a("function" == typeof e ? e : Function(e), t)
      }, o(v), v
    }, p = function (e) {
      delete m[e]
    }, "process" == n(35)(f) ? o = function (e) {
      f.nextTick(s(g, e, 1))
    } : y && y.now ? o = function (e) {
      y.now(s(g, e, 1))
    } : h ? (i = (r = new h).port2, r.port1.onmessage = b, o = s(i.postMessage, i, 1)) : l.addEventListener && "function" == typeof postMessage && !l.importScripts ? (o = function (e) {
      l.postMessage(e + "", "*")
    }, l.addEventListener("message", b, !1)) : o = "onreadystatechange" in c("script") ? function (e) {
      u.appendChild(c("script")).onreadystatechange = function () {
        u.removeChild(this), g.call(e)
      }
    } : function (e) {
      setTimeout(s(g, e, 1), 0)
    }), e.exports = {
      set: d,
      clear: p
    }
  }, function (e, t) {
    e.exports = function (e) {
      try {
        return {
          e: !1,
          v: e()
        }
      } catch (t) {
        return {
          e: !0,
          v: t
        }
      }
    }
  }, function (e, t, n) {
    var o = n(18),
      r = n(23),
      i = n(68);
    e.exports = function (e, t) {
      if (o(e), r(t) && t.constructor === e) return t;
      var n = i.f(e);
      return (0, n.resolve)(t), n.promise
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Conversion = undefined;
    var o = u(n(0)),
      r = u(n(1)),
      i = n(69),
      s = u(n(39)),
      a = u(n(48));

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    t.Conversion = function () {
      function e() {
        (0, o["default"])(this, e), this.type = "", this.lastMessage = null, this.unread = 0, this.top = !1, this.data = null, this.lc = 0, this.lm = 0
      }
      return (0, r["default"])(e, null, [{
        key: "buildByInMessage",
        value: function (t) {
          var n = new e;
          return n.type = t.t, n.lastMessage = a["default"].assemble(t), n.lc = n.lastMessage.timestamp - 1, n.lm = n.lastMessage.timestamp, n.unread = 0, t.t == i.ConversationType.GROUP ? n.groupId = t.r : s["default"].userId == t.r ? n.userId = t.s : n.userId = t.r, n
        }
      }, {
        key: "buildByOutMessage",
        value: function (t, n, o, r) {
          var s = new e;
          return s.type = n, s.lastMessage = t, s.lm = s.lastMessage.timestamp, s.lc = s.lm, s.unread = 0, n == i.ConversationType.GROUP ? (s.groupId = o, s.lastMessage.groupId = o) : (s.userId = o, s.lastMessage.receiverId = o), s
        }
      }, {
        key: "buildByConversation",
        value: function (t, n) {
          var o = new e;
          o.type = n.t, n.lmsg.t = n.t, o.lastMessage = a["default"].assemble(n.lmsg), o.unread = 0, o.lc = n.lcts, o.lm = o.lastMessage.timestamp, o.top = n.top || !1;
          var r = n.d ? JSON.parse(n.d) : {};
          return o.data = r, n.t == i.ConversationType.GROUP ? (o.groupId = n.g, t.putGroupData(o.groupId, r)) : (o.userId = n.uid, t.putUserData(o.userId, r), s["default"].userId == n.lmsg.s ? o.lastMessage.senderData = s["default"].userData : o.lastMessage.senderData = r), o
        }
      }]), e
    }()
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = s(n(0)),
      r = s(n(1)),
      i = n(6);

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var a = function () {
      function e() {
        (0, o["default"])(this, e)
      }
      return (0, r["default"])(e, null, [{
        key: "resolve",
        value: function () {
          return i.env.isUni() ? "uniApp" : i.env.isWx() ? "wx" : "html"
        }
      }]), e
    }();
    t["default"] = a
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(2)),
      r = d(n(0)),
      i = d(n(1)),
      s = d(n(3)),
      a = d(n(8)),
      u = d(n(4)),
      c = d(n(40)),
      l = d(n(9)),
      f = n(6);

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var p = function (e) {
      function t(e) {
        return (0, r["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e))
      }
      return (0, u["default"])(t, e), (0, i["default"])(t, [{
        key: "validate",
        value: function (e) {
          if (f.calibrator.isEmpty(e.text) || "" == e.text.trim()) throw Error("text is empty")
        }
      }, {
        key: "setType",
        value: function (e) {
          this.type = l["default"].text
        }
      }, {
        key: "setPayload",
        value: function (e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e), this.payload.text = e.text
        }
      }]), t
    }(c["default"]);
    t["default"] = p
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = l(n(0)),
      r = l(n(1)),
      i = l(n(41)),
      s = l(n(10)),
      a = l(n(197)),
      u = l(n(198)),
      c = n(6);

    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var f = function () {
      function e() {
        (0, o["default"])(this, e), this.io = u["default"], this.status = i["default"].DISCONNECTED, this.permissions = [s["default"].NONE], this.emitter = null, this.connectedObservers = [], this.disconnectedObservers = [], this.emitter = new a["default"](this)
      }
      return (0, r["default"])(e, [{
        key: "connect",
        value: function () {
          this.status = i["default"].CONNECTING
        }
      }, {
        key: "emit",
        value: function (e) {
          this.emitter.emit(e)
        }
      }, {
        key: "doEmit",
        value: function (e, t, n) {}
      }, {
        key: "on",
        value: function (e, t) {
          this.io.on(e, t)
        }
      }, {
        key: "disconnect",
        value: function () {
          this.io.disconnect()
        }
      }, {
        key: "getStatus",
        value: function () {
          return this.status
        }
      }, {
        key: "addConnectedObserver",
        value: function (e) {
          c.calibrator.isFunction(e) && this.connectedObservers.push(e)
        }
      }, {
        key: "addDisconnectedObserver",
        value: function (e) {
          c.calibrator.isFunction(e) && this.disconnectedObservers.push(e)
        }
      }, {
        key: "notify",
        value: function (e, t) {
          for (var n = 0; n < e.length; n++) e[n](t)
        }
      }]), e
    }();
    t["default"] = f
  }, function (e, t) {
    var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
      o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    e.exports = function (e) {
      var t = e,
        r = e.indexOf("["),
        i = e.indexOf("]"); - 1 != r && -1 != i && (e = e.substring(0, r) + e.substring(r, i).replace(/:/g, ";") + e.substring(i, e.length));
      for (var s = n.exec(e || ""), a = {}, u = 14; u--;) a[o[u]] = s[u] || "";
      return -1 != r && -1 != i && (a.source = t, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a
    }
  }, function (e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function (e) {
      return "[object Array]" == n.call(e)
    }
  }, function (e, t, n) {
    "use strict";
    var o, r = n(20),
      i = (o = r) && o.__esModule ? o : {
        "default": o
      };
    var s = n(205),
      a = n(110),
      u = n(42),
      c = n(72),
      l = n(111),
      f = n(112),
      d = (n(53)("socket.io-client:manager"), n(109)),
      p = n(226),
      h = n(94).GoEasyDomainNumber,
      y = Object.prototype.hasOwnProperty;

    function v(e, t) {
      if (!(this instanceof v)) return new v(e, t);
      e && "object" === (void 0 === e ? "undefined" : (0, i["default"])(e)) && (t = e, e = undefined), (t = t || {}).path = t.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = t, this.reconnection(!1 !== t.reconnection), this.reconnectionAttempts(t.reconnectionAttempts || Infinity), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new p({
        min: this.reconnectionDelay(),
        max: this.reconnectionDelayMax(),
        jitter: this.randomizationFactor()
      }), this.timeout(null == t.timeout ? 2e4 : t.timeout), this.readyState = "closed", this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [];
      var n = t.parser || c;
      this.encoder = new n.Encoder, this.decoder = new n.Decoder, this.autoConnect = !1 !== t.autoConnect, this.autoConnect && this.open()
    }

    function m() {
      var e = !1;
      return "object" === ("undefined" == typeof uni ? "undefined" : (0, i["default"])(uni)) && uni.getSystemInfo && (e = !0), e && !0 === getApp().uniAppRunningBackend
    }
    e.exports = v, v.prototype.emitAll = function () {
      for (var e in this.emit.apply(this, arguments), this.nsps) y.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
    }, v.prototype.updateSocketIds = function () {
      for (var e in this.nsps) y.call(this.nsps, e) && (this.nsps[e].id = this.generateId(e))
    }, v.prototype.generateId = function (e) {
      return ("/" === e ? "" : e + "#") + this.engine.id
    }, u(v.prototype), v.prototype.reconnection = function (e) {
      return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
    }, v.prototype.reconnectionAttempts = function (e) {
      return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts
    }, v.prototype.reconnectionDelay = function (e) {
      return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay
    }, v.prototype.randomizationFactor = function (e) {
      return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor
    }, v.prototype.reconnectionDelayMax = function (e) {
      return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax
    }, v.prototype.timeout = function (e) {
      return arguments.length ? (this._timeout = e, this) : this._timeout
    }, v.prototype.maybeReconnectOnOpen = function () {
      !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
    }, v.prototype.open = v.prototype.connect = function (e, t) {
      if (this.readyState, ~this.readyState.indexOf("open")) return this;
      this.uri, this.engine = s(this.uri, this.opts);
      var n = this.engine,
        o = this;
      this.readyState = "opening", this.skipReconnect = !1;
      var r = l(n, "open", function () {
          o.onopen(), e && e()
        }),
        i = l(n, "error", function (t) {
          if ("undefined" != typeof window) {
            var n = parseInt(o.uri.match(/[1-9][0-9]*/g)[0]),
              r = h.refreshNumber();
            o.uri = o.uri.replace(n, r)
          }
          if (o.cleanup(), o.readyState = "closed", o.emitAll("connect_error", t), e) {
            var i = new Error("Connection error");
            i.data = t, e(i)
          } else o.maybeReconnectOnOpen()
        });
      if (!1 !== this._timeout) {
        var a = this._timeout,
          u = setTimeout(function () {
            r.destroy(), n.close(), n.emit("error", "timeout"), o.emitAll("connect_timeout", a)
          }, a);
        this.subs.push({
          destroy: function () {
            clearTimeout(u)
          }
        })
      }
      return this.subs.push(r), this.subs.push(i), this
    }, v.prototype.onopen = function () {
      this.cleanup(), this.readyState = "open", this.emit("open");
      var e = this.engine;
      this.subs.push(l(e, "data", f(this, "ondata"))), this.subs.push(l(e, "ping", f(this, "onping"))), this.subs.push(l(e, "pong", f(this, "onpong"))), this.subs.push(l(e, "error", f(this, "onerror"))), this.subs.push(l(e, "close", f(this, "onclose"))), this.subs.push(l(this.decoder, "decoded", f(this, "ondecoded")))
    }, v.prototype.onping = function () {
      this.lastPing = new Date, this.emitAll("ping")
    }, v.prototype.onpong = function () {
      this.emitAll("pong", new Date - this.lastPing)
    }, v.prototype.ondata = function (e) {
      this.decoder.add(e)
    }, v.prototype.ondecoded = function (e) {
      this.emit("packet", e)
    }, v.prototype.onerror = function (e) {
      this.emitAll("error", e)
    }, v.prototype.socket = function (e, t) {
      var n = this.nsps[e];
      if (!n) {
        n = new a(this, e, t), this.nsps[e] = n;
        var o = this;
        n.on("connecting", r), n.on("connect", function () {
          n.id = o.generateId(e)
        }), this.autoConnect && r()
      }

      function r() {
        ~d(o.connecting, n) || o.connecting.push(n)
      }
      return n
    }, v.prototype.destroy = function (e) {
      var t = d(this.connecting, e);
      ~t && this.connecting.splice(t, 1), this.connecting.length || this.close()
    }, v.prototype.packet = function (e) {
      var t = this;
      e.query && 0 === e.type && (e.nsp += "?" + e.query), t.encoding ? t.packetBuffer.push(e) : (t.encoding = !0, this.encoder.encode(e, function (n) {
        for (var o = 0; o < n.length; o++) t.engine.write(n[o], e.options);
        t.encoding = !1, t.processPacketQueue()
      }))
    }, v.prototype.processPacketQueue = function () {
      if (this.packetBuffer.length > 0 && !this.encoding) {
        var e = this.packetBuffer.shift();
        this.packet(e)
      }
    }, v.prototype.cleanup = function () {
      for (var e = this.subs.length, t = 0; t < e; t++) {
        this.subs.shift().destroy()
      }
      this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
    }, v.prototype.close = v.prototype.disconnect = function () {
      this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
    }, v.prototype.onclose = function (e) {
      this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
    }, v.prototype.reconnect = function () {
      if (m(), this.reconnecting || this.skipReconnect) return this;
      var e = this;
      if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
      else {
        var t = this.backoff.duration();
        this.reconnecting = !0;
        var n = setTimeout(function () {
          e.skipReconnect || (e.emitAll("reconnect_attempt", e.backoff.attempts), e.emitAll("reconnecting", e.backoff.attempts), e.skipReconnect || (m() ? (e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", "Uniapp running backend, skipped reconnect...")) : e.open(function (t) {
            t ? (e.reconnecting = !1, e.reconnect(), e.emitAll("reconnect_error", t.data)) : e.onreconnect()
          })))
        }, t);
        this.subs.push({
          destroy: function () {
            clearTimeout(n)
          }
        })
      }
    }, v.prototype.onreconnect = function () {
      var e = this.backoff.attempts;
      this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e)
    }
  }, function (e, t, n) {
    "use strict";
    var o = n(209),
      r = n(222);
    t.polling = function (e) {
      var t = !1,
        n = !1;
      e.jsonp;
      if ("undefined" != typeof location) {
        var r = "https:" === location.protocol,
          i = location.port;
        i || (i = r ? 443 : 80), t = e.hostname !== location.hostname || i !== e.port, n = e.secure !== r
      }
      return e.xdomain = t, e.xscheme = n, new o(e)
    }, t.websocket = r
  }, function (e, t, n) {
    "use strict";
    var o, r = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
      i = 64,
      s = {},
      a = 0,
      u = 0;

    function c(e) {
      var t = "";
      do {
        t = r[e % i] + t, e = Math.floor(e / i)
      } while (e > 0);
      return t
    }

    function l() {
      var e = c(+new Date);
      return e !== o ? (a = 0, o = e) : e + "." + c(a++)
    }
    for (; u < i; u++) s[r[u]] = u;
    l.encode = c, l.decode = function (e) {
      var t = 0;
      for (u = 0; u < e.length; u++) t = t * i + s[e.charAt(u)];
      return t
    }, e.exports = l
  }, function (e, t) {
    var n = [].indexOf;
    e.exports = function (e, t) {
      if (n) return e.indexOf(t);
      for (var o = 0; o < e.length; ++o)
        if (e[o] === t) return o;
      return -1
    }
  }, function (e, t, n) {
    "use strict";
    var o, r = n(20),
      i = (o = r) && o.__esModule ? o : {
        "default": o
      };
    var s = n(72),
      a = n(42),
      u = n(224),
      c = n(111),
      l = n(112),
      f = (n(53)("socket.io-client:socket"), n(54)),
      d = n(225);
    e.exports = y;
    var p = {
        connect: 1,
        connect_error: 1,
        connect_timeout: 1,
        connecting: 1,
        disconnect: 1,
        error: 1,
        reconnect: 1,
        reconnect_attempt: 1,
        reconnect_failed: 1,
        reconnect_error: 1,
        reconnecting: 1,
        ping: 1,
        pong: 1
      },
      h = a.prototype.emit;

    function y(e, t, n) {
      this.io = e, this.nsp = t, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, this.flags = {}, n && n.query && (this.query = n.query), this.io.autoConnect && this.open()
    }
    a(y.prototype), y.prototype.subEvents = function () {
      if (!this.subs) {
        var e = this.io;
        this.subs = [c(e, "open", l(this, "onopen")), c(e, "packet", l(this, "onpacket")), c(e, "close", l(this, "onclose"))]
      }
    }, y.prototype.open = y.prototype.connect = function () {
      return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this)
    }, y.prototype.send = function () {
      var e = u(arguments);
      return e.unshift("message"), this.emit.apply(this, e), this
    }, y.prototype.emit = function (e) {
      if (p.hasOwnProperty(e)) return h.apply(this, arguments), this;
      var t = u(arguments),
        n = {
          type: (this.flags.binary !== undefined ? this.flags.binary : d(t)) ? s.BINARY_EVENT : s.EVENT,
          data: t,
          options: {}
        };
      return n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof t[t.length - 1] && (this.ids, this.acks[this.ids] = t.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), this.flags = {}, this
    }, y.prototype.packet = function (e) {
      e.nsp = this.nsp, this.io.packet(e)
    }, y.prototype.onopen = function () {
      if ("/" !== this.nsp)
        if (this.query) {
          var e = "object" === (0, i["default"])(this.query) ? f.encode(this.query) : this.query;
          this.packet({
            type: s.CONNECT,
            query: e
          })
        } else this.packet({
          type: s.CONNECT
        })
    }, y.prototype.onclose = function (e) {
      this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", e)
    }, y.prototype.onpacket = function (e) {
      var t = e.nsp === this.nsp,
        n = e.type === s.ERROR && "/" === e.nsp;
      if (t || n) switch (e.type) {
        case s.CONNECT:
          this.onconnect();
          break;
        case s.EVENT:
        case s.BINARY_EVENT:
          this.onevent(e);
          break;
        case s.ACK:
        case s.BINARY_ACK:
          this.onack(e);
          break;
        case s.DISCONNECT:
          this.ondisconnect();
          break;
        case s.ERROR:
          this.emit("error", e.data)
      }
    }, y.prototype.onevent = function (e) {
      var t = e.data || [];
      null != e.id && t.push(this.ack(e.id)), this.connected ? h.apply(this, t) : this.receiveBuffer.push(t)
    }, y.prototype.ack = function (e) {
      var t = this,
        n = !1;
      return function () {
        if (!n) {
          n = !0;
          var o = u(arguments);
          t.packet({
            type: d(o) ? s.BINARY_ACK : s.ACK,
            id: e,
            data: o
          })
        }
      }
    }, y.prototype.onack = function (e) {
      var t = this.acks[e.id];
      "function" == typeof t ? (e.id, e.data, t.apply(this, e.data), delete this.acks[e.id]) : e.id
    }, y.prototype.onconnect = function () {
      this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
    }, y.prototype.emitBuffered = function () {
      var e;
      for (e = 0; e < this.receiveBuffer.length; e++) h.apply(this, this.receiveBuffer[e]);
      for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++) this.packet(this.sendBuffer[e]);
      this.sendBuffer = []
    }, y.prototype.ondisconnect = function () {
      this.nsp, this.destroy(), this.onclose("io server disconnect")
    }, y.prototype.destroy = function () {
      if (this.subs) {
        for (var e = 0; e < this.subs.length; e++) this.subs[e].destroy();
        this.subs = null
      }
      this.io.destroy(this)
    }, y.prototype.close = y.prototype.disconnect = function () {
      return this.connected && (this.nsp, this.packet({
        type: s.DISCONNECT
      })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }, y.prototype.compress = function (e) {
      return this.flags.compress = e, this
    }, y.prototype.binary = function (e) {
      return this.flags.binary = e, this
    }
  }, function (e, t, n) {
    "use strict";
    e.exports = function (e, t, n) {
      return e.on(t, n), {
        destroy: function () {
          e.removeListener(t, n)
        }
      }
    }
  }, function (e, t) {
    var n = [].slice;
    e.exports = function (e, t) {
      if ("string" == typeof t && (t = e[t]), "function" != typeof t) throw new Error("bind() requires a function");
      var o = n.call(arguments, 2);
      return function () {
        return t.apply(e, o.concat(n.call(arguments)))
      }
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.uniApp = undefined;
    var o = s(n(0)),
      r = s(n(1)),
      i = n(6);

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var a = new(function () {
      function e() {
        (0, o["default"])(this, e), this.overrided = !1
      }
      return (0, r["default"])(e, [{
        key: "overrideUniShowHideMethods",
        value: function () {
          if (i.env.isUni() && !this.overrided && getApp() && "undefined" != typeof getApp().$options) {
            this.overrided = !0;
            var e = getApp().$options;
            if ("undefined" != typeof e.onShow) {
              var t = e.onShow[0];
              e.onShow[0] = function () {
                getApp().uniAppRunningBackend = !1, t && t.call(e)
              }
            }
            if ("undefined" != typeof e.onHide) {
              var n = e.onHide[0];
              e.onHide[0] = function () {
                getApp().uniAppRunningBackend = !0, n && n.call(e)
              }
            }
          }
        }
      }, {
        key: "runningBackend",
        value: function () {
          return getApp().uniAppRunningBackend
        }
      }]), e
    }());
    t.uniApp = a
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = i(n(0)),
      r = i(n(1));

    function i(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var s = function () {
      function e() {
        (0, o["default"])(this, e)
      }
      return (0, r["default"])(e, [{
        key: "build",
        value: function () {
          throw Error("Not implementation yet.")
        }
      }]), e
    }();
    t["default"] = s
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(5)),
      r = d(n(2)),
      i = d(n(0)),
      s = d(n(1)),
      a = d(n(3)),
      u = d(n(4)),
      c = d(n(116)),
      l = d(n(9)),
      f = d(n(117));

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var p = function (e) {
      function t(e) {
        (0, i["default"])(this, t);
        var n = (0, a["default"])(this, (t.__proto__ || (0, r["default"])(t)).call(this));
        return n.im = null, n.goEasyUploader = new f["default"](e), n
      }
      return (0, u["default"])(t, e), (0, s["default"])(t, [{
        key: "build",
        value: function (e) {
          var t = this;
          return new o["default"](function (n, o) {
            var r = new c["default"];
            t.upload(e).then(function (t) {
              var o = t.content,
                i = o === undefined ? {} : o;
              (r = e.payload).url = i.url, r.name = i.newFileName, n(r)
            })["catch"](function (e) {
              o(e)
            })
          })
        }
      }, {
        key: "upload",
        value: function (e) {
          var t = e.type == l["default"].video ? e.payload.video.name : e.payload.name;
          return this.goEasyUploader.upload(e.file, t, e.onProgress)
        }
      }]), t
    }(d(n(114))["default"]);
    t["default"] = p
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o, r = n(0),
      i = (o = r) && o.__esModule ? o : {
        "default": o
      };
    t["default"] = function s(e) {
      (0, i["default"])(this, s)
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = u(n(5)),
      r = u(n(0)),
      i = u(n(1)),
      s = n(237),
      a = u(n(241));

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var c = function () {
      function e(t) {
        (0, r["default"])(this, e), this.requestBuilder = null, this.fileUploader = s.fileUploader, this.requestBuilder = new a["default"](t)
      }
      return (0, i["default"])(e, [{
        key: "upload",
        value: function (e, t, n) {
          var r = this;
          return new o["default"](function (o, i) {
            r.requestBuilder.build(e, t).then(function (e) {
              o(r.doUpload(e, n))
            })["catch"](function (e) {
              i(e)
            })
          })
        }
      }, {
        key: "customizeUpload",
        value: function (e, t) {
          this.doUpload(e, t)
        }
      }, {
        key: "doUpload",
        value: function (e, t) {
          return this.fileUploader.upload(e, t)
        }
      }]), e
    }();
    t["default"] = c
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o, r = n(0),
      i = (o = r) && o.__esModule ? o : {
        "default": o
      };
    t["default"] = function s(e, t, n, o, r) {
      (0, i["default"])(this, s), this.host = "", this.headers = {}, this.parameters = {}, this.file = {}, this.payload = {}, this.host = e, this.headers = t, this.parameters = n, this.file = o, this.payload = r
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = i(n(0)),
      r = i(n(1));

    function i(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var s = function () {
      function e() {
        (0, o["default"])(this, e)
      }
      return (0, r["default"])(e, [{
        key: "build",
        value: function (e, t) {}
      }, {
        key: "newFileName",
        value: function (e) {
          return e && e.newFilename || ""
        }
      }]), e
    }();
    t["default"] = s
  }, function (e, t, n) {
    "use strict";
    var o = i(n(121)),
      r = i(n(257));

    function i(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    o["default"].version = r["default"].version, e.exports = o["default"]
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = l(n(16)),
      r = l(n(0)),
      i = l(n(1)),
      s = n(24),
      a = l(n(39)),
      u = n(6),
      c = n(26);

    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var f = null,
      d = function () {
        function e() {
          if ((0, r["default"])(this, e), !(this instanceof e && f && f._appKey && f._host)) throw Error("please call getInstance to structure instance.")
        }
        return (0, i["default"])(e, [{
          key: "on",
          value: function (e, t) {
            f.on(e, t)
          }
        }, {
          key: "connect",
          value: function (e) {
            return f.connect(e)
          }
        }, {
          key: "disconnect",
          value: function () {
            return f.disconnect()
          }
        }, {
          key: "getStatus",
          value: function () {
            return f.getStatus()
          }
        }, {
          key: "createTextMessage",
          value: function (e) {
            return f.createTextMessage(e)
          }
        }, {
          key: "createImageMessage",
          value: function (e) {
            return f.createImageMessage(e)
          }
        }, {
          key: "createFileMessage",
          value: function (e) {
            return f.createFileMessage(e)
          }
        }, {
          key: "createAudioMessage",
          value: function (e) {
            return f.createAudioMessage(e)
          }
        }, {
          key: "createVideoMessage",
          value: function (e) {
            return f.createVideoMessage(e)
          }
        }, {
          key: "createCustomMessage",
          value: function (e) {
            return f.createCustomMessage(e)
          }
        }, {
          key: "latestConversations",
          value: function () {
            return f.latestConversations()
          }
        }, {
          key: "removePrivateConversation",
          value: function (e) {
            return f.removePrivateConversation(e)
          }
        }, {
          key: "removeGroupConversation",
          value: function (e) {
            return f.removeGroupConversation(e)
          }
        }, {
          key: "history",
          value: function (e) {
            return f.history(e)
          }
        }, {
          key: "upload",
          value: function (e, t, n) {
            return f.upload(e, t, n)
          }
        }, {
          key: "sendMessage",
          value: function (e) {
            return f.sendMessage(e)
          }
        }, {
          key: "markGroupMessageAsRead",
          value: function (e, t) {
            return f.groupMarkAsRead(e, t)
          }
        }, {
          key: "markPrivateMessageAsRead",
          value: function (e, t) {
            return f.privateMarkAsRead(e, t)
          }
        }, {
          key: "topPrivateConversation",
          value: function (e, t) {
            return f.topPrivateConversation(e, t)
          }
        }, {
          key: "topGroupConversation",
          value: function (e, t) {
            return f.topGroupConversation(e, t)
          }
        }, {
          key: "subscribeUserPresence",
          value: function (e) {
            return f.subscribeUserPresence(e)
          }
        }, {
          key: "unsubscribeUserPresence",
          value: function (e) {
            return f.unsubscribeUserPresence(e)
          }
        }, {
          key: "hereNow",
          value: function (e) {
            return f.hereNow(e)
          }
        }, {
          key: "subscribeGroup",
          value: function (e) {
            return f.subscribeGroup(e)
          }
        }, {
          key: "unsubscribeGroup",
          value: function (e) {
            return f.unsubscribeGroup(e)
          }
        }, {
          key: "subscribeGroupPresence",
          value: function (e) {
            return f.subscribeGroupPresence(e)
          }
        }, {
          key: "unsubscribeGroupPresence",
          value: function (e) {
            return f.unsubscribeGroupPresence(e)
          }
        }, {
          key: "groupHereNow",
          value: function (e) {
            return f.groupHereNow(e)
          }
        }, {
          key: "groupOnlineCount",
          value: function (e) {
            return f.groupOnlineCount(e)
          }
        }], [{
          key: "getInstance",
          value: function (t) {
            var n = "";
            if (!u.calibrator.isObject(t)) throw n = "options is require an object.", Error(n);
            if (!u.calibrator.isPrimitive(t.appkey) || 0 == t.appkey.length) throw n = "Invalid options: 'appkey' is empty.", Error(n);
            if (!u.calibrator.isPrimitive(t.host) || 0 == t.host.length) throw n = "Invalid options:'host' is empty.", Error(n);
            return null == e.goEasyIM && (a["default"].version = e.version, f = new a["default"](t), this.goEasyIM = new e), this.goEasyIM
          }
        }]), e
      }();
    d.goEasyIM = null, d.EVENT = (0, o["default"])(s.ImEventType), d.SCENE = (0, o["default"])(c.ConversationType), t["default"] = d
  }, function (e, t, n) {
    n(123);
    var o = n(7).Object;
    e.exports = function (e, t) {
      return o.create(e, t)
    }
  }, function (e, t, n) {
    var o = n(17);
    o(o.S, "Object", {
      create: n(57)
    })
  }, function (e, t, n) {
    var o = n(22),
      r = n(18),
      i = n(34);
    e.exports = n(19) ? Object.defineProperties : function (e, t) {
      r(e);
      for (var n, s = i(t), a = s.length, u = 0; a > u;) o.f(e, n = s[u++], t[n]);
      return e
    }
  }, function (e, t, n) {
    var o = n(29),
      r = n(82),
      i = n(126);
    e.exports = function (e) {
      return function (t, n, s) {
        var a, u = o(t),
          c = r(u.length),
          l = i(s, c);
        if (e && n != n) {
          for (; c > l;)
            if ((a = u[l++]) != a) return !0
        } else
          for (; c > l; l++)
            if ((e || l in u) && u[l] === n) return e || l || 0;
        return !e && -1
      }
    }
  }, function (e, t, n) {
    var o = n(59),
      r = Math.max,
      i = Math.min;
    e.exports = function (e, t) {
      return (e = o(e)) < 0 ? r(e + t, 0) : i(e, t)
    }
  }, function (e, t, n) {
    e.exports = {
      "default": n(128),
      __esModule: !0
    }
  }, function (e, t, n) {
    n(129);
    var o = n(7).Object;
    e.exports = function (e, t, n) {
      return o.defineProperty(e, t, n)
    }
  }, function (e, t, n) {
    var o = n(17);
    o(o.S + o.F * !n(19), "Object", {
      defineProperty: n(22).f
    })
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.eventCenter = undefined;
    var o = u(n(16)),
      r = u(n(0)),
      i = u(n(1)),
      s = n(84),
      a = n(6);

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var c = new(function () {
      function e() {
        (0, r["default"])(this, e), this.subs = null, this.subs = (0, o["default"])(null)
      }
      return (0, i["default"])(e, [{
        key: "on",
        value: function (e, t) {
          if (!a.calibrator.isString(e)) throw Error("eventType require a string.");
          if (!a.calibrator.isDef(s.ImEventType[e])) throw Error("event not found.");
          if (!a.calibrator.isFunction(t)) throw Error("event require a callback.");
          this.subs[e] = t
        }
      }, {
        key: "notify",
        value: function (e, t) {
          var n = this.subs[e];
          n && n(t)
        }
      }]), e
    }());
    t.eventCenter = c
  }, function (e, t, n) {
    e.exports = {
      "default": n(132),
      __esModule: !0
    }
  }, function (e, t, n) {
    n(86), n(90), e.exports = n(63).f("iterator")
  }, function (e, t, n) {
    var o = n(59),
      r = n(58);
    e.exports = function (e) {
      return function (t, n) {
        var i, s, a = String(r(t)),
          u = o(n),
          c = a.length;
        return u < 0 || u >= c ? e ? "" : undefined : (i = a.charCodeAt(u)) < 55296 || i > 56319 || u + 1 === c || (s = a.charCodeAt(u + 1)) < 56320 || s > 57343 ? e ? a.charAt(u) : i : e ? a.slice(u, u + 2) : s - 56320 + (i - 55296 << 10) + 65536
      }
    }
  }, function (e, t, n) {
    "use strict";
    var o = n(57),
      r = n(44),
      i = n(46),
      s = {};
    n(27)(s, n(12)("iterator"), function () {
      return this
    }), e.exports = function (e, t, n) {
      e.prototype = o(s, {
        next: r(1, n)
      }), i(e, t + " Iterator")
    }
  }, function (e, t, n) {
    "use strict";
    var o = n(136),
      r = n(137),
      i = n(37),
      s = n(29);
    e.exports = n(87)(Array, "Array", function (e, t) {
      this._t = s(e), this._i = 0, this._k = t
    }, function () {
      var e = this._t,
        t = this._k,
        n = this._i++;
      return !e || n >= e.length ? (this._t = undefined, r(1)) : r(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]])
    }, "values"), i.Arguments = i.Array, o("keys"), o("values"), o("entries")
  }, function (e, t) {
    e.exports = function () {}
  }, function (e, t) {
    e.exports = function (e, t) {
      return {
        value: t,
        done: !!e
      }
    }
  }, function (e, t, n) {
    e.exports = {
      "default": n(139),
      __esModule: !0
    }
  }, function (e, t, n) {
    n(140), n(92), n(145), n(146), e.exports = n(7).Symbol
  }, function (e, t, n) {
    "use strict";
    var o = n(11),
      r = n(28),
      i = n(19),
      s = n(17),
      a = n(88),
      u = n(141).KEY,
      c = n(30),
      l = n(61),
      f = n(46),
      d = n(45),
      p = n(12),
      h = n(63),
      y = n(64),
      v = n(142),
      m = n(143),
      g = n(18),
      b = n(23),
      _ = n(38),
      C = n(29),
      k = n(56),
      w = n(44),
      E = n(57),
      T = n(144),
      O = n(66),
      S = n(65),
      M = n(22),
      P = n(34),
      N = O.f,
      I = M.f,
      F = T.f,
      x = o.Symbol,
      R = o.JSON,
      A = R && R.stringify,
      j = p("_hidden"),
      D = p("toPrimitive"),
      U = {}.propertyIsEnumerable,
      B = l("symbol-registry"),
      L = l("symbols"),
      G = l("op-symbols"),
      q = Object.prototype,
      z = "function" == typeof x && !!S.f,
      V = o.QObject,
      H = !V || !V.prototype || !V.prototype.findChild,
      W = i && c(function () {
        return 7 != E(I({}, "a", {
          get: function () {
            return I(this, "a", {
              value: 7
            }).a
          }
        })).a
      }) ? function (e, t, n) {
        var o = N(q, t);
        o && delete q[t], I(e, t, n), o && e !== q && I(q, t, o)
      } : I,
      J = function (e) {
        var t = L[e] = E(x.prototype);
        return t._k = e, t
      },
      K = z && "symbol" == typeof x.iterator ? function (e) {
        return "symbol" == typeof e
      } : function (e) {
        return e instanceof x
      },
      Y = function (e, t, n) {
        return e === q && Y(G, t, n), g(e), t = k(t, !0), g(n), r(L, t) ? (n.enumerable ? (r(e, j) && e[j][t] && (e[j][t] = !1), n = E(n, {
          enumerable: w(0, !1)
        })) : (r(e, j) || I(e, j, w(1, {})), e[j][t] = !0), W(e, t, n)) : I(e, t, n)
      },
      X = function (e, t) {
        g(e);
        for (var n, o = v(t = C(t)), r = 0, i = o.length; i > r;) Y(e, n = o[r++], t[n]);
        return e
      },
      $ = function (e) {
        var t = U.call(this, e = k(e, !0));
        return !(this === q && r(L, e) && !r(G, e)) && (!(t || !r(this, e) || !r(L, e) || r(this, j) && this[j][e]) || t)
      },
      Q = function (e, t) {
        if (e = C(e), t = k(t, !0), e !== q || !r(L, t) || r(G, t)) {
          var n = N(e, t);
          return !n || !r(L, t) || r(e, j) && e[j][t] || (n.enumerable = !0), n
        }
      },
      Z = function (e) {
        for (var t, n = F(C(e)), o = [], i = 0; n.length > i;) r(L, t = n[i++]) || t == j || t == u || o.push(t);
        return o
      },
      ee = function (e) {
        for (var t, n = e === q, o = F(n ? G : C(e)), i = [], s = 0; o.length > s;) !r(L, t = o[s++]) || n && !r(q, t) || i.push(L[t]);
        return i
      };
    z || (a((x = function () {
      if (this instanceof x) throw TypeError("Symbol is not a constructor!");
      var e = d(arguments.length > 0 ? arguments[0] : undefined),
        t = function (n) {
          this === q && t.call(G, n), r(this, j) && r(this[j], e) && (this[j][e] = !1), W(this, e, w(1, n))
        };
      return i && H && W(q, e, {
        configurable: !0,
        set: t
      }), J(e)
    }).prototype, "toString", function () {
      return this._k
    }), O.f = Q, M.f = Y, n(91).f = T.f = Z, n(47).f = $, S.f = ee, i && !n(36) && a(q, "propertyIsEnumerable", $, !0), h.f = function (e) {
      return J(p(e))
    }), s(s.G + s.W + s.F * !z, {
      Symbol: x
    });
    for (var te = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ne = 0; te.length > ne;) p(te[ne++]);
    for (var oe = P(p.store), re = 0; oe.length > re;) y(oe[re++]);
    s(s.S + s.F * !z, "Symbol", {
      "for": function (e) {
        return r(B, e += "") ? B[e] : B[e] = x(e)
      },
      keyFor: function (e) {
        if (!K(e)) throw TypeError(e + " is not a symbol!");
        for (var t in B)
          if (B[t] === e) return t
      },
      useSetter: function () {
        H = !0
      },
      useSimple: function () {
        H = !1
      }
    }), s(s.S + s.F * !z, "Object", {
      create: function (e, t) {
        return t === undefined ? E(e) : X(E(e), t)
      },
      defineProperty: Y,
      defineProperties: X,
      getOwnPropertyDescriptor: Q,
      getOwnPropertyNames: Z,
      getOwnPropertySymbols: ee
    });
    var ie = c(function () {
      S.f(1)
    });
    s(s.S + s.F * ie, "Object", {
      getOwnPropertySymbols: function (e) {
        return S.f(_(e))
      }
    }), R && s(s.S + s.F * (!z || c(function () {
      var e = x();
      return "[null]" != A([e]) || "{}" != A({
        a: e
      }) || "{}" != A(Object(e))
    })), "JSON", {
      stringify: function (e) {
        for (var t, n, o = [e], r = 1; arguments.length > r;) o.push(arguments[r++]);
        if (n = t = o[1], (b(t) || e !== undefined) && !K(e)) return m(t) || (t = function (e, t) {
          if ("function" == typeof n && (t = n.call(this, e, t)), !K(t)) return t
        }), o[1] = t, A.apply(R, o)
      }
    }), x.prototype[D] || n(27)(x.prototype, D, x.prototype.valueOf), f(x, "Symbol"), f(Math, "Math", !0), f(o.JSON, "JSON", !0)
  }, function (e, t, n) {
    var o = n(45)("meta"),
      r = n(23),
      i = n(28),
      s = n(22).f,
      a = 0,
      u = Object.isExtensible || function () {
        return !0
      },
      c = !n(30)(function () {
        return u(Object.preventExtensions({}))
      }),
      l = function (e) {
        s(e, o, {
          value: {
            i: "O" + ++a,
            w: {}
          }
        })
      },
      f = e.exports = {
        KEY: o,
        NEED: !1,
        fastKey: function (e, t) {
          if (!r(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
          if (!i(e, o)) {
            if (!u(e)) return "F";
            if (!t) return "E";
            l(e)
          }
          return e[o].i
        },
        getWeak: function (e, t) {
          if (!i(e, o)) {
            if (!u(e)) return !0;
            if (!t) return !1;
            l(e)
          }
          return e[o].w
        },
        onFreeze: function (e) {
          return c && f.NEED && u(e) && !i(e, o) && l(e), e
        }
      }
  }, function (e, t, n) {
    var o = n(34),
      r = n(65),
      i = n(47);
    e.exports = function (e) {
      var t = o(e),
        n = r.f;
      if (n)
        for (var s, a = n(e), u = i.f, c = 0; a.length > c;) u.call(e, s = a[c++]) && t.push(s);
      return t
    }
  }, function (e, t, n) {
    var o = n(35);
    e.exports = Array.isArray || function (e) {
      return "Array" == o(e)
    }
  }, function (e, t, n) {
    var o = n(29),
      r = n(91).f,
      i = {}.toString,
      s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    e.exports.f = function (e) {
      return s && "[object Window]" == i.call(e) ? function (e) {
        try {
          return r(e)
        } catch (t) {
          return s.slice()
        }
      }(e) : r(o(e))
    }
  }, function (e, t, n) {
    n(64)("asyncIterator")
  }, function (e, t, n) {
    n(64)("observable")
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.UUID = undefined;
    var o = s(n(0)),
      r = s(n(1)),
      i = s(n(148));

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var a = function () {
      function e() {
        (0, o["default"])(this, e)
      }
      return (0, r["default"])(e, null, [{
        key: "get",
        value: function () {
          return (0, i["default"])().replace(/-/g, "")
        }
      }]), e
    }();
    t.UUID = a
  }, function (e, t, n) {
    var o, r, i = n(149),
      s = n(150),
      a = 0,
      u = 0;
    e.exports = function (e, t, n) {
      var c = t && n || 0,
        l = t || [],
        f = (e = e || {}).node || o,
        d = e.clockseq !== undefined ? e.clockseq : r;
      if (null == f || null == d) {
        var p = i();
        null == f && (f = o = [1 | p[0], p[1], p[2], p[3], p[4], p[5]]), null == d && (d = r = 16383 & (p[6] << 8 | p[7]))
      }
      var h = e.msecs !== undefined ? e.msecs : (new Date).getTime(),
        y = e.nsecs !== undefined ? e.nsecs : u + 1,
        v = h - a + (y - u) / 1e4;
      if (v < 0 && e.clockseq === undefined && (d = d + 1 & 16383), (v < 0 || h > a) && e.nsecs === undefined && (y = 0), y >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
      a = h, u = y, r = d;
      var m = (1e4 * (268435455 & (h += 122192928e5)) + y) % 4294967296;
      l[c++] = m >>> 24 & 255, l[c++] = m >>> 16 & 255, l[c++] = m >>> 8 & 255, l[c++] = 255 & m;
      var g = h / 4294967296 * 1e4 & 268435455;
      l[c++] = g >>> 8 & 255, l[c++] = 255 & g, l[c++] = g >>> 24 & 15 | 16, l[c++] = g >>> 16 & 255, l[c++] = d >>> 8 | 128, l[c++] = 255 & d;
      for (var b = 0; b < 6; ++b) l[c + b] = f[b];
      return t || s(l)
    }
  }, function (e, t) {
    var n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof window.msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto);
    if (n) {
      var o = new Uint8Array(16);
      e.exports = function () {
        return n(o), o
      }
    } else {
      var r = new Array(16);
      e.exports = function () {
        for (var e, t = 0; t < 16; t++) 0 == (3 & t) && (e = 4294967296 * Math.random()), r[t] = e >>> ((3 & t) << 3) & 255;
        return r
      }
    }
  }, function (e, t) {
    for (var n = [], o = 0; o < 256; ++o) n[o] = (o + 256).toString(16).substr(1);
    e.exports = function (e, t) {
      var o = t || 0,
        r = n;
      return [r[e[o++]], r[e[o++]], r[e[o++]], r[e[o++]], "-", r[e[o++]], r[e[o++]], "-", r[e[o++]], r[e[o++]], "-", r[e[o++]], r[e[o++]], "-", r[e[o++]], r[e[o++]], r[e[o++]], r[e[o++]], r[e[o++]], r[e[o++]]].join("")
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.goEasyArray = undefined;
    var o = u(n(2)),
      r = u(n(0)),
      i = u(n(1)),
      s = u(n(3)),
      a = u(n(4));

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var c = new(function (e) {
      function t() {
        return (0, r["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).apply(this, arguments))
      }
      return (0, a["default"])(t, e), (0, i["default"])(t, [{
        key: "deleteByKey",
        value: function (e, t, n) {
          var o = e.findIndex(function (e) {
            return e[t] == n
          });
          o > -1 && e.splice(o, 1)
        }
      }, {
        key: "unshiftGuid",
        value: function (e) {
          var t = !1,
            n = this.findIndex(function (t) {
              return t == e
            });
          for (n > -1 && (t = !0, this.splice(n, 1)), this.unshift(e); this.length > 300;) this.pop();
          return t
        }
      }]), t
    }(Array));
    t.goEasyArray = c
  }, function (e, t, n) {
    n(153), e.exports = n(7).Object.getPrototypeOf
  }, function (e, t, n) {
    var o = n(38),
      r = n(89);
    n(67)("getPrototypeOf", function () {
      return function (e) {
        return r(o(e))
      }
    })
  }, function (e, t, n) {
    e.exports = {
      "default": n(155),
      __esModule: !0
    }
  }, function (e, t, n) {
    n(156), e.exports = n(7).Object.setPrototypeOf
  }, function (e, t, n) {
    var o = n(17);
    o(o.S, "Object", {
      setPrototypeOf: n(157).set
    })
  }, function (e, t, n) {
    var o = n(23),
      r = n(18),
      i = function (e, t) {
        if (r(e), !o(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
      };
    e.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, o) {
        try {
          (o = n(33)(Function.call, n(66).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
        } catch (r) {
          t = !0
        }
        return function (e, n) {
          return i(e, n), t ? e.__proto__ = n : o(e, n), e
        }
      }({}, !1) : undefined),
      check: i
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.storage = undefined;
    var o = i(n(0)),
      r = i(n(1));

    function i(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var s = new(function () {
      function e() {
        (0, o["default"])(this, e)
      }
      return (0, r["default"])(e, [{
        key: "getCookie",
        value: function () {
          var e, t = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
          return (e = document.cookie.match(t)) ? unescape(e[2]) : null
        }
      }, {
        key: "getData",
        value: function (e) {
          return window.localStorage ? window.localStorage.getItem(e) : this.getCookie(e)
        }
      }, {
        key: "setCookie",
        value: function (e, t) {
          var n = new Date;
          n.setTime(n.getTime() + 2592e6), document.cookie = e + "=" + escape(t) + ";expires=" + n.toGMTString()
        }
      }, {
        key: "setData",
        value: function (e, t) {
          window.localStorage ? window.localStorage.setItem(e, t) : this.setCookie(e, t)
        }
      }]), e
    }());
    t.storage = s
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t["default"] = {
      connectTimeout: 3e3,
      authorizeTimeout: 5e3,
      historyTimeout: 3e3,
      hereNowTimeout: 3e3,
      publishTimeout: 3e3,
      subscribeTimeout: 3e3,
      manualDisconnectTimeout: 1500,
      emitRetryFrequency: 500,
      maxRetries: 3,
      maxNumber: 10
    }
  }, function (e, t, n) {
    n(92), n(86), n(90), n(161), n(173), n(174), e.exports = n(7).Promise
  }, function (e, t, n) {
    "use strict";
    var o, r, i, s, a = n(36),
      u = n(11),
      c = n(33),
      l = n(95),
      f = n(17),
      d = n(23),
      p = n(43),
      h = n(162),
      y = n(163),
      v = n(96),
      m = n(97).set,
      g = n(168)(),
      b = n(68),
      _ = n(98),
      C = n(169),
      k = n(99),
      w = u.TypeError,
      E = u.process,
      T = E && E.versions,
      O = T && T.v8 || "",
      S = u.Promise,
      M = "process" == l(E),
      P = function () {},
      N = r = b.f,
      I = !! function () {
        try {
          var e = S.resolve(1),
            t = (e.constructor = {})[n(12)("species")] = function (e) {
              e(P, P)
            };
          return (M || "function" == typeof PromiseRejectionEvent) && e.then(P) instanceof t && 0 !== O.indexOf("6.6") && -1 === C.indexOf("Chrome/66")
        } catch (o) {}
      }(),
      F = function (e) {
        var t;
        return !(!d(e) || "function" != typeof (t = e.then)) && t
      },
      x = function (e, t) {
        if (!e._n) {
          e._n = !0;
          var n = e._c;
          g(function () {
            for (var o = e._v, r = 1 == e._s, i = 0, s = function (t) {
                var n, i, s, a = r ? t.ok : t.fail,
                  u = t.resolve,
                  c = t.reject,
                  l = t.domain;
                try {
                  a ? (r || (2 == e._h && j(e), e._h = 1), !0 === a ? n = o : (l && l.enter(), n = a(o), l && (l.exit(), s = !0)), n === t.promise ? c(w("Promise-chain cycle")) : (i = F(n)) ? i.call(n, u, c) : u(n)) : c(o)
                } catch (f) {
                  l && !s && l.exit(), c(f)
                }
              }; n.length > i;) s(n[i++]);
            e._c = [], e._n = !1, t && !e._h && R(e)
          })
        }
      },
      R = function (e) {
        m.call(u, function () {
          var t, n, o, r = e._v,
            i = A(e);
          if (i && (t = _(function () {
              M ? E.emit("unhandledRejection", r, e) : (n = u.onunhandledrejection) ? n({
                promise: e,
                reason: r
              }) : (o = u.console) && o.error && o.error("Unhandled promise rejection", r)
            }), e._h = M || A(e) ? 2 : 1), e._a = undefined, i && t.e) throw t.v
        })
      },
      A = function (e) {
        return 1 !== e._h && 0 === (e._a || e._c).length
      },
      j = function (e) {
        m.call(u, function () {
          var t;
          M ? E.emit("rejectionHandled", e) : (t = u.onrejectionhandled) && t({
            promise: e,
            reason: e._v
          })
        })
      },
      D = function (e) {
        var t = this;
        t._d || (t._d = !0, (t = t._w || t)._v = e, t._s = 2, t._a || (t._a = t._c.slice()), x(t, !0))
      },
      U = function (e) {
        var t, n = this;
        if (!n._d) {
          n._d = !0, n = n._w || n;
          try {
            if (n === e) throw w("Promise can't be resolved itself");
            (t = F(e)) ? g(function () {
              var o = {
                _w: n,
                _d: !1
              };
              try {
                t.call(e, c(U, o, 1), c(D, o, 1))
              } catch (r) {
                D.call(o, r)
              }
            }): (n._v = e, n._s = 1, x(n, !1))
          } catch (o) {
            D.call({
              _w: n,
              _d: !1
            }, o)
          }
        }
      };
    I || (S = function (e) {
      h(this, S, "Promise", "_h"), p(e), o.call(this);
      try {
        e(c(U, this, 1), c(D, this, 1))
      } catch (t) {
        D.call(this, t)
      }
    }, (o = function (e) {
      this._c = [], this._a = undefined, this._s = 0, this._d = !1, this._v = undefined, this._h = 0, this._n = !1
    }).prototype = n(170)(S.prototype, {
      then: function (e, t) {
        var n = N(v(this, S));
        return n.ok = "function" != typeof e || e, n.fail = "function" == typeof t && t, n.domain = M ? E.domain : undefined, this._c.push(n), this._a && this._a.push(n), this._s && x(this, !1), n.promise
      },
      "catch": function (e) {
        return this.then(undefined, e)
      }
    }), i = function () {
      var e = new o;
      this.promise = e, this.resolve = c(U, e, 1), this.reject = c(D, e, 1)
    }, b.f = N = function (e) {
      return e === S || e === s ? new i(e) : r(e)
    }), f(f.G + f.W + f.F * !I, {
      Promise: S
    }), n(46)(S, "Promise"), n(171)("Promise"), s = n(7).Promise, f(f.S + f.F * !I, "Promise", {
      reject: function (e) {
        var t = N(this);
        return (0, t.reject)(e), t.promise
      }
    }), f(f.S + f.F * (a || !I), "Promise", {
      resolve: function (e) {
        return k(a && this === s ? S : this, e)
      }
    }), f(f.S + f.F * !(I && n(172)(function (e) {
      S.all(e)["catch"](P)
    })), "Promise", {
      all: function (e) {
        var t = this,
          n = N(t),
          o = n.resolve,
          r = n.reject,
          i = _(function () {
            var n = [],
              i = 0,
              s = 1;
            y(e, !1, function (e) {
              var a = i++,
                u = !1;
              n.push(undefined), s++, t.resolve(e).then(function (e) {
                u || (u = !0, n[a] = e, --s || o(n))
              }, r)
            }), --s || o(n)
          });
        return i.e && r(i.v), n.promise
      },
      race: function (e) {
        var t = this,
          n = N(t),
          o = n.reject,
          r = _(function () {
            y(e, !1, function (e) {
              t.resolve(e).then(n.resolve, o)
            })
          });
        return r.e && o(r.v), n.promise
      }
    })
  }, function (e, t) {
    e.exports = function (e, t, n, o) {
      if (!(e instanceof t) || o !== undefined && o in e) throw TypeError(n + ": incorrect invocation!");
      return e
    }
  }, function (e, t, n) {
    var o = n(33),
      r = n(164),
      i = n(165),
      s = n(18),
      a = n(82),
      u = n(166),
      c = {},
      l = {};
    (t = e.exports = function (e, t, n, f, d) {
      var p, h, y, v, m = d ? function () {
          return e
        } : u(e),
        g = o(n, f, t ? 2 : 1),
        b = 0;
      if ("function" != typeof m) throw TypeError(e + " is not iterable!");
      if (i(m)) {
        for (p = a(e.length); p > b; b++)
          if ((v = t ? g(s(h = e[b])[0], h[1]) : g(e[b])) === c || v === l) return v
      } else
        for (y = m.call(e); !(h = y.next()).done;)
          if ((v = r(y, g, h.value, t)) === c || v === l) return v
    }).BREAK = c, t.RETURN = l
  }, function (e, t, n) {
    var o = n(18);
    e.exports = function (e, t, n, r) {
      try {
        return r ? t(o(n)[0], n[1]) : t(n)
      } catch (s) {
        var i = e["return"];
        throw i !== undefined && o(i.call(e)), s
      }
    }
  }, function (e, t, n) {
    var o = n(37),
      r = n(12)("iterator"),
      i = Array.prototype;
    e.exports = function (e) {
      return e !== undefined && (o.Array === e || i[r] === e)
    }
  }, function (e, t, n) {
    var o = n(95),
      r = n(12)("iterator"),
      i = n(37);
    e.exports = n(7).getIteratorMethod = function (e) {
      if (e != undefined) return e[r] || e["@@iterator"] || i[o(e)]
    }
  }, function (e, t) {
    e.exports = function (e, t, n) {
      var o = n === undefined;
      switch (t.length) {
        case 0:
          return o ? e() : e.call(n);
        case 1:
          return o ? e(t[0]) : e.call(n, t[0]);
        case 2:
          return o ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
        case 3:
          return o ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
        case 4:
          return o ? e(t[0], t[1], t[2], t[3]) : e.call(n, t[0], t[1], t[2], t[3])
      }
      return e.apply(n, t)
    }
  }, function (e, t, n) {
    var o = n(11),
      r = n(97).set,
      i = o.MutationObserver || o.WebKitMutationObserver,
      s = o.process,
      a = o.Promise,
      u = "process" == n(35)(s);
    e.exports = function () {
      var e, t, n, c = function () {
        var o, r;
        for (u && (o = s.domain) && o.exit(); e;) {
          r = e.fn, e = e.next;
          try {
            r()
          } catch (i) {
            throw e ? n() : t = undefined, i
          }
        }
        t = undefined, o && o.enter()
      };
      if (u) n = function () {
        s.nextTick(c)
      };
      else if (!i || o.navigator && o.navigator.standalone)
        if (a && a.resolve) {
          var l = a.resolve(undefined);
          n = function () {
            l.then(c)
          }
        } else n = function () {
          r.call(o, c)
        };
      else {
        var f = !0,
          d = document.createTextNode("");
        new i(c).observe(d, {
          characterData: !0
        }), n = function () {
          d.data = f = !f
        }
      }
      return function (o) {
        var r = {
          fn: o,
          next: undefined
        };
        t && (t.next = r), e || (e = r, n()), t = r
      }
    }
  }, function (e, t, n) {
    var o = n(11).navigator;
    e.exports = o && o.userAgent || ""
  }, function (e, t, n) {
    var o = n(27);
    e.exports = function (e, t, n) {
      for (var r in t) n && e[r] ? e[r] = t[r] : o(e, r, t[r]);
      return e
    }
  }, function (e, t, n) {
    "use strict";
    var o = n(11),
      r = n(7),
      i = n(22),
      s = n(19),
      a = n(12)("species");
    e.exports = function (e) {
      var t = "function" == typeof r[e] ? r[e] : o[e];
      s && t && !t[a] && i.f(t, a, {
        configurable: !0,
        get: function () {
          return this
        }
      })
    }
  }, function (e, t, n) {
    var o = n(12)("iterator"),
      r = !1;
    try {
      var i = [7][o]();
      i["return"] = function () {
        r = !0
      }, Array.from(i, function () {
        throw 2
      })
    } catch (s) {}
    e.exports = function (e, t) {
      if (!t && !r) return !1;
      var n = !1;
      try {
        var i = [7],
          a = i[o]();
        a.next = function () {
          return {
            done: n = !0
          }
        }, i[o] = function () {
          return a
        }, e(i)
      } catch (s) {}
      return n
    }
  }, function (e, t, n) {
    "use strict";
    var o = n(17),
      r = n(7),
      i = n(11),
      s = n(96),
      a = n(99);
    o(o.P + o.R, "Promise", {
      "finally": function (e) {
        var t = s(this, r.Promise || i.Promise),
          n = "function" == typeof e;
        return this.then(n ? function (n) {
          return a(t, e()).then(function () {
            return n
          })
        } : e, n ? function (n) {
          return a(t, e()).then(function () {
            throw n
          })
        } : e)
      }
    })
  }, function (e, t, n) {
    "use strict";
    var o = n(17),
      r = n(68),
      i = n(98);
    o(o.S, "Promise", {
      "try": function (e) {
        var t = r.f(this),
          n = i(e);
        return (n.e ? t.reject : t.resolve)(n.v), t.promise
      }
    })
  }, function (e, t, n) {
    var o = n(7),
      r = o.JSON || (o.JSON = {
        stringify: JSON.stringify
      });
    e.exports = function (e) {
      return r.stringify.apply(r, arguments)
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.Conversations = undefined;
    var o = g(n(5)),
      r = g(n(177)),
      i = g(n(0)),
      s = g(n(1)),
      a = n(100),
      u = g(n(39)),
      c = n(24),
      l = n(69),
      f = g(n(13)),
      d = g(n(10)),
      p = n(31),
      h = n(14),
      y = n(6),
      v = g(n(48)),
      m = g(n(49));

    function g(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    t.Conversations = function () {
      function e(t) {
        (0, i["default"])(this, e), this.im = null, this.list = [], this.synchronized = !1, this.im = t, t._iMReceiver.addIMMessageObserver(this.updateByInMessage.bind(this))
      }
      return (0, s["default"])(e, [{
        key: "onUpdated",
        value: function () {
          var e = this;
          this.latestConversations().then(function () {
            e.im._event.notify(c.ImEventType.CONVERSATIONS_UPDATED, {
              unreadTotal: e.getUnreadTotal(e.list),
              conversations: e.list.slice(0)
            })
          })
        }
      }, {
        key: "latestConversations",
        value: function () {
          return this.synchronized ? this.loadLocalConversations() : this.loadServerConversations()
        }
      }, {
        key: "updateByInMessage",
        value: function (e) {
          var t = this,
            n = null;
          n = e.t == l.ConversationType.GROUP ? e.r : u["default"].userId == e.r ? e.s : e.r;
          var o = this.list.findIndex(function (t) {
              return e.t == l.ConversationType.GROUP && n == t.groupId || e.t == l.ConversationType.PRIVATE && n == t.userId
            }),
            r = void 0;

          function i(e) {
            e.type === l.ConversationType.PRIVATE && (u["default"].userId === e.lastMessage.senderId ? e.lastMessage.senderData = u["default"].userData : e.lastMessage.senderData = e.data)
          }
          o > -1 ? (r = this.list[o], this.list.splice(o, 1), r.lc < e.ts && (r.lastMessage = v["default"].assemble(e), r.lm = e.ts), u["default"].userId != e.senderId && (r.unread += 1), i(r), this.insertOne(r), this.onUpdated()) : (r = a.Conversion.buildByInMessage(e), u["default"].userId != e.senderId && (r.unread += 1), this.insertOne(r), this.im._dataCache.loadData(n, e.t).then(function (e) {
            r.data = e, i(r), t.onUpdated()
          })["catch"](function (t) {
            e.t
          }))
        }
      }, {
        key: "updateByOutMessage",
        value: function (e, t, n, o) {
          var i = {};
          (0, r["default"])(i, e), delete i.file;
          var s = this.list.findIndex(function (e) {
              return e.type == l.ConversationType.GROUP && n == e.groupId || e.type == l.ConversationType.PRIVATE && n == e.userId
            }),
            c = void 0;
          s > -1 ? (c = this.list[s], this.list.splice(s, 1), c.unread = 0, c.lc = c.lm, c.lastMessage = i, e.status === m["default"].success && (c.lc = e.timestamp, c.lm = e.timestamp)) : c = a.Conversion.buildByOutMessage(i, t, n, o), c.data = o;
          var f = this.im._dataCache;
          t === l.ConversationType.GROUP ? f.putGroupData(c.groupId, o) : (f.putUserData(c.userId, o), c.lastMessage.senderData = u["default"].userData), this.insertOne(c), this.onUpdated()
        }
      }, {
        key: "imLastConversations",
        value: function (e, t) {
          var n = new f["default"]({
            name: h.EmitType.imLastConversations,
            params: {},
            permission: d["default"].READ,
            singleTimeout: p.SocketTimeout.commonQuerySingle,
            totalTimeout: p.SocketTimeout.commonQueryTotal,
            fail: t,
            success: e
          });
          this.im._goEasySocket.emit(n)
        }
      }, {
        key: "loadServerConversations",
        value: function () {
          var e = this,
            t = this.im;
          return new o["default"](function (n, o) {
            e.imLastConversations(function (r) {
              if (200 == r.code) {
                for (var i = r.content, s = function (n, o) {
                    var r = i[n],
                      s = e.list.find(function (e) {
                        return r.t == l.ConversationType.GROUP && r.g == e.groupId || r.t == l.ConversationType.PRIVATE && r.uid == e.userId
                      });
                    y.calibrator.isDef(s) ? s.top = r.top : (s = a.Conversion.buildByConversation(t._dataCache, r), e.insertOne(s))
                  }, u = 0, c = i.length; u < c; u++) s(u);
                e.synchronized = !0, n({
                  code: 200,
                  content: {
                    unreadTotal: e.getUnreadTotal(e.list),
                    conversations: e.list.slice(0)
                  }
                })
              } else o(r)
            }, function (e) {
              o({
                code: e.resultCode,
                content: e.content
              })
            })
          })
        }
      }, {
        key: "loadLocalConversations",
        value: function () {
          var e = this,
            t = [];
          return this.list.map(function (n) {
            if (!n.data) {
              var o = "private" == n.t ? n.userId : n.groupId,
                r = e.im._dataCache.loadData(o, n.t);
              r.then(function (e) {
                n.data = e
              })["catch"](function (e) {
                n.type
              }), t.push(r)
            }
          }), 0 != t.length ? new o["default"](function (n, r) {
            o["default"].all(t).then(function () {
              n({
                code: 200,
                content: {
                  unreadTotal: e.getUnreadTotal(e.list),
                  conversations: e.list.slice(0)
                }
              })
            })["catch"](function (e) {
              r({
                code: 408,
                content: e.message
              })
            })
          }) : o["default"].resolve({
            code: 200,
            content: {
              unreadTotal: this.getUnreadTotal(this.list),
              conversations: this.list
            }
          })
        }
      }, {
        key: "privateMarkAsRead",
        value: function (e) {
          var t = this.list.find(function (t) {
              return t.userId == e
            }),
            n = {
              friendId: e
            };
          return this.markAsRead(n, t)
        }
      }, {
        key: "groupMarkAsRead",
        value: function (e) {
          var t = this.list.find(function (t) {
              return t.groupId === e
            }),
            n = {
              groupId: e
            };
          return this.markAsRead(n, t)
        }
      }, {
        key: "markAsRead",
        value: function (e, t) {
          var n = this;
          return !t || t.unread <= 0 ? o["default"].resolve({
            code: 200,
            content: "OK"
          }) : (e.lastTimestamp = t.lm, e.lastConsumedTimestamp = t.lc, new o["default"](function (o, r) {
            var i = t.type == l.ConversationType.PRIVATE ? h.EmitType.markPrivateMessageAsRead : h.EmitType.markGroupMessageAsRead;
            n.requestEmit(i, e, function (e) {
              200 == e.code ? (n.resetConversation(t, t.lm, e.content.amount), o({
                code: 200,
                content: "OK"
              })) : r(e)
            }, function (e) {
              r(e || {
                code: e.code || 408,
                content: e.content || "Failed to query message"
              })
            })
          }))
        }
      }, {
        key: "resetConversation",
        value: function (e, t, n) {
          t <= e.lc || (e.unread -= n, e.lc = t, this.onUpdated())
        }
      }, {
        key: "getUnreadTotal",
        value: function (e) {
          for (var t = 0, n = 0, o = e.length; n < o; n++) t += e[n].unread;
          return t
        }
      }, {
        key: "insertOne",
        value: function (e) {
          var t = this.getPosIndex(e);
          this.list.splice(t + 1, 0, e)
        }
      }, {
        key: "getPosIndex",
        value: function (e) {
          if (0 == this.list.length) return -1;
          for (var t, n, o = 0, r = this.list.length; r - o > 1;) {
            t = Math.floor((o + r) / 2), n = this.list[t];
            var i = this.compares(e, n);
            if (0 == i) return t;
            i > 0 ? o = t : r = t
          }
          return 0 == o && this.compares(this.list[0], e) > 0 ? -1 : o
        }
      }, {
        key: "compares",
        value: function (e, t) {
          var n = void 0;
          return (n = e.top == t.top ? t.lastMessage.timestamp - e.lastMessage.timestamp : e.top ? -1 : 1) > 0 ? 1 : 0 === n ? 0 : -1
        }
      }, {
        key: "removeConversation",
        value: function (e, t) {
          var n = this,
            r = t == l.ConversationType.PRIVATE ? "userId" : "groupId";
          return y.calibrator.isStringOrNumber(e) ? (y.calibrator.isNumber(e) && (e = e.toString()), -1 == this.findConversationIndex(t, e) ? o["default"].reject({
            code: 400,
            content: "Failed to remove conversation, " + r + " does not exists."
          }) : new o["default"](function (o, r) {
            var i = {
              targetId: e,
              type: t
            };
            n.requestEmit(h.EmitType.removeConversation, i, function (i) {
              var s = n.findConversationIndex(t, e);
              s > -1 && n.list.splice(s, 1), n.onUpdated(), 200 == i.code ? o({}) : r({
                code: i.code || 408,
                content: i.content || "Failed to remove conversation"
              })
            }, function (e) {
              r({
                code: e.code || 408,
                content: e.content || "Failed to remove conversation"
              })
            })
          })) : o["default"].reject({
            code: 400,
            content: "Failed to remove conversation, " + r + " must be  a string or integer."
          })
        }
      }, {
        key: "topConversation",
        value: function (e, t, n) {
          var r = this,
            i = n == l.ConversationType.PRIVATE ? "userId" : "groupId";
          if (!y.calibrator.isStringOrNumber(e)) return o["default"].reject({
            code: 400,
            content: "Failed to top conversation, " + i + " must be a string or integer."
          });
          y.calibrator.isNumber(e) && (e = e.toString());
          var s = this.findConversationIndex(n, e);
          return -1 == s || this.list[s].top == t ? o["default"].reject({
            code: 400,
            content: "Failed to top conversation, " + i + " does not exists."
          }) : new o["default"](function (o, i) {
            var s = {
              targetId: e,
              top: t,
              type: n
            };
            r.requestEmit(h.EmitType.topConversation, s, function () {
              var i = r.findConversationIndex(n, e),
                s = r.list[i];
              s.top = t, r.list.splice(i, 1), r.insertOne(s), r.onUpdated(), o({})
            }, function (e) {
              i({
                code: e.code || 408,
                content: e.content || "Failed to top Conversation"
              })
            })
          })
        }
      }, {
        key: "requestEmit",
        value: function (e, t, n, o) {
          var r = new f["default"]({
            name: e,
            params: t,
            permission: d["default"].WRITE,
            singleTimeout: p.SocketTimeout.commonRequestSingle,
            totalTimeout: p.SocketTimeout.commonRequestTotal,
            success: n,
            fail: o
          });
          this.im._goEasySocket.emit(r)
        }
      }, {
        key: "findConversationIndex",
        value: function (e, t) {
          return this.list.findIndex(function (n) {
            return e == l.ConversationType.PRIVATE ? n.type == e && n.userId == t : n.type == e && n.groupId == t
          })
        }
      }]), e
    }()
  }, function (e, t, n) {
    e.exports = {
      "default": n(178),
      __esModule: !0
    }
  }, function (e, t, n) {
    n(179), e.exports = n(7).Object.assign
  }, function (e, t, n) {
    var o = n(17);
    o(o.S + o.F, "Object", {
      assign: n(180)
    })
  }, function (e, t, n) {
    "use strict";
    var o = n(19),
      r = n(34),
      i = n(65),
      s = n(47),
      a = n(38),
      u = n(81),
      c = Object.assign;
    e.exports = !c || n(30)(function () {
      var e = {},
        t = {},
        n = Symbol(),
        o = "abcdefghijklmnopqrst";
      return e[n] = 7, o.split("").forEach(function (e) {
        t[e] = e
      }), 7 != c({}, e)[n] || Object.keys(c({}, t)).join("") != o
    }) ? function (e, t) {
      for (var n = a(e), c = arguments.length, l = 1, f = i.f, d = s.f; c > l;)
        for (var p, h = u(arguments[l++]), y = f ? r(h).concat(f(h)) : r(h), v = y.length, m = 0; v > m;) p = y[m++], o && !d.call(h, p) || (n[p] = h[p]);
      return n
    } : c
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.str = undefined;
    var o = s(n(0)),
      r = s(n(1)),
      i = n(85);

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var a = new(function () {
      function e() {
        (0, o["default"])(this, e)
      }
      return (0, r["default"])(e, [{
        key: "fileExtension",
        value: function (e, t) {
          if (i.calibrator.isString(e)) try {
            var n = e.split(t);
            return n[n.length - 1]
          } catch (o) {
            throw Error(o)
          }
        }
      }]), e
    }());
    t.str = a
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.messageCreator = undefined;
    var o = _(n(0)),
      r = _(n(1)),
      i = _(n(50)),
      s = _(n(186)),
      a = _(n(187)),
      u = _(n(188)),
      c = _(n(51)),
      l = _(n(189)),
      f = _(n(190)),
      d = _(n(191)),
      p = _(n(192)),
      h = _(n(193)),
      y = _(n(194)),
      v = _(n(101)),
      m = _(n(102)),
      g = _(n(52)),
      b = _(n(195));

    function _(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var C = new(function () {
      function e() {
        (0, o["default"])(this, e), this.messageTypes = {
          wx: {
            image: s["default"],
            file: i["default"],
            audio: a["default"],
            video: u["default"],
            text: m["default"]
          },
          uniApp: {
            image: d["default"],
            file: c["default"],
            audio: l["default"],
            video: f["default"],
            text: m["default"]
          },
          html: {
            image: p["default"],
            file: g["default"],
            audio: h["default"],
            video: y["default"],
            text: m["default"]
          }
        }
      }
      return (0, r["default"])(e, [{
        key: "create",
        value: function (e, t) {
          var n = v["default"].resolve(),
            o = this.messageTypes[n][e];
          return o ? new o(t) : new b["default"](t)
        }
      }]), e
    }());
    t.messageCreator = C
  }, function (e, t, n) {
    e.exports = {
      "default": n(184),
      __esModule: !0
    }
  }, function (e, t, n) {
    n(185);
    var o = n(7).Object;
    e.exports = function (e, t) {
      return o.getOwnPropertyDescriptor(e, t)
    }
  }, function (e, t, n) {
    var o = n(29),
      r = n(66).f;
    n(67)("getOwnPropertyDescriptor", function () {
      return function (e, t) {
        return r(o(e), t)
      }
    })
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(2)),
      r = d(n(0)),
      i = d(n(1)),
      s = d(n(3)),
      a = d(n(8)),
      u = d(n(4)),
      c = d(n(50)),
      l = d(n(9)),
      f = n(15);

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var p = function (e) {
      function t(e) {
        return (0, r["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e))
      }
      return (0, u["default"])(t, e), (0, i["default"])(t, [{
        key: "validate",
        value: function (e) {
          if ((0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e), !f.calibrator.isDef(e.file.tempFiles) || 0 == e.file.tempFiles[0].length) throw Error("tempFiles is empty.")
        }
      }, {
        key: "setType",
        value: function (e) {
          this.type = l["default"].image
        }
      }, {
        key: "setFile",
        value: function (e) {
          var t = "chooseMedia:ok" == e.errMsg ? e.tempFiles[0].tempFilePath : e.tempFiles[0].path;
          e.tempFiles[0].path = t, this.file = e
        }
      }, {
        key: "setPayload",
        value: function (e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e);
          var n = this,
            r = e.file.tempFiles[0],
            i = "chooseMedia:ok" == e.file.errMsg ? r.tempFilePath : r.path;
          this.payload.url = i, this.payload.size = r.size, this.payload.width = "", this.payload.height = "", this.payload.contentType = "";
          var s = f.calibrator.isEmpty(r.name) || r.name == undefined ? i : r.name;
          this.payload.name = "wx-image." + f.str.fileExtension(s, "."), this.payload.contentType = "image/" + f.str.fileExtension(s, "."), wx.getImageInfo({
            src: i,
            success: function (e) {
              n.payload.width = e.width, n.payload.height = e.height
            }
          })
        }
      }]), t
    }(c["default"]);
    t["default"] = p
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(2)),
      r = d(n(0)),
      i = d(n(1)),
      s = d(n(3)),
      a = d(n(8)),
      u = d(n(4)),
      c = d(n(50)),
      l = d(n(9)),
      f = n(15);

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var p = function (e) {
      function t(e) {
        return (0, r["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e))
      }
      return (0, u["default"])(t, e), (0, i["default"])(t, [{
        key: "validate",
        value: function (e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e)
        }
      }, {
        key: "setType",
        value: function (e) {
          this.type = l["default"].audio
        }
      }, {
        key: "setPayload",
        value: function (e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e);
          var n = e.file.tempFilePath;
          this.payload.url = n, this.payload.duration = e.file.duration / 1e3, this.payload.size = e.file.fileSize;
          var r = f.calibrator.isEmpty(e.file.name) || e.file.name == undefined ? n : e.file.name;
          this.payload.contentType = "audio/" + f.str.fileExtension(r, "."), this.payload.name = "wx-audio." + f.str.fileExtension(r, ".")
        }
      }]), t
    }(c["default"]);
    t["default"] = p
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = h(n(16)),
      r = h(n(2)),
      i = h(n(0)),
      s = h(n(1)),
      a = h(n(3)),
      u = h(n(8)),
      c = h(n(4)),
      l = h(n(50)),
      f = h(n(9)),
      d = n(6),
      p = n(15);

    function h(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var y = function (e) {
      function t(e) {
        return (0, i["default"])(this, t), (0, a["default"])(this, (t.__proto__ || (0, r["default"])(t)).call(this, e))
      }
      return (0, c["default"])(t, e), (0, s["default"])(t, [{
        key: "validate",
        value: function (e) {
          (0, u["default"])(t.prototype.__proto__ || (0, r["default"])(t.prototype), "validate", this).call(this, e)
        }
      }, {
        key: "setType",
        value: function (e) {
          this.type = f["default"].video
        }
      }, {
        key: "setFile",
        value: function (e) {
          this.file = "chooseMedia:ok" == e.errMsg ? e.tempFiles[0] : e
        }
      }, {
        key: "setPayload",
        value: function (e) {
          this.payload = (0, o["default"])(null);
          var t = (0, o["default"])(null),
            n = (0, o["default"])(null),
            r = "chooseMedia:ok" == e.file.errMsg ? e.file.tempFiles[0] : e.file,
            i = r.duration,
            s = r.height,
            a = r.size,
            u = r.tempFilePath,
            c = r.thumbTempFilePath,
            l = r.width,
            f = r.name,
            h = f === undefined ? "" : f,
            y = d.calibrator.isEmpty(h) ? u : h;
          t.contentType = "video/" + p.str.fileExtension(y, "."), t.name = "wx-video." + p.str.fileExtension(y, "."), t.url = u, t.width = n.width = l, t.height = n.height = s, t.size = a, t.duration = i, n.url = c, n.contentType = "image/jpg", n.name = "wx-thumbnail.jpg", this.payload.video = t, this.payload.thumbnail = n
        }
      }]), t
    }(l["default"]);
    t["default"] = y
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(2)),
      r = d(n(0)),
      i = d(n(1)),
      s = d(n(3)),
      a = d(n(8)),
      u = d(n(4)),
      c = d(n(51)),
      l = d(n(9)),
      f = n(15);

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var p = function (e) {
      function t(e) {
        return (0, r["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e))
      }
      return (0, u["default"])(t, e), (0, i["default"])(t, [{
        key: "validate",
        value: function (e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e)
        }
      }, {
        key: "setType",
        value: function (e) {
          this.type = l["default"].audio
        }
      }, {
        key: "setPayload",
        value: function (e) {
          var n = this;
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e);
          var r = this,
            i = e.file.tempFilePath;
          this.payload.url = i;
          var s = f.calibrator.isEmpty(e.file.name) || e.file.name == undefined ? i : e.file.name;
          if (this.payload.contentType = "audio/" + f.str.fileExtension(s, "."), this.payload.name = "uni-audio." + f.str.fileExtension(s, "."), f.calibrator.isDef(e.file.duration)) this.payload.duration = e.file.duration / 1e3;
          else {
            this.payload.duration = 0;
            var u = uni.createInnerAudioContext();
            u.src = i, u.onCanplay(function (e) {
              r.payload.duration = u.duration, u.destroy()
            })
          }
          uni.getFileInfo({
            filePath: i,
            success: function (e) {
              n.payload.size = e.size
            }
          })
        }
      }]), t
    }(c["default"]);
    t["default"] = p
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = p(n(16)),
      r = p(n(2)),
      i = p(n(0)),
      s = p(n(1)),
      a = p(n(3)),
      u = p(n(8)),
      c = p(n(4)),
      l = p(n(51)),
      f = p(n(9)),
      d = n(15);

    function p(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var h = function (e) {
      function t(e) {
        return (0, i["default"])(this, t), (0, a["default"])(this, (t.__proto__ || (0, r["default"])(t)).call(this, e))
      }
      return (0, c["default"])(t, e), (0, s["default"])(t, [{
        key: "validate",
        value: function (e) {
          (0, u["default"])(t.prototype.__proto__ || (0, r["default"])(t.prototype), "validate", this).call(this, e)
        }
      }, {
        key: "setType",
        value: function (e) {
          this.type = f["default"].video
        }
      }, {
        key: "setPayload",
        value: function (e) {
          var t = (0, o["default"])(null),
            n = (0, o["default"])(null);
          this.payload = (0, o["default"])(null);
          var r = e.file,
            i = r.duration,
            s = r.height,
            a = r.size,
            u = r.tempFilePath,
            c = r.width,
            l = r.name,
            f = l === undefined ? "" : l,
            p = d.calibrator.isEmpty(f) ? u : f;
          t.contentType = "video/" + d.str.fileExtension(p, "."), t.name = "uni-video." + d.str.fileExtension(p, "."), t.size = a, t.duration = i, t.url = n.url = u, t.width = n.width = c, t.height = n.height = s, n.contentType = "image/jpg", n.name = "wx-thumbnail.jpg", this.payload.video = t, this.payload.thumbnail = n
        }
      }]), t
    }(l["default"]);
    t["default"] = h
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(2)),
      r = d(n(0)),
      i = d(n(1)),
      s = d(n(3)),
      a = d(n(8)),
      u = d(n(4)),
      c = d(n(51)),
      l = n(15),
      f = d(n(9));

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var p = function (e) {
      function t(e) {
        return (0, r["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e))
      }
      return (0, u["default"])(t, e), (0, i["default"])(t, [{
        key: "validate",
        value: function (e) {
          if ((0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e), !l.calibrator.isDef(e.file.tempFiles) || 0 == e.file.tempFiles[0].length) throw Error("tempFiles is empty.")
        }
      }, {
        key: "setType",
        value: function (e) {
          this.type = f["default"].image
        }
      }, {
        key: "setPayload",
        value: function (e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e);
          var n = this,
            r = e.file.tempFiles[0];
          this.payload.url = r.path, this.payload.size = r.size, this.payload.width = "", this.payload.height = "";
          var i = l.calibrator.isEmpty(r.name) || r.name == undefined ? r.path : r.name;
          this.payload.contentType = "image/" + l.str.fileExtension(i, "."), this.payload.name = "uni-image." + l.str.fileExtension(i, "."), uni.getImageInfo({
            src: r.path,
            success: function (e) {
              n.payload.width = e.width, n.payload.height = e.height
            }
          })
        }
      }]), t
    }(c["default"]);
    t["default"] = p
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(2)),
      r = f(n(0)),
      i = f(n(1)),
      s = f(n(3)),
      a = f(n(8)),
      u = f(n(4)),
      c = f(n(52)),
      l = f(n(9));

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var d = function (e) {
      function t(e) {
        return (0, r["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e))
      }
      return (0, u["default"])(t, e), (0, i["default"])(t, [{
        key: "validate",
        value: function (e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e);
          var n = ["gif", "jpg", "png", "jpeg"];
          if (!n.find(function (t) {
              return t == e.file.type.split("/")[1].toLowerCase()
            })) throw Error("Only " + n.join(",") + " is supported image.")
        }
      }, {
        key: "setType",
        value: function (e) {
          this.type = l["default"].image
        }
      }, {
        key: "setPayload",
        value: function (e) {
          var n = this;
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e);
          var r = window.URL || window.webkitURL,
            i = new Image;
          i.src = r.createObjectURL(e.file), i.onload = function () {
            n.payload.width = i.width, n.payload.height = i.height, r.revokeObjectURL(i.src)
          }
        }
      }]), t
    }(c["default"]);
    t["default"] = d
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(2)),
      r = f(n(0)),
      i = f(n(1)),
      s = f(n(3)),
      a = f(n(8)),
      u = f(n(4)),
      c = f(n(52)),
      l = f(n(9));

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var d = function (e) {
      function t(e) {
        return (0, r["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e))
      }
      return (0, u["default"])(t, e), (0, i["default"])(t, [{
        key: "validate",
        value: function (e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "validate", this).call(this, e);
          var n = ["mp3", "ogg", "wav", "wma", "ape", "acc", "mpeg"];
          if (!n.find(function (t) {
              return t == e.file.type.split("/")[1].toLowerCase()
            })) throw Error("Only " + n.join(",") + " is supported audio.")
        }
      }, {
        key: "setType",
        value: function (e) {
          this.type = l["default"].audio
        }
      }, {
        key: "setPayload",
        value: function (e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "setPayload", this).call(this, e);
          var n = this,
            r = window.URL || window.webkitURL,
            i = document.createElement("audio");
          i.src = r.createObjectURL(e.file), i.onloadedmetadata = function () {
            n.payload.duration = i.duration, r.revokeObjectURL(i.src)
          }
        }
      }]), t
    }(c["default"]);
    t["default"] = d
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(16)),
      r = d(n(2)),
      i = d(n(0)),
      s = d(n(1)),
      a = d(n(3)),
      u = d(n(8)),
      c = d(n(4)),
      l = d(n(52)),
      f = d(n(9));

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var p = function (e) {
      function t(e) {
        return (0, i["default"])(this, t), (0, a["default"])(this, (t.__proto__ || (0, r["default"])(t)).call(this, e))
      }
      return (0, c["default"])(t, e), (0, s["default"])(t, [{
        key: "validate",
        value: function (e) {
          (0, u["default"])(t.prototype.__proto__ || (0, r["default"])(t.prototype), "validate", this).call(this, e);
          var n = ["avi", "mov", "rmvb", "rm", "flv", "mp4", "3gp", "quicktime"];
          if (!n.find(function (t) {
              return t == e.file.type.split("/")[1].toLowerCase()
            })) throw Error("Only " + n.join(",") + " is supported video.")
        }
      }, {
        key: "setType",
        value: function (e) {
          this.type = f["default"].video
        }
      }, {
        key: "setPayload",
        value: function (e) {
          this.payload = (0, o["default"])(null);
          var t = (0, o["default"])(null),
            n = (0, o["default"])(null);
          t.contentType = e.file.type, t.size = e.file.size, t.duration = 0, t.url = n.url = "", t.name = e.file.name, t.width = n.width = 0, t.height = n.height = 0, n.contentType = "image/jpg", this.payload.video = t, this.payload.thumbnail = n;
          var r = this,
            i = window.URL || window.webkitURL,
            s = document.createElement("video"),
            a = i.createObjectURL(e.file);
          s.src = a, s.onloadedmetadata = function () {
            r.payload.video.duration = s.duration, r.payload.video.width = r.payload.thumbnail.width = s.videoWidth, r.payload.video.height = r.payload.thumbnail.height = s.videoHeight, r.payload.video.url = a, r.payload.thumbnail.url = function (e) {
              var t = document.createElement("canvas");
              return t.width = e.videoWidth, t.height = e.videoHeight, t.getContext("2d").drawImage(e, 0, 0, t.width, t.height), t.toDataURL("image/png")
            }(s), i.revokeObjectURL(s.src)
          }
        }
      }]), t
    }(l["default"]);
    t["default"] = p
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = l(n(2)),
      r = l(n(0)),
      i = l(n(1)),
      s = l(n(3)),
      a = l(n(4)),
      u = l(n(40)),
      c = n(6);

    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var f = function (e) {
      function t(e) {
        return (0, r["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this, e))
      }
      return (0, a["default"])(t, e), (0, i["default"])(t, [{
        key: "setType",
        value: function (e) {
          if (!c.calibrator.isStringOrNumber(e.type)) throw Error("type require a string or number.");
          if (c.calibrator.isEmpty(e.type)) throw Error("type is empty.");
          this.type = e.type
        }
      }, {
        key: "setPayload",
        value: function (e) {
          if (c.calibrator.isEmpty(e.payload)) throw Error("payload is empty.");
          if (!c.calibrator.isPlainObject(e.payload) && !c.calibrator.isStringOrNumber(e.payload)) throw Error("payload require object | string | number.");
          this.payload = e.payload
        }
      }]), t
    }(u["default"]);
    t["default"] = f
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = k(n(5)),
      r = k(n(25)),
      i = k(n(2)),
      s = k(n(0)),
      a = k(n(1)),
      u = k(n(3)),
      c = k(n(8)),
      l = k(n(4)),
      f = k(n(103)),
      d = n(14),
      p = k(n(227)),
      h = k(n(13)),
      y = k(n(10)),
      v = k(n(41)),
      m = k(n(228)),
      g = n(6),
      b = n(113),
      _ = n(21),
      C = k(n(229));

    function k(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var w = function (e) {
      function t(e) {
        (0, s["default"])(this, t);
        var n = (0, u["default"])(this, (t.__proto__ || (0, i["default"])(t)).call(this));
        return n.ioSocket = null, n.sid = null, n.appKey = null, n.userId = null, n.userData = null, n.otp = null, n.artifactVersion = "0.0.0", n.imVersion = "0.0.0", n.uri = null, n.ioOpts = null, n.type = "", n.allowNotification = !1, n.reconnectingTimes = 0, n.messageObservers = {}, n.connectFailedObservers = [], n.connectingObservers = [], n.expiredReconnectedObservers = [], n.ioSocket = new p["default"]({
          onDisconnected: n.onIoDisconnected.bind(n),
          onReconnecting: n.onIoReconnecting.bind(n)
        }), n.ioSocket.addConnectedObserver(n.onIoReconnected.bind(n)), n.appKey = e.appkey, n.userId = e.userId, n.userData = e.userData || "", n.otp = e.otp || null, n.ioOpts = e.opts, n.uri = e.uri, n.allowNotification = e.allowNotification, n.imVersion = e.imVersion, n.artifactVersion = e.artifactVersion, n.type = e.type || "", n.addConnectedObserver(e.onSuccess), n.addConnectingObserver(e.onProgress), n.addConnectFailedObserver(e.onFailed), n
      }
      return (0, l["default"])(t, e), (0, a["default"])(t, [{
        key: "onIoReconnected",
        value: function () {
          this.status === v["default"].RECONNECTING && this.authorize()
        }
      }, {
        key: "emit",
        value: function (e) {
          (0, c["default"])(t.prototype.__proto__ || (0, i["default"])(t.prototype), "emit", this).call(this, e)
        }
      }, {
        key: "doEmit",
        value: function (e, t, n) {
          b.uniApp.overrideUniShowHideMethods(), t.sid = this.sid, this.ioSocket.doEmit(e, t, n)
        }
      }, {
        key: "sendAck",
        value: function (e, t) {
          this.ioSocket.io.emit(e, t)
        }
      }, {
        key: "connect",
        value: function (e) {
          var n = this;
          ((0, c["default"])(t.prototype.__proto__ || (0, i["default"])(t.prototype), "connect", this).call(this), this.onConnecting(this.reconnectingTimes), this.ioSocket.connect({
            uri: this.uri,
            opts: this.ioOpts
          }), this.notifier = new C["default"](this), this.notifier.support()) ? this.notifier.getRegId().then(function (e) {
            n.regId = e, n.authorize()
          })["catch"](function (e) {
            console.error("注册厂商通道失败：" + (0, r["default"])(e)), n.authorize()
          }): this.authorize()
        }
      }, {
        key: "disconnect",
        value: function () {
          var e = this;
          return new o["default"](function (t, n) {
            var o = function () {
              e.status = v["default"].DISCONNECTED, e.ioSocket.disconnect(), t()
            };
            if (e.allowNotification) {
              var r = new h["default"]({
                name: d.EmitType.manualDisconnect,
                params: {},
                permission: y["default"].READ,
                singleTimeout: _.SocketTimeout.commonInfiniteSingle,
                totalTimeout: _.SocketTimeout.commonInfiniteTotal,
                fail: function (e) {
                  n(e)
                },
                success: o
              });
              e.emit(r)
            } else o()
          })
        }
      }, {
        key: "authorize",
        value: function () {
          var e = {
              appkey: this.appKey,
              userId: this.userId,
              userData: this.userData,
              otp: this.otp,
              artifactVersion: this.artifactVersion,
              type: this.type,
              sid: this.sid,
              imVersion: this.imVersion,
              allowNT: this.allowNotification,
              regId: this.regId
            },
            t = new h["default"]({
              name: d.EmitType.authorize,
              params: e,
              permission: y["default"].NONE,
              singleTimeout: _.SocketTimeout.commonInfiniteSingle,
              totalTimeout: _.SocketTimeout.commonInfiniteTotal,
              success: this.onAuthorizeSuccess.bind(this),
              fail: this.onAuthorizeFailed.bind(this)
            });
          this.ioSocket.emit(t)
        }
      }, {
        key: "onConnecting",
        value: function () {
          this.notify(this.connectingObservers, this.reconnectingTimes)
        }
      }, {
        key: "onIoReconnecting",
        value: function () {
          b.uniApp.overrideUniShowHideMethods(), this.reconnectingTimes++, this.status == v["default"].CONNECTED || this.status == v["default"].EXPIRED_RECONNECTED || this.status == v["default"].RECONNECTING ? this.status = v["default"].RECONNECTING : this.status = v["default"].CONNECTING, this.onConnecting()
        }
      }, {
        key: "onIoDisconnected",
        value: function () {
          this.status == v["default"].DISCONNECTING && (this.status = v["default"].DISCONNECTED, this.notify(this.disconnectedObservers))
        }
      }, {
        key: "onAuthorizeSuccess",
        value: function (e) {
          this.status === v["default"].RECONNECTING ? this.sid !== e.sid ? (this.status = v["default"].EXPIRED_RECONNECTED, this.notify(this.expiredReconnectedObservers)) : this.status = v["default"].RECONNECTED : (this.status = v["default"].CONNECTED, this.sid = e.sid);
          e.enablePublish && (this.permissions.find(function (e) {
            return e == y["default"].WRITE
          }) || this.permissions.push(y["default"].WRITE)), e.enableSubscribe && (this.permissions.find(function (e) {
            return e == y["default"].READ
          }) || this.permissions.push(y["default"].READ)), this.reconnectingTimes = 0, this.notify(this.connectedObservers)
        }
      }, {
        key: "onAuthorizeFailed",
        value: function (e) {
          this.ioSocket.disconnect(), this.status = v["default"].CONNECT_FAILED;
          var t = {
            code: e.resultCode || 408,
            content: e.content || "Host unreachable or timeout"
          };
          this.notify(this.connectFailedObservers, t)
        }
      }, {
        key: "addConnectingObserver",
        value: function (e) {
          g.calibrator.isFunction(e) && this.connectingObservers.push(e)
        }
      }, {
        key: "addConnectFailedObserver",
        value: function (e) {
          g.calibrator.isFunction(e) && this.connectFailedObservers.push(e)
        }
      }, {
        key: "addExpiredReconnectedObserver",
        value: function (e) {
          g.calibrator.isFunction(e) && this.expiredReconnectedObservers.push(e)
        }
      }, {
        key: "addMessageObserver",
        value: function (e, t) {
          var n = this;
          this.ioSocket.io.on(e, function (t) {
            n.notifyMessageObservers(e, t)
          }), this.messageObservers[e] || (this.messageObservers[e] = []), this.messageObservers[e].push(new m["default"](t))
        }
      }, {
        key: "notifyMessageObservers",
        value: function (e, t) {
          for (var n = this.messageObservers[e], o = 0; o < n.length; o++) n[o].onMessage(e, t)
        }
      }]), t
    }(f["default"]);
    t["default"] = w
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = s(n(0)),
      r = s(n(1)),
      i = s(n(41));

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var a = function () {
      function e(t) {
        (0, o["default"])(this, e), this.socket = null, this.socket = t
      }
      return (0, r["default"])(e, [{
        key: "emit",
        value: function (e) {
          this.socket.status !== i["default"].CONNECT_FAILED && this.socket.status !== i["default"].DISCONNECTED ? (e.start(), this.doEmit(e)) : e.fail({
            resultCode: "409",
            content: "Please connect first"
          })
        }
      }, {
        key: "doEmit",
        value: function (e) {
          var t = this;
          if (e.isTimeout()) e.fail({
            resultCode: 408,
            content: "Host unreachable or timeout"
          });
          else if (this.socket.status !== i["default"].CONNECT_FAILED)
            if (this.authenticated())
              if (this.hasPermission(e))
                if (this.socket.status === i["default"].CONNECTED || this.socket.status === i["default"].RECONNECTED || this.socket.status === i["default"].EXPIRED_RECONNECTED) {
                  if (!e.complete) {
                    var n = setTimeout(function () {
                      t.doEmit(e)
                    }, e.singleTimeout);
                    this.socket.doEmit(e.name, e.params, function (t) {
                      clearTimeout(n), 200 === t.resultCode || 200 == t.code ? e.success(t) : e.fail(t)
                    }), e.retried++
                  }
                } else setTimeout(function () {
                  t.doEmit(e)
                }, 500);
          else e.fail({
            resultCode: 401,
            content: "No permission"
          });
          else setTimeout(function () {
            t.doEmit(e)
          }, 500);
          else e.fail({
            resultCode: 408,
            content: "Failed to connect GoEasy."
          })
        }
      }, {
        key: "hasPermission",
        value: function (e) {
          return !!this.socket.permissions.find(function (t) {
            return t === e.permission
          })
        }
      }, {
        key: "authenticated",
        value: function () {
          return this.socket.status === i["default"].CONNECTED || this.socket.status === i["default"].RECONNECTING || this.socket.status === i["default"].RECONNECTED || this.socket.status === i["default"].EXPIRED_RECONNECTED
        }
      }]), e
    }();
    t["default"] = a
  }, function (e, t, n) {
    "use strict";
    var o, r = n(20),
      i = (o = r) && o.__esModule ? o : {
        "default": o
      };
    var s = n(199),
      a = n(72),
      u = n(106);
    n(53)("socket.io-client");
    e.exports = t = l;
    var c = t.managers = {};

    function l(e, t) {
      "object" === (void 0 === e ? "undefined" : (0, i["default"])(e)) && (t = e, e = undefined), t = t || {};
      var n, o = s(e),
        r = o.source,
        a = o.id,
        l = o.path,
        f = c[a] && l in c[a].nsps;
      return t.forceNew || t["force new connection"] || !1 === t.multiplex || f ? n = u(r, t) : (c[a] || (c[a] = u(r, t)), n = c[a]), o.query && !t.query && (t.query = o.query), n.socket(o.path, t)
    }
    t.protocol = a.protocol, t.connect = l, t.Manager = n(106), t.Socket = n(110)
  }, function (e, t, n) {
    "use strict";
    var o = n(104);
    n(53)("socket.io-client:url");
    e.exports = function (e, t) {
      var n = e;
      t = t || "undefined" != typeof location && location, null == e && (e = t.protocol + "//" + t.host);
      "string" == typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? t.protocol + e : t.host + e), /^(https?|wss?):\/\//.test(e) || (e = void 0 !== t ? t.protocol + "//" + e : "https://" + e), n = o(e));
      n.port || (/^(http|ws)$/.test(n.protocol) ? n.port = "80" : /^(http|ws)s$/.test(n.protocol) && (n.port = "443"));
      n.path = n.path || "/";
      var r = -1 !== n.host.indexOf(":") ? "[" + n.host + "]" : n.host;
      return n.id = n.protocol + "://" + r + ":" + n.port, n.href = n.protocol + "://" + r + (t && t.port === n.port ? "" : ":" + n.port), n
    }
  }, function (e, t, n) {
    function o(e) {
      var n;

      function o() {
        if (o.enabled) {
          var e = o,
            r = +new Date,
            i = r - (n || r);
          e.diff = i, e.prev = n, e.curr = r, n = r;
          for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
          s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
          var u = 0;
          s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, o) {
            if ("%%" === n) return n;
            u++;
            var r = t.formatters[o];
            if ("function" == typeof r) {
              var i = s[u];
              n = r.call(e, i), s.splice(u, 1), u--
            }
            return n
          }), t.formatArgs.call(e, s), (o.log || t.log || console.log.bind(console)).apply(e, s)
        }
      }
      return o.namespace = e, o.enabled = t.enabled(e), o.useColors = t.useColors(), o.color = function (e) {
        var n, o = 0;
        for (n in e) o = (o << 5) - o + e.charCodeAt(n), o |= 0;
        return t.colors[Math.abs(o) % t.colors.length]
      }(e), o.destroy = r, "function" == typeof t.init && t.init(o), t.instances.push(o), o
    }

    function r() {
      var e = t.instances.indexOf(this);
      return -1 !== e && (t.instances.splice(e, 1), !0)
    }(t = e.exports = o.debug = o["default"] = o).coerce = function (e) {
      return e instanceof Error ? e.stack || e.message : e
    }, t.disable = function () {
      t.enable("")
    }, t.enable = function (e) {
      var n;
      t.save(e), t.names = [], t.skips = [];
      var o = ("string" == typeof e ? e : "").split(/[\s,]+/),
        r = o.length;
      for (n = 0; n < r; n++) o[n] && ("-" === (e = o[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
      for (n = 0; n < t.instances.length; n++) {
        var i = t.instances[n];
        i.enabled = t.enabled(i.namespace)
      }
    }, t.enabled = function (e) {
      if ("*" === e[e.length - 1]) return !0;
      var n, o;
      for (n = 0, o = t.skips.length; n < o; n++)
        if (t.skips[n].test(e)) return !1;
      for (n = 0, o = t.names.length; n < o; n++)
        if (t.names[n].test(e)) return !0;
      return !1
    }, t.humanize = n(201), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
  }, function (e, t) {
    var n = 1e3,
      o = 60 * n,
      r = 60 * o,
      i = 24 * r,
      s = 365.25 * i;

    function a(e, t, n) {
      if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }
    e.exports = function (e, t) {
      t = t || {};
      var u, c = typeof e;
      if ("string" === c && e.length > 0) return function (e) {
        if ((e = String(e)).length > 100) return;
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
        if (!t) return;
        var a = parseFloat(t[1]);
        switch ((t[2] || "ms").toLowerCase()) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return a * s;
          case "days":
          case "day":
          case "d":
            return a * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return a * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return a * o;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return a * n;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return a;
          default:
            return undefined
        }
      }(e);
      if ("number" === c && !1 === isNaN(e)) return t.long ? a(u = e, i, "day") || a(u, r, "hour") || a(u, o, "minute") || a(u, n, "second") || u + " ms" : function (e) {
        if (e >= i) return Math.round(e / i) + "d";
        if (e >= r) return Math.round(e / r) + "h";
        if (e >= o) return Math.round(e / o) + "m";
        if (e >= n) return Math.round(e / n) + "s";
        return e + "ms"
      }(e);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
  }, function (e, t, n) {
    (function (o) {
      function r() {
        var e;
        try {
          e = t.storage.debug
        } catch (n) {}
        return !e && void 0 !== o && "env" in o && (e = o.env.DEBUG), e
      }(t = e.exports = n(203)).log = function () {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
      }, t.formatArgs = function (e) {
        var n = this.useColors;
        if (e[0] = (n ? "%c" : "") + this.namespace + (n ? " %c" : " ") + e[0] + (n ? "%c " : " ") + "+" + t.humanize(this.diff), !n) return;
        var o = "color: " + this.color;
        e.splice(1, 0, o, "color: inherit");
        var r = 0,
          i = 0;
        e[0].replace(/%[a-zA-Z%]/g, function (e) {
          "%%" !== e && "%c" === e && (i = ++r)
        }), e.splice(i, 0, o)
      }, t.save = function (e) {
        try {
          null == e ? t.storage.removeItem("debug") : t.storage.debug = e
        } catch (n) {}
      }, t.load = r, t.useColors = function () {
        if ("undefined" != typeof window && window.process && "renderer" === window.process.type) return !0;
        if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
        return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
      }, t.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : function () {
        try {
          return window.localStorage
        } catch (e) {}
      }(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.formatters.j = function (e) {
        try {
          return JSON.stringify(e)
        } catch (t) {
          return "[UnexpectedJSONParseError]: " + t.message
        }
      }, t.enable(r())
    }).call(t, n(71))
  }, function (e, t, n) {
    function o(e) {
      var n;

      function o() {
        if (o.enabled) {
          var e = o,
            r = +new Date,
            i = r - (n || r);
          e.diff = i, e.prev = n, e.curr = r, n = r;
          for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
          s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
          var u = 0;
          s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, o) {
            if ("%%" === n) return n;
            u++;
            var r = t.formatters[o];
            if ("function" == typeof r) {
              var i = s[u];
              n = r.call(e, i), s.splice(u, 1), u--
            }
            return n
          }), t.formatArgs.call(e, s), (o.log || t.log || console.log.bind(console)).apply(e, s)
        }
      }
      return o.namespace = e, o.enabled = t.enabled(e), o.useColors = t.useColors(), o.color = function (e) {
        var n, o = 0;
        for (n in e) o = (o << 5) - o + e.charCodeAt(n), o |= 0;
        return t.colors[Math.abs(o) % t.colors.length]
      }(e), o.destroy = r, "function" == typeof t.init && t.init(o), t.instances.push(o), o
    }

    function r() {
      var e = t.instances.indexOf(this);
      return -1 !== e && (t.instances.splice(e, 1), !0)
    }(t = e.exports = o.debug = o["default"] = o).coerce = function (e) {
      return e instanceof Error ? e.stack || e.message : e
    }, t.disable = function () {
      t.enable("")
    }, t.enable = function (e) {
      var n;
      t.save(e), t.names = [], t.skips = [];
      var o = ("string" == typeof e ? e : "").split(/[\s,]+/),
        r = o.length;
      for (n = 0; n < r; n++) o[n] && ("-" === (e = o[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
      for (n = 0; n < t.instances.length; n++) {
        var i = t.instances[n];
        i.enabled = t.enabled(i.namespace)
      }
    }, t.enabled = function (e) {
      if ("*" === e[e.length - 1]) return !0;
      var n, o;
      for (n = 0, o = t.skips.length; n < o; n++)
        if (t.skips[n].test(e)) return !1;
      for (n = 0, o = t.names.length; n < o; n++)
        if (t.names[n].test(e)) return !0;
      return !1
    }, t.humanize = n(204), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
  }, function (e, t) {
    var n = 1e3,
      o = 60 * n,
      r = 60 * o,
      i = 24 * r,
      s = 365.25 * i;

    function a(e, t, n) {
      if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }
    e.exports = function (e, t) {
      t = t || {};
      var u, c = typeof e;
      if ("string" === c && e.length > 0) return function (e) {
        if ((e = String(e)).length > 100) return;
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
        if (!t) return;
        var a = parseFloat(t[1]);
        switch ((t[2] || "ms").toLowerCase()) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return a * s;
          case "days":
          case "day":
          case "d":
            return a * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return a * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return a * o;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return a * n;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return a;
          default:
            return undefined
        }
      }(e);
      if ("number" === c && !1 === isNaN(e)) return t.long ? a(u = e, i, "day") || a(u, r, "hour") || a(u, o, "minute") || a(u, n, "second") || u + " ms" : function (e) {
        if (e >= i) return Math.round(e / i) + "d";
        if (e >= r) return Math.round(e / r) + "h";
        if (e >= o) return Math.round(e / o) + "m";
        if (e >= n) return Math.round(e / n) + "s";
        return e + "ms"
      }(e);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
  }, function (e, t, n) {
    "use strict";
    e.exports = n(206), e.exports.parser = n(32)
  }, function (e, t, n) {
    "use strict";
    var o = i(n(73)),
      r = i(n(20));

    function i(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var s = n(107),
      a = n(42),
      u = (n(76)("engine.io-client:socket"), n(109)),
      c = n(32),
      l = n(104),
      f = n(54);

    function d(e, t) {
      if (!(this instanceof d)) return new d(e, t);
      t = t || {}, e && "object" === (void 0 === e ? "undefined" : (0, r["default"])(e)) && (t = e, e = null), e ? (e = l(e), t.hostname = e.host, t.secure = "https" === e.protocol || "wss" === e.protocol, t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = l(t.host).host), this.secure = null != t.secure ? t.secure : "undefined" != typeof location && "https:" === location.protocol, t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.agent = t.agent || !1, this.hostname = t.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), this.port = t.port || ("undefined" != typeof location && location.port ? location.port : this.secure ? 443 : 80), this.query = t.query || {}, "string" == typeof this.query && (this.query = f.decode(this.query)), this.upgrade = !1 !== t.upgrade, this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t.forceJSONP, this.jsonp = !1 !== t.jsonp, this.forceBase64 = !!t.forceBase64, this.enablesXDR = !!t.enablesXDR, this.timestampParam = t.timestampParam || "t", this.timestampRequests = t.timestampRequests, this.transports = t.transports || ["polling", "websocket"], this.transportOptions = t.transportOptions || {}, this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = t.policyPort || 843, this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== t.perMessageDeflate && (t.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = t.pfx || null, this.key = t.key || null, this.passphrase = t.passphrase || null, this.cert = t.cert || null, this.ca = t.ca || null, this.ciphers = t.ciphers || null, this.rejectUnauthorized = t.rejectUnauthorized === undefined || t.rejectUnauthorized, this.forceNode = !!t.forceNode, this.isReactNative = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), ("undefined" == typeof self || this.isReactNative) && (t.extraHeaders && (0, o["default"])(t.extraHeaders).length > 0 && (this.extraHeaders = t.extraHeaders), t.localAddress && (this.localAddress = t.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
    }
    e.exports = d, d.priorWebsocketSuccess = !1, a(d.prototype), d.protocol = c.protocol, d.Socket = d, d.Transport = n(74), d.transports = n(107), d.parser = n(32), d.prototype.createTransport = function (e) {
      var t = function (e) {
        var t = {};
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
      }(this.query);
      t.EIO = c.protocol, t.transport = e;
      var n = this.transportOptions[e] || {};
      return this.id && (t.sid = this.id), new s[e]({
        query: t,
        socket: this,
        agent: n.agent || this.agent,
        hostname: n.hostname || this.hostname,
        port: n.port || this.port,
        secure: n.secure || this.secure,
        path: n.path || this.path,
        forceJSONP: n.forceJSONP || this.forceJSONP,
        jsonp: n.jsonp || this.jsonp,
        forceBase64: n.forceBase64 || this.forceBase64,
        enablesXDR: n.enablesXDR || this.enablesXDR,
        timestampRequests: n.timestampRequests || this.timestampRequests,
        timestampParam: n.timestampParam || this.timestampParam,
        policyPort: n.policyPort || this.policyPort,
        pfx: n.pfx || this.pfx,
        key: n.key || this.key,
        passphrase: n.passphrase || this.passphrase,
        cert: n.cert || this.cert,
        ca: n.ca || this.ca,
        ciphers: n.ciphers || this.ciphers,
        rejectUnauthorized: n.rejectUnauthorized || this.rejectUnauthorized,
        perMessageDeflate: n.perMessageDeflate || this.perMessageDeflate,
        extraHeaders: n.extraHeaders || this.extraHeaders,
        forceNode: n.forceNode || this.forceNode,
        localAddress: n.localAddress || this.localAddress,
        requestTimeout: n.requestTimeout || this.requestTimeout,
        protocols: n.protocols || void 0,
        isReactNative: this.isReactNative
      })
    }, d.prototype.open = function () {
      var e;
      if (this.rememberUpgrade && d.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket";
      else {
        if (0 === this.transports.length) {
          var t = this;
          return void setTimeout(function () {
            t.emit("error", "No transports available")
          }, 0)
        }
        e = this.transports[0]
      }
      this.readyState = "opening";
      try {
        e = this.createTransport(e)
      } catch (n) {
        return this.transports.shift(), void this.open()
      }
      e.open(), this.setTransport(e)
    }, d.prototype.setTransport = function (e) {
      e.name;
      var t = this;
      this.transport && (this.transport.name, this.transport.removeAllListeners()), this.transport = e, e.on("drain", function () {
        t.onDrain()
      }).on("packet", function (e) {
        t.onPacket(e)
      }).on("error", function (e) {
        t.onError(e)
      }).on("close", function () {
        t.onClose("transport close")
      })
    }, d.prototype.probe = function (e) {
      var t = this.createTransport(e, {
          probe: 1
        }),
        n = !1,
        o = this;

      function r() {
        if (o.onlyBinaryUpgrades) {
          var e = !this.supportsBinary && o.transport.supportsBinary;
          n = n || e
        }
        n || (t.send([{
          type: "ping",
          data: "probe"
        }]), t.once("packet", function (e) {
          if (!n)
            if ("pong" === e.type && "probe" === e.data) {
              if (o.upgrading = !0, o.emit("upgrading", t), !t) return;
              d.priorWebsocketSuccess = "websocket" === t.name, o.transport.name, o.transport.pause(function () {
                n || "closed" !== o.readyState && (l(), o.setTransport(t), t.send([{
                  type: "upgrade"
                }]), o.emit("upgrade", t), t = null, o.upgrading = !1, o.flush())
              })
            } else {
              var r = new Error("probe error");
              r.transport = t.name, o.emit("upgradeError", r)
            }
        }))
      }

      function i() {
        n || (n = !0, l(), t.close(), t = null)
      }

      function s(e) {
        var n = new Error("probe error: " + e);
        n.transport = t.name, i(), o.emit("upgradeError", n)
      }

      function a() {
        s("transport closed")
      }

      function u() {
        s("socket closed")
      }

      function c(e) {
        t && e.name !== t.name && (e.name, t.name, i())
      }

      function l() {
        t.removeListener("open", r), t.removeListener("error", s), t.removeListener("close", a), o.removeListener("close", u), o.removeListener("upgrading", c)
      }
      d.priorWebsocketSuccess = !1, t.once("open", r), t.once("error", s), t.once("close", a), this.once("close", u), this.once("upgrading", c), t.open()
    }, d.prototype.onOpen = function () {
      if (this.readyState = "open", d.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause)
        for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
    }, d.prototype.onPacket = function (e) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (e.type, e.data, this.emit("packet", e), this.emit("heartbeat"), e.type) {
        case "open":
          this.onHandshake(JSON.parse(e.data));
          break;
        case "pong":
          this.setPing(), this.emit("pong");
          break;
        case "error":
          var t = new Error("server error");
          t.code = e.data, this.onError(t);
          break;
        case "message":
          this.emit("data", e.data), this.emit("message", e.data)
      } else this.readyState
    }, d.prototype.onHandshake = function (e) {
      this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
    }, d.prototype.onHeartbeat = function (e) {
      clearTimeout(this.pingTimeoutTimer);
      var t = this;
      t.pingTimeoutTimer = setTimeout(function () {
        "closed" !== t.readyState && t.onClose("ping timeout")
      }, e || t.pingInterval + t.pingTimeout)
    }, d.prototype.setPing = function () {
      var e = this;
      clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout(function () {
        e.pingTimeout, e.ping(), e.onHeartbeat(e.pingTimeout)
      }, e.pingInterval)
    }, d.prototype.ping = function () {
      var e = this;
      this.sendPacket("ping", function () {
        e.emit("ping")
      })
    }, d.prototype.onDrain = function () {
      this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
    }, d.prototype.flush = function () {
      "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (this.writeBuffer.length, this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
    }, d.prototype.write = d.prototype.send = function (e, t, n) {
      return this.sendPacket("message", e, t, n), this
    }, d.prototype.sendPacket = function (e, t, n, o) {
      if ("function" == typeof t && (o = t, t = undefined), "function" == typeof n && (o = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) {
        (n = n || {}).compress = !1 !== n.compress;
        var r = {
          type: e,
          data: t,
          options: n
        };
        this.emit("packetCreate", r), this.writeBuffer.push(r), o && this.once("flush", o), this.flush()
      }
    }, d.prototype.close = function () {
      if ("opening" === this.readyState || "open" === this.readyState) {
        this.readyState = "closing";
        var e = this;
        this.writeBuffer.length ? this.once("drain", function () {
          this.upgrading ? o() : t()
        }) : this.upgrading ? o() : t()
      }

      function t() {
        e.onClose("forced close"), e.transport.close()
      }

      function n() {
        e.removeListener("upgrade", n), e.removeListener("upgradeError", n), t()
      }

      function o() {
        e.once("upgrade", n), e.once("upgradeError", n)
      }
      return this
    }, d.prototype.onError = function (e) {
      d.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
    }, d.prototype.onClose = function (e, t) {
      if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
        clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0
      }
    }, d.prototype.filterUpgrades = function (e) {
      for (var t = [], n = 0, o = e.length; n < o; n++) ~u(this.transports, e[n]) && t.push(e[n]);
      return t
    }
  }, function (e, t, n) {
    n(208), e.exports = n(7).Object.keys
  }, function (e, t, n) {
    var o = n(38),
      r = n(34);
    n(67)("keys", function () {
      return function (e) {
        return r(o(e))
      }
    })
  }, function (e, t, n) {
    "use strict";
    (function (t) {
      var o = n(211),
        r = n(75);
      e.exports = l;
      var i, s = /\n/g,
        a = /\\n/g;

      function u() {}

      function c() {
        return "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : {}
      }

      function l(e) {
        if (o.call(this, e), this.query = this.query || {}, !i) {
          var t = c();
          i = t.___eio = t.___eio || []
        }
        this.index = i.length;
        var n = this;
        i.push(function (e) {
          n.onData(e)
        }), this.query.j = this.index, "function" == typeof addEventListener && addEventListener("beforeunload", function () {
          n.script && (n.script.onerror = u)
        }, !1)
      }
      r(l, o), l.prototype.supportsBinary = !1, l.prototype.doClose = function () {
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), o.prototype.doClose.call(this)
      }, l.prototype.doPoll = function () {
        var e = this,
          t = document.createElement("script");
        this.script && (this.script.parentNode.removeChild(this.script), this.script = null), t.async = !0, t.src = this.uri(), t.onerror = function (t) {
          e.onError("jsonp poll error", t)
        };
        var n = document.getElementsByTagName("script")[0];
        n ? n.parentNode.insertBefore(t, n) : (document.head || document.body).appendChild(t), this.script = t, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function () {
          var e = document.createElement("iframe");
          document.body.appendChild(e), document.body.removeChild(e)
        }, 100)
      }, l.prototype.doWrite = function (e, t) {
        var n = this;
        if (!this.form) {
          var o, r = document.createElement("form"),
            i = document.createElement("textarea"),
            u = this.iframeId = "eio_iframe_" + this.index;
          r.className = "socketio", r.style.position = "absolute", r.style.top = "-1000px", r.style.left = "-1000px", r.target = u, r.method = "POST", r.setAttribute("accept-charset", "utf-8"), i.name = "d", r.appendChild(i), document.body.appendChild(r), this.form = r, this.area = i
        }

        function c() {
          l(), t()
        }

        function l() {
          if (n.iframe) try {
            n.form.removeChild(n.iframe)
          } catch (t) {
            n.onError("jsonp polling iframe removal error", t)
          }
          try {
            var e = '<iframe src="javascript:0" name="' + n.iframeId + '">';
            o = document.createElement(e)
          } catch (t) {
            (o = document.createElement("iframe")).name = n.iframeId, o.src = "javascript:0"
          }
          o.id = n.iframeId, n.form.appendChild(o), n.iframe = o
        }
        this.form.action = this.uri(), l(), e = e.replace(a, "\\\n"), this.area.value = e.replace(s, "\\n");
        try {
          this.form.submit()
        } catch (f) {}
        this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
          "complete" === n.iframe.readyState && c()
        } : this.iframe.onload = c
      }
    }).call(t, n(210))
  }, function (e, t) {
    var n;
    n = function () {
      return this
    }();
    try {
      n = n || Function("return this")() || (0, eval)("this")
    } catch (o) {
      "object" == typeof window && (n = window)
    }
    e.exports = n
  }, function (e, t, n) {
    "use strict";
    var o = n(74),
      r = n(54),
      i = n(32),
      s = n(75),
      a = n(108);
    n(76)("engine.io-client:polling");
    e.exports = c;
    var u = null != new(n(220))({
      xdomain: !1
    }).responseType;

    function c(e) {
      var t = e && e.forceBase64;
      u && !t || (this.supportsBinary = !1), o.call(this, e)
    }
    s(c, o), c.prototype.name = "polling", c.prototype.doOpen = function () {
      this.poll()
    }, c.prototype.pause = function (e) {
      var t = this;

      function n() {
        t.readyState = "paused", e()
      }
      if (this.readyState = "pausing", this.polling || !this.writable) {
        var o = 0;
        this.polling && (o++, this.once("pollComplete", function () {
          --o || n()
        })), this.writable || (o++, this.once("drain", function () {
          --o || n()
        }))
      } else n()
    }, c.prototype.poll = function () {
      this.polling = !0, this.doPoll(), this.emit("poll")
    }, c.prototype.onData = function (e) {
      var t = this;
      i.decodePayload(e, this.socket.binaryType, function (e, n, o) {
        if ("opening" === t.readyState && t.onOpen(), "close" === e.type) return t.onClose(), !1;
        t.onPacket(e)
      }), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : this.readyState)
    }, c.prototype.doClose = function () {
      var e = this;

      function t() {
        e.write([{
          type: "close"
        }])
      }
      "open" === this.readyState ? t() : this.once("open", t)
    }, c.prototype.write = function (e) {
      var t = this;
      this.writable = !1;
      var n = function () {
        t.writable = !0, t.emit("drain")
      };
      i.encodePayload(e, this.supportsBinary, function (e) {
        t.doWrite(e, n)
      })
    }, c.prototype.uri = function () {
      var e = this.query || {},
        t = this.secure ? "https" : "http",
        n = "";
      return !1 !== this.timestampRequests && (e[this.timestampParam] = a()), this.supportsBinary || e.sid || (e.b64 = 1), e = r.encode(e), this.port && ("https" === t && 443 !== Number(this.port) || "http" === t && 80 !== Number(this.port)) && (n = ":" + this.port), e.length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
    }
  }, function (e, t, n) {
    "use strict";
    var o, r = n(73),
      i = (o = r) && o.__esModule ? o : {
        "default": o
      };
    e.exports = i["default"] || function (e) {
      var t = [],
        n = Object.prototype.hasOwnProperty;
      for (var o in e) n.call(e, o) && t.push(o);
      return t
    }
  }, function (e, t, n) {
    var o = n(214),
      r = Object.prototype.toString,
      i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === r.call(Blob),
      s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === r.call(File);
    e.exports = function a(e) {
      if (!e || "object" != typeof e) return !1;
      if (o(e)) {
        for (var t = 0, n = e.length; t < n; t++)
          if (a(e[t])) return !0;
        return !1
      }
      if ("function" == typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(e) || "function" == typeof ArrayBuffer && e instanceof ArrayBuffer || i && e instanceof Blob || s && e instanceof File) return !0;
      if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return a(e.toJSON(), !0);
      for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r) && a(e[r])) return !0;
      return !1
    }
  }, function (e, t) {
    var n = {}.toString;
    e.exports = Array.isArray || function (e) {
      return "[object Array]" == n.call(e)
    }
  }, function (e, t) {
    function n() {}
    e.exports = function (e, t, o) {
      var r = !1;
      return o = o || n, i.count = e, 0 === e ? t() : i;

      function i(e, n) {
        if (i.count <= 0) throw new Error("after called too many times");
        --i.count, e ? (r = !0, t(e), t = o) : 0 !== i.count || r || t(null, n)
      }
    }
  }, function (e, t, n) {
    "use strict";
    /*! https://mths.be/utf8js v2.1.2 by @mathias */
    var o, r, i, s = String.fromCharCode;

    function a(e) {
      for (var t, n, o = [], r = 0, i = e.length; r < i;)(t = e.charCodeAt(r++)) >= 55296 && t <= 56319 && r < i ? 56320 == (64512 & (n = e.charCodeAt(r++))) ? o.push(((1023 & t) << 10) + (1023 & n) + 65536) : (o.push(t), r--) : o.push(t);
      return o
    }

    function u(e, t) {
      if (e >= 55296 && e <= 57343) {
        if (t) throw Error("Lone surrogate U+" + e.toString(16).toUpperCase() + " is not a scalar value");
        return !1
      }
      return !0
    }

    function c(e, t) {
      return s(e >> t & 63 | 128)
    }

    function l(e, t) {
      if (0 == (4294967168 & e)) return s(e);
      var n = "";
      return 0 == (4294965248 & e) ? n = s(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (u(e, t) || (e = 65533), n = s(e >> 12 & 15 | 224), n += c(e, 6)) : 0 == (4292870144 & e) && (n = s(e >> 18 & 7 | 240), n += c(e, 12), n += c(e, 6)), n += s(63 & e | 128)
    }

    function f() {
      if (i >= r) throw Error("Invalid byte index");
      var e = 255 & o[i];
      if (i++, 128 == (192 & e)) return 63 & e;
      throw Error("Invalid continuation byte")
    }

    function d(e) {
      var t, n;
      if (i > r) throw Error("Invalid byte index");
      if (i == r) return !1;
      if (t = 255 & o[i], i++, 0 == (128 & t)) return t;
      if (192 == (224 & t)) {
        if ((n = (31 & t) << 6 | f()) >= 128) return n;
        throw Error("Invalid continuation byte")
      }
      if (224 == (240 & t)) {
        if ((n = (15 & t) << 12 | f() << 6 | f()) >= 2048) return u(n, e) ? n : 65533;
        throw Error("Invalid continuation byte")
      }
      if (240 == (248 & t) && (n = (7 & t) << 18 | f() << 12 | f() << 6 | f()) >= 65536 && n <= 1114111) return n;
      throw Error("Invalid UTF-8 detected")
    }
    e.exports = {
      version: "2.1.2",
      encode: function (e, t) {
        for (var n = !1 !== (t = t || {}).strict, o = a(e), r = o.length, i = -1, s = ""; ++i < r;) s += l(o[i], n);
        return s
      },
      decode: function (e, t) {
        var n = !1 !== (t = t || {}).strict;
        o = a(e), r = o.length, i = 0;
        for (var u, c = []; !1 !== (u = d(n));) c.push(u);
        return function (e) {
          for (var t, n = e.length, o = -1, r = ""; ++o < n;)(t = e[o]) > 65535 && (r += s((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), r += s(t);
          return r
        }(c)
      }
    }
  }, function (e, t) {
    var n = void 0 !== n ? n : "undefined" != typeof WebKitBlobBuilder ? WebKitBlobBuilder : "undefined" != typeof MSBlobBuilder ? MSBlobBuilder : "undefined" != typeof MozBlobBuilder && MozBlobBuilder,
      o = function () {
        try {
          return 2 === new Blob(["hi"]).size
        } catch (e) {
          return !1
        }
      }(),
      r = o && function () {
        try {
          return 2 === new Blob([new Uint8Array([1, 2])]).size
        } catch (e) {
          return !1
        }
      }(),
      i = n && n.prototype.append && n.prototype.getBlob;

    function s(e) {
      return e.map(function (e) {
        if (e.buffer instanceof ArrayBuffer) {
          var t = e.buffer;
          if (e.byteLength !== t.byteLength) {
            var n = new Uint8Array(e.byteLength);
            n.set(new Uint8Array(t, e.byteOffset, e.byteLength)), t = n.buffer
          }
          return t
        }
        return e
      })
    }

    function a(e, t) {
      t = t || {};
      var o = new n;
      return s(e).forEach(function (e) {
        o.append(e)
      }), t.type ? o.getBlob(t.type) : o.getBlob()
    }

    function u(e, t) {
      return new Blob(s(e), t || {})
    }
    "undefined" != typeof Blob && (a.prototype = Blob.prototype, u.prototype = Blob.prototype), e.exports = o ? r ? Blob : u : i ? a : undefined
  }, function (e, t, n) {
    function o(e) {
      var n;

      function o() {
        if (o.enabled) {
          var e = o,
            r = +new Date,
            i = r - (n || r);
          e.diff = i, e.prev = n, e.curr = r, n = r;
          for (var s = new Array(arguments.length), a = 0; a < s.length; a++) s[a] = arguments[a];
          s[0] = t.coerce(s[0]), "string" != typeof s[0] && s.unshift("%O");
          var u = 0;
          s[0] = s[0].replace(/%([a-zA-Z%])/g, function (n, o) {
            if ("%%" === n) return n;
            u++;
            var r = t.formatters[o];
            if ("function" == typeof r) {
              var i = s[u];
              n = r.call(e, i), s.splice(u, 1), u--
            }
            return n
          }), t.formatArgs.call(e, s), (o.log || t.log || console.log.bind(console)).apply(e, s)
        }
      }
      return o.namespace = e, o.enabled = t.enabled(e), o.useColors = t.useColors(), o.color = function (e) {
        var n, o = 0;
        for (n in e) o = (o << 5) - o + e.charCodeAt(n), o |= 0;
        return t.colors[Math.abs(o) % t.colors.length]
      }(e), o.destroy = r, "function" == typeof t.init && t.init(o), t.instances.push(o), o
    }

    function r() {
      var e = t.instances.indexOf(this);
      return -1 !== e && (t.instances.splice(e, 1), !0)
    }(t = e.exports = o.debug = o["default"] = o).coerce = function (e) {
      return e instanceof Error ? e.stack || e.message : e
    }, t.disable = function () {
      t.enable("")
    }, t.enable = function (e) {
      var n;
      t.save(e), t.names = [], t.skips = [];
      var o = ("string" == typeof e ? e : "").split(/[\s,]+/),
        r = o.length;
      for (n = 0; n < r; n++) o[n] && ("-" === (e = o[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
      for (n = 0; n < t.instances.length; n++) {
        var i = t.instances[n];
        i.enabled = t.enabled(i.namespace)
      }
    }, t.enabled = function (e) {
      if ("*" === e[e.length - 1]) return !0;
      var n, o;
      for (n = 0, o = t.skips.length; n < o; n++)
        if (t.skips[n].test(e)) return !1;
      for (n = 0, o = t.names.length; n < o; n++)
        if (t.names[n].test(e)) return !0;
      return !1
    }, t.humanize = n(219), t.instances = [], t.names = [], t.skips = [], t.formatters = {}
  }, function (e, t) {
    var n = 1e3,
      o = 60 * n,
      r = 60 * o,
      i = 24 * r,
      s = 365.25 * i;

    function a(e, t, n) {
      if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + n : Math.ceil(e / t) + " " + n + "s"
    }
    e.exports = function (e, t) {
      t = t || {};
      var u, c = typeof e;
      if ("string" === c && e.length > 0) return function (e) {
        if ((e = String(e)).length > 100) return;
        var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
        if (!t) return;
        var a = parseFloat(t[1]);
        switch ((t[2] || "ms").toLowerCase()) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return a * s;
          case "days":
          case "day":
          case "d":
            return a * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return a * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return a * o;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return a * n;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return a;
          default:
            return undefined
        }
      }(e);
      if ("number" === c && !1 === isNaN(e)) return t.long ? a(u = e, i, "day") || a(u, r, "hour") || a(u, o, "minute") || a(u, n, "second") || u + " ms" : function (e) {
        if (e >= i) return Math.round(e / i) + "d";
        if (e >= r) return Math.round(e / r) + "h";
        if (e >= o) return Math.round(e / o) + "m";
        if (e >= n) return Math.round(e / n) + "s";
        return e + "ms"
      }(e);
      throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
  }, function (e, t, n) {
    "use strict";
    var o = n(221);
    e.exports = function (e) {
      var t = e.xdomain,
        n = e.xscheme,
        r = e.enablesXDR;
      try {
        if ("undefined" != typeof XMLHttpRequest && (!t || o)) return new XMLHttpRequest
      } catch (i) {}
      try {
        if ("undefined" != typeof XDomainRequest && !n && r) return new XDomainRequest
      } catch (i) {}
      if (!t) try {
        return new(self[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
      } catch (i) {}
    }
  }, function (e, t) {
    try {
      e.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
    } catch (n) {
      e.exports = !1
    }
  }, function (e, t, n) {
    "use strict";
    var o, r = n(20),
      i = (o = r) && o.__esModule ? o : {
        "default": o
      };
    var s, a, u = n(74),
      c = n(32),
      l = n(54),
      f = n(75),
      d = n(108);
    n(76)("engine.io-client:websocket");
    if ("undefined" == typeof uni && "undefined" == typeof wx || "undefined" != typeof WebSocket)
      if ("undefined" != typeof WebSocket) s = WebSocket;
      else if ("undefined" != typeof self) s = self.WebSocket || self.MozWebSocket;
    else try {
      a = n(223)
    } catch (y) {}
    var p = s || a;

    function h(e) {
      e && e.forceBase64 && (this.supportsBinary = !1), ("undefined" == typeof uni && "undefined" == typeof wx || "undefined" != typeof WebSocket) && (this.perMessageDeflate = e.perMessageDeflate, this.usingBrowserWebSocket = s && !e.forceNode, this.protocols = e.protocols, this.usingBrowserWebSocket || (p = a)), u.call(this, e)
    }
    "undefined" == typeof uni && "undefined" == typeof wx || "undefined" != typeof WebSocket || (p = function (e) {
      var t = this;
      if (t.onopen = function () {}, t.onclose = function () {}, t.onmessage = function (e) {}, t.onerror = function (e) {}, "object" === ("undefined" == typeof tt ? "undefined" : (0, i["default"])(tt)) && tt.getSystemInfo) {
        var n = tt.connectSocket({
          url: e
        });
        t.send = function (e) {
          n.send({
            data: e
          })
        }, t.close = function () {
          n.close()
        }, n.onOpen(function () {
          t.onopen()
        }), n.onError(function (e) {
          t.onerror(e)
        }), n.onMessage(function (e) {
          t.onmessage(e)
        }), n.onClose(function () {
          t.onclose()
        })
      } else "undefined" != typeof uni ? (t.send = function (e) {
        uni.sendSocketMessage({
          data: e
        })
      }, t.close = function () {
        uni.closeSocket()
      }, uni.onSocketOpen(function (e) {
        t.onopen()
      }), uni.onSocketError(function (e) {
        t.onerror(e)
      }), uni.onSocketMessage(function (e) {
        t.onmessage(e)
      }), uni.onSocketClose(function (e) {
        t.onclose()
      }), uni.connectSocket({
        url: e
      })) : (t.send = function (e) {
        wx.sendSocketMessage({
          data: e
        })
      }, t.close = function () {
        wx.closeSocket()
      }, wx.onSocketOpen(function (e) {
        t.onopen()
      }), wx.onSocketError(function (e) {
        t.onerror(e)
      }), wx.onSocketMessage(function (e) {
        t.onmessage(e)
      }), wx.onSocketClose(function (e) {
        t.onclose()
      }), wx.connectSocket({
        url: e
      }))
    }), e.exports = h, f(h, u), h.prototype.name = "websocket", h.prototype.supportsBinary = !1, h.prototype.doOpen = function () {
      if (this.check()) {
        var e, t, n = this.uri();
        ("undefined" == typeof uni && "undefined" == typeof wx || "undefined" != typeof WebSocket) && (e = this.protocols), (t = "undefined" == typeof uni && "undefined" == typeof wx || "undefined" != typeof WebSocket ? {
          agent: this.agent,
          perMessageDeflate: this.perMessageDeflate
        } : {
          agent: this.agent
        }).pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (t.headers = this.extraHeaders), this.localAddress && (t.localAddress = this.localAddress);
        try {
          "undefined" == typeof uni && "undefined" == typeof wx || "undefined" != typeof WebSocket ? this.ws = this.usingBrowserWebSocket && !this.isReactNative ? e ? new p(n, e) : new p(n) : new p(n, e, t) : this.ws = new p(n)
        } catch (o) {
          return this.emit("error", o)
        }
        this.ws.binaryType === undefined && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
      }
    }, h.prototype.addEventListeners = function () {
      var e = this;
      this.ws.onopen = function () {
        e.onOpen()
      }, this.ws.onclose = function () {
        e.onClose()
      }, this.ws.onmessage = function (t) {
        e.onData(t.data)
      }, this.ws.onerror = function (t) {
        e.onError("websocket error", t)
      }
    }, h.prototype.write = function (e) {
      var t = this;
      this.writable = !1;
      for (var n = e.length, o = 0, r = n; o < r; o++) ! function (e) {
        c.encodePacket(e, t.supportsBinary, function (o) {
          if ("undefined" == typeof uni && "undefined" == typeof wx || "undefined" != typeof WebSocket) {
            if (!t.usingBrowserWebSocket) {
              var r = {};
              if (e.options && (r.compress = e.options.compress), t.perMessageDeflate)("string" == typeof o ? Buffer.byteLength(o) : o.length) < t.perMessageDeflate.threshold && (r.compress = !1)
            }
            try {
              t.usingBrowserWebSocket ? t.ws.send(o) : t.ws.send(o, r)
            } catch (y) {}
          } else try {
            t.ws.send(o)
          } catch (y) {}--n || i()
        })
      }(e[o]);

      function i() {
        t.emit("flush"), setTimeout(function () {
          t.writable = !0, t.emit("drain")
        }, 0)
      }
    }, h.prototype.onClose = function () {
      u.prototype.onClose.call(this)
    }, h.prototype.doClose = function () {
      "undefined" != typeof this.ws && this.ws.close()
    }, h.prototype.uri = function () {
      var e = this.query || {},
        t = this.secure ? "wss" : "ws",
        n = "";
      return this.port && ("wss" === t && 443 !== Number(this.port) || "ws" === t && 80 !== Number(this.port)) && (n = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = d()), this.supportsBinary || (e.b64 = 1), (e = l.encode(e)).length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + n + this.path + e
    }, h.prototype.check = function () {
      return !(!p || "__initialize" in p && this.name === h.prototype.name)
    }
  }, function (e, t) {}, function (e, t) {
    e.exports = function (e, t) {
      for (var n = [], o = (t = t || 0) || 0; o < e.length; o++) n[o - t] = e[o];
      return n
    }
  }, function (e, t, n) {
    var o = n(105),
      r = Object.prototype.toString,
      i = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === r.call(Blob),
      s = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === r.call(File);
    e.exports = function a(e) {
      if (!e || "object" != typeof e) return !1;
      if (o(e)) {
        for (var t = 0, n = e.length; t < n; t++)
          if (a(e[t])) return !0;
        return !1
      }
      if ("function" == typeof Buffer && Buffer.isBuffer && Buffer.isBuffer(e) || "function" == typeof ArrayBuffer && e instanceof ArrayBuffer || i && e instanceof Blob || s && e instanceof File) return !0;
      if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return a(e.toJSON(), !0);
      for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r) && a(e[r])) return !0;
      return !1
    }
  }, function (e, t) {
    function n(e) {
      e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = e.jitter > 0 && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
    }
    e.exports = n, n.prototype.duration = function () {
      var e = this.ms * Math.pow(this.factor, this.attempts++);
      if (this.jitter) {
        var t = Math.random(),
          n = Math.floor(t * this.jitter * e);
        e = 0 == (1 & Math.floor(10 * t)) ? e - n : e + n
      }
      return 0 | Math.min(e, this.max)
    }, n.prototype.reset = function () {
      this.attempts = 0
    }, n.prototype.setMin = function (e) {
      this.ms = e
    }, n.prototype.setMax = function (e) {
      this.max = e
    }, n.prototype.setJitter = function (e) {
      this.jitter = e
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(2)),
      r = f(n(0)),
      i = f(n(1)),
      s = f(n(3)),
      a = f(n(8)),
      u = f(n(4)),
      c = f(n(103)),
      l = f(n(41));

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var d = function (e) {
      function t(e) {
        (0, r["default"])(this, t);
        var n = (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this));
        return n.reconnectingObservers = [], n.addReconnectingObserver(e.onReconnecting), n.addDisconnectedObserver(e.onDisconnected), n
      }
      return (0, u["default"])(t, e), (0, i["default"])(t, [{
        key: "connect",
        value: function (e) {
          (0, a["default"])(t.prototype.__proto__ || (0, o["default"])(t.prototype), "connect", this).call(this), this.io = this.io.connect(e.uri, e.opts), this.initListener()
        }
      }, {
        key: "doEmit",
        value: function (e, t, n) {
          this.io.emit(e, t, n)
        }
      }, {
        key: "initListener",
        value: function () {
          var e = this;
          this.io.on("reconnecting", function (t) {
            e.status = l["default"].CONNECTING, e.notify(e.reconnectingObservers, t)
          }), this.io.on("connect", function () {
            e.status = l["default"].CONNECTED, e.notify(e.connectedObservers)
          }), this.io.on("disconnect", function () {
            e.status = l["default"].DISCONNECTED, e.notify(e.disconnectedObservers)
          }), this.io.on("connect_error", function (e) {})
        }
      }, {
        key: "addReconnectingObserver",
        value: function (e) {
          this.reconnectingObservers.push(e)
        }
      }]), t
    }(c["default"]);
    t["default"] = d
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = s(n(0)),
      r = s(n(1)),
      i = n(6);

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var a = function () {
      function e(t) {
        (0, o["default"])(this, e), this.callback = i.noop, this.guidList = [], this.callback = t
      }
      return (0, r["default"])(e, [{
        key: "onMessage",
        value: function (e, t) {
          "string" == typeof t && (t = JSON.parse(t)), this.guidList.findIndex(function (e) {
            return e === t.i
          }) > -1 || (this.guidList.unshift(t.i), this.guidList.length > 300 && this.guidList.pop(), this.callback(t))
        }
      }]), e
    }();
    t["default"] = a
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = c(n(25)),
      r = c(n(5)),
      i = c(n(0)),
      s = c(n(1)),
      a = n(6),
      u = n(113);

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var l = function () {
      function e(t) {
        (0, i["default"])(this, e), this.goEasySocket = null, this.goEasySocket = t, this.support() && (this.GoEasyUniapp = uni.requireNativePlugin("GoEasy-Uniapp"), t.addMessageObserver("imMessage", this.onNewMessageReceived.bind(this)), t.addMessageObserver("message", this.onNewMessageReceived.bind(this)))
      }
      return (0, s["default"])(e, [{
        key: "onNewMessageReceived",
        value: function (e) {
          this.createLocalNotification(e)
        }
      }, {
        key: "createLocalNotification",
        value: function (e) {
          if (a.calibrator.isObject(e.nt) && !0 === u.uniApp.runningBackend()) {
            var t = e.nt.t,
              n = e.nt.c;
            this.GoEasyUniapp ? this.GoEasyUniapp.createLocalNotification(t, n) : plus.push.createMessage(n, null, {
              title: t
            })
          }
        }
      }, {
        key: "getRegId",
        value: function () {
          var e = this;
          return new r["default"](function (t, n) {
            try {
              e.GoEasyUniapp ? e.GoEasyUniapp.regId(function (e) {
                t(e)
              }, function (n) {
                if (1e6 == n.data.code) var r = setInterval(function () {
                  e.GoEasyUniapp.regId(function (e) {
                    clearInterval(r), t(e)
                  }, function (e) {
                    1e6 != e.data.code && (clearInterval(r), console.error("注册厂商通道失败：" + (0, o["default"])(e)), t())
                  })
                }, 5e3);
                else console.error("注册厂商通道失败：" + (0, o["default"])(n)), t()
              }) : (console.error("注册厂商通道失败：GoEasy-Uniapp is not installed correctly"), t())
            } catch (r) {
              console.error("注册厂商通道失败：" + (0, o["default"])(r)), t()
            }
          })
        }
      }, {
        key: "support",
        value: function () {
          return a.env.isUni() && !0 === this.goEasySocket.allowNotification && a.env.isSupportHtmlPlus() && !a.env.isBrowserClient()
        }
      }]), e
    }();
    t["default"] = l
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.connection = undefined;
    var o = a(n(5)),
      r = a(n(0)),
      i = a(n(1)),
      s = n(24);
    n(21), a(n(10)), n(14), a(n(13));

    function a(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var u = function () {
      function e(t) {
        (0, r["default"])(this, e), this.im = null, this.im = t
      }
      return (0, i["default"])(e, [{
        key: "connect",
        value: function () {
          var e = this;
          return new o["default"](function (t, n) {
            e.im._goEasySocket.addConnectedObserver(function () {
              e.im._event.notify(s.ImEventType.CONNECTED), t()
            }), e.im._goEasySocket.addConnectFailedObserver(function (e) {
              n({
                code: e.resultCode || 408,
                content: e.content || "Failed to connect GoEasy"
              })
            }), e.im._goEasySocket.addConnectingObserver(function (t) {
              e.im._event.notify(s.ImEventType.CONNECTING, t)
            }), e.im._goEasySocket.addDisconnectedObserver(function () {
              e.im._event.notify(s.ImEventType.DISCONNECT), n({
                code: 400,
                content: "GoEasy disconnected."
              })
            }), e.im._goEasySocket.connect()
          })
        }
      }, {
        key: "disconnect",
        value: function () {
          var e = this;
          return new o["default"](function (t, n) {
            e.im._goEasySocket.disconnect().then(function () {
              t()
            })["catch"](function (e) {
              n(e)
            })
          })
        }
      }]), e
    }();
    t["default"] = u;
    var c = new u;
    t.connection = c
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = v(n(25)),
      r = v(n(5)),
      i = v(n(0)),
      s = v(n(1)),
      a = v(n(232)),
      u = v(n(13)),
      c = n(31),
      l = v(n(10)),
      f = n(14),
      d = v(n(49)),
      p = n(26),
      h = v(n(40)),
      y = n(6);

    function v(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var m = function () {
      function e(t) {
        (0, i["default"])(this, e), this.im = null, this.bulletMessageBuilder = null, this.im = t, this.bulletMessageBuilder = new a["default"](t)
      }
      return (0, s["default"])(e, [{
        key: "send",
        value: function (e, t, n) {
          var o = this;
          return new r["default"](function (r, i) {
            t.status === d["default"]["new"] ? (t.status = d["default"].sending, o.bulletMessageBuilder.build(e, t, n).then(function (e) {
              var n = new u["default"]({
                name: f.EmitType.publishIM,
                params: e,
                permission: l["default"].WRITE,
                singleTimeout: c.SocketTimeout.commonRequestSingle,
                totalTimeout: c.SocketTimeout.commonRequestTotal,
                fail: function (e) {
                  t.status = d["default"].fail, i({
                    code: e.resultCode || 408,
                    content: e.content || "Failed to send private message."
                  })
                },
                success: function (e) {
                  t.status = d["default"].success, 200 == e.resultCode ? r({
                    code: 200,
                    content: e.content
                  }) : i(e)
                }
              });
              o.im._goEasySocket.emit(n)
            })["catch"](function (e) {
              i({
                code: e.code || 400,
                content: e.content || e
              })
            })) : i({
              code: 400,
              content: "Please create a new message, a message can only be sent once"
            })
          })
        }
      }, {
        key: "sendMessage",
        value: function (e) {
          var t = this,
            n = this.im;
          return new r["default"](function (r, i) {
            if (e instanceof h["default"])
              if (e.status === d["default"]["new"]) {
                e.status = d["default"].sending;
                var s = e.to;
                if (delete e.to, s)
                  if (!s.type || s.type != p.ConversationType.GROUP && s.type != p.ConversationType.PRIVATE) i({
                    code: 400,
                    content: "message require property to.type"
                  });
                  else if (s.id)
                  if (s.data && y.calibrator.isFunction(s.data)) i({
                    code: 400,
                    content: "to.data can not be function"
                  });
                  else {
                    var a = e.notification;
                    if (a)
                      if (y.calibrator.isObject(a)) {
                        if (y.calibrator.isEmpty(a.title)) return void i({
                          code: 400,
                          content: "notification title is required"
                        });
                        if (!y.calibrator.isString(a.title)) return void i({
                          code: 400,
                          content: "notification title must be string"
                        });
                        if (y.calibrator.isEmpty(e.notification.body)) return void i({
                          code: 400,
                          content: "notification body is required"
                        });
                        if (!y.calibrator.isString(e.notification.body)) return void i({
                          code: 400,
                          content: "notification body must be string"
                        })
                      } else if (y.calibrator.isPrimitive(e.notification)) return void i({
                      code: 400,
                      content: "notification must be an json object"
                    });
                    s.data || (s.data = {}), n._conversations.updateByOutMessage(e, s.type, s.id, s.data), t.bulletMessageBuilder.build(s.id, e, s.type).then(function (t) {
                      t.d = (0, o["default"])(s.data);
                      var a = new u["default"]({
                        name: f.EmitType.publishIM,
                        params: t,
                        permission: l["default"].WRITE,
                        singleTimeout: c.SocketTimeout.commonRequestSingle,
                        totalTimeout: c.SocketTimeout.commonRequestTotal,
                        fail: function (t) {
                          e.status = d["default"].fail, i({
                            code: t.resultCode || 408,
                            content: t.content || "Failed to send private message."
                          })
                        },
                        success: function (t) {
                          e.status = d["default"].success, e.timestamp = t.content.timestamp, r(e), n._conversations.updateByOutMessage(e, s.type, s.id, s.data)
                        }
                      });
                      n._goEasySocket.emit(a)
                    })["catch"](function (e) {
                      i({
                        code: e.code || 400,
                        content: e.content || e
                      })
                    })
                  }
                else i({
                  code: 400,
                  content: "message require property to.id"
                });
                else i({
                  code: 400,
                  content: "message require property to."
                })
              } else i({
                code: 400,
                content: "Please create a new message, a message can only be sent once"
              });
            else i({
              code: 400,
              content: "it is invalid message"
            })
          })
        }
      }]), e
    }();
    t["default"] = m
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = c(n(25)),
      r = c(n(5)),
      i = c(n(0)),
      s = c(n(1)),
      a = c(n(233)),
      u = c(n(234));

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var l = function () {
      function e(t) {
        (0, i["default"])(this, e), this.im = null, this.im = t
      }
      return (0, s["default"])(e, [{
        key: "build",
        value: function (e, t, n) {
          var i = this;
          return new r["default"](function (r, s) {
            var c = new a["default"]({
                to: e,
                message: t,
                conversationType: n
              }),
              l = t.type;
            new u["default"](l, i.im).build(t).then(function (e) {
              c.p = (0, o["default"])(e), r(c)
            })["catch"](function (e) {
              s(e)
            })
          })
        }
      }]), e
    }();
    t["default"] = l
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(25)),
      r = f(n(0)),
      i = f(n(1)),
      s = n(15),
      a = f(n(40)),
      u = f(n(102)),
      c = f(n(9)),
      l = f(n(39));

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var d = function () {
      function e(t) {
        (0, r["default"])(this, e), this.mt = null, this.to = null, this.p = null, this.t = null, this.guid = null, this.nt = null, this.validate(t.to, t.message), this.mt = t.message.type, this.to = t.to, this.t = t.conversationType, this.guid = t.message.messageId, this.p = t.message.payload, this.nt = t.message.notification
      }
      return (0, i["default"])(e, [{
        key: "validate",
        value: function (e, t) {
          if (!(t instanceof a["default"])) throw Error("createMessage first.");
          if (s.calibrator.isEmpty(e)) throw Error("userId is empty.");
          if (!s.calibrator.isStringOrNumber(e)) throw Error("userId should be a string or number.");
          if (l["default"].userId == e) throw Error("userId can not be the same as your id.");
          if (t.type == c["default"].text) {
            if (!(t instanceof u["default"])) throw Error("it is not textMessage");
            if ((s.calibrator.isObject(t.payload) ? (0, o["default"])(t.payload).length : t.payload.length) > 3072) throw Error("message-length limit 3kb")
          }
        }
      }]), e
    }();
    t["default"] = d
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = u(n(0)),
      r = n(235),
      i = u(n(236)),
      s = u(n(115)),
      a = u(n(9));

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    t["default"] = function c(e, t) {
      return (0, o["default"])(this, c), e == a["default"].video ? new i["default"](t) : e == a["default"].audio || e == a["default"].image || e == a["default"].file ? new s["default"](t) : r.simplePayloadBuilder
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.simplePayloadBuilder = undefined;
    var o = c(n(5)),
      r = c(n(2)),
      i = c(n(0)),
      s = c(n(1)),
      a = c(n(3)),
      u = c(n(4));

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var l = new(function (e) {
      function t() {
        return (0, i["default"])(this, t), (0, a["default"])(this, (t.__proto__ || (0, r["default"])(t)).call(this))
      }
      return (0, u["default"])(t, e), (0, s["default"])(t, [{
        key: "build",
        value: function (e) {
          return new o["default"](function (t, n) {
            try {
              t(e.payload)
            } catch (o) {
              n(o)
            }
          })
        }
      }]), t
    }(c(n(114))["default"]));
    t.simplePayloadBuilder = l
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(5)),
      r = f(n(2)),
      i = f(n(0)),
      s = f(n(1)),
      a = f(n(3)),
      u = f(n(4)),
      c = f(n(115)),
      l = f(n(116));

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var d = function (e) {
      function t(e) {
        return (0, i["default"])(this, t), (0, a["default"])(this, (t.__proto__ || (0, r["default"])(t)).call(this, e))
      }
      return (0, u["default"])(t, e), (0, s["default"])(t, [{
        key: "build",
        value: function (e) {
          var t = this;
          return new o["default"](function (n, o) {
            var r = new l["default"];
            t.upload(e).then(function (t) {
              var o = t.content;
              undefined;
              r = e.payload;
              var i = "?x-oss-process=video/snapshot,t_0000,f_jpg,w_" + e.payload.video.width + ",m_fast,ar_auto";
              r.video.url = t.content.url, r.thumbnail.url = t.content.url + i, r.video.name = t.content.newFileName, n(r)
            })["catch"](function (e) {
              o(e)
            })
          })
        }
      }]), t
    }(c["default"]);
    t["default"] = d
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.fileUploader = undefined;
    var o = c(n(0)),
      r = c(n(1)),
      i = c(n(101)),
      s = n(238),
      a = n(239),
      u = n(240);

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var l = function () {
      function e() {
        (0, o["default"])(this, e), this.uploader = {
          uniApp: s.uniAppFileUploader,
          wx: a.wxFileUploader,
          html: u.htmlFileUploader
        }
      }
      return (0, r["default"])(e, [{
        key: "upload",
        value: function (e, t) {
          var n = i["default"].resolve();
          return this.uploader[n].upload(e, t)
        }
      }]), e
    }();
    t["default"] = l;
    var f = new l;
    t.fileUploader = f
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.uniAppFileUploader = undefined;
    var o = c(n(5)),
      r = c(n(2)),
      i = c(n(0)),
      s = c(n(1)),
      a = c(n(3)),
      u = c(n(4));

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var l = new(function (e) {
      function t() {
        return (0, i["default"])(this, t), (0, a["default"])(this, (t.__proto__ || (0, r["default"])(t)).call(this))
      }
      return (0, u["default"])(t, e), (0, s["default"])(t, [{
        key: "upload",
        value: function (e, t) {
          var n = this;
          try {
            return new o["default"](function (o, r) {
              uni.uploadFile({
                url: e.host,
                filePath: n.getTempFilePath(e),
                name: "file",
                formData: e.parameters,
                success: function (t) {
                  if (200 === t.statusCode) {
                    var n = e.payload;
                    n.message = t.errMsg, o({
                      code: 200,
                      content: n
                    })
                  } else r({
                    code: t.statusCode,
                    content: t.errMsg
                  })
                },
                fail: function (e) {
                  r({
                    code: 500,
                    content: e.errMsg
                  })
                }
              }).onProgressUpdate(function (e) {
                t && t(e)
              })
            })
          } catch (r) {
            return new o["default"](function (e, t) {
              t({
                code: 500,
                content: r
              })
            })
          }
        }
      }, {
        key: "getTempFilePath",
        value: function (e) {
          var t = e.file || e.fileRes;
          return Array.isArray(t.tempFiles) ? t.tempFiles[0].path : t.tempFilePath
        }
      }]), t
    }(c(n(77))["default"]));
    t.uniAppFileUploader = l
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.wxFileUploader = undefined;
    var o = c(n(5)),
      r = c(n(2)),
      i = c(n(0)),
      s = c(n(1)),
      a = c(n(3)),
      u = c(n(4));

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var l = new(function (e) {
      function t() {
        return (0, i["default"])(this, t), (0, a["default"])(this, (t.__proto__ || (0, r["default"])(t)).apply(this, arguments))
      }
      return (0, u["default"])(t, e), (0, s["default"])(t, [{
        key: "upload",
        value: function (e, t) {
          var n = this;
          try {
            return new o["default"](function (o, r) {
              wx.uploadFile({
                url: e.host,
                filePath: n.getTempFilePath(e),
                name: "file",
                formData: e.parameters,
                success: function (t) {
                  if (200 === t.statusCode) {
                    var n = e.payload;
                    n.message = t.errMsg, o({
                      code: 200,
                      content: n
                    })
                  } else r({
                    code: t.statusCode,
                    content: t.errMsg
                  })
                },
                fail: function (e) {
                  r({
                    code: 500,
                    content: e.errMsg
                  })
                }
              }).onProgressUpdate(function (e) {
                t && t(e)
              })
            })
          } catch (r) {
            return new o["default"](function (e, t) {
              t({
                code: 500,
                content: r
              })
            })
          }
        }
      }, {
        key: "getTempFilePath",
        value: function (e) {
          var t = e.file || e.fileRes;
          return Array.isArray(t.tempFiles) ? t.tempFiles[0].path : t.tempFilePath
        }
      }]), t
    }(c(n(77))["default"]));
    t.wxFileUploader = l
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.htmlFileUploader = undefined;
    var o = c(n(5)),
      r = c(n(2)),
      i = c(n(0)),
      s = c(n(1)),
      a = c(n(3)),
      u = c(n(4));

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var l = new(function (e) {
      function t() {
        return (0, i["default"])(this, t), (0, a["default"])(this, (t.__proto__ || (0, r["default"])(t)).call(this))
      }
      return (0, u["default"])(t, e), (0, s["default"])(t, [{
        key: "upload",
        value: function (e, t) {
          try {
            return new o["default"](function (n, o) {
              var r = new XMLHttpRequest;
              for (var i in r.open("post", e.host, !0), e.headers) r.setRequestHeader(i, e.headers[i]);
              r.upload.onprogress = function (e) {
                t && t(e)
              }, r.upload.onloadstart = function (e) {
                t && t(e)
              }, r.upload.onloadend = function (e) {
                t && t(e)
              };
              var s = new FormData;
              for (var a in e.parameters) "fileRes" == a ? s.append("file", e.parameters[a]) : s.append(a, e.parameters[a]);
              r.send(s), r.onreadystatechange = function () {
                if (4 == r.readyState)
                  if (r.status >= 200 && r.status < 300 || 304 == r.status) {
                    var t = e.payload;
                    t.message = r.responseText, n({
                      code: 200,
                      content: t
                    })
                  } else o({
                    code: r.status,
                    content: r.responseText
                  })
              }
            })
          } catch (n) {
            return new o["default"](function (e, t) {
              t({
                code: 500,
                content: n
              })
            })
          }
        }
      }]), t
    }(c(n(77))["default"]));
    t.htmlFileUploader = l
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = u(n(5)),
      r = u(n(0)),
      i = u(n(1)),
      s = u(n(242)),
      a = u(n(246));

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var c = function () {
      function e(t) {
        (0, r["default"])(this, e), this.uploadTokenResolver = null, this.uploadTokenResolver = new a["default"](t)
      }
      return (0, i["default"])(e, [{
        key: "build",
        value: function (e, t) {
          var n = this;
          return new o["default"](function (o, r) {
            n.uploadTokenResolver.resolve(t).then(function (t) {
              var n = t.content;
              o(new s["default"](n.vendor).build(n, e))
            })["catch"](function (e) {
              r(e)
            })
          })
        }
      }]), e
    }();
    t["default"] = c
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o, r = n(0),
      i = (o = r) && o.__esModule ? o : {
        "default": o
      },
      s = n(243),
      a = n(244),
      u = n(245);
    t["default"] = function c(e) {
      return (0, i["default"])(this, c), e == s.OssType.aliYun ? a.aliYunOSSRequestBuilder : u.qiNiuYunOSSRequestBuilder
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    t.OssType = {
      aliYun: "ALI",
      qiNiu: "QN"
    }
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.aliYunOSSRequestBuilder = undefined;
    var o = c(n(2)),
      r = c(n(0)),
      i = c(n(1)),
      s = c(n(3)),
      a = c(n(4)),
      u = c(n(118));

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var l = function (e) {
      function t() {
        return (0, r["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this))
      }
      return (0, a["default"])(t, e), (0, i["default"])(t, [{
        key: "url",
        value: function (e) {
          return e.host + "/" + e.dir + "/" + this.newFileName(e)
        }
      }, {
        key: "build",
        value: function (e, t) {
          var n = {
              key: e.dir + "/" + this.newFileName(e),
              OSSAccessKeyId: e.accessKeyId,
              policy: e.policy,
              signature: e.signature,
              success_action_status: "200",
              fileRes: t
            },
            o = {
              newFileName: this.newFileName(e),
              url: this.url(e)
            };
          return new u["default"](e.host, null, n, t, o)
        }
      }]), t
    }(c(n(119))["default"]);
    t["default"] = l;
    var f = new l;
    t.aliYunOSSRequestBuilder = f
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }), t.qiNiuYunOSSRequestBuilder = undefined;
    var o = l(n(2)),
      r = l(n(0)),
      i = l(n(1)),
      s = l(n(3)),
      a = l(n(4)),
      u = l(n(119)),
      c = l(n(118));

    function l(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var f = new(function (e) {
      function t() {
        return (0, r["default"])(this, t), (0, s["default"])(this, (t.__proto__ || (0, o["default"])(t)).call(this))
      }
      return (0, a["default"])(t, e), (0, i["default"])(t, [{
        key: "url",
        value: function (e) {
          return e.downloadUrl
        }
      }, {
        key: "build",
        value: function (e, t) {
          var n = {
              key: this.newFileName(e),
              token: e.token,
              file: t
            },
            o = {
              newFileName: this.newFileName(e),
              url: this.url(e)
            };
          return new c["default"](e.host, null, n, t, o)
        }
      }]), t
    }(u["default"]));
    t.qiNiuYunOSSRequestBuilder = f
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = c(n(5)),
      r = c(n(0)),
      i = c(n(1)),
      s = c(n(13)),
      a = c(n(10)),
      u = n(31);

    function c(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var l = function () {
      function e(t) {
        (0, r["default"])(this, e), this.im = null, this.im = t
      }
      return (0, i["default"])(e, [{
        key: "resolve",
        value: function (e) {
          var t = this;
          return new o["default"](function (n, o) {
            var r = new s["default"]({
              name: "uploadToken",
              params: {
                filename: e
              },
              permission: a["default"].WRITE,
              singleTimeout: u.SocketTimeout.commonRequestSingle,
              totalTimeout: u.SocketTimeout.commonRequestTotal,
              fail: function (e) {
                o(e)
              },
              success: function (e) {
                200 == e.code ? n(e) : o(e)
              }
            });
            t.im._goEasySocket.emit(r)
          })
        }
      }]), e
    }();
    t["default"] = l
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = d(n(16)),
      r = d(n(5)),
      i = d(n(0)),
      s = d(n(1)),
      a = n(15),
      u = d(n(13)),
      c = d(n(10)),
      l = n(31),
      f = n(14);

    function d(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var p = function () {
      function e(t) {
        (0, i["default"])(this, e), this.im = null, this.im = t
      }
      return (0, s["default"])(e, [{
        key: "history",
        value: function (e) {
          var t = this;
          return new r["default"](function (n, o) {
            t.transformOptions(e);
            var r = new u["default"]({
              name: f.EmitType.imHistory,
              params: e,
              permission: c["default"].READ,
              singleTimeout: l.SocketTimeout.commonQuerySingle,
              totalTimeout: l.SocketTimeout.commonQueryTotal,
              fail: function (e) {
                o({
                  code: e.code || 408,
                  content: e.content || "Failed to query message"
                })
              },
              success: function (r) {
                if (200 == r.code) {
                  var i = t.transformHistories(r, e);
                  n({
                    code: 200,
                    content: i
                  })
                } else o(r)
              }
            });
            t.im._goEasySocket.emit(r)
          })
        }
      }, {
        key: "transformOptions",
        value: function (e) {
          if (!a.calibrator.isObject(e) || !a.calibrator.isDef(e.friendId) && !a.calibrator.isDef(e.groupId)) throw Error("friendId or groupId is not define.");
          if (a.calibrator.isDef(e.friendId) && a.calibrator.isDef(e.groupId)) throw Error("only contain friendId or groupId.");
          if (a.calibrator.isDef(e.limit) || (e.limit = 10), e.limit > 30 && (e.limit = 30), a.calibrator.isDef(e.friendId)) {
            if (!a.calibrator.isStringOrNumber(e.friendId)) throw Error("TypeError: friendId require string or number.");
            a.calibrator.isNumber(e.friendId) && (e.friendId = e.friendId.toString())
          } else {
            if (!a.calibrator.isStringOrNumber(e.groupId)) throw Error("TypeError: groupId require string or number.");
            a.calibrator.isNumber(e.groupId) && (e.groupId = e.groupId.toString())
          }
          return e
        }
      }, {
        key: "transformHistories",
        value: function (e, t) {
          var n = [];
          return e && e.content && e.content.map(function (e) {
            var r = (0, o["default"])(null);
            r.timestamp = e.ts, r.senderId = e.s, r.type = e.mt, r.payload = "string" == typeof e.p ? JSON.parse(e.p) : e.p, t.groupId && e.d && (r.senderData = JSON.parse(e.d)), n.push(r)
          }), n
        }
      }]), e
    }();
    t["default"] = p
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = h(n(5)),
      r = h(n(0)),
      i = h(n(1)),
      s = h(n(13)),
      a = n(14),
      u = h(n(10)),
      c = n(21),
      l = n(26),
      f = h(n(48)),
      d = n(6),
      p = n(24);

    function h(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var y = function () {
      function e(t) {
        (0, r["default"])(this, e), this.im = null, this.im = t, t._iMReceiver.addIMMessageObserver(this.newNewMessageReceived.bind(this))
      }
      return (0, i["default"])(e, [{
        key: "newNewMessageReceived",
        value: function (e) {
          if (e.t === l.ConversationType.GROUP) {
            var t = f["default"].assemble(e);
            this.im._event.notify(p.ImEventType.GROUP_MESSAGE_RECEIVED, t)
          }
        }
      }, {
        key: "subscribe",
        value: function (e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (Array.isArray(e) && 0 != e.length) {
              for (var r = 0; r < e.length; r++) {
                if (!d.calibrator.isStringOrNumber(e[r])) return void o({
                  code: 400,
                  content: "TypeError: groups item require string or number."
                });
                d.calibrator.isNumber(e[r]) && (e[r] = e[r].toString())
              }
              var i = new s["default"]({
                name: a.EmitType.subscribeGroups,
                params: {
                  groupIds: e
                },
                permission: u["default"].WRITE,
                singleTimeout: c.SocketTimeout.commonInfiniteSingle,
                totalTimeout: c.SocketTimeout.commonInfiniteTotal,
                success: function () {
                  n({
                    code: 200,
                    content: "ok"
                  })
                },
                fail: function (e) {
                  o({
                    code: e.resultCode || 408,
                    content: e.content || "Failed to subscribe group message"
                  })
                }
              });
              t.im._goEasySocket.emit(i)
            } else o({
              code: 400,
              content: "TypeError: groups require array."
            })
          })
        }
      }, {
        key: "unsubscribe",
        value: function (e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (d.calibrator.isStringOrNumber(e)) {
              e = e.toString();
              var r = new s["default"]({
                name: a.EmitType.unsubscribeGroup,
                params: {
                  groupId: e
                },
                permission: u["default"].READ,
                singleTimeout: c.SocketTimeout.commonRequestSingle,
                totalTimeout: c.SocketTimeout.commonRequestTotal,
                success: function () {
                  n({
                    code: 200,
                    content: "ok"
                  })
                },
                fail: function (e) {
                  o({
                    code: e.resultCode || 408,
                    content: e.content || "Failed to unsubscribe group message"
                  })
                }
              });
              t.im._goEasySocket.emit(r)
            } else o({
              code: 400,
              content: "TypeError: channel require string or number."
            })
          })
        }
      }]), e
    }();
    t["default"] = y
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = u(n(0)),
      r = u(n(1)),
      i = u(n(48)),
      s = n(26),
      a = n(24);

    function u(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var c = function () {
      function e(t) {
        (0, o["default"])(this, e), this.im = null, this.im = t, t._iMReceiver.addIMMessageObserver(this.onNewMessageReceived.bind(this))
      }
      return (0, r["default"])(e, [{
        key: "onNewMessageReceived",
        value: function (e) {
          if (e.t === s.ConversationType.PRIVATE) {
            var t = i["default"].assemble(e);
            this.im._event.notify(a.ImEventType.PRIVATE_MESSAGE_RECEIVED, t)
          }
        }
      }]), e
    }();
    t["default"] = c
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(5)),
      r = f(n(0)),
      i = f(n(1)),
      s = f(n(13)),
      a = n(14),
      u = f(n(10)),
      c = n(21),
      l = n(6);

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var d = function () {
      function e(t) {
        (0, r["default"])(this, e), this.im = null, this.im = t
      }
      return (0, i["default"])(e, [{
        key: "get",
        value: function (e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (l.calibrator.isStringOrNumber(e)) {
              l.calibrator.isNumber(e) && (e = e.toString());
              var r = new s["default"]({
                name: a.EmitType.imGroupOnlineCount,
                params: {
                  groupId: e
                },
                permission: u["default"].READ,
                singleTimeout: c.SocketTimeout.commonQuerySingle,
                totalTimeout: c.SocketTimeout.commonQueryTotal,
                fail: function (e) {
                  o(e || {
                    code: 408,
                    content: "Failed to query online group users"
                  })
                },
                success: function (e) {
                  200 == e.code ? n(e) : o(e)
                }
              });
              t.im._goEasySocket.emit(r)
            } else o({
              code: 400,
              content: "TypeError: groupId require string or number."
            })
          })
        }
      }]), e
    }();
    t["default"] = d
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = p(n(5)),
      r = p(n(0)),
      i = p(n(1)),
      s = p(n(13)),
      a = p(n(10)),
      u = n(31),
      c = n(14),
      l = n(6),
      f = n(24),
      d = p(n(78));

    function p(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var h = function () {
      function e(t) {
        (0, r["default"])(this, e), this.im = null, this.im = t, t._goEasySocket.addMessageObserver(d["default"].groupPresence, this.newMessageReceived.bind(this))
      }
      return (0, i["default"])(e, [{
        key: "presence",
        value: function (e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (Array.isArray(e) && 0 != e.length) {
              for (var r = 0; r < e.length; r++) {
                if (!l.calibrator.isStringOrNumber(e[r])) return void o({
                  code: 400,
                  content: "TypeError: groupIds item require string or number."
                });
                if (l.calibrator.isNumber(e[r]) && (e[r] = e[r].toString()), 0 == e[r].length) return void o({
                  code: 400,
                  content: "TypeError: groupIds has empty item."
                })
              }
              var i = {
                groupIds: e
              };
              t.emitRocket(c.EmitType.subscribeGroupPresence, i, function () {
                n({
                  code: 200,
                  content: "ok"
                })
              }, function (e) {
                o({
                  code: e.code || 408,
                  content: e.content || "Failed to subscribe group message"
                })
              }, u.SocketTimeout.commonInfiniteSingle, u.SocketTimeout.commonInfiniteTotal)
            } else o({
              code: 400,
              content: "TypeError: groupIds require array."
            })
          })
        }
      }, {
        key: "unPresence",
        value: function (e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (l.calibrator.isStringOrNumber(e)) {
              l.calibrator.isNumber(e) && (e = e.toString());
              var r = {
                groupId: e
              };
              t.emitRocket(c.EmitType.unsubscribeGroupPresence, r, function () {
                n({
                  code: 200,
                  content: "ok"
                })
              }, function (e) {
                o({
                  code: e.code || 408,
                  content: e.content || "Failed to unsubscribe presence"
                })
              }, u.SocketTimeout.commonRequestSingle, u.SocketTimeout.commonRequestTotal)
            } else o({
              code: 400,
              content: "TypeError: groupId require string or number."
            })
          })
        }
      }, {
        key: "emitRocket",
        value: function (e, t, n, o, r, i) {
          var u = new s["default"]({
            name: e,
            params: t,
            singleTimeout: r,
            totalTimeout: i,
            permission: a["default"].WRITE,
            success: n,
            fail: o
          });
          this.im._goEasySocket.emit(u)
        }
      }, {
        key: "newMessageReceived",
        value: function (e) {
          var t = this,
            n = null;
          e.c && (n = JSON.parse(e.c)), n && n.events && n.events.map(function (e) {
            e.groupOnlineCount = n.userAmount, e.groupId = n.channel, "string" == typeof e.userData && (e.userData = JSON.parse(e.userData)), t.im._event.notify(f.ImEventType.GROUP_PRESENCE, e)
          })
        }
      }]), e
    }();
    t["default"] = h
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = p(n(5)),
      r = p(n(0)),
      i = p(n(1)),
      s = p(n(13)),
      a = p(n(10)),
      u = n(31),
      c = n(14),
      l = n(6),
      f = n(24),
      d = p(n(78));

    function p(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var h = function () {
      function e(t) {
        (0, r["default"])(this, e), this.im = null, this.im = t, this.im._goEasySocket.addMessageObserver(d["default"].userPresence, this.newMessageReceived.bind(this))
      }
      return (0, i["default"])(e, [{
        key: "presence",
        value: function (e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (Array.isArray(e) && 0 != e.length) {
              for (var r = 0; r < e.length; r++) {
                if (!l.calibrator.isStringOrNumber(e[r])) return void o({
                  code: 400,
                  content: "TypeError: userIds item require string or number."
                });
                if (l.calibrator.isNumber(e[r]) && (e[r] = e[r].toString()), 0 == e[r].length) return void o({
                  code: 400,
                  content: "TypeError: userIds has empty item."
                })
              }
              var i = {
                userIds: e
              };
              t.emitRocket(c.EmitType.subscribeUserPresence, i, function () {
                n({
                  code: 200,
                  content: "ok"
                })
              }, function (e) {
                o({
                  code: e.code || 408,
                  content: e.content || "Failed to subscribe group message"
                })
              }, u.SocketTimeout.commonInfiniteSingle, u.SocketTimeout.commonInfiniteTotal)
            } else o({
              code: 400,
              content: "TypeError: userIds require array."
            })
          })
        }
      }, {
        key: "unPresence",
        value: function (e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (l.calibrator.isStringOrNumber(e)) {
              l.calibrator.isNumber(e) && (e = e.toString());
              var r = {
                userId: e
              };
              t.emitRocket(c.EmitType.unsubscribeUserPresence, r, function () {
                n({
                  code: 200,
                  content: "ok"
                })
              }, function (e) {
                o({
                  code: e.code || 408,
                  content: e.content || "Failed to unsubscribe presence"
                })
              }, u.SocketTimeout.commonRequestSingle, u.SocketTimeout.commonRequestTotal)
            } else o({
              code: 400,
              content: "TypeError: id require string or number."
            })
          })
        }
      }, {
        key: "emitRocket",
        value: function (e, t, n, o, r, i) {
          var u = new s["default"]({
            name: e,
            params: t,
            singleTimeout: r,
            totalTimeout: i,
            permission: a["default"].WRITE,
            success: n,
            fail: o
          });
          this.im._goEasySocket.emit(u)
        }
      }, {
        key: "newMessageReceived",
        value: function (e) {
          var t = this,
            n = [];
          e.c && (n = JSON.parse(e.c).events || []), n.map(function (e) {
            "string" == typeof e.userData && (e.userData = JSON.parse(e.userData)), t.im._event.notify(f.ImEventType.USER_PRESENCE, e)
          })
        }
      }]), e
    }();
    t["default"] = h
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(5)),
      r = f(n(0)),
      i = f(n(1)),
      s = n(14),
      a = f(n(13)),
      u = f(n(10)),
      c = n(21),
      l = n(6);

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var d = function () {
      function e(t) {
        (0, r["default"])(this, e), this.im = null, this.im = t
      }
      return (0, i["default"])(e, [{
        key: "hereNow",
        value: function (e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (e.userIds && Array.isArray(e.userIds) && 0 != e.userIds.length) {
              for (var r = 0; r < e.userIds.length; r++) {
                if (!l.calibrator.isStringOrNumber(e.userIds[r])) return void o({
                  code: 400,
                  content: "TypeError: userIds item require string or number."
                });
                if (l.calibrator.isNumber(e.userIds[r]) && (e.userIds[r] = e.userIds[r].toString()), 0 == e.userIds[r].length) return void o({
                  code: 400,
                  content: "TypeError: userIds has empty item."
                })
              }
              var i = new a["default"]({
                name: s.EmitType.imHereNow,
                params: e,
                permission: u["default"].READ,
                singleTimeout: c.SocketTimeout.commonQuerySingle,
                totalTimeout: c.SocketTimeout.commonQueryTotal,
                fail: function (e) {
                  o({
                    code: e.resultCode || 408,
                    content: e.content || "Failed to query online users"
                  })
                },
                success: function (e) {
                  200 == e.code ? n(e) : o(e)
                }
              });
              t.im._goEasySocket.emit(i)
            } else o({
              code: 400,
              content: "TypeError: userIds require array."
            })
          })
        }
      }]), e
    }();
    t["default"] = d
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = f(n(5)),
      r = f(n(0)),
      i = f(n(1)),
      s = n(14),
      a = f(n(13)),
      u = f(n(10)),
      c = n(21),
      l = n(15);

    function f(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var d = function () {
      function e(t) {
        (0, r["default"])(this, e), this.im = null, this.im = t
      }
      return (0, i["default"])(e, [{
        key: "hereNow",
        value: function (e) {
          var t = this;
          return new o["default"](function (n, o) {
            if (l.calibrator.isStringOrNumber(e)) {
              l.calibrator.isNumber(e) && (e = e.toString());
              var r = new a["default"]({
                name: s.EmitType.imGroupHereNow,
                params: {
                  groupId: e
                },
                permission: u["default"].READ,
                singleTimeout: c.SocketTimeout.commonQuerySingle,
                totalTimeout: c.SocketTimeout.commonQueryTotal,
                fail: function (e) {
                  o({
                    code: e.resultCode || 408,
                    content: e.content || "Failed to query online group users"
                  })
                },
                success: function (e) {
                  200 == e.code ? n(e) : o(e)
                }
              });
              t.im._goEasySocket.emit(r)
            } else o({
              code: 400,
              content: "TypeError: groupId require string or number."
            })
          })
        }
      }]), e
    }();
    t["default"] = d
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = s(n(0)),
      r = s(n(1)),
      i = s(n(78));

    function s(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var a = function () {
      function e(t) {
        (0, o["default"])(this, e), this.im = null, this.observers = [], this.im = t, t._goEasySocket.addMessageObserver(i["default"].imMessage, this.newNewMessageReceived.bind(this))
      }
      return (0, r["default"])(e, [{
        key: "newNewMessageReceived",
        value: function (e) {
          this.sendAck(e), this.notify(e)
        }
      }, {
        key: "addIMMessageObserver",
        value: function (e) {
          this.observers.push(e)
        }
      }, {
        key: "sendAck",
        value: function (e) {
          this.im._goEasySocket.sendAck("imAck", {
            publishGuid: e.i
          })
        }
      }, {
        key: "notify",
        value: function (e) {
          for (var t = 0; t < this.observers.length; t++) this.observers[t](e)
        }
      }]), e
    }();
    t["default"] = a
  }, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    });
    var o = p(n(25)),
      r = p(n(73)),
      i = p(n(5)),
      s = p(n(0)),
      a = p(n(1)),
      u = p(n(13)),
      c = n(14),
      l = p(n(10)),
      f = n(21),
      d = n(26);

    function p(e) {
      return e && e.__esModule ? e : {
        "default": e
      }
    }
    var h = function () {
      function e(t, n) {
        (0, s["default"])(this, e), this.im = null, this.userData = {}, this.groupData = {}, this.im = t, this.putUserData(n.id, n.data)
      }
      return (0, a["default"])(e, [{
        key: "putData",
        value: function (e, t, n) {
          n || (n = {}), e == d.ConversationType.PRIVATE ? this.userData[t] = n : this.groupData[t] = n
        }
      }, {
        key: "putUserData",
        value: function (e, t) {
          this.userData[e] = t
        }
      }, {
        key: "putGroupData",
        value: function (e, t) {
          this.groupData[e] = t
        }
      }, {
        key: "loadData",
        value: function (e, t) {
          var n = this;
          return new i["default"](function (i, s) {
            var a = void 0;
            if ((a = d.ConversationType.PRIVATE === t ? n.userData : n.groupData)[e] && 0 != (0, r["default"])(a[e]).length) i(a[e]);
            else {
              var p = {
                  targetId: e,
                  type: t
                },
                h = new u["default"]({
                  name: c.EmitType.imData,
                  params: p,
                  permission: l["default"].READ,
                  singleTimeout: f.SocketTimeout.commonQuerySingle,
                  totalTimeout: f.SocketTimeout.commonQueryTotal,
                  success: function (t) {
                    t.content || (t.content = (0, o["default"])({})), a[e] = JSON.parse(t.content), i(a[e])
                  },
                  fail: function (e) {
                    s(e)
                  }
                });
              n.im._goEasySocket.emit(h)
            }
          })
        }
      }]), e
    }();
    t["default"] = h
  }, function (e, t) {
    e.exports = {
      name: "goeasy-js",
      version: "1.2.0",
      keywords: ["realtime", "framework", "websocket", "tcp", "events", "client"],
      scripts: {
        build: "npm run build-goeasy & npm run build-goeasy-dev & npm run build-goeasyim & npm run build-goeasyim-dev",
        "build-goeasy": "webpack --config build/webpack.goeasy.config.js",
        "build-goeasy-dev": "webpack --config build/webpack.goeasy-dev.config.js",
        "build-goeasyim": "webpack --config build/webpack.goeasyim.config.js",
        "build-goeasyim-dev": "webpack --config build/webpack.goeasyim-dev.config.js"
      },
      license: "MIT",
      dependencies: {
        "socket.io-client-goeasy": "./dependencies/socket.io-client-goeasy"
      },
      devDependencies: {
        "babel-core": "^6.26.3",
        "babel-loader": "^7.1.4",
        "babel-plugin-add-module-exports": "^0.2.1",
        "babel-plugin-transform-class-properties": "^6.24.1",
        "babel-plugin-transform-runtime": "^6.23.0",
        "babel-preset-env": "^1.7.0",
        "babel-runtime": "^6.26.0",
        "core-js": "^3.7.0",
        "es3ify-loader": "^0.2.0",
        "strip-loader": "^0.1.2",
        "uglifyjs-webpack-plugin": "^1.3.0",
        uuid: "^3.3.2",
        webpack: "^3.12.0"
      }
    }
  }])
});