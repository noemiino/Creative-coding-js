function createCanvas() {
    var x = document.createElement("Canvas");
    var ctx = x.getContext("2d");
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(20, 20, 150, 100);
    document.body.appendChild(x);
}
