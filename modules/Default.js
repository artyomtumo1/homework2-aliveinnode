
module.exports = class Default{
    constructor(x,y,index){
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        //this.varzang =[character1,character2,character3,character4];
    }
getNewCoor(){
    this.direct=[
           [this.x-1,this.y-1],
           [this.x,this.y-1],
           [this.x+1,this.y-1],
           [this.x-1,this.y],
           [this.x+1,this.y],
           [this.x-1,this.y+1],
           [this.x,this.y+1],
           [this.x+1,this.y+1]
       ]
   }
  chooseCell(matrix,character1,character2,character3,character4){
    this.getNewCoor();
    var found = [];
    for(var i in this.direct){
        var x =this.direct[i][0];
        var y = this.direct[i][1];
        if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length  ){
            
                if(matrix[y][x]== character1 ||/* */
                    matrix[y][x]== character2 || /* */
                    matrix[y][x]== character3 ||/* */
                    matrix[y][x]== character4 ){
                    found.push(this.direct[i])
                }
            
        
    }
    }
    return found;
}
random(Arr){
    var Item = Arr[Math.floor(Math.random() * Arr.length)];
    return Item;
}
}