var clearbtn = document.getElementById("clear");
var canvas = document.getElementById("canv");

clearbtn.addEventListener("click", function(e){
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    alert("Your canvas has been magically cleared!");
});

canvas.addEventListener("click", function(e){
    var ctx = canvas.getContent('2d');
    var xcor = event.clientX;
    var ycor = event.clientY;
    ctx.fillRect(xcor, ycor, 200, 200);
});

