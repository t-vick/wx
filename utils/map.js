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

    translate(x, y) {
        this.ctx.translate(x, y);
    }
}

export default Map;