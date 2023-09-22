function repaintingn(input){
    let plastic = Number (input[0]);
    let paint = Number (input[1]);
    let thinner = Number (input[2]);
    let hours = Number (input[3]);
    
    let pricePlastic = (plastic + 2) * 1.50;
    let pricePaint = (paint * 1.1) * 14.50;
    let priceThinner = thinner * 5;

    let totalPrice = pricePlastic + pricePaint + priceThinner + 0.40;
    let salary = (totalPrice * 0.30) * hours;

    console.log(totalPrice + salary);
}

repaintingn(["10", "11", "4", "8"])