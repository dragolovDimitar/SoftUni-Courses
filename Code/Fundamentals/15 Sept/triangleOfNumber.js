function triangle (row) {
    for (let num = 1; num <= row; num++){
        console.log(`${num} `.repeat(num));
    }
}

triangle (5)