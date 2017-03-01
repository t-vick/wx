class Map {
    constructor(canvasId){
        this.ctx = wx.createCanvasContext(canvasId);
        this.ctx.setLineCap('round');
        this.ctx.setLineJoin('round');
        this.ctx.setGlobalAlpha(0.2);
    }

    setOption(option) {
        let _this = this;
        wx.getSystemInfo({
            success: function(data) {
                _this.ctx.setFillStyle('yellow');
                _this.ctx.fillRect(-option.xLoc,-option.yLoc,data.windowWidth,data.windowHeight);
                _this.drawPillars(option.pillarList);
                _this.drawPaths(option.pathList);
                _this.ctx.draw();
            },
            fail: function(err) {
                console.log(err);
            },complete: function(data) {
                console.log('complete');
            }
        })
    }

    drawPillars(pillarList) {
        this.ctx.setFillStyle('black');
        for (let pillar of pillarList) {
            this.ctx.fillRect(pillar.x,pillar.y,pillar.width,pillar.height);
            
        }
    }

    drawPaths (pathList) {
        this.ctx.setStrokeStyle('blue');
        // this.ctx.beginPath();
        for (let path of pathList) {
            this.ctx.setLineWidth(path.width);
            this.ctx.moveTo(path.startX, path.startY);
            this.ctx.lineTo(path.endX, path.endY);
            // this.ctx.stroke();//这句代码不能放在这里，否则线条的透明不不一致，
        }
        this.ctx.stroke();//放在这里才能保证画出的线条的透明度一致
    }

    translate(x, y) {
        this.ctx.translate(x, y);
    }
}

export default Map;