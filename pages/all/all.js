//coverUp.js
var app = getApp();
Page({
  data: {
    shifouplay: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0,0,0,0,0,0,0,0]
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
            dataUrl: '../../songs/因为遇见你.mp3'
            
          })
          break;
        case '2':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/最美的时光.mp3'

          })
          break;
        case '3':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/长大以后的世界.mp3'

          })
          break;
        case '4':
          wx.playBackgroundAudio({
            dataUrl: '../../songs阳光不锈.mp3'

          })
          break;
        case '5':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/十七.mp3'

          })
          break;
        case '6':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/Sleep.mp3'

          })
          break;
        case '7':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/骄傲.mp3'

          })
          break;
        case '8':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/宝贝.mp3'

          })
          break;
        case '9':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/做我自己.mp3'

          })
          break;
        case '10':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/The Wrong Things.mp3'

          })
          break;
        case '11':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/Will You.mp3'
            
          })
          break;
        case '12':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/一样.mp3'
          })
          break;
        case '13':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/我的童年.mp3',
           
          })
          break;
        case '14':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/孤注.mp3',
            
          })
          break;
        case '15':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/天使.mp3',
            
          })
          break;
        case '16':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/我不知道.mp3',
            
          })
          break;
        case '17':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/长歌行.mp3',
           
          })
          break;
        case '18':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/只要有想见的人，就不是孤身一人.mp3',
            
          })
          break;
        case '1':
          wx.playBackgroundAudio({
            dataUrl: '../../songs/友谊地久天长.mp3',
          
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