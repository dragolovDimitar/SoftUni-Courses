function boatRent (input){
    let budget = Number (input[0]);
    let season = input[1];
    let fishman = Number (input[2]);

    let boatPrice = 0;

    switch (season){
        case "Spring": boatPrice = 3000;
        break;
        case "Summer":
        case "Autumn": boatPrice = 4200;
        break;
        case "Winter": boatPrice = 2600; 
    }

    if (fishman <= 6){
        boatPrice = boatPrice * 0.90;
    } else if (fishman <= 11){
       boatPrice = boatPrice * 0.85;
    } else if (fishman >= 12){
       boatPrice = boatPrice * 0.75;
    }

    if (fishman % 2 === 0 && season !== "Autumn"){
        boatPrice = boatPrice * 0.95;
    }

    if (budget >= boatPrice){
        console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`);
    }
}

boatRent(["3000","Summer", "11"])