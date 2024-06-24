function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';

        for (let j = 1; j <= rows - i; j++) {
            row += ' ';
        }

        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*';
        }
        
        console.log(row);
    }
}

const numberOfRows = 5;
printPyramid(numberOfRows);
