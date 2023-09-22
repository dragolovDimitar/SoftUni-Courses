function deliveryFood(input){
    let chiken = Number(input[0]);
    let fish = Number (input[1]);
    let vegan = Number (input[2]);

    let chikenPrice = chiken * 10.35;
    let fishPrice = fish * 12.40;
    let veganPrice = vegan * 8.15;

    let totalMenuPrice = chikenPrice + fishPrice + veganPrice;
    let desert = 0.20 * totalMenuPrice;
    let total = totalMenuPrice + desert + 2.50;

    console.log(total);
}

deliveryFood(["2 ","4 ","3 "]);