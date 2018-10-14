
// var express = require("express");
// var app = express();

// app.get("/",function(req,res){
//   res.send("Hello woreld'yes im a truly progrmmist")  
// });

// app.listen(3000,function(){
//     console.log("Example is running on port 3000");
// });

// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("<h1>Hello world</h1>");
// });
// app.get("/name/:name", function(req, res){
//    var name = req.params.name;
//    res.send("<h1>Hello " + name +"</h1>");
// });
// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });


// app.get("/name/:search", function(req, res){
//     var sech= req.params.search;
//     res.redirect("");
//  });

//  app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });

















//1// 
//console.log("Hello Node");


//2//
// var os = require("os");
// var message = "The platform is ";
// function main(){
//    console.log(message + os.platform());
// }
// main();

//3//
// var express = require("express");
// var app = express();

// app.get("/", function(req, res){


// res.send("Hello good programmer in future");




// });

// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });

//4//
// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//    res.send("<h1>Hello world</h1>");
// });
// app.get("/name/:name", function(req, res){
//    var name = req.params.name;
//    res.send("<h1>Hello " + name +"</h1>");
// });
// app.listen(3000, function(){
//    console.log("Example is running on port 3000");
// });


//home work 1//
// var express = require("express");
// var app = express();

// app.get("/", function (req, res) {
//     res.send("<h1>Hello world</h1>");
// });
// app.get("/*", function (req, res) {
//     res.redirect("https://yandex.ru/sir");
// });

// app.get("/find/:bur", function (req, res) {
//     var Nahme = req.params.bur;
//     res.redirect("https://yandex.ru/images/search?text=" + Nahme);
// });

// app.listen(3000, function () {
//     console.log("Example is running on port 3000");
// });








//home work 2//

var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});








//page 18//


// var Square = require("./module");
// var mySquareObject = new Square(5);

// function main() {
//    console.log(mySquareObject.getArea());
// }
// main();

//page 22
// var fs = require('fs');

// function main(){
//     var file = "hello.txt"
//     fs.appendFileSync(file,"Hello world\n")
// }
// main();

//page23 /1
// var fs = require('fs');

// function main(){
//    fs.writeFile("hello.txt", "Hello world\n", function(err){
//        console.log("fs.writeFile ended");
//    });
//    console.log("fs.writeFile");
// }
// main();

//page23 /2
// var fs = require('fs');

// function main() {
//    fs.writeFileSync("hello.txt", "Hello world\n");
//    console.log("fs.writeFile");
// }
// main();

//page 24
//fs = require('fs');
// var dummyText = "Apple yep";

// function main() {
//     fs.writeFileSync("dummytext.txt", dummyText)
//     var text = fs.readFileSync("dummytext.txt").toString();
//     console.log(dummyText == text);
//     console.log(text);
//     fs.writeFileSync("undummytext.txt",
//         text.replace("Apple","Microsoft")
       
//     );
    
// }
// main();

//page25/homework
// fs = require('fs');

// function TigranPomoshnik(){
//   var obj =
//     {
//         "first_name":"vardan",
//         "last_name":"Hovsepyan",
//         "age":13,
//         "tumo_student":true
//     }
//     var stringObj = JSON.stringify(obj);
//     fs.writeFileSync("obj.json",stringObj)
//     console.log("you not to idiot")
// }
// TigranPomoshnik()
// console.log("you idiot")