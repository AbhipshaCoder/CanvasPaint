var mouseEvent = "empty";
var last_position_of_x , last_position_of_y;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color - "black";
width_of_line = 1;

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    color=document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;

    mouseEvent = "mousedown";
}

canvas.addEventListener("mousemove", mymousemove);

function mymousemove(e){

    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;

        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_of_x, current_position_of_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;

}

canvas.addEventListener("mouseup", mymouseup);
function mymouseup(e){
    mouseEvent= "mouseup";
}

canvas.addEventListener("mouseleave", mymouseleave);
function mymouseleave(e){
    mouseEvent= "mouseleave";
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}