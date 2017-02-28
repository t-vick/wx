class Map {
    constructor(canvasId){
        this.ctx = wx.createCanvasContext(canvasId);
        this.ctx.setLineCap('round');
        this.ctx.setLineJoin('round');
        this.ctx.setGlobalAlpha(0.2);
        let _this = this;
        wx.getSystemInfo({
            success: function(data) {
                _this.ctx.setFillStyle('yellow');
                _this.ctx.fillRect(0,0,data.windowWidth,data.windowHeight);
            },
            fail: function(err) {
                console.log(err);
            },complete: function(data) {
                console.log('complete');
            }
        })
    }

    drawPillars(pillarList) {
        // this.ctx.beginPath();
        this.ctx.setFillStyle('black');
        for (let pillar of pillarList) {
            this.ctx.fillRect(pillar.x,pillar.y,pillar.width,pillar.height);
            
        }
    }

    drawPaths (pathList) {
        this.ctx.setStrokeStyle('blue');
        for (let path of pathList) {
            this.ctx.setLineWidth(path.width);
            this.ctx.moveTo(path.startX, path.startY);
            this.ctx.lineTo(path.endX, path.endY);
            this.ctx.stroke();
        }
    }

    setOption(option) {
        this.drawPillars(option.pillarList);
        this.drawPaths(option.pathList);
        this.ctx.draw();
    }
}

export default Map;