var button = document.getElementById("clearbutton");
var canvas = document.getElementById("canv");

button.addEventListener("click", function(e){
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
});