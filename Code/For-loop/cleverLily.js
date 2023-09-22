function clever (input) {
    let lilyAge = Number (input[0]);
    let washmachine = Number (input[1]);
    let toyPrice = Number (input[2]);

    let yearsTotal = 0 ;
    let toyCount = 0 ;
    let totalMoney = 0;
    let lilyBrother = 0;
    let addMoney = 10;

    for (let i = 1; i <= lilyAge; i++) {
        if (i % 2 === 0) {
            lilyBrother += 1;
            yearsTotal += addMoney;
            addMoney += 10;

        } else {
            toyCount += 1;
        }
    }

    totalMoney = yearsTotal - lilyBrother + (toyCount * toyPrice);

    if (totalMoney >= washmachine) {
        console.log(`Yes! ${(totalMoney - washmachine).toFixed(2)}`);
    } else if (washmachine > totalMoney) {
        console.log(`No! ${(washmachine - totalMoney).toFixed(2)}`)
    }

}

clever (["10", "170.00", "6"])