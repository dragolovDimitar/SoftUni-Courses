function oddEvenSum (num){
    let strNum = String(num);
    let oddSum = 0;
    let evenSum = 0;

    bothSum(oddSum, evenSum);

    function bothSum (oddSum,evenSum){
        for (let i = 0; i < strNum.length; i++){
            let convertToNum = Number(strNum[i]);
            
            if (convertToNum % 2 == 0){
                evenSum += convertToNum;
            } else {
                oddSum += convertToNum;
            }
        }
        console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    }

    
}
oddEvenSum(1000435)