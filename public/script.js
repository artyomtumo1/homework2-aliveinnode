var side = 9;
var socket;
var matrix;
var Stat;
var proc;

// var grass_procent;
// var GrassEaters_procent;
// var GishArr_procent;
// var unkArr_procent;
// var zavodArr_procent;
// var bombArr_procent;
// var virusArr_procent;
// var Robo_Hunters_Arr_procent;

function setup() {
    frameRate(0);
    socket = io.connect();

    socket.on('matrix', function (mtx) {
        matrix = mtx;
        createCanvas(160 * side, 102 * side);
        noLoop();

        socket.on('redraw', function (mtx) {
            matrix = mtx;
            redraw();
        });
        socket.on("MyStats", function (Statistics) {
            Stat = Statistics;
        });
        socket.on("Procent",function(procentZang)
        {
       proc = procentZang;
        }
    )

        
        // socket.on("",function(){});
        // socket.on("",function(){})
        // socket.on("",function(){})
        // socket.on("",function(){})
        // socket.on("",function(){})

    });


}
function draw() {
    background("#acacac");
    textSize(32);
    fill("green");

    //var procentZang = [2, 1.7, 0.8, 0.1, 0.2, 0.4, 0.3, 0.3];

    // var procentZang = {
    //     "Grass": 2,
    //     "GrassEater": 1.7,
    //     "Gishatich": 0.8,
    //     "Unknown": 0.1,
    //     "zavod": 0.2,
    //     "bomb": 0.4,
    //     "Virus": 0.3,
    //     "RoboHunter": 0.3
    // }


    /////
    // num.toFixed(2);
    var margin = 35;
    var colornum = 0;
    

    for (var i in Stat) {
        ++colornum;
        var num = proc[i];
        var n =num.toFixed(2);

        text(i + ": " + Stat[i] + " -- " + n + "%", 920, margin);
        margin += 35;

        if (colornum == 1) {
            fill("yellow")
        }
        else if (colornum == 2) {
            fill("black")
        }
        else if (colornum == 3) {
            fill("blue")
        }
        else if (colornum == 4) {
            fill("red")
        }
        else if (colornum == 5) {
            fill("aqua")
        }
        else if (colornum == 6) {
            fill("orange")
        }
        else if (colornum == 7) {
            fill("blueviolet")
        }
    }
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
            else if (matrix[y][x] == 8) {
                fill(204, 0, 202);
                rect(x * side, y * side, side, side);

            }

            else if (matrix[y][x] == 9) {
                fill(230, 94, 9);
                rect(x * side, y * side, side, side);

            }
        }
    }
}