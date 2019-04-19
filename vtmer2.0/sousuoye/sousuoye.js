window.onload = function(){
var next = document.getElementsByClassName('next');
var prev = document.getElementsByClassName('prev');
var index = 0;
next[0].onclick = function () {
    next_pic();
}
prev[0].onclick = function () {
    prev_pic();
}
function next_pic () {
    index++;
            if(index > 4){
                index = 0;
            }
            showCurrentDot();
}
function prev_pic () {
     index--;
             if(index < 0){
                 index = 4;
             }
             showCurrentDot();
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
            index = i;
            showCurrentDot();
            }
        })(i);            
    }
}    