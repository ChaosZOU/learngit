window.onload = function(){
var one = document.getElementsByClassName('login')
var two = document.getElementsByClassName('outpage')
var three = document.getElementsByClassName('x')
var four = document.getElementsByClassName('signup')
var five = document.getElementsByClassName('login-user')
one[0].onclick = function(){
    two[0].style.display = "block";
}
three[0].onclick = function(){
    two[0].style.display = "none";
}
four[0].onclick = function(){
    one[0].style.display = "none";
    two[0].style.display = "none";
    five[0].style.display = "block";
}
}