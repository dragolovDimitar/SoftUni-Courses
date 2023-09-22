function deerOfSanta (input){
    let days = Number(input[0]);
    let foodKilos = Number (input[1]);
    let firstDeer = Number (input[2]);
    let secondDeer = Number (input[3]);
    let therdDeer = Number (input[4]);

    firstDeer *= days;
    secondDeer *= days;
    therdDeer *= days;

    let totalFood = firstDeer + secondDeer + therdDeer;

    if (totalFood <= foodKilos){
        console.log(`${Math.floor(foodKilos - totalFood)} kilos of food left.`)
    } else {
        console.log(`${Math.ceil(totalFood - foodKilos)} more kilos of food are needed.`)
    }
}
deerOfSanta(['2','10','1','1','2'])