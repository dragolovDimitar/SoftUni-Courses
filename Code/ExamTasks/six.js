function sumAndProduct(input) {
    let n = Number(input[0]);
    let isFound = false
    

    for (let a = 1; a <= 9; a++) {
        for (let b = 9; b >= a; b--) {
            for (let c = 0; c <= 9; c++) {
                for (let d = 9; d >= c; d--) {
                    if (a + b + c + d === a * b * c * d && n % 10 === 5) {
                        console.log(`${a}${b}${c}${d}`)
                        isFound = true;
                        break;
                    } else if (Math.floor((a * b * c * d) / (a + b + c + d)) === 3 && n % 3 === 0) {
                        console.log(`${d}${c}${b}${a}`)
                        isFound = true;
                        break;
                    }
                }
                if (isFound) {
                    break;
                }
            }
            if (isFound) {
                break;
            }
        }
        if (isFound) {
            break;
        }
    }
    if (!isFound) {
        console.log(`Nothing found`);
    }
}
sumAndProduct(['123'])