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

var drawTime = 1000/frameCount;

io.on('connection', function(socket){
  socket.emit( 'matrix',  matrix);
  socket.emit( 'grass1',  Grass);
  socket.emit('default0', Default);
  socket.emit( 'garsseater2',GrassEater);
  socket.emit( 'gishatich3', Gishatich);
  socket.emit( 'unknown4',  Unknown);
  socket.emit( 'zavod5',  Zavod);
  socket.emit( 'bomb6',  bomb);
  socket.emit( 'robohunter',  RoboHunter);
  socket.emit( 'virus9',  Virus);

  var inter = setInterval( function(){
    socket.emit('redraw', matrix);
  }, drawTime);
})