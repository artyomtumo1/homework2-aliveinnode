 //zavod and robohunter added default
 var unkcreat = require("./Unknown")
 var Def = require("./Default")
 var GrassWalk = require("./Grass")
 module.exports = class zavod extends Def {
    constructor(x,y,index){
       super(x,y,index);

    }
    mul(matrix,unkArr,grassArr){
  
       var emptyCells = this.chooseCell(matrix,[0,1]);
       var newCell = random(emptyCells);
       if(newCell){
           var x = newCell[0];
           var y = newCell[1];
           matrix[y][x] = 4;
            for(var i in grassArr){
                if( x == grassArr[i].x && y == grassArr[i].y)
                {
                    grassArr.splice(i,1);   
                }
               }  
           var izd = new Unknown(x, y, 4);
           unkArr.push(izd);
           this.multiply =0;
           
           }  
}



 move(matrix,grassArr){
        var newCel = this.chooseCell(matrix,[0,1]);
        var randCel = random(newCel);
        if(randCel){
            var x = randCel[0];
            var y = randCel[1];
            
            if(matrix[y][x] == 0)
            {     matrix[y][x] = 5;
                matrix[this.y][this.x] = 0;
            }
            else if(matrix[y][x] == 1)
            {
                for(var i in grassArr){
                    if( x == grassArr[i].x && y == grassArr[i].y)
                    {
                        grassArr.splice(i,1);   
                    }
                   }          
                    matrix[y][x] = 5;

                    matrix[this.y][this.x] = 1;
                    var nGrass = new Grass(this.x, this.y, 1);
                    grassArr.push(nGrass);
                  
            }
           
            
            this.multiply++;
            
            
            this.x = x;
            this.y=y;
           
           if(this.multiply >= 12){
                this.mul(matrix,unkArr,grassArr);
                
            }
          

        }
        
        
        
    }
}