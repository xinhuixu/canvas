var button = document.getElementById("clearbutton");
var canvas = document.getElementById("canv");

button.addEventListener("click", function(e){
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
});

canvas.addEventListener("click", function(e){
    var ctx = canvas.getContent('2d');
    var xcor = event.clientX;
    var ycor = event.clientY;
    ctx.fillRect(xcor, ycor, 200, 200);
});