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
var eleInners = document.getElementById('inner-list'),
    eleDots = document.getElementById('dot-list'),
        liImgs = eleInners.getElementsByTagName('li'),
        liDots = eleDots.children,
        LI_WIDTH = liImgs[0].offsetWidth,
            TIME_DURATION = 3000,
            interval = null,
            index = 0,
            circle = 0;
           eleInners.appendChild(liImgs[0].cloneNode(true));
        for(var i= 0,len = liImgs.length-1;i<len;i++){
            var li = document.createElement('li');
            li.innerHTML = i+1;
            eleDots.appendChild(li)
        }
        liDots[0].className = 'cur'
        function animate(obj,targetPlace){
            clearInterval(obj.timer);
        obj.timer = setInterval(function(){
            var speed = obj.offsetLeft > targetPlace ? -15:15;
            var result = targetPlace - obj.offsetLeft;
              if(Math.abs(result) > Math.abs(speed)){
                  obj.style.left = obj.offsetLeft + speed +'px'
              }else{
                  obj.style.left = targetPlace+'px';
                  clearInterval(obj.timer);
              }
          },10)

        }
        interval = setInterval(autoplay,2500)
        function autoplay(){
            index++;
            if(index > liImgs.length -1){
                eleInners.style.left = 0;
                index = 1;
            }
            animate(eleInners, -index * LI_WIDTH);
            circle++;
            if(circle >= liImgs.length -1){
                circle = 0;
            }
            for(var i= 0,len = liDots.length;i<len;i++){
                liDots[i].className ='';

            }
            liDots[circle].className = 'cur'
        }
        /*function moveright(){
            index--;
            if(index <0){
                eleInners.style.left = -(liImgs.length -2)* LI_WIDTH + 'px';
                index = liImgs.length -2;
            }
            animate(eleInners, -index * LI_WIDTH);
            circle --;
            if(circle < 0){
                circle = liImgs.length - 2;
            }
            for(var i= 0,len = liDots.length;i<len;i++){
                liDots[i].className ='';
            }
            liDots[circle].className = 'cur'
        }*/
        eleInners.addEventListener('mouseenter',function(event){
           clearInterval(interval)
        });
        eleInners.addEventListener('mouseleave',function(event){
            interval = setInterval(autoplay,2500)
        });

        eleDots.addEventListener('click',function(event){
            clearInterval(interval);
            var target = event.target;
            var currentTarget = event.currentTarget;
            index = target.innerHTML - 0 - 1;
            circle = index ;
            for(var i= 0,len = liDots.length;i<len;i++){
                liDots[i].className ='';
            }
            liDots[circle].className = 'cur'
            animate(eleInners, - index * LI_WIDTH);
        })
}


