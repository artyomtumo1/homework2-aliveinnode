var def = require("./Default")
 class GrassEater extends Default{
    constructor(x,y,index) {
        super(x,y,index);
        this.energy = 62;
        this.gender = Math.round(Math.random());
        
    }
   
   die(){
       
       matrix[this.y][this.x] = 0;
       
       for(var i in GrassEaters){
                if( this.x == GrassEaters[i].x && this.y == GrassEaters[i].y)
                {
                    GrassEaters.splice(i,1);   
                }
            }
   }

    move(){
        var newCel = this.chooseCell(0,2,6);
        var randCel = random(newCel);
        if(randCel){
            var x = randCel[0];
            var y = randCel[1];
            if(matrix[y][x]== 0){
            matrix[y][x] = this.index;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y=y;
            this.energy--;
            }
            if(matrix[y][x] == 2){

                if( (this.multiply ==14 && pogoda == "Winter"  && this.gender == 0&& matrix[y][x].gender == 1 )/* */ 
                || (this.multiply ==14 && pogoda == "Autum" && this.gender == 0&& matrix[y][x].gender == 1  )/* */
                  ||  (this.multiply ==11 && pogoda == "Summer"   && this.gender == 0&& matrix[y][x].gender == 1 )/* */
                 || (this.multiply ==11 && pogoda == "Spring"  && this.gender == 0&& matrix[y][x].gender == 1 )/* */ 
                 )
             {
                
                setTimeout(function(){this.mul();}, 3000);
                   
             }

            }
            
            else if(matrix[y][x] == 6){
                matrix[y][x] = 0;
                matrix[this.y][this.x] = this.index;
              
                for(var i in bombArr){
                    
                    if( x == bombArr[i].x && y == bombArr[i].y)
                    {
                        bombArr[i].deploy();
                        bombArr[i].die();
                    }  
                    }
            }

        }
        if(this.energy <1 ){
                    this.die();
        }
    }
    mul(){
  
  
    var emptyCells = this.chooseCell(0);
    var newCell = random(emptyCells);
 
    
    if(newCell){
        var newX = newCell[0];
        var newY = newCell[1];
        matrix[newY][newX] = this.index;
        var NewGraseat = new GrassEater(newX, newY, this.index);
        GrassEaters.push(NewGraseat);
        this.multiply = 0; 
        }
  
  
         
}
     
    
  
    
    eat(){
        var GrasEat = this.chooseCell(1,5,6);
        var randGrasEat = random(GrasEat);
        if(randGrasEat){
            var x = randGrasEat[0];
            var y = randGrasEat[1];
            if(matrix[y][x]== 1 || matrix[y][x]== 5){
            matrix[y][x] = this.index;
            matrix[this.y][this.x] = 0;

            this.x =x;
            this.y =y;

            this.multiply++;
            this.energy++;
            for(var i in grassArr){
                if( x == grassArr[i].x && y == grassArr[i].y)
                {
                    grassArr.splice(i,1);   
                }
            }
            for(var i in zavodArr){
                if( x == zavodArr[i].x && y == zavodArr[i].y)
                {
                    zavodArr.splice(i,1);   
                }
            }
            
           
             
           }
           else if(matrix[y][x] == 6){
            matrix[y][x] = 0;
            matrix[this.y][this.x] = this.index;
          
            for(var i in bombArr){
                
                if( x == bombArr[i].x && y == bombArr[i].y)
                {
                    bombArr[i].deploy();
                    bombArr[i].die();
                }  
                }
        }
           
 }
        
        else {
             this.move();

            }
    } 
}