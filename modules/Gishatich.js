var Def = require("./Default");
var grasswalk = require('./Grass')
module.exports = class Gishatich extends Def {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0;
        this.energy = 97;
        this.gender = Math.round(Math.random());
        
    }
    chooseCell(matrix,character1,character2,character3,character4){
      super.getNewCoor();
      return super.chooseCell(matrix,character1,character2,character3,character4)
    }


    die(matrix, GishArr) {

        matrix[this.y][this.x] = 0;

        for (var i in GishArr) {
            if (this.x == GishArr[i].x && this.y == GishArr[i].y) {
                GishArr.splice(i, 1);
            }
        }
    }
    mul(matrix, GishArr) {

        var emptyCells = this.chooseCell(matrix,0);
        var newCell = this.random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];

            matrix[newY][newX] = this.index;
            var Gish1 = new Gishatich(newX, newY, this.index);
            GishArr.push(Gish1);
            this.multiply = 0;
        }
    }


    move(matrix, grassArr,GrassEaters,GishArr, bombArr,Robo_Hunters_Arr,Grass) {
        // mul don work because in move
        var newCel = this.chooseCell(matrix,0, 1, 3, 6);
        var randCel = this.random(newCel);
        if (randCel) {
            var x = randCel[0];
            var y = randCel[1];

            if (matrix[y][x] == 0) {
                matrix[this.y][this.x] = 0;
                matrix[y][x] = 3;

                this.x = x;
                this.y = y;
                this.energy--;
            }
            else if (matrix[y][x] == 1) {

                for (var i in grassArr) {
                    if (x == grassArr[i].x && y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                    }
                }
                matrix[y][x] = 3;

                matrix[this.y][this.x] = 1;
                var nGrass = new grasswalk(this.x, this.y, 1);
                grassArr.push(nGrass);

                this.x = x;
                this.y = y;
                this.energy--;

            }
            else if (matrix[y][x] == 3) {

                if ((this.multiply == 18 /*&& pogoda == "Winter" && this.gender == 0 && matrix[y][x].gender == 1)/* 
                    || (this.multiply == 18 && pogoda == "Autum" && this.gender == 0 && matrix[y][x].gender == 1) /* 
                    || (this.multiply == 15 && pogoda == "Summer" && this.gender == 0 && matrix[y][x].gender == 1) /* 
                    || (this.multiply == 15 && pogoda == "Spring" && this.gender == 0 && matrix[y][x].gender == 1*/))
                     {
                    this.mul(matrix, GishArr); 

                }

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
        if (this.energy < 1) {
            this.die(matrix,GishArr);
        }
    }




    eat(matrix,grassArr,GrassEaters,GishArr,zavodArr, bombArr,Robo_Hunters_Arr,Grass) {
        var gishatich = this.chooseCell(matrix,2, 5, 6);
        var randgishatich = this.random(gishatich);
        if (randgishatich) {
            var x = randgishatich[0];
            var y = randgishatich[1];
            if (matrix[y][x] == 2 || matrix[y][x] == 5) {
                matrix[y][x] = this.index;
                matrix[this.y][this.x] = 0;

                this.x = x;
                this.y = y;

                this.multiply++;
                this.energy += 10;

                for (var i in GrassEaters) {
                    if (x == GrassEaters[i].x && y == GrassEaters[i].y) {
                        GrassEaters.splice(i, 1);
                    }
                }
                for (var i in zavodArr) {
                    if (x == zavodArr[i].x && y == zavodArr[i].y) {
                        zavodArr.splice(i, 1);
                    }
                }
            }

            else if (matrix[y][x] == 6) {
                matrix[y][x] = 0;
                matrix[this.y][this.x] = this.index;

                for (var i in bombArr) {

                    if (x == bombArr[i].x && y == bombArr[i].y) {
                        bombArr[i].deploy(matrix,grassArr,GrassEaters,GishArr,Robo_Hunters_Arr);
                        bombArr[i].die(matrix,GishArr);
                    }
                }
            }
        }
        else {
            this.move(matrix, grassArr,GrassEaters,GishArr, bombArr,Robo_Hunters_Arr,Grass);

        }
    }
}