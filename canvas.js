var clearbtn = document.getElementById("clear");
var canvas = document.getElementById("canv");

clearbtn.addEventListener("click", function(e){
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    alert("Your canvas has been magically cleared!");
});

var draw = function(e) {
    console.log(e);
}

var ctx = canvas.getContext("2d");
ctx.addEventListener("click", draw);
