window.onload = function(){
    /*切换书本页面*/
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

/*切换类别*/
var one = document.getElementsByClassName('lei');
var num=0;
function showCurrentLei () {
    for(var i = 0 ; i < 4 ; i++){
        one[i].style.color = "black" ;
    }  
    one[num].style.color = "rgb(235,161,85)";
}
for (var i = 0 ; i < 4; i++){
    (function(i){
        one[i].onclick = function () {
            num = i;
            showCurrentLei();
            index = 0;
            showCurrentDot();
            }
        })(i);            
    }
    
/*轮播图*/

}


