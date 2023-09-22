function divion (number){
    const divNum = [2, 3, 6, 7, 10];
    let divisible = [];

    for (let i = 0; i < divNum.length; i++){
        if (number % divNum[i] === 0) {
            divisible.push(divNum[i]);
        }
    }

    if (divisible.length <= 0) {
        console.log("Not divisible")
    } else {
        let maxNum = divisible [0];
        
        for (let i = 1; i < divisible.length; i++){
            if (maxNum < divisible[i]){
                maxNum = divisible[i]
            }
        }
        console.log(`The number is divisible by ${maxNum}`)
    }
}

divion(15)