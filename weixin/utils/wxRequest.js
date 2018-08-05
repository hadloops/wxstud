function request(url, params, success, fail) {
  this.requestLoading(url, params, success, fail)
}
// 展示进度条的网络请求
// url:网络请求的url
// params:请求参数
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
function Get(url, params, success, fail) {
  wx.request({
    url: url,
    data: params,
    header: {
      'Content-Type': 'application/json'
    },
    success: function (res) {
      if (res.statusCode == 200) {
        success(res.data)
      } else {
        fail()
      }
    },
    fail: function (res) {
      fail()
    },
    complete: function (res) {
    },
  })
}
function Post(url, params, success, fail) {
  wx.request({
    url: url,
    data: params,
    header: {
      'content-type': 'application/x-www-form-urlencoded'
    },
    method: 'post',
    success: function (res) {
      if (res.statusCode == 200) {
        success(res.data)
      } else {
        fail()
      }
    },
    fail: function (res) {
      fail()
    },
    complete: function (res) {
    },
  })
}

module.exports = {
  request: request,
  Get: Get,
  Post: Post
}