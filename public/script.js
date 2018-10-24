var side = 9;
var socket;
var matrix;

function setup() 
{
    frameRate(0);
    socket = io.connect();

    socket.on('matrix', function(mtx){
        matrix = mtx;
        createCanvas(110* side, 110 * side);
        noLoop();

        socket.on('redraw', function(mtx){
            matrix = mtx;
            redraw();

        });
    });

    background("#acacac");
}
function draw() {
    // var FramesNumber = 0;
    // FramesNumber++;
    
    // var textpogoda = "1"
       
    // if(FramesNumber == 30 || FramesNumber == FramesNumber + 30 ){
    //    textpogoda = pogoda;
    //    pogoda = "Spring"
    // }
    
    
     
    
    // fill(0);
    
    // text(pogoda,920,20)
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            

            if (matrix[y][x] == 1) {
                fill(0, 120, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac")
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 2) {
                fill(255, 255, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill(10, 15, 0);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill(10, 15, 255);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill(250, 15, 25);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill(0, 242, 212);
                rect(x * side, y * side, side, side);
             }
             else if (matrix[y][x] ==8) {
                fill(132, 4, 254);
                rect(x * side, y * side, side, side);

            }
            
            else if (matrix[y][x] == 9) {
                fill(230, 94, 9);
                rect(x * side, y * side, side, side);

            }
        }
    }
}