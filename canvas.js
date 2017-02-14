var clearbtn = document.getElementById("clear");
var canvas = document.getElementById("canv");

clearbtn.addEventListener("click", function(e){
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

    alert("Your canvas has been magically cleared!");
});

canvas.addEventListener("click", function(e){
    var ctx = canvas.getContext('2d');
    var stroke = 10;
    var rect = canvas.getBoundingClientRect();
    var xcor = event.clientX - rect.left - 0.5*stroke;
    var ycor = event.clientY - rect.top - 0.5*stroke;
    ctx.fillRect(xcor, ycor, stroke, stroke);
});

