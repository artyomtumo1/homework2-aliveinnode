
module.exports = class Default{
    constructor(x,y,index){
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.varzang =[character1,character2,character3,character4];
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
  chooseCell(matrix,varzang){
    this.getNewCoor();
    var found = [];
    for(var i in this.direct){
        var x =this.direct[i][0];
        var y = this.direct[i][1];
        if(y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length  ){
            for(var i in varzang){
                if(matrix[y][x]==varzang[i]){
                    found.push(this.direct[i])
                }
            }
        
    }
    }
    return found;
}
}