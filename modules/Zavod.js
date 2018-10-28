//zavod and robohunter added default
var unkcreat = require("./Unknown")
var Def = require("./Default")
var GrassWalk = require("./Grass")
module.exports = class zavod extends Def {
    constructor(x, y, index) {
        super(x, y, index);
        this.multiply = 0;

    }
    chooseCell(matrix, character1, character2, character3, character4) {
        super.getNewCoor();
        return super.chooseCell(matrix, character1, character2, character3, character4);
    }
    mul(matrix, grassArr,unkArr ) {

        var emptyCells = this.chooseCell(matrix, 0, 1);
        var newCell = this.random(emptyCells);
        if (newCell) {
            var x = newCell[0];
            var y = newCell[1];
            matrix[y][x] = 4;
            for (var i in grassArr) {
                if (x == grassArr[i].x && y == grassArr[i].y) {
                    grassArr.splice(i, 1);
                }
            }
            var izd = new unkcreat(x, y, 4);
            unkArr.push(izd);
            //console.log(unkArr[unkArr.length-1])
            this.multiply = 0;
        }
    }



    move(matrix, grassArr, unkArr, Grass) {
        var newCel = this.chooseCell(matrix, 0, 1);
        var randCel = this.random(newCel);
        if (randCel) {
            var x = randCel[0];
            var y = randCel[1];

            if (matrix[y][x] == 0) {
            matrix[y][x] = 5;
                matrix[this.y][this.x] = 0;
            }
            else if (matrix[y][x] == 1) {
                for (var i in grassArr) {
                    if (x == grassArr[i].x && y == grassArr[i].y) {
                        grassArr.splice(i, 1);
                    }
                }
                matrix[y][x] = 5;

                matrix[this.y][this.x] = 1;
                var nGrass = new GrassWalk(this.x, this.y, 1);
                grassArr.push(nGrass);

            }


            this.multiply++;


            this.x = x;
            this.y = y;

            if (this.multiply >= 12) {
                this.mul(matrix, grassArr,unkArr);

            }


        }



    }
}