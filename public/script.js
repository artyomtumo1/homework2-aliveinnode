



function randomMatrix(n, m) {
    var matrix = []
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {

            matrix[y][x] = 0;
        }

    }


      
    for (var q = 0; q < 192/*30*/; q++) {

        var r1 = Math.floor((Math.random() * 80) + 5);
        var r11 = Math.floor((Math.random() * 80) + 5);
        matrix[r1][r11] = 1;
    }
    for (var w = 0; w < 180; w++) {

        var r2 = Math.floor((Math.random() * 80) + 5);
        var r22 = Math.floor((Math.random() * 80) + 5);
        matrix[r2][r22] = 2;
    }

    for (var e = 0; e < 80; e++) {

        var r3 = Math.floor((Math.random() * 80) + 5);
        var r33 = Math.floor((Math.random() * 80) + 5);
        matrix[r3][r33] = 3;
    }

    for (var r = 0; r < 21; r++) {

        var r4 = Math.floor((Math.random() * 80) + 5);
        var r44 = Math.floor((Math.random() * 80) + 5);;
        matrix[r4][r44] = 4;
    }

    for (var t = 0; t < 16; t++) {
        var r55 = Math.floor((Math.random() * 80) + 5);
        var r5 = Math.floor((Math.random() * 80) + 5);
        matrix[r5][r55] = 5;
     }
    for (var t = 0; t < 40; t++) {
        var r55 = Math.floor((Math.random() * 80) + 5);
        var r5 = Math.floor((Math.random() * 80) + 5);
        matrix[r5][r55] = 6;

    }
    for (var t = 0; t < 30; t++) {
        var r88 = Math.floor((Math.random() * 80) + 5);
        var r8 = Math.floor((Math.random() * 80) + 5);
        matrix[r8][r88] = 8;

    }
    for (var t = 0; t < 30; t++) {
        var r99 = Math.floor((Math.random() * 80) + 5);
        var r9 = Math.floor((Math.random() * 80) + 5);
        matrix[r9][r99] = 9;

    }
   

    return matrix;

}



///////////////////////LESSON 4////////////////////////










///////fin work///////

var c = Math.floor((Math.random() * 10) + 92);
var matrix = randomMatrix(c, c);
var grassArr = [];
var GrassEaters = [];
var GishArr = [];

var unkArr = [];
var zavodArr = [];
var bombArr = [];

var virusArr = [];
var Robo_Hunters_Arr = [];
var side = 9;
var pogoda = "Winter";


    setInterval(function(){
        if(pogoda == "Winter"){
            pogoda ="Spring";
        }
        else if(pogoda == "Spring"){
            pogoda ="Summer";
        }
        else if(pogoda == "Summer"){
            pogoda ="Autum";
        }
        else if(pogoda == "Autum"){
            pogoda ="Winter";
        }
        
        console.log(pogoda)
        

    }, 3000);



function setup() {
    frameRate(10);
    createCanvas(c * side+125, c * side);
    background("#acacac");

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var graseat = new GrassEater(x, y, 2);
                GrassEaters.push(graseat);
            }
            else if (matrix[y][x] == 3) {
                var gish = new Gishatich(x, y, 3);
                GishArr.push(gish);
            }
            else if (matrix[y][x] == 4) {
                var un1 = new Unknown(x, y, 4);
                unkArr.push(un1);
            }
            else if (matrix[y][x] == 5) {
                var zav1 = new zavod(x, y, 5);
                zavodArr.push(zav1);
            }
            else if (matrix[y][x] == 6) {
                var bom1 = new bomb(x, y, 6);
                bombArr.push(bom1);
            }
            else if (matrix[y][x] == 8) {
                var robohunterm1 = new RoboHunter(x, y, 8);
                Robo_Hunters_Arr.push(robohunterm1);
            }
            else if (matrix[y][x] == 9) {
                var virus1 = new Virus(x, y, 9);
                virusArr.push(virus1);
            }

        }
    }
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



    for (var i in grassArr) {
        grassArr[i].mul();
        // console.log(grassArr.length)
    }
    for (var i in GrassEaters) {
        GrassEaters[i].eat()
        //console.log(GrassEaters.length)
        //console.log(virusArr.length)
    }
    for (var i in GishArr) {
        GishArr[i].eat();
        // console.log(GishArr.length)

    }
    for (var i in unkArr) {
        unkArr[i].eat();
        //console.log(grassArr.length)

    }

    for (var i in zavodArr) {
        zavodArr[i].move();


    }
    for (var i in Robo_Hunters_Arr) {
        Robo_Hunters_Arr[i].move();


    }

      if(GrassEaters.length <= 12)
      {
          for (var i in virusArr) {
                virusArr[i].deploy();
                virusArr[i].die();
        
        
            }
        }
    
    



}
