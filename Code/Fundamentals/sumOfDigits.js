function digits (num){
    let sum = 0;
    let currNum = String(num);

    for (let i = 0; i < currNum.length; i++){
        sum += Number(currNum[i]);
    }

    console.log(sum)
}

digits (543)