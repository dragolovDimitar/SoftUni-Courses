function matrices (arrs) {
    
    for (let i = 0; i < arrs.length - 1; i++){
        let rowOne = arrs.reduce((acc, value, index) => {
            acc += value[i];
            return acc
        }, 0)
        let rowTwo = arrs.reduce((acc, value, index) => {
            acc += value[i + 1];
            return acc
        }, 0)
        let colOne = arrs[i].reduce((acc, value) => acc + value);
        let colTwo = arrs[i + 1].reduce((acc, value) => acc + value);

        if (rowOne !== rowTwo || colOne !== colTwo){
            return false;
        }
    }
    return true;
}
console.log(matrices([[11, 32, 45], [21, 0, 1], [21, 1, 1]]));