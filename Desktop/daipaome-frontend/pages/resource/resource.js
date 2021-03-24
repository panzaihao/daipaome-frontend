Page({
  data: {

  },

  onLoad: function () {
    const time = '2021-02-16 21:05:00'
    var start = Date.parse(time)
    var date = new Date(start)
    console.log(date)

    var Y = date.getFullYear()
    var M = date.getMonth() + 1
    var D = date.getDate()
    var H = date.getHours()
    var m = date.getMinutes()
    var s = date.getSeconds()

    if (M < 10) {
      M = '0' + M;
    }
    if (D < 10) {
      D = '0' + D;
    }
    if (H < 10) {
      H = '0' + H;
    }
    if (m < 10) {
      m = '0' + m;
    }
    if (s < 10) {
      s = '0' + s;
    }

    var now = new Date().getTime()
    var diff = (now - start) / 1000
    var diffDays = parseInt(diff / 86400)
    var diffHours = parseInt(diff / 3600)
    var diffMinutes = parseInt(diff / 60)
    var diffSeconds = parseInt(diff)

    if (diffDays > 0 && diffDays < 3) {
      console.log(diffDays + '天前')
    } else if (diffDays <= 0 && diffHours > 0) {
      console.log(diffHours + '小时前')
    } else if (diffHours <= 0 && diffMinutes > 0) {
      console.log(diffMinutes + '分钟前')
    } else if (diffSeconds < 60) {
      if (diffSeconds <= 0) {
        console.log('刚刚')
      } else {
        console.log(diffSeconds + '秒前')
      } 
    } else if (diffDays >= 3 && diffDays < 30) {
      console.log(M + '-' + D + ' ' + H + ':' + m)
    } else if (diffDays >= 30) {
      console.log(Y + '-' + M + '-' + D + ' ' + H + ':' + m)
    }
  }
})