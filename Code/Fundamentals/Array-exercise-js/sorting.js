function sort (arr) {
    let sortBigToSmall = arr.slice().sort((a, b) => b - a);
    let sortingNums = [];

    while (sortBigToSmall.length > 0){
        let maxNum = sortBigToSmall.shift();
        let minNum = sortBigToSmall.pop();

        sortingNums.push(maxNum);
        sortingNums.push(minNum);
    }
   
    console.log(sortingNums.join(' '));
}

sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])