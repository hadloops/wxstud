//index.js
var Api = require('../../utils/api.js')
var wxRequest = require('../../utils/wxRequest.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [
      { url: 'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg' },
      { url: 'http://img04.tooopen.com/images/20130617/tooopen_21241404.jpg' },
      { url: 'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg' },
      { url: 'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg' },
      { url: 'http://img07.tooopen.com/images/20170822/tooopen_sy_221632634798.jpg' },
      { url:'http://img06.tooopen.com/images/20180322/tooopen_sy_236837641582.jpg'}
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    list: [
      { ul: 'https://blog.minqin58.com' },
      { ul: 'https://blog.minqin58.com' },
      { ul: 'https://blog.minqin58.com' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'https://api.chinapoco.cn', //请求接口的url
      method: 'POST', //请求方式
      data: {},//请求参数
      header: {
        'content-type': 'application/json' // 默认值
      },
      
      complete() {  //请求结束后隐藏 loading 提示框
        wx.hideLoading();
      },
      success: res => {
        this.setData({
          info: res.data.data, 
        })
       
       
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})