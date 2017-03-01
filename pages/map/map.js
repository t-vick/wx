// pages/map/map.js
// const map = require('../../utils/map.js')
import Map from '../../utils/map.js';
Page({
  data:{
    x: 0,
    y: 0,
    map: null,
    option: {
      xLoc: 0,
      yLoc: 0,
      pillarList: [
      {
        x: 150,
        y: 150,
        width: 10,
        height: 10
      },
      {
        x: 150,
        y: 200,
        width: 10,
        height: 10
      }
    ],
      pathList: [
      {
        startX: -10,
        endX: 400,
        startY: 250,
        endY: 250,
        width: 30
      },
       {
        startX: -10,
        endX: 400,
        startY: 400,
        endY: 400,
        width: 30
      },
       {
        startX: 30,
        endX: 30,
        startY: -10,
        endY: 800,
        width: 30
      },
       {
        startX: 330,
        endX: 330,
        startY: -10,
        endY: 800,
        width: 30
      }
    ]
    }
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // const ctx = wx.createCanvasContext('myCanvas');
    // const ctx = map.init('myCanvas');
    this.data.map = new Map('myCanvas');

    this.data.map.setOption(this.data.option);
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  start: function(e) {
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    })
  },
  move: function(e) {
    let xOffset = e.touches[0].x - this.data.x;
    let yOffset = e.touches[0].y - this.data.y;
    this.setData({
      x: e.touches[0].x,
      y: e.touches[0].y
    })

    this.data.option.xLoc = this.data.option.xLoc + xOffset;
    this.data.option.yLoc = this.data.option.yLoc + yOffset;

    this.data.map.translate(this.data.option.xLoc, this.data.option.yLoc);
    this.data.map.setOption(this.data.option);
  }
})