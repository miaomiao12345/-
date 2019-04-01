//coverUp.js
var app = getApp();
Page({
  data: {
    shifouplay: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  playMusic: function (e) {
    //
    let sfp = 'shifouplay[' + (e.target.id - 1) + ']';
    if (e.target.id && this.data.shifouplay[e.target.id - 1]) {
      wx.pauseBackgroundAudio();
      //this.data.shifouplay = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      this.setData({
        // [this.data.shifouplay]: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [sfp]: 0
      })
    } else {
      switch (e.target.id) {
        case '1':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/看得最远的地方.mp3',
            title: '因为遇见你',
            coverImgUrl: 'roy.jpg'
          })
          break;
        case '2':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/年少有为.mp3',

          })
          break;
        case '3':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/空白格.mp3',

          })
          break;
        case '4':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/傻子.mp3',

          })
          break;
        case '5':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/我要我们在一起.mp3',

          })
          break;
        case '6':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/记得.mp3',

          })
          break;
  
      }
      var sfp1 = null;
      for (var i = 0; i < this.data.shifouplay.length; i++) {
        if (this.data.shifouplay[i] == 1) {
          sfp1 = "shifouplay[" + i + "]";
        }
      }
      this.setData({
        [sfp1]: 0,
        [sfp]: 1
      })
    }
  }
})