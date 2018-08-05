var Api = require('../../utils/api.js')
var wxRequest = require('../../utils/wxRequest.js')
var app = getApp()
Page({
  data:{

  },
  formSubmit: function (e) {
    var data = e.detail.value;
    var api_url = "https://api.chinapoco.cn/post";
    wxRequest.Post(api_url,data,function(res){
      console.log(res);
      if(res.code == 200) {
        wx.showToast({
          title:"提交成功"
        })
      } else if (res.code == -400){
        wx.showToast({
          title: "请输入用户名"
        })
      }
    },function(){
      wx.showToast({
        title:"加载失败"
      })
    })
    
  }
})