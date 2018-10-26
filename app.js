var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var matrix = require('./modules/matrix');
var Grass = require('./modules/Grass');
var Default = require('./modules/Default');
var GrassEater = require('./modules/GrassEater');
var Gishatich = require('./modules/Gishatich');
var Unknown = require('./modules/Unknown');
var Zavod = require('./modules/Zavod');
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

app.use(express.static("."));

app.get("/", function (req, res) {
  res.redirect('public/index.html');
});

server.listen(3000);

var frameCount = 5;

var drawTime = 1000 / frameCount;

io.on('connection', function (socket) {
  socket.emit('matrix', matrix);

  var inter = setInterval(function () {
    for (var i in grassArr) {
      grassArr[i].mul(matrix,grassArr);
      // console.log(grassArr.length)
    }
    for (var i in GrassEaters) {
      GrassEaters[i].eat(matrix,grassArr,GrassEaters,bombArr,zavodArr)
      //console.log(GrassEaters.length)
      //console.log(virusArr.length)
    }
    for (var i in GishArr) {
      GishArr[i].eat(matrix,grassArr,GrassEaters,GishArr,bombArr,zavodArr);
      // console.log(GishArr.length)

    }
    for (var i in unkArr) {
      unkArr[i].eat(matrix,grassArr,GrassEaters,GishArr,unkArr,zavodArr,bombArr,virusArr,Robo_Hunters_Arr,);
      //console.log(grassArr.length)

    }

    for (var i in zavodArr) {
      zavodArr[i].move();
    }
    for (var i in Robo_Hunters_Arr) {
      Robo_Hunters_Arr[i].move();
    }

    if (GrassEaters.length <= 12) {
      for (var i in virusArr) {
        virusArr[i].deploy();
        virusArr[i].die();


      }
    }
    socket.emit('redraw', matrix);
  }, drawTime);
})