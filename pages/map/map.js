// pages/map/map.js
// const map = require('../../utils/map.js')
import Map from '../../utils/map.js';
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    // const ctx = wx.createCanvasContext('myCanvas');
    // const ctx = map.init('myCanvas');
    let map = new Map('myCanvas');
    // map.ctx.setFillStyle('red');
    // map.ctx.fillRect(10,10,150,75);
    // map.ctx.draw();
    let pillarList = [
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
    ];

    // map.drawPillars(pillarList);

    let pathList = [
      {
        startX: 10,
        endX: 50,
        startY: 250,
        endY: 300,
        width: 10
      },
       {
        startX: 50,
        endX: 100,
        startY: 300,
        endY: 300,
        width: 5
      }
    ];
    // map.drawPaths(pathList);
    let option = {
      pillarList: pillarList,
      pathList: pathList
    };

    map.setOption(option);
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
  }
})