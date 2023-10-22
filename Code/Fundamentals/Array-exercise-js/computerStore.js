function newMachine (arr){
    let finalPrice = 0;
    let type = arr.pop().toLowerCase();
    let taxes = 0;
    let final = 0;

    if (arr.length == 0){
        return console.log("Invalid order!");
    }

    for (let command of arr){
        let current = Number(command);

        if (current > 0){
            finalPrice += current;
        } else {
            console.log("Invalid price!");
            continue;
        }
    }

    if (finalPrice == 0){
        console.log("Invalid order!");
        return;
    }

    taxes = finalPrice * 0.20;
    final = finalPrice + taxes;

    if (type == 'special'){
        final *= 0.90;
    }
    console.log(`Congratulations you've just bought a new computer!
Price without taxes: ${finalPrice.toFixed(2)}$
Taxes: ${taxes.toFixed(2)}$
-----------
Total price: ${final.toFixed(2)}$`);
}
newMachine([

    '1023',
    
    '15',
    
    '-20',
    
    '-5.50',
    
    '450',
    
    '20',
    
    '17.66',
    
    '19.30',
    
    'regular'
    
    ])