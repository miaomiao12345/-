var util = require('../../utils/util.js');
Page({
  data:{
    start_data:"2019/2/4"
  },
  quweibo:function(e) {
    wx.navigateTo({
      url: '../weibo/weibo',
      success:function() {},
      fail:function() {},
      complete:function() {}
    })
  },
  onLoad:function() {
    var time = util.formatTime(new Date());
    var startTime = new Date(this.data.start_data);
    var endTime = new Date(time);
    var days = endTime.getTime()-startTime.getTime();
    var day = parseInt(days/(1000*60*60*24));
    this.setData({
      time: time,
      num:day
    });
  }
})