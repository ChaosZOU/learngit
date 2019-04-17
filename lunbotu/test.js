window.onload=function(){
var warp = document.getElementsByClassName("warp");
var next = document.getElementsByClassName("next");
var prev = document.getElementsByClassName("prev");
var index = 0;
next[0].onclick = function () {
    next_pic();
}
prev[0].onclick = function () {
    prev_pic();
}    
function next_pic () {
    if(warp[0].style.left === "-594px"){
        newLeft = -198;
    }else{
        newLeft = parseInt(warp[0].style.left)-198;
    }
    warp[0].style.left = newLeft + "px";
    index++;
            if(index > 2){
                index = 0;
            }
            showCurrentDot();
}
function prev_pic () {
   if(warp[0].style.left === "-198px"){
        newLeft = -594;
    }else{
        newLeft = parseInt(warp[0].style.left)+198;
    }
    warp[0].style.left = newLeft + "px";
    index--;
            if(index < 0){
                index = 2;
            }
            showCurrentDot();
}
    var timer = null;
    function autoPlay () {
        timer = setInterval(function () {
            next_pic();
        },1500);
    }
    autoPlay();
var container = document.getElementsByClassName("container");
        container.onmouseenter = function () {
            clearInterval(timer);
        }
        container.onmouseleave = function () {
            autoPlay();    
        }
var dots = document.getElementsByTagName("span");
function showCurrentDot () {
        for(var i = 0, len = dots.length; i < len; i++){
             dots[i].className = "";
        }
        dots[index].className = "on";
    }
for (var i = 0, len = dots.length; i < len; i++){
    (function(i){
        dots[i].onclick = function () {
            var dis = index - i;
            if(index == 2 && parseInt(warp[0].style.left)!== -594){
                    dis = dis - 4;     
            }
            if(index == 0 && parseInt(warp[0].style.left)!== -198){
                    dis = 3 + dis;
            }
            warp[0].style.left = (parseInt(warp[0].style.left) +  dis * 198)+"px";
            index = i;
            showCurrentDot();
            }
        })(i);            
    }
}      