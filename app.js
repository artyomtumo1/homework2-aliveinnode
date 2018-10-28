var express = require('express');
var app = express();
var server = require('http').Server(app);
var fs = require("fs");
var io = require('socket.io')(server);

var matrix = require('./modules/matrix');
var Grass = require('./modules/Grass');

var GrassEater = require('./modules/GrassEater');
var Gishatich = require('./modules/Gishatich');
var Unknown = require('./modules/Unknown');
var zavod = require('./modules/Zavod');
var bomb = require('./modules/bomb');
var Virus = require('./modules/Virus');
var RoboHunter = require('./modules/RoboHunter');

var grassArr = [];
var GrassEaters = [];
var GishArr = [];

var unkArr = [];
var zavodArr = [];
var bombArr = [];

var virusArr = [];
var Robo_Hunters_Arr = [];

//var varzang =[character1,character2,character3,character4];



app.use(express.static("."));

app.get("/", function (req, res) {
  res.redirect('public/index.html');
});

server.listen(3000);

var frameRate = 5;

var drawTime = 1000 / frameRate;
var frameCount = 0;

io.on('connection', function (socket) {
  socket.emit('matrix', matrix);

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


  var inter = setInterval(function () {



    for (var i in grassArr) {
      grassArr[i].mul(matrix, grassArr);
      //console.log(unkArr.length)
      console.log(zavodArr.length)
      // console.log(grassArr.length)
      //console.log(virusArr.length)
    }

    for (var i in GrassEaters) {
      GrassEaters[i].eat(matrix, grassArr, zavodArr, bombArr, GrassEaters, GishArr, Robo_Hunters_Arr)
      //console.log(GrassEaters.length)
      //console.log(virusArr.length)
    }
    for (var i in GishArr) {
      GishArr[i].eat(matrix, grassArr, GrassEaters, GishArr, bombArr, zavodArr, Robo_Hunters_Arr, Grass);
      // console.log(GishArr.length)

    }
    for (var i in zavodArr) {
      zavodArr[i].move(matrix, grassArr, unkArr, Grass);
    }
    for (var i in Robo_Hunters_Arr) {
      //console.log(Robo_Hunters_Arr[i]);
      Robo_Hunters_Arr[i].eat(matrix, grassArr, bombArr, GrassEaters, GishArr, Robo_Hunters_Arr, zavodArr, virusArr, Grass);
    }

    for (var i in unkArr) {
      
      unkArr[i].eat(matrix, grassArr, GrassEaters, GishArr, Robo_Hunters_Arr, bombArr, unkArr);
      //console.log(grassArr.length)
    }

    if (GrassEaters.length <= 12 && GrassEaters.length >= 4) {
      for (var i in virusArr) 
      {
        virusArr[i].deploy(matrix,grassArr);
        virusArr[i].die(matrix,virusArr);
      }
  }

    frameCount++;

  if (frameCount == 60) {
    Statistics = {
      "Grass": grassArr.length,
      "GrassEater": GrassEaters.length,
      "Gishatich": GishArr.length,
      "Unknown": unkArr.length,
      "zavod": zavodArr.length,
      "bomb": bombArr.length,
      "Virus": virusArr.length,
      "RoboHunter": Robo_Hunters_Arr.length
    }
    socket.emit("MyStats", Statistics);
    stringTo(Statistics);
    frameCount = 0;
  }


  socket.emit('redraw', matrix);
}, drawTime);
function stringTo(stat) {
  myJSON = JSON.stringify(Statistics);
  fs.writeFileSync("Statistics.json", myJSON)
}
})