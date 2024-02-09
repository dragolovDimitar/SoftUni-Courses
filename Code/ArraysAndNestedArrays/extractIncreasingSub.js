function extract (arr) {
    let newArr = []
    let currMax = 0
    for (let i = 0; i < arr.length; i++) {
        let currNum = arr[i];

        if (currNum >= currMax) {
            currMax = currNum;
            newArr.push(currMax);
        }
    }
    return newArr;
}
extract ([1, 3, 8, 4, 10, 12, 3, 2, 24])