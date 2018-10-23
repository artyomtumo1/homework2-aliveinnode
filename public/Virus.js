class Virus{
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply00 = 0;
    }
    viruscoor() {
        this.virusdirect = [

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

            // [this.x + 1, this.y + 4]
            // // [this.x + 2, this.y + 4]
            // [this.x + 3, this.y + 4]
            // [this.x + 4, this.y + 4]

            // [this.x + 4, this.y + 1]
            // [this.x + 4, this.y + 2]
            // [this.x + 4, this.y + 3]
            // [this.x + 4, this.y + 4]
            

        ]
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in virusArr) {
            if (this.x == virusArr[i].x && this.y == virusArr[i].y) {
                virusArr.splice(i, 1);
            }
        }
    }
    deploy() {
        this.viruscoor()
        for (var i in this.virusdirect) {
            var x = this.virusdirect[i][0];
            var y = this.virusdirect[i][1];
            if (y >= 0 && y < matrix.length && x >= 0 && x < matrix[0].length) {

                   
                    matrix[y][x] = 0;
                    matrix[this.y][this.x] = 0;

                    for (var q in grassArr) {
                        if (x == grassArr[q].x && y == grassArr[q].y) {
                            grassArr.splice(q, 1);
                        }
                    }
                    
                    
                   
                
            }
        }
    }
}