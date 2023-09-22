function coin (input) {
    let coins = Number(input[0]);
    let coinCount = 0;
    let inCoin = Math.floor(coins * 100);

    while(inCoin > 0){
    
        if(inCoin >= 200){
            inCoin -= 200
            coinCount++;
        } else if (inCoin >= 100){
            inCoin -= 100;
            coinCount++
        } else if (inCoin >= 50){
            inCoin -= 50;
            coinCount++;
        } else if (inCoin >= 20){
            inCoin -= 20;
            coinCount++;
        } else if (inCoin >= 10){
            inCoin -= 10;
            coinCount++;
        } else if (inCoin >= 5){
            inCoin -= 5;
            coinCount++;
        } else if (inCoin >= 2) {
            inCoin -= 2;
            coinCount++;
        } else if (inCoin >= 1){
            inCoin -= 1;
            coinCount++;
        }
    }
    console.log(coinCount)
}
coin(["0.56"])