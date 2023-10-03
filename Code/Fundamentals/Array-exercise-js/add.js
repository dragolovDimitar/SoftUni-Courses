function subtract (arr) {
    let newNum = [];
    let sum = 0
    let oldSum = 0;
    
    for (let i = 0; i < arr.length; i++){
        let currNum = arr[i];
        oldSum += currNum;

        if (currNum % 2 == 0){
            currNum += i
        } else {
            currNum -= i
        }

        newNum.push(currNum)
        sum += currNum ;
    }

    console.log(newNum);
    console.log(oldSum);
    console.log(sum);
}

subtract ([5, 15, 23, 56, 35])