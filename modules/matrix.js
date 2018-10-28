
function randomMatrix(n, m) {
    var matrix = []
    for (var y = 0; y < n; y++) {
        matrix[y] = [];
        for (var x = 0; x < m; x++) {

            matrix[y][x] = 0;
        }

    }


      
    for (var q = 0; q < 202/*30*/; q++) {

        var r1 = Math.floor((Math.random() * 80) + 5);
        var r11 = Math.floor((Math.random() * 80) + 5);
        matrix[r1][r11] = 1;
    }
    for (var w = 0; w < 170; w++) {

        var r2 = Math.floor((Math.random() * 80) + 5);
        var r22 = Math.floor((Math.random() * 80) + 5);
        matrix[r2][r22] = 2;
    }

    for (var e = 0; e < 80; e++) {

        var r3 = Math.floor((Math.random() * 80) + 5);
        var r33 = Math.floor((Math.random() * 80) + 5);
        matrix[r3][r33] = 3;
    }

    for (var r = 0; r < /*21*/5; r++) {

        var r4 = Math.floor((Math.random() * 80) + 5);
        var r44 = Math.floor((Math.random() * 80) + 5);;
        matrix[r4][r44] = 4;
    }

    for (var t = 0; t < 16; t++) {
        var r55 = Math.floor((Math.random() * 80) + 5);
        var r5 = Math.floor((Math.random() * 80) + 5);
        matrix[r5][r55] = 5;
     }
    for (var t = 0; t < 40; t++) {
        var r55 = Math.floor((Math.random() * 80) + 5);
        var r5 = Math.floor((Math.random() * 80) + 5);
        matrix[r5][r55] = 6;

    }
    for (var t = 0; t < 30; t++) {
        var r88 = Math.floor((Math.random() * 80) + 5);
        var r8 = Math.floor((Math.random() * 80) + 5);
        matrix[r8][r88] = 8;

    }
    for (var t = 0; t < 30; t++) {
        var r99 = Math.floor((Math.random() * 80) + 5);
        var r9 = Math.floor((Math.random() * 80) + 5);
        matrix[r9][r99] = 9;

    }
   

    return matrix;

}

module.exports = randomMatrix(100, 100)