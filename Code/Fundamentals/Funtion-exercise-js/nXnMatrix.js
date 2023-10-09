function printColumAndRaw(matrix) {
    for (let i = 1; i <= matrix; i++){
        let arrMatrix = `${matrix} `.repeat(matrix);
        console.log(arrMatrix);
    }
}

printColumAndRaw(7)