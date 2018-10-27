var GrassWalk = require("./Grass")
var Def = require("./Default")
module.exports = class RoboHunter extends Def{
    constructor(x,y,index){
        super(x,y,index);
        this.multiply = 0;

    }
    random(Arr){
        var Item = Arr[Math.floor(Math.random() * Arr.length)];
        return Item;
    }
    chooseCell(matrix,varzang){
        super.getNewCoor();
        return super.chooseCell(matrix,varzang)

    }
       
    bombcoor() {
        this.bombdirect = [

            [this.x - 3, this.y - 3],
            [this.x - 2, this.y - 3],
            [this.x - 1, this.y - 3],
            [this.x, this.y - 3],
            [this.x + 1, this.y - 3],
            [this.x + 2, this.y - 3],
            [this.x + 3, this.y - 3],
            [this.x - 3, this.y - 2],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x + 3, this.y - 2],
            [this.x - 3, this.y - 1],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x + 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x + 3, this.y],
            [this.x - 3, this.y + 1],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x + 3, this.y + 1],
            [this.x - 3, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2],
            [this.x + 3, this.y + 2],
            [this.x - 3, this.y + 3],
            [this.x - 2, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x, this.y + 3],
            [this.x + 1, this.y + 3],
            [this.x + 2, this.y + 3],
            [this.x + 3, this.y + 3]

        ]
    }

    destroy(matrix,zavodArr,virusArr){
        this.bombcoor();
        for (var i in this.bombdirect) {
            var x = this.bombdirect[i][0];
            var y = this.bombdirect[i][1];
            if (y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length) {

                if (matrix[y][x] != 4 ) {
                    if((matrix[y][x] == 5) || (matrix[y][x] == 9) )
                    {
                        matrix[y][x] = this.index;
                    matrix[this.y][this.x] = 0;

                    
                    for (var w in zavodArr) {
                        if (x == zavodArr[w].x && y == zavodArr[w].y) {
                            zavodArr.splice(w, 1);
                        }
                    }
                    for (var e in virusArr) {
                        if (x == virusArr[e].x && y == virusArr[e].y) {
                            virusArr.splice(e, 1);
                        }
                    }   
                    }
                    
                   
                }
            }
        }
    }
    die(matrix,Robo_Hunters_Arr){
        matrix[this.y][this.x] = 0;
        for (var i in Robo_Hunters_Arr) {
            if (this.x == Robo_Hunters_Arr[i].x && this.y == Robo_Hunters_Arr[i].y) {
                Robo_Hunters_Arr.splice(i, 1);
            }
        }

    }
    move(matrix,grassArr,bombArr,GrassEaters,GishArr,Robo_Hunters_Arr){
        var newCel = this.chooseCell(matrix,[0, 1,6]);
        var randCel = this.random(newCel);
        if (randCel) {
            var x = randCel[0];
            var y = randCel[1];

            if (matrix[y][x] == 0) {
                matrix[this.y][this.x] = 0;
                matrix[y][x] = 8;

                this.x = x;
                this.y = y;
                
            }
            else if (matrix[y][x] == 1) {

                for (var i in grassArr) {
                    if (x == grassArr[i].x && y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                    }
                }
                matrix[y][x] = 8;

                matrix[this.y][this.x] = 1;
                var nGrass = new Grass(this.x, this.y, 1);
                grassArr.push(nGrass);

                this.x = x;
                this.y = y;
                

            }
            else if (matrix[y][x] == 6) {

                matrix[y][x] = 0;
                matrix[this.y][this.x] = this.index;

                for (var i in bombArr) {

                    if (x == bombArr[i].x && y == bombArr[i].y) {
                        bombArr[i].deploy(matrix,grassArr,GrassEaters,GishArr,Robo_Hunters_Arr);
                        bombArr[i].die(matrix,bombArr);
                    }
                }
            }
            

            
        }
        
    }
    eat(matrix,grassArr,GrassEaters,GishArr,bombArr,Robo_Hunters_Arr){
        var newCell= this.chooseCell(matrix,[5,9]);
        var randCel = this.random(newCell);
        if(randCel){
            var x = randCel[0];
            var y = randCel[1]
           if(matrix[y][x] == 5 || matrix[y][x] == 9){
            matrix[y][x] = this.index;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

            this.destroy(matrix,zavodArr,virusArr);
            this.multiply++;
           } 
        }
        else{
            this.move(matrix,grassArr,bombArr,GrassEaters,GishArr,Robo_Hunters_Arr);
        }
        if((this.multiply == 9 && pogoda == "Winter") /* */
        || (this.multiply == 7 && pogoda == "Summer")/* */
        ||((this.multiply == 8 && pogoda == "Spring")/* */
        || (this.multiply == 8 && pogoda == "Autum"))){
            setTimeout(function(){this.mul(matrix,Robo_Hunters_Arr,grassArr);},10000)
        }
    }
    mul(matrix,Robo_Hunters_Arr,grassArr){
        var newmulCell= this.chooseCell(matrix,[0,1]);
        var randmulCell = random(newmulCell);
        if(randmulCel){
            var newX = randmulCell[0];
            var newY = randmulCell[1];
              if(matrix[newY][newX] == 0)
              {
                matrix[newY][newX] = this.index;
                var robohunterm2 = new RoboHunter(newX, newY, this.index);
                Robo_Hunters_Arr.push(robohunterm2);
                this.multiply = 0;
              }
              else if(matrix[newY][newX == 1])
              {
                for (var i in grassArr) {
                    if (newX == grassArr[i].newX && newY == grassArr[i].newY) {
                        grassArr.splice(i, 1);
                    }
                }
                matrix[newY][newX] = this.index;
                var robohunterm2 = new RoboHunter(newX, newY, this.index);
                Robo_Hunters_Arr.push(robohunterm2);
                this.multiply = 0;
              }
            

        }
    }


}