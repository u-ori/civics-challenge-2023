var oldX=0;
var oldY=0;
var imgX=0;
var imgY=0;
var zoom=0;

var mouseDown = false;
addEventListener("mousedown", (e) => {mouseDown=true
    oldX=e.clientX;
    oldY=e.clientY;
});
addEventListener("mouseup", (e) => {mouseDown=false
    imgX=imgX-(oldX-e.clientX);
    imgY=imgY-(oldY-e.clientY);
});

addEventListener("mousemove", (e) => {
    if (!mouseDown) {
        return
    }
    document.getElementById("test").style.top = imgY-(oldY-e.clientY)+"px";
    document.getElementById("test").style.left = imgX-(oldX-e.clientX)+"px";
});

addEventListener("wheel", (e) => {
    if (e.deltaY<0) {
        if (zoom == 10) {
            return
        }
        zoom++;
        console.log(document.getElementById("test").width);
        document.getElementById("test").style.width = document.getElementById("test").width*1.1+"px";
    } else {
        if (zoom == 0) {
            return
        }
        zoom--;

        console.log(document.getElementById("test").width);
        document.getElementById("test").style.width = document.getElementById("test").width/1.1+"px";
    }
    console.log(zoom)
});