function evenOdd (input){
    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let printline = '';

    for (let i = firstNum; i <= secondNum; i++){
        let currentNum = "" + i;
        let odd = 0;
        let even = 0;
        for (let j = 0; j <= currentNum.length; j++){
            let currentDigit = Number(currentNum.charAt(j));
            if(j % 2 === 0){
                even += currentDigit;
            } else {
                odd += currentDigit;
            }
        }
        if (odd === even){
            printline += `${i} `
        }
    }
    console.log(printline)
}
evenOdd(["100000",
"100050"])